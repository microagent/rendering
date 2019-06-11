function renderStudents(students) {
  let backgroundColor;
  let attendence;
  result = students.map(student => {
    if (student.isPresent) {
      backgroundColor = "#B9EE61";
      attendence = "Present";
    } else {
      backgroundColor = "#ED6850";
      attendence = "Absent";
    }
    return `
            <div class="text-center mt-5 mx-auto" style="background-color: ${backgroundColor}; width: 200px;border: 2px solid black">${
      student.name
    }<br>${attendence}</div>
    
    `;
  });
  return `<div class="text-center mt-5 mx-auto">
  <div class="text-center mt-5 mx-auto" style="width: 200px; color: black; background-color: white; font-size: 32px; font-weight: 800; border: 2px solid black">Roll Call!</div>${result.join(
    ""
  )}</div>`;
}

function students() {
  var content = document.getElementById("content");

  var studentsAbstraction = [
    {
      name: "Kamilah",
      isPresent: true
    },
    {
      name: "Kim",
      isPresent: true
    },
    {
      name: "Stuart",
      isPresent: false
    },
    {
      name: "Ron",
      isPresent: true
    },
    {
      name: "Krissy",
      isPresent: false
    }
  ];

  content.innerHTML = renderStudents(studentsAbstraction);
}
