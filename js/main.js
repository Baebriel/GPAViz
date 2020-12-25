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
