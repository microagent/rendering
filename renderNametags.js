function renderNametags(nametags) {
  result = nametags.map(name => {
    return `
        <div class="text-center mt-5;">
            <div style="border: 2px solid black;  display: inline-block;">
            <div style="background-color: #0f22c6; height: 50px; width: 275px; color: white; font-size: 24px; font-weight: 700; text-align: center; padding: 5px 0 0 0 ">Hello, my name is:</div>
            <div style="height: 100px; width: 275px; color: black; font-size: 24px; font-weight: 500;text-align: center;padding: 25px 0 0 0">${name}</div>
            </div>
        </div>
    `;
  });
  return result.join("");
}

function nametags() {
  var content = document.getElementById("content");

  var nametagsAbstraction = ["Kamilah", "Kim", "Stuart", "Ron", "Krissy"];

  content.innerHTML = renderNametags(nametagsAbstraction);
}
