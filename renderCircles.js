function renderCircles(circles) {
  // HINT: You probably need to write a for loop!
  //       Or, if you're feeling fancy, use .map()

  htmlRender = circles.map(renderCircle).join("");

  return `
        <div class="text-center mt-5">
            ${htmlRender}
        </div>
    `;
}

function renderCircle(circle) {
  return `<div class="text-center mt-5" style="width: ${circle.radius *
    2}px; height: ${circle.radius * 2}px; background-color: ${
    circle.color
  }; border-radius: ${circle.radius}px">
  </div>
  `;
}

function circles() {
  var content = document.getElementById("content");

  var circlesAbstraction = [
    {
      radius: 50,
      color: "#FF00FF"
    },
    {
      radius: 30,
      color: "#FF99AA"
    },
    {
      radius: 60,
      color: "#0000FF"
    },
    {
      radius: 10,
      color: "#000000"
    }
  ];

  content.innerHTML = renderCircles(circlesAbstraction);
}
