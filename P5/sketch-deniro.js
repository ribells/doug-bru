	  var career = [];
	  var movie_year = [];
	  var maxData;

	  let data;
	  function preload() {
		  // Get DeNiro's Career Data
		  let url = 'DeNiro Database.csv';
		  data = loadTable(url, 'csv', 'header');
	  }

	  function setup() {
		  createCanvas(800, 800);

		  angleMode(DEGREES);
		  rectMode(BOTTOM);
		  
		  maxData = 0

		  for (let i = 0; i < data.getRowCount()-1; i++) {
			  if(data.getString(i, 7) != "#N/A") {
				  value = parseInt(data.getString(i, 0)),
			  	  movie_year.push(value);
			  	  value = parseInt(data.getString(i, 7));
			  	  career.push(value);
			  	  console.log(value);
				  if(value > maxData) {
				      maxData = value;
				  }
			  }
		  }
	  }

	  function draw() {
		  background(43, 53, 63);
		  fill(139, 171, 203);
		  stroke(89, 86, 74);

		  var angleSeparation = 360 / career.length;
		  var padding = 10;

		  if (frameCount <= 400) {
			  maxValue = constrain(frameCount * 2, 0, 400);
		  } else {
			  maxValue = 400;
		  }

		  var offset = 200;
		  var dataMultiplier = (height/2-offset-padding) / maxData;

		  for (var i = 0; i < career.length; i = i + 1) {
			  push();
			  var currentData = career[i];
			  var finalHeight = currentData * dataMultiplier;
			  var animatedHeight = map(maxValue, 0, 400, 0, finalHeight);
			  translate(width / 2, height / 2);
			  rotate(angleSeparation * i);
			  rect(0, offset, angleSeparation*2, animatedHeight);
			  text(Math.floor(movie_year[i]), offset-32, 0);
			  pop();
		  }
	  }