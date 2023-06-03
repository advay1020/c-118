
let canvas;
let sketch;
let drawn_sketch;
let timer_counter = 0;
let timer_check = "";
let answer_holder = "";
let score = 0;

function updateCanvas() {
  background(255);

  let random_number = Math.floor(Math.random() * quick_draw_data_set.length);

  sketch = quick_draw_data_set[random_number];

  document.getElementById("sketch").textContent = sketch;
}

function setup() {
  canvas = createCanvas(280, 280);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);

  background(255);

  updateCanvas();
}

function draw() {
  check_sketch();

  if (drawn_sketch === sketch) {
    answer_holder = "set";
    score++;

    document.getElementById("score").textContent = "Score: " + score;
  }
}

function check_sketch() {

  timer_counter++;

  document.getElementById("timer").textContent = "Timer: " + timer_counter;

 
  console.log(timer_counter);

  if (timer_counter > 400) {
    timer_counter = 0;

    timer_check = "completed";

    if (timer_check === "completed" || answer_holder === "set") {
      timer_check = "";
      answer_holder = "";

      updateCanvas();
    }
  }
}
