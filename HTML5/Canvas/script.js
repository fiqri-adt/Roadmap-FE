//Menyiapkan canvas
const mycanvas = document.querySelector("#mycanvas");

//Atur ukuran Canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//Tentukan Context
const c = mycanvas.getContext("2d");

// Manipulasi Canvas

// Membuat Rectangle
// c.fillStyle = "blue";
// //warna background
// c.strokeStyle = "#252525";
// // warna border
// c.lineWidth = "5";
// //ukuran garis

// c.rect(50, 50, 300, 300);
// //x1 y1 x2 y2
// c.fill();
// //mengisi rectangle dengan warna yang diberikan sebelumnya
// c.stroke();
// //menampilkan bordernya

// // Membuat Lingkaran / Circle / Arc
// c.fillStyle = "lightpink";
// c.beginPath();
// //membuka path
// c.arc(550, 200, 150, 0, 2 * Math.PI);
// //x-axis,y axis , radius, start angle (in radians), end angle (in
// c.fill();
// c.stroke();

// // Membuat Path (Segitiga)
// c.fillStyle = "lightgreen";
// c.beginPath();
// c.moveTo(900, 50); // Move to the point
// c.lineTo(1050, 350);
// // Draw a line from current position to this one
// c.lineTo(750, 350);
// c.closePath();
// // Close the shape by connecting back to first point of the triangle
// c.fill();
// c.stroke();

let x = 300;
let speed = 5;
let radius = 150;

function draw() {
  window.requestAnimationFrame(draw);
  c.clearRect(0, 0, innerWidth, innerHeight);
  console.log("ok!");
  c.fillStyle = "lightpink";
  c.beginPath();
  //membuka path
  c.arc(x, 200, radius, 0, 2 * Math.PI);
  //x-axis,y axis , radius, start angle (in radians), end angle (in
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    speed = -speed;
  }

  x += speed;
}

draw();
