

const removeTeacher = async (event) => {
    event.preventDefault();
    const id = event.target.value.trim();
    console.log(id)
    const response = await fetch(`/api/teachers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                        alert('Succesfully Removed Teacher Profile');
                        document.location.replace('/dashboard/principal/teacher/remove');
                    } else {
                        alert('Unable to Delete Teacher.');
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

document.querySelector(".roster-btn").addEventListener("click", removeTeacher);