const updateTeacher = async (event) => {
    event.preventDefault();
    const firstname = document.querySelector('#first_name').value.trim();
    const lastname = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const id = event.target.value.trim();

    
    if (firstname) {
        const response = await fetch(`/api/teachers/fname/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "new_name": `${firstname}`,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok && !lastname && !email && !password) {
            
            document.location.replace(`/dashboard/principal/teacher/update`);

        } else if (!response.ok) {
            alert('Error Updating First Name')
        }
    } 
    if (lastname) {
        const response = await fetch(`/api/teachers/lname/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "new_name": `${lastname}`,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok && !email && !password) {
            document.location.replace(`/dashboard/principal/teacher/update`);
        } else if (!response.ok) {
            alert('Error Updating Last Name');
        }
    }
    if (email) {
        const response = await fetch(`/api/teachers/email/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "new_email": `${email}`,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok  && !password) {
            document.location.replace(`/dashboard/principal/teacher/update`);
        } else if (!response.ok) {
            alert('Error Updating email');
        }
    }
    if (password) {
        const response = await fetch(`/api/teachers/password/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "new_password": `${password}`,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            document.location.replace(`/dashboard/principal/teacher/update`);
        } else  {
            alert('Error Updating Password');
        }
    } else if (!firstname && !lastname && !email && !password){
        alert('Please Fill out Fields!')
    }
};

document.getElementById("submit-btn").addEventListener("click", updateTeacher)