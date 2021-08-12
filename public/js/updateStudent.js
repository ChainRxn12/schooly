const updateStudent = async (event) => {
    event.preventDefault();
    const firstname = document.querySelector('#first_name').value.trim();
    const lastname = document.querySelector('#last_name').value.trim();
    const id = event.target.value.trim();
    const teacher = document.querySelector('#teacher-id-name').value.trim();

    console.log(teacher)

    
    if (firstname) {
        const response = await fetch(`/api/students/fname/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "new_name": `${firstname}`,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok && !lastname && !teacherId) {
            document.location.replace(`/dashboard/principal/student/update`);

        } else if (!response.ok) {
            alert('Error Updating First Name')
        }
    } 
    if (lastname) {
        const response = await fetch(`/api/students/lname/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "new_name": `${lastname}`,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok && !teacher) {
            document.location.replace(`/dashboard/principal/student/update`);
        } else if (!response.ok) {
            alert('Error Updating Last Name');
        }
    }
    if (teacher) {
        const response = await fetch(`/api/students/teacher/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "new_teacher": `${teacher}`,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            document.location.replace(`/dashboard/principal/student/update`);
        } else if (!response.ok) {
            alert('Error Updating email');
        }
    } else if (!firstname && !lastname && !teacher){
        alert('Please Fill out Fields!')
    }
};

document.getElementById("submit-btn").addEventListener("click", updateStudent)