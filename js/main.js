const sample = [{
  semester: 'FA17',
  gpa: '3.19',
  cumulative: '3.19'
},
  {
    semester: 'SP18',
    gpa: '3.17',
    cumulative: '3.18'
  },
  {
    semester: 'FA18',
    gpa: '2.44',
    cumulative: '2.94'
  },
  {
    semester: 'WI19',
    gpa: '3.00',
    cumulative: '2.94'
  },
  {
    semester: 'SP19',
    gpa: '2.91',
    cumulative: '2.94'
  },
  {
    semester: 'FA19',
    gpa: '3.60',
    cumulative: '3.08'
  },
  {
    semester: 'SP20',
    gpa: '0.00',
    cumulative: '3.08'
  },
  {
    semester: 'SU20',
    gpa: '3.24',
    cumulative: '3.09'
  },
  {
    semester: 'FA20',
    gpa: '3.66',
    cumulative: '3.19'
  },
];

// ================ BEGIN CHART CREATION ========================
const svg = d3.select('#chart');

const margin = 60;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svg.append('g').attr('transform', `translate(${margin}, ${margin})`);

// define x and y scales
const xScale = d3.scaleBand()
    .range([0, width])
    .domain(sample.map((d) => d.semester))
    .padding(0.2)

const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 4]);

// add axes
const gy = chart.append('g')
    .call(d3.axisLeft(yScale));

const xAxis = d3.axisBottom(xScale)

const gx = chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .attr('class', 'x_axis')
    .call(d3.axisBottom(xScale));

// create and add bars
chart.selectAll()
    .data(sample)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale(d.semester))
    .attr('y', (d) => yScale(d.gpa))
    .attr('height', (d) => height - yScale(d.gpa))
    .attr('width', xScale.bandwidth())

// add y axis label
svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('GPA')

// add x axis label
svg
    .append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Semester')

// define line
const line = d3.line()
    .x((d) => xScale(d.semester) + xScale.bandwidth() / 2)
    .y((d) => yScale(d.cumulative))

// add line to chart
chart.append("path")
    .data(sample)
    .attr("class", "line")
    .attr("d", line(sample))

// ================ END CHART CREATION ========================

// add course
$(".add").click(function() {
  const clone = $("form > p:first-child").clone(true);
  clone.find('input').val('');
  clone.insertBefore("form > p:last-child");
  return false;
});

// remove course
$(".remove").click(function() {
  const count = document.getElementById("myForm").childElementCount;
  if (count > 2) {
    $(this).parent().fadeOut(250, function () {$(this).remove()});
  } else {
    alert('Cannot have less than one course.')
  }
});

// save form and draw chart
$( ".draw" ).click(function() {

  // parse form data into JS object of same structure as data object
  const formData = $( '#myForm' ).serializeArray();
  const numFields = 4;
  const newData = [];

  for (let i = 0; i < formData.length - 3; i+=numFields) {
    const newObject = {};

    newObject[formData[i]['name']] = formData[i]['value'];
    newObject[formData[i + 1]['name']] = formData[i + 1]['value'];
    newObject[formData[i + 2]['name']] = formData[i + 2]['value'];
    newObject[formData[i + 3]['name']] = formData[i + 3]['value'];

    newData.push(newObject);
  }

  // convert grade to GPA and add to object
  const gradeToPoints = {
    'A+': 4,
    'A': 4,
    'A-': 3.67,
    'B+': 3.33,
    'B': 3,
    'B-': 2.67,
    'C+': 2.33,
    'C': 2,
    'C-': 1.67,
    'D+': 1.33,
    'D': 1,
    'D-': 0.67,
    'F': 0
  };

  for (let i = 0; i < newData.length; i++) {
    // convert grade to grade points
    newData[i]['gpa'] = gradeToPoints[newData[i]['grade']];
    // calculate quality points
    newData[i]['qualityPoints'] = newData[i]['gpa'] * newData[i]['hours'];
  }

  // get unique semesters
  var flags = [], uniqueSemesters = [], l = newData.length, i;
  for( i=0; i<l; i++) {
    if( flags[newData[i].semester]) continue;
    flags[newData[i].semester] = true;
    uniqueSemesters.push(newData[i].semester);
  }

  // group courses by semester
  const groupBy = key => array =>
      array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, {});

  const groupBySemester = groupBy('semester');

  const coursesBySemester = groupBySemester(newData);

  // pretty print
  /*
    console.log(
        JSON.stringify({
          coursesBySemester: groupBySemester(newData),
        }, null, 2)
    );
   */


  // get sum of credit hours or quality points
  function sum( semester , argument) {
    let sum = 0;
    for (const key in coursesBySemester) {
      if (key === semester) {
        // sum hours from each class in array
        coursesBySemester[key].forEach(course => {
          if (course['semester'] === semester) { sum += parseFloat(course[argument])}
        });
      }
    }
    return sum;
  }

  // compute semester average gpa
  // first, arrange unique semesters into object of semester objects -> object with avg gpa and cumulative

  const semesters = [];
  for (i = 0; i < uniqueSemesters.length; i++) {
    const semesterObject = {}
    semesterObject['semester'] = uniqueSemesters[i];
    semesterObject['GPAHours'] = sum(uniqueSemesters[i], 'hours');
    semesterObject['qualityPoints'] = sum(uniqueSemesters[i], 'qualityPoints');
    semesterObject['gpa'] = Math.floor(semesterObject['qualityPoints'] / semesterObject['GPAHours'] * 100) / 100; //round down to 2 decimal places
    semesters.push(semesterObject);
  }



  // format example
  /*
  const semesters = {
    'FA17': {
      'GPAHours' : 16,
      'qualityPoints': 35,
      'averageGPA': 2.18 // round down to nearest hundredth
    },
    'SP18': {
      'GPAHours' : 16,
      'qualityPoints': 35,
      'averageGPA': 2.18
    }
  }

   */

  update(semesters);
  console.log(semesters);

  // semester sort order
  const sortOrder = [
    "FA17",
    "WI18",
    "SP18",
    "SU18",
    "FA18",
    "WI19",
    "SP19",
    "SU19",
    "FA19",
    "WI20",
    "SP20",
    "SU20",
    "FA20"
  ]

});

// function to update chart (only bar for now)
function update(data) {
  console.log('updating chart');

  // remove X axis
  chart.select('.x_axis').remove()

  // update x axis for real this time
  xScale
      .domain(data.map((d) => d.semester))

  chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

  const bars = svg.selectAll("rect")
      .data(data);

  bars
      .enter()
      .append("rect") // Add a new rect for each new elements
      .attr('class', 'bar')
      .merge(bars) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(1000)
      .attr('x', (d) => xScale(d.semester))
      .attr('y', (d) => yScale(d.gpa))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.gpa))

  bars
      .exit()
      .remove()
}
