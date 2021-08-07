const rosterBtn = document.getElementById('roster-btn');
let rosterArray = [
    'Billy Dorman',
    'Jafet Manauth',
    'Zion Flores',
    'Ricardo Salazar'
];
const rosterEl = document.getElementById('roster-el');

rosterBtn.addEventListener('click', function() {
   renderRoster();
})

const renderRoster = () => {
    let rosterList = "";
    for(let i = 0; i< rosterArray.length; i++) {
        rosterList += `
        <li>
            <a href='#'>
                ${rosterArray[i]}
            </a>
        </li>
        `;
        console.log(rosterList)
    }
    rosterEl.innerHTML = rosterList
}