var form = document.getElementById("resume-form");
var personalInfo = document.getElementById("personal-info");
var educationInfo = document.getElementById("education-info");
var workInfo = document.getElementById("work-info");
var skillsInfo = document.getElementById("skills-info");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    personalInfo.innerHTML = "<h3>Personal Information</h3>\n                              <p><strong>Name: </strong>".concat(name, "</p>\n                              <p><strong>Email: </strong>").concat(email, "</p>");
    educationInfo.innerHTML = "<h3>Education</h3>\n                               <p>".concat(education, "</p>");
    workInfo.innerHTML = "<h3>Work Experience</h3>\n                          <p>".concat(experience, "</p>");
    skillsInfo.innerHTML = "<h3>Skills</h3>\n                            <p>".concat(skills, "</p>");
});
