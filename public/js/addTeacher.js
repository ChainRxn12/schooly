const createTeacher = async (event) => {
    event.preventDefault();
    const firstname = document.querySelector('#first_name').value.trim();
    const lastname = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (firstname && lastname && email) {
        const response = await fetch('/api/teachers/', {
            method: 'POST',
            body: JSON.stringify({
                "first_name": firstname,
                "last_name": lastname,
                "email": email
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            alert('Succesfully Added Teacher Profile');
            document.location.replace('/dashboard/principal/teacher/add');
        } else {
            alert('Unable to Register Teacher.');
        }
    } else {
        alert('Please fill out all fields!');
    }
};

document.getElementById("submit-btn").addEventListener("click", createTeacher)