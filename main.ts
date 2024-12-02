const form = document.getElementById("resume-form") as HTMLFormElement;
const personalInfo = document.getElementById("personal-info") as HTMLElement;
const educationInfo = document.getElementById("education-info") as HTMLElement;
const workInfo = document.getElementById("work-info") as HTMLElement;
const skillsInfo = document.getElementById("skills-info") as HTMLElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
     
    personalInfo.innerHTML = `<h3>Personal Information</h3>
                              <p><strong>Name: </strong>${name}</p>
                              <p><strong>Email: </strong>${email}</p>`;

    educationInfo.innerHTML = `<h3>Education</h3>
                               <p>${education}</p>`; 

    workInfo.innerHTML = `<h3>Work Experience</h3>
                          <p>${experience}</p>`;

    skillsInfo.innerHTML = `<h3>Skills</h3>
                            <p>${skills}</p>`;
    
})
                                        