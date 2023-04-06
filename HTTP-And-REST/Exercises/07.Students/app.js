function attachEvents() {

  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';
  const tableBody = document.querySelector('#results > tbody');
  const fNameInput = document.querySelector(".inputs > input[name='firstName']");
  const lNameInput = document.querySelector(".inputs > input[name='lastName']");
  const fNumberInput = document.querySelector(".inputs > input[name='facultyNumber']");
  const gradeInput = document.querySelector(".inputs > input[name='grade']");
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addStudent);

  getStudents();

  async function getStudents() {

    try {
      const studentsRes = await fetch(BASE_URL);
      let studentsData = await studentsRes.json();
      studentsData = Object.values(studentsData);
      tableBody.innerHTML = '';
      for (const { firstName, lastName, facultyNumber, grade } of studentsData) {
        tr = document.createElement('tr');
        fTd = document.createElement('td');
        lTd = document.createElement('td');
        fNTd = document.createElement('td');
        gTd = document.createElement('td');

        fTd.textContent = firstName;
        tr.appendChild(fTd);

        lTd.textContent = lastName;
        tr.appendChild(lTd);

        fNTd.textContent = facultyNumber;
        tr.appendChild(fNTd);

        gTd.textContent = grade;
        tr.appendChild(gTd);
        tableBody.appendChild(tr);
    }
    } catch (error) {
        console.error(error);
    }
  }

  function addStudent() {
    const firstName = fNameInput.value;
    const lastName = lNameInput.value;
    const facultyNumber = fNumberInput.value;
    const grade = gradeInput.value;
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    }

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        getStudents();
        fNameInput.value = '';
        lNameInput.value = '';
        fNumberInput.value = '';
        gradeInput.value = '';
      })
      .catch((err) => {
        console.error(err);
      })
  }

}

attachEvents();