const data = [{
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

const svg = d3.select('#chart');

const margin = 60;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svg.append('g').attr('transform', `translate(${margin}, ${margin})`);

const yScale = d3.scaleLinear()
  .range([height, 0])
  .domain([0, 4]);

chart.append('g')
  .call(d3.axisLeft(yScale));

const xScale = d3.scaleBand()
  .range([0, width])
  .domain(data.map((d) => d.semester))
  .padding(0.2)

chart.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

chart.selectAll()
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d) => xScale(d.semester))
  .attr('y', (d) => yScale(d.gpa))
  .attr('height', (d) => height - yScale(d.gpa))
  .attr('width', xScale.bandwidth())
  .attr('')

svg
  .append('text')
  .attr('class', 'label')
  .attr('x', -(height / 2) - margin)
  .attr('y', margin / 2.4)
  .attr('transform', 'rotate(-90)')
  .attr('text-anchor', 'middle')
  .text('GPA')

svg
  .append('text')
  .attr('class', 'label')
  .attr('x', width / 2 + margin)
  .attr('y', height + margin * 1.7)
  .attr('text-anchor', 'middle')
  .text('Semester')

var line = d3.line()
  .x((d) => xScale(d.semester) + xScale.bandwidth() / 2)
  .y((d) => yScale(d.cumulative))

chart.append("path")
  .data(data)
  .attr("class", "line")
  .attr("d", line(data))

// add course
$(".add").click(function() {
  $("form > p:first-child").clone(true).insertBefore("form > p:last-child");
  return false;
});

// remove course
$(".remove").click(function() {
  var count = document.getElementById("myForm").childElementCount;
  if (count > 2) {
    $(this).parent().remove();
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

  console.log(newData);

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
    newData[i]['gpa'] = gradeToPoints[newData[i]['grade']];
  }

  console.log(newData);

  // split data into semesters
  // get unique semesters
  var flags = [], semesters = [], l = newData.length, i;
  for( i=0; i<l; i++) {
    if( flags[newData[i].semester]) continue;
    flags[newData[i].semester] = true;
    semesters.push(newData[i].semester);
  }

  console.log(semesters);

});

