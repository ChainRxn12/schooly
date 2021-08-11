// const rosterBtn = document.getElementById('roster-btn');
// let rosterArray = [
//     'Billy Dorman',
//     'Jafet Manauth',
//     'Zion Flores',
//     'Ricardo Salazar'
// ];
//  const rosterEl = document.getElementById('roster-el');

// rosterBtn.addEventListener('click', function() {
//    renderRoster();
// })

// const renderRoster = () => {
//     let rosterList = "";
//     for(let i = 0; i< rosterArray.length; i++) {
//         rosterList += `
//         <li>
//             <a href='#'>
//                 ${rosterArray[i]}
//             </a>
//         </li>
//         `;
//         console.log(rosterList)
//     }
//     rosterEl.innerHTML = rosterList
// }
// let studentData = [];

// async function newFormHandler(event) {
//     event.preventDefault();

//     var studentRoster = await fetch (`/api/students`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(studentRoster),
//     })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         studentData = data;
//         console.log(data[0].first_name);
//         console.log(data);
//     })
// }

// document
// .querySelector('.roster-btn')
// .addEventListener('click', newFormHandler)

const renderRoster = async (event) => {
    event.preventDefault();
    const id = document.querySelector('#{{student.id}}').value.trim();
    
    const response = await fetch(`/api/students/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                        document.location.replace('/dashboard/teacher/roster');
                    } else {
                        alert('Unable to Register Teacher.');
                    };
};