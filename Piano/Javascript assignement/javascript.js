const today = new Date().toISOString().split("T")[0];
const dateInput = document.getElementById("moveInDate");
dateInput.value = today;
dateInput.min = today;

const majors = ["Accounting", "Agriculture", "Anthropology", "Area/Group Studies", "Art & Art History", "Arts Administration", "Aviation", "Biology", "Business", "Chemistry", "Communication", "Computer Science", "Construction", "Criminal Justice", "Cybersecurity", "Dance", "Data Science", "Economics", "Education", "Engineering", "English", "Environmental Studies", "Exercise Science", "Family Life & Human Development", "Film", "Finance", "General Studies", "Geography", "Geology", "Graphic Design", "Health Sciences", "History", "Hospitality Management", "Information Technology", "Interdisciplinary Studies", "Languages", "Leadership", "Library Media/School Library", "Management", "Marketing", "Mathematics", "Military Science", "Music", "Nursing", "Nutrition", "Outdoor Recreation", "Philosophy", "Physical Education", "Physics", "Political Science", "Psychology", "Public Administration", "Secondary Education", "Social Studies", "Social Work", "Sociology", "Software Development", "Sports", "Theatre"];
const majorSelect = document.getElementById("majorSelect");
majorSelect.innerHTML = "";

for (let i = 0; i < majors.length; i++) {
    let option = document.createElement("option");
    option.value = majors[i];
    option.textContent = majors[i];
    majorSelect.appendChild(option);
}

const firstNameList = ["Ainslee", "Alysa", "Berrie", "Cami", "Deirdre", "Devon", "Dora", "Elaina", "Genia", "Godiva", "Jerrylee", "Karyn", "Nolana", "Perrine", "Rachel"];
const lastNameList = ["Cartmill", "Cherrington", "Ellington", "Gascho", "Hellums", "Landesberg", "Lehtonen", "Mankins", "Melchior", "Molpus", "Sangalli", "Shehane", "Stinebaugh", "Willigar", "Wiser"];

const randomBtn = document.getElementById("random");

randomBtn.onclick = function () {
    document.getElementById("firstName").value = firstNameList[Math.floor(Math.random() * firstNameList.length)];
    document.getElementById("lastName").value = lastNameList[Math.floor(Math.random() * lastNameList.length)];
    majorSelect.value = majors[Math.floor(Math.random() * majors.length)];
    let futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30) + 1);
    dateInput.value = futureDate.toISOString().split("T")[0];
};