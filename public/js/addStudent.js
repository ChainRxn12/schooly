const createStudent = async (event) => {
    event.preventDefault();
    const firstname = document.querySelector('#first_name').value.trim();
    const lastname = document.querySelector('#last_name').value.trim();
    const teacher = document.querySelector('#teacher-id').value.trim();

    if (firstname && lastname && teacher) {
        const response = await fetch('/api/students/', {
            method: 'POST',
            body: JSON.stringify({
                "first_name": firstname,
                "last_name": lastname,
                "teacher_id": teacher
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            alert('Succesfully Added Student');
            document.location.replace('/dashboard/principal/Student/add');
        } else {
            alert('Unable to Register Student.');
        }
    } else {
        alert('Please fill out all fields!');
    }
};

document.getElementById("submit-btn").addEventListener("click", createStudent)