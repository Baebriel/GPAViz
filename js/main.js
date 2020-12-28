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
const yAxis = d3.axisLeft(yScale)

chart.append('g')
    .call(yAxis)

const xAxis = d3.axisBottom(xScale)

const gx = chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .attr('class', 'x_axis')
    .call(xAxis);

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
    .call(param => console.log('creating initial bars'));

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
$(".add").on("click", function() {
  const clone = $("form > p:first-child").clone(true);
  clone.find('input').val('');
  clone.insertBefore("form > p:last-child");
  return false;
});

// remove course
//TODO: add button to clear all course (except first course for add()/clone() to work)
$(".remove").on("click",function() {
  const count = document.getElementById("myForm").childElementCount;
  if (count > 2) {
    $(this).parent().fadeOut(200, function() {$(this).remove()});
  } else {
    alert('Cannot have less than one course.')
  }
});

// save form and draw chart
$( ".draw" ).on("click",function() {

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
  let flags = [], uniqueSemesters = [], l = newData.length, i;
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
      if (key === semester && coursesBySemester.hasOwnProperty(key)) {
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

  // function to sort semesters in in custom order
  // credit: https://gist.github.com/ecarter/1423674
  function mapOrder (array, order, key) {

    array.sort( function (a, b) {
      const A = a[key], B = b[key];

      if (order.indexOf(A) > order.indexOf(B)) {
        return 1;
      } else {
        return -1;
      }

    });

    return array;
  }

  // get sorted semesters
  const semesters_ordered = mapOrder(semesters, sortOrder, 'semester');

  // cumulative gpa of first semester is same as semester gpa
  semesters_ordered[0]['cumulative'] = semesters_ordered[0]['gpa'];
  // get cumulative gpa for rest of semesters
  for (i = 1; i < semesters_ordered.length; i++) {
    let sumHrs = 0;
    let sumPts = 0;

    for (let j = 0; j <= i; j++) {
      sumHrs += semesters_ordered[j]['GPAHours'];
      sumPts += semesters_ordered[j]['qualityPoints'];
    }

    // get cumulative gpa and round down to hundredth
    semesters_ordered[i]['cumulative'] = Math.floor(sumPts / sumHrs * 100) / 100;
  }

  //TODO: write tests to make sure cumulative gpa calculation is correct

  console.log(semesters_ordered);

  // update chart
  update(semesters_ordered);
});

// function to update chart (only bar for now)
function update(data) {

  const transitionTime = 500;

  console.log('updating chart');

  // remove X axis
  /*
  console.log('before update:')
  console.log(chart.select('.x_axis')._groups[0][0].textContent);
   */

  // remove x axis
  chart.selectAll('.x_axis').remove()

  // update x scale
  xScale
      .domain(data.map((d) => d.semester))

  // add x axis
  chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .attr('class', 'x_axis')
      /*
      .transition()
      .duration(transitionTime)

       */
      .call(xAxis);



  const bars = chart.selectAll("rect")
      .data(data);

  bars
      .enter()
      .append("rect") // Add a new rect for each new elements
      .attr('class', 'bar')
      .merge(bars) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(transitionTime)
      .attr('x', (d) => xScale(d.semester)) // change from xScale to xAxis
      .attr('y', (d) => yScale(d.gpa))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.gpa))
      .call( param => console.log('adding bars'))

  bars
      .exit()
      .remove()

  // update line
  const u = chart.selectAll(".line")
      .raise()

// add line to chart
  u
      .enter()
      .data(data)
      .append("path")
      .attr("class","line")
      .merge(u)
      .transition()
      .duration(transitionTime)
      .attr("d", line(data))
      .exit()
      .remove()

  /*
  // timeout function to print axis text content after update transition is complete
  setTimeout(function(){
    console.log('after update:')
    console.log(chart.select('.x_axis')._groups[0][0].textContent);
  },transitionTime);
   */
}

//TODO: use OCR from DARS report 'summary of courses taken' instead of manual input