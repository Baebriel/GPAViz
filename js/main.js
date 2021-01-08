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
    .style("fill", "grey")
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

// add course
$(".add").on("click", function() {
  const count = document.getElementById("myForm").childElementCount;
  if (count > 100) {
    alert('Cannot have more than 100 courses.')
  } else {
    const clone = $("form > p:first-child").clone(true);
    clone.find('input').val('');
    clone.insertBefore("form > p:last-child");
    return false;
  }
});

// remove course
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

  // call function to format data into courses grouped by semester to plot
  const semesters_ordered = coursesToOrderedSemesters(newData);

  DATA = newData;

  // update chart
  update(semesters_ordered);
});

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

/*
// filepond stuff for file upload. not used as of now.
const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create( inputElement );
const file = pond.getFiles;

 */

// begin OCR stuff
//https://ourcodeworld.com/articles/read/580/how-to-convert-images-to-text-with-pure-javascript-using-tesseract-js

// get file upon upload
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", handleFiles, false);
let file = [];

// name 'Draw chart' button
let ocrBtn = document.getElementById("img-to-text");
ocrBtn.setAttribute("disabled","disabled");

function handleFiles() {
  // get file
  const fileList = this.files;
  file = fileList[0];
  console.log('file size: ' + file.size + ' bytes');

  //print file name
  document.getElementById("file-name-value").textContent = file.name;

  // when file is uploaded, enable 'Draw chart' button
  ocrBtn.removeAttribute("disabled");
}

// img to text upon button click
ocrBtn.addEventListener("click", imgToText, false);

function imgToText(){

  // Disable button until the text recognition finishes
  ocrBtn.setAttribute("disabled","disabled");
  ocrBtn.innerText = "Loading..."

  // start progress bar
  $('#progress-bar').show();

  // create asynchronous Tesseract worker
  const worker = Tesseract.createWorker({
    logger: m => {
      // update progress text
      document.getElementById("progress-value").textContent = m.status;
      if ('progress' in m) {
        // update progress bar
        document.getElementById("progress-bar").value = Math.floor(parseFloat(m.progress) * 100);
    }
  }});

  // enable Tesseract logging
  Tesseract.setLogging(true);

  // start async function
  work()
      .then(result => {
        // parse courses from text result
        const courses = parseOCR(result.data.text, false);

        console.log(courses);

        // group courses into ordered semesters
        const semesters_ordered = coursesToOrderedSemesters(courses);

        DATA = courses;

        // update chart
        update(semesters_ordered);

      })
      .catch(error => {
        console.log(error);
        alert('error during text recognition');
      })

      .finally(function(){
        // once async function is done, reset button text, file name text and progress text
        ocrBtn.innerText = "Draw chart";
        document.getElementById("file-name-value").textContent = "";
        document.getElementById("progress-value").textContent = "";

        // also hide progress bar
        $('#progress-bar').hide();
      });

  async function work() {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    let result = await worker.detect(file);
    //console.log(result.data);

    result = await worker.recognize(file);
    //console.log(result.data);

    await worker.terminate();
    return result;
  }
}

d3.select("#download")
    .on('click', function(){
      // Get the d3js SVG element and save using saveSvgAsPng.js
      saveSvgAsPng(document.getElementsByTagName("svg")[0], "plot.png", {
        scale: 1,
        backgroundColor: "#FFFFFF",
        fonts: [
          {
            url: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
            format: 'application/font-woff2',
            text: "@font-face {font-family: 'Roboto';  font-style: normal;  font-weight: 400; src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}",
          }
        ]
      });
    })

/**
 * Parse data from OCR
 * @param textResult: result.data.text from tesseract
 * @param testingFlag: if true, textResult is redefined to be a prescribed string
 */
function parseOCR(textResult, testingFlag) {

  if (testingFlag) {
    console.log('testing regex using predefined text');
    textResult = "FA17 AE 100 A 20 A\n" +
        "\n" +
        "FA17 AE 199 CD2 20 A >R\n" +
        "FA17 AVI 101 30 TR PARKLAND: AVI 101\n" +
        "FA17 BADM 1--7 3.0 PS\n" +
        "FA17 CHEM 102 GL1 3.0 C+\n" +
        "FA17 CHEM 103 S52 1.0 B+\n" +
        "FA17 ENG 100 AE2 00 s\n" +
        "\n" +
        "FA17 ENGL 1--4 30 PS\n" +
        "FA17 FR2--5 20 PS\n" +
        "FA17 GEOG 1018 30 PS\n" +
        "FA17 MATH 220 1 50 PS\n" +
        "FA17 MATH 231 EL1 3.0 B\n" +
        "\n" +
        "FA17  MATH 299 EL1 10 B\n" +
        "\n" +
        "FA17 RHET 1--3 30 PS\n" +
        "FA17 RHET 1051 40 PS\n" +
        "SP18 AE 199 SDM 1.0 A+ >R\n" +
        "SP18  AvI 120 30 TR PARKLAND: AVI 120\n" +
        "SP18 MATH 241 BL2 40 B+\n" +
        "SP18 PHYS 211 A3 40 A-\n" +
        "SP18 SPAN 122 D1 40 C+\n" +
        "FA18 AVI 130 30 TR PARKLAND: AVI 129\n" +
        "FA18 MATH 285 D1 30 B\n" +
        "\n" +
        "FA18 MSE 280 A 30 B\n" +
        "\n" +
        "FA18 PHYS 212 A2 40 C-\n" +
        "FA18 TAM 210 AL2 20 C+\n" +
        "WI19 ECON 102 ONL 30 B\n" +
        "SP19 AE 202A 30 A\n" +
        "SP19 LAS 291 SAK 00 s\n" +
        "SP19 MATH 415 AL4 3.0 D+\n" +
        "SP19  ME 200 AL2 3.0 B+\n" +
        "SP19 TAM 212 AE2 30 B\n" +
        "\n" +
        "FA19 AE311A 30 A\n" +
        "\n" +
        "FA19 AE321A 30 B-\n" +
        "FA19 AE 353A 30 A\n" +
        "\n" +
        "FA19 IE 300 BL1 30 A\n" +
        "\n" +
        "FA19 JS212A1 3.0 B+\n" +
        "SP20 AE312A 30 CR\n" +
        "SP20 AE323A 30 CR\n" +
        "SP20 AE 352 BL 30 CR\n" +
        "SP20 AE370A 30 CR\n" +
        "SP20 ECE 205AL1 30 CR\n" +
        "SU20 AE 402 A0 3.0 B+\n" +
        "SU20 ECE 206 A1 101 B\n" +
        "\n" +
        "FA20 AE433A 3.0 B+\n" +
        "FA20 AE 442A1 30 B\n" +
        "\n" +
        "FA20 AE 460 AE1 20 A\n" +
        "\n" +
        "FA20 AE 483 AE1 20 A\n" +
        "\n" +
        "FA20 CS 125AL1 40 A\n" +
        "FA20 CS 196 25 1.0 A+\n" +
        "SP21  AE 443 A1 30 IP >l\n" +
        "SP21 AE 461 AS1 20 P >l\n" +
        "SP21 AE484A 30 IP >l\n" +
        "SP21 FAA102A 30 IP >l"
  }

  const lines = textResult.split('\n');

  // https://regex101.com/r/LM2l3f/1/
  const pattern = /(?<semester>^[A-Z]{2,3}[0-9]{2}) *(?<course>[A-Z]{2,4} *[0-9\-]{3}).*(?<hours>[0-9][\.]?[0-9]{1,2}) (?<grade>[ABCDF][+-]?)($| *>R)/;

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
      courseObj['course'] = match.groups.course;

      // OCR may not detect decimal in hours number, so parse accordingly
      let hours = parseFloat(match.groups.hours);
      if (hours > 5 && hours < 50) {
        hours /= 10;
      } else if (hours > 50) {
        hours /= 100;
      }

      // add object properties
      courseObj['hours'] = hours;
      courseObj['grade'] = match.groups.grade;

      // push new course object to course object array
      courses.push(courseObj);
    }
  }
  console.log(courses);
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