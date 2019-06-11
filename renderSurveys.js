function renderSurveys(surveys) {
  renderedHtml = surveys.map(renderSurvey).join("");

  return `
        <div class="text-center mt-5">
            ${renderedHtml}
        </div>
    `;
}

function renderSurvey(survey) {
  renderedHtml = survey.fields.map(renderFields).join("");

  return `
  <div>
    <h1>${survey.title}</h1>
    <hr>
    ${renderedHtml}
    <button type="button" class="btn btn-primary">${
      survey.submitButtonText
    }</button>
  </div>`;
}

function renderFields(fields) {
  return `Hello World!`;
}

function surveys() {
  var content = document.getElementById("content");

  var surveysAbstraction = [
    {
      title: "Movie Goer Survey",
      fields: [
        {
          label: "Have you gone to the movies in the last month?",
          type: "radio",
          options: ["yes", "no"]
        },
        {
          label:
            "On a scale of 1 to 5, Did you enjoy your last theater experience?",
          type: "radio",
          options: [1, 2, 3, 4, 5]
        }
      ],
      submitButtonText: "Submit Survey"
    },
    {
      title: "DigitalCrafts Survey",
      fields: [
        {
          label: "Are you currently enrolled in a DigitalCrafts class?",
          type: "radio",
          options: ["yes", "no"]
        },
        {
          label: "In 3000 words or more, explain what's so great about Adam?",
          type: "text"
        }
      ],
      submitButtonText: "I'm Done"
    }
  ];

  content.innerHTML = renderSurveys(surveysAbstraction);
}
