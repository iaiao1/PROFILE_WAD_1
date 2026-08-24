const profileContainer = document.querySelector("#profile-container");

const studentCard = document.createElement("div");
const studentAvatar = document.createElement("img");
const studentName = document.createElement("h2");
const studentBio = document.createElement("p");

studentCard.classList.add("profile-card");

studentAvatar.src = "pic.png"; 
studentAvatar.alt = "Student Profile Picture";
studentAvatar.classList.add("profile-avatar");

studentName.textContent = "Diana Canlas"; 
studentName.classList.add("profile-name");

studentBio.textContent = "A second-year BSIS student with eagerness to learn and explore new things.";
studentBio.classList.add("profile-bio");

studentCard.appendChild(studentAvatar);
studentCard.appendChild(studentName);
studentCard.appendChild(studentBio);

profileContainer.appendChild(studentCard);