const removeTeacher = async (event) => {
    event.preventDefault();
    const id = document.querySelector('#{{teacher.id}}').value.trim();
    
    const response = await fetch(`/api/teachers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                        alert('Succesfully Removed Teacher Profile');
                        document.location.replace('/dashboard/principal/teacher/add');
                    } else {
                        alert('Unable to Register Teacher.');
                    }

    // if (first_name && last_name && email) {
    //     const response = await fetch('/api/teachers/', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             "first_name": firstname,
    //             "last_name": lastname,
    //             "email": email
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });

    //     if (response.ok) {
    //         alert('Succesfully Added Teacher Profile');
    //         document.location.replace('/dashboard/principal/teacher/add');
    //     } else {
    //         alert('Unable to Register Teacher.');
    //     }
    // }
};

document.getElementById("teacher-btn").addEventListener("click", removeTeacher);