// placeholder semester data for initial chart
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
  /*
{
  semester: 'SP20',
  gpa: '0.00',
  cumulative: '3.08'
},

   */
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

// placeholder course data for initial chart
let DATA = [
  {
    "semester": "FA17",
    "course": "AE 100",
    "hours": 2,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 8
  },
  {
    "semester": "FA17",
    "course": "AE 199",
    "hours": 2,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 8
  },
  {
    "semester": "FA17",
    "course": "CHEM 102",
    "hours": 3,
    "grade": "C+",
    "gpa": 2.33,
    "qualityPoints": 6.99
  },
  {
    "semester": "FA17",
    "course": "CHEM 103",
    "hours": 1,
    "grade": "B+",
    "gpa": 3.33,
    "qualityPoints": 3.33
  },
  {
    "semester": "FA17",
    "course": "MATH 231",
    "hours": 3,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 9
  },
  {
    "semester": "FA17",
    "course": "MATH 299",
    "hours": 1,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 3
  },
  {
    "semester": "SP18",
    "course": "AE 199",
    "hours": 1,
    "grade": "A+",
    "gpa": 4,
    "qualityPoints": 4
  },
  {
    "semester": "SP18",
    "course": "MATH 241",
    "hours": 4,
    "grade": "B+",
    "gpa": 3.33,
    "qualityPoints": 13.32
  },
  {
    "semester": "SP18",
    "course": "PHYS 211",
    "hours": 4,
    "grade": "A-",
    "gpa": 3.67,
    "qualityPoints": 14.68
  },
  {
    "semester": "SP18",
    "course": "SPAN 122",
    "hours": 4,
    "grade": "C+",
    "gpa": 2.33,
    "qualityPoints": 9.32
  },
  {
    "semester": "FA18",
    "course": "MATH 285",
    "hours": 3,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 9
  },
  {
    "semester": "FA18",
    "course": "MSE 280",
    "hours": 3,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 9
  },
  {
    "semester": "FA18",
    "course": "PHYS 212",
    "hours": 4,
    "grade": "C-",
    "gpa": 1.67,
    "qualityPoints": 6.68
  },
  {
    "semester": "FA18",
    "course": "TAM 210",
    "hours": 2,
    "grade": "C+",
    "gpa": 2.33,
    "qualityPoints": 4.66
  },
  {
    "semester": "WI19",
    "course": "ECON 102",
    "hours": 3,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 9
  },
  {
    "semester": "SP19",
    "course": "AE 202",
    "hours": 3,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 12
  },
  {
    "semester": "SP19",
    "course": "MATH 415",
    "hours": 3,
    "grade": "D+",
    "gpa": 1.33,
    "qualityPoints": 3.99
  },
  {
    "semester": "SP19",
    "course": "ME 200",
    "hours": 3,
    "grade": "B+",
    "gpa": 3.33,
    "qualityPoints": 9.99
  },
  {
    "semester": "SP19",
    "course": "TAM 212",
    "hours": 3,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 9
  },
  {
    "semester": "FA19",
    "course": "AE 311",
    "hours": 3,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 12
  },
  {
    "semester": "FA19",
    "course": "AE 321",
    "hours": 3,
    "grade": "B-",
    "gpa": 2.67,
    "qualityPoints": 8.01
  },
  {
    "semester": "FA19",
    "course": "AE 353",
    "hours": 3,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 12
  },
  {
    "semester": "FA19",
    "course": "IE 300",
    "hours": 3,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 12
  },
  {
    "semester": "FA19",
    "course": "JS 212",
    "hours": 3,
    "grade": "B+",
    "gpa": 3.33,
    "qualityPoints": 9.99
  },
  {
    "semester": "SU20",
    "course": "AE 402",
    "hours": 3,
    "grade": "B+",
    "gpa": 3.33,
    "qualityPoints": 9.99
  },
  {
    "semester": "SU20",
    "course": "ECE 206",
    "hours": 1,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 3
  },
  {
    "semester": "FA20",
    "course": "AE 433",
    "hours": 3,
    "grade": "B+",
    "gpa": 3.33,
    "qualityPoints": 9.99
  },
  {
    "semester": "FA20",
    "course": "AE 442",
    "hours": 3,
    "grade": "B",
    "gpa": 3,
    "qualityPoints": 9
  },
  {
    "semester": "FA20",
    "course": "AE 460",
    "hours": 2,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 8
  },
  {
    "semester": "FA20",
    "course": "AE 483",
    "hours": 2,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 8
  },
  {
    "semester": "FA20",
    "course": "CS 125",
    "hours": 4,
    "grade": "A",
    "gpa": 4,
    "qualityPoints": 16
  },
  {
    "semester": "FA20",
    "course": "CS 196",
    "hours": 1,
    "grade": "A+",
    "gpa": 4,
    "qualityPoints": 4
  }
];

// define colors to be used for bars and lines
const BAR_COLOR = "#73B0D7";
const BAR_HL_COLOR = "#69A0C4";
const LINE_COLOR = "#ED7D31";
const LINE_HL_COLOR = "#C96A29";

//TODO:
// 1. decide what to do about nav bar

// ================ BEGIN CHART CREATION ========================

// define constants
const svg = d3.select('#chart');

// create tooltip for columns
const tool_tip = d3.tip()
    .attr("class", "d3-tip")
    .offset([-8, 0])
    .html(function(d) {
      let tip_text = "<table>";
      DATA.forEach(course => {
        if (course.semester === d.semester) {
          tip_text += "<tr><td>" + course.course + ": </td><td>" + course.grade + "</td></tr>";
        }
      })
      tip_text += "</table>";
      tip_text += "<p style='text-align: center'>" + d.gpa + "</p>";
      return tip_text;
    })

svg.call(tool_tip);

// create tooltip for cumulative gpa line
const cum_tip = d3.tip()
    .attr("class", "d3-tip")
    .offset([-8, 0])
    .html(d => d.cumulative)

svg.call(cum_tip)

//TODO: refactor tooltip code to only run loop on bar creation, unless performance issues are not too bad
// update: i don't think this is possible

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

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .attr('class', 'x_axis')
    .call(xAxis);

// add horizontal lines
const makeYLines = () => d3.axisLeft()
    .scale(yScale)

chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
    )


// create and add bars
const bars = chart.selectAll(".bar")
    .data(sample)
    .enter()
    .append('rect')
    .attr('class', 'bar')

bars
    .attr('x', /** @param d.semester */ (d) => xScale(d.semester))
    .attr('y', (d) => yScale(d.gpa))
    .attr('height', (d) => height - yScale(d.gpa))
    .attr('width', xScale.bandwidth())
    //.call(() => console.log('creating initial bars'))
    .attr("fill", BAR_COLOR)

// mouse events
bars
    .on("mouseover", function(d) {
      d3.select(this)
          .attr("fill", BAR_HL_COLOR);
      tool_tip.show(d)
    })
    .on("mousemove", function() {

    })
    .on("mouseout", function(d) {
      d3.select(this)
          .attr("fill", BAR_COLOR);
      tool_tip.hide(d)
    })


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


// add watermark
svg
    .append('text')
    .attr('class', 'watermark')
    .attr('x', width * 0.9 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .style("fill", "#C1C1C1")
    .text('baebriel.github.io/GPAViz')


// define line
const line = d3.line()
    .x((d) => xScale(d.semester) + xScale.bandwidth() / 2)
    .y((d) => yScale(d.cumulative))

// add line to chart
chart.append("path")
    .data(sample)
    .attr("class", "line")
    .attr("fill", "none")
    .style("stroke", LINE_COLOR)
    .attr("stroke-width", 2)
    .attr("d", line(sample))

// add points on line
chart.selectAll(".point")
    .data(sample)
    .enter()
    .append("circle")
    .attr("class", "point")
    .attr("cx", function(d) { return xScale(d.semester) + xScale.bandwidth() / 2 } )
    .attr("cy", function(d) { return yScale(d.cumulative) } )
    .attr("r", 5)
    .attr("fill", LINE_COLOR)
    .on("mouseover", function(d) {
      d3.select(this)
          .attr("fill", LINE_HL_COLOR);
      cum_tip.show(d)
    })
    .on("mouseout", function(d) {
      d3.select(this)
          .attr("fill", LINE_COLOR);
      cum_tip.hide(d)
    })

// ================ END CHART CREATION ========================

$("#draw-chart").on("click", function () {
  drawHandler();
})

function drawHandler() {
  const input = document.getElementById("dars-input").value;
  console.log(input);

  const courses = parseInput(input);
  console.log(courses);

  const semesters_ordered = coursesToOrderedSemesters(courses);
  console.log(semesters_ordered);

  DATA = courses;
  update(semesters_ordered);
}

// function to update chart (only bar for now)
function update(data) {

  const transitionTime = 500;

  console.log('updating chart');

  xScale
      .domain(data.map((d) => d.semester))

  chart.select(".x_axis")
      .call(xAxis)

  // define bars group
  const bars = chart.selectAll(".bar")
      .data(data);

  // update bars using new data
  bars
      .enter()
      .append("rect") // Add a new rect for each new elements
      .attr('class', 'bar')
      .on("mouseover", function(d) {
        d3.select(this)
            .attr("fill", BAR_HL_COLOR);
        tool_tip.show(d)
      })
      .on("mousemove", function() {

      })
      .on("mouseout", function(d) {
        d3.select(this)
            .attr("fill", BAR_COLOR);
        tool_tip.hide(d)
      })
      .merge(bars) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(transitionTime)
      .attr('x', (d) => xScale(d.semester)) // change from xScale to xAxis
      .attr('y', (d) => yScale(d.gpa))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.gpa))
      //.call( () => console.log('adding bars'))
      .attr("fill", BAR_COLOR)
      .attr("text", "test")

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

  u
      .exit()
      .remove()

  // update points
  const points = chart.selectAll(".point")
      .data(data)
      .raise()

  points
      .enter()
      .append("circle")
      .attr("class", "point")
      .on("mouseover", function(d) {
        d3.select(this)
            .attr("fill", LINE_HL_COLOR);
        cum_tip.show(d)
      })
      .on("mouseout", function(d) {
        d3.select(this)
            .attr("fill", LINE_COLOR);
        cum_tip.hide(d)
      })
      .merge(points)
      .transition()
      .duration(transitionTime)
      .attr("cx", function(d) { return xScale(d.semester) + xScale.bandwidth() / 2 } )
      .attr("cy", function(d) { return yScale(d.cumulative) } )
      .attr("r", 5)
      .attr("fill", LINE_COLOR)

  points
      .exit()
      .remove()
}

// download svg as png
$("#download").on('click', function(){
  // Get the SVG element and save using saveSvgAsPng.js
  saveSvgAsPng(document.getElementsByTagName("svg")[0], "GPAViz.png", {
    scale: 2,
    backgroundColor: "#FFFFFF",
  });
})

function parseInput(textResult) {
  const lines = textResult.split('\n');

  // https://regex101.com/r/LM2l3f/2
  const pattern = /^(?<semester>[A-Z]{2}[0-9]{2})\t(?<department>[A-Z]{2,4}) (?<number>[0-9\-]*).*(?<hours>[0-9][.][0-9])\t(?<grade>[ABCDF]([+|-]|\t))/;

  // define course object array
  const courses = [];

  // iterate through each text line
  for (let i = 0; i < lines.length; i++) {
    // define empty course object
    const courseObj = {};

    // get regex matches
    const match = lines[i].match(pattern);

    if (match != null) {
      // add object properties
      courseObj['semester'] = match.groups.semester;
      courseObj['course'] = match.groups.department + ' ' + match.groups.number;
      courseObj['hours'] = parseFloat(match.groups.hours);
      courseObj['grade'] = match.groups.grade.trim();

      // push new course object to course object array
      courses.push(courseObj);
    }
  }
  return courses;
}


/**
 * This function takes an array of course objects and returns an array of semesters containing all courses.
 * @param data: array of courses each containing: semester, course, hours, grade
 * @returns {*}: an array of semester objects containing: semester, GPAHours, qualityPoints, gpa, cumulative
 */
function coursesToOrderedSemesters(data) {

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

  for (let i = 0; i < data.length; i++) {
    // convert grade to grade points
    data[i]['gpa'] = gradeToPoints[data[i]['grade']];
    // calculate quality points
    data[i]['qualityPoints'] = data[i]['gpa'] * data[i]['hours'];
  }

  // get unique semesters
  let flags = [], uniqueSemesters = [], l = data.length, i;
  for (i = 0; i < l; i++) {
    if (flags[data[i].semester]) continue;
    flags[data[i].semester] = true;
    uniqueSemesters.push(data[i].semester);
  }

  // group courses by semester
  const groupBy = key => array =>
      array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, {});

  const groupBySemester = groupBy('semester');

  const coursesBySemester = groupBySemester(data);

  // get sum of credit hours or quality points
  function sum(semester, argument) {
    let sum = 0;
    for (const key in coursesBySemester) {
      if (key === semester && coursesBySemester.hasOwnProperty(key)) {
        // sum hours from each class in array
        coursesBySemester[key].forEach(course => {
          if (course['semester'] === semester) {
            sum += parseFloat(course[argument])
          }
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

  // function to sort semesters in custom order
  // credit: https://gist.github.com/ecarter/1423674
  function mapOrder(array, order, key) {

    array.sort(function (a, b) {
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

    //TODO: write tests to make sure cumulative gpa calculation is correct
  }

  return semesters_ordered;
}