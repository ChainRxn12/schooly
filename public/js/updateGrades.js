const math = document.querySelector('#math');
const history = document.querySelector('#history');
const science = document.querySelector('#science');
const english = document.querySelector('#english');
const id = document.querySelector('#id-student').innerHTML;

const updateMath = async (event) =>{
    event.preventDefault();
     const input = prompt('Update Grade:');
    

   const response = await fetch(`/api/grades/math/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        "new_grade": `${input}`,
    }),
    headers: {
        'Content-Type': 'application/json',
    }
    });
    if(response.ok){
        alert('Succesfully Updated Math Grade to: ' + input)
        document.location.replace(`/dashboard/teacher/roster/${id}`);
    } else if (!response.ok) {
        alert('Error Updating Grade')
    }

};

const updateHistory = async (event) =>{
    event.preventDefault();
     const input = prompt('Update Grade:');
    

   const response = await fetch(`/api/grades/history/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        "new_grade": `${input}`,
    }),
    headers: {
        'Content-Type': 'application/json',
    }
    });
    if(response.ok){
        alert('Succesfully Updated History Grade to: ' + input)
        document.location.replace(`/dashboard/teacher/roster/${id}`);
    } else if (!response.ok) {
        alert('Error Updating Grade')
    }

};

const updateScience = async (event) =>{
    event.preventDefault();
     const input = prompt('Update Grade:');
    

   const response = await fetch(`/api/grades/science/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        "new_grade": `${input}`,
    }),
    headers: {
        'Content-Type': 'application/json',
    }
    });
    if(response.ok){
        alert('Succesfully Updated Science Grade to: ' + input)
        document.location.replace(`/dashboard/teacher/roster/${id}`);
    } else if (!response.ok) {
        alert('Error Updating Grade')
    }

};

const updateEnglish = async (event) =>{
    event.preventDefault();
     const input = prompt('Update Grade:');
    

   const response = await fetch(`/api/grades/english/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        "new_grade": `${input}`,
    }),
    headers: {
        'Content-Type': 'application/json',
    }
    });
    if(response.ok){
        alert('Succesfully Updated English Grade to: ' + input)
        document.location.replace(`/dashboard/teacher/roster/${id}`);
    } else if (!response.ok) {
        alert('Error Updating Grade')
    }

};

document.getElementById("math").addEventListener("click", updateMath);
document.getElementById("history").addEventListener("click", updateHistory);
document.getElementById("science").addEventListener("click", updateScience);
document.getElementById("english").addEventListener("click", updateEnglish);