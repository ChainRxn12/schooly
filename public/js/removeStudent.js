const removeStudent = async (event) => {
    event.preventDefault();
    const id = event.target.value.trim();
    console.log(id)
    const response = await fetch(`/api/students/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                        alert('Succesfully Removed Student Profile');
                        document.location.replace('/dashboard/principal/student/remove');
                    } else {
                        alert('Unable to Delete Student.');
                    }
};

document.querySelector(".roster-btn").addEventListener("click", removeStudent);