import './style.css';
import { commonFunctions } from './functionality.js';

import { home } from './home.js';
import { projects } from './projects.js';


const body = document.body;


// project modal
const projModal = document.createElement('div');
projModal.setAttribute('id', 'projModal');

const projModalContent = document.createElement('div');
projModalContent.setAttribute('id', 'projModalContent');

const projectNameEntry = document.createElement('input');
projectNameEntry.setAttribute('id', 'projNameEntry');

const closeButton = document.createElement('span');
closeButton.setAttribute('id', 'modalClose');
closeButton.innerText = 'x'

const addButton = document.createElement('button');
addButton.setAttribute('id', 'modalAdd');

projModalContent.appendChild(projectNameEntry);
projModalContent.appendChild(addButton);
projModalContent.appendChild(closeButton);

projModal.appendChild(projModalContent);

body.appendChild(projModal);


// task modal



// dropdown handling
document.addEventListener('click', (e) => {
    let dropdowns = document.querySelectorAll('.show');
    for (let elem of dropdowns) {
            if (e.target != elem && e.target != elem.parentElement.parentElement) {
                elem.classList.remove('show');
            }
        }

    }

)
//

const leftColumn = document.getElementById('leftColumn')

    const homeArea = document.createElement('div');
        homeArea.setAttribute('id', 'homeArea');
        homeArea.innerText = 'Mile-A-Minute'

        commonFunctions.createArea(homeArea, home.homeButtons, 'homeButton');


    const projectArea = document.createElement('div');
        projectArea.setAttribute('id', 'projectArea');

        const projectContainer = document.createElement('div');

        projectContainer.setAttribute('id', 'projectContainer');

        const projectControl = document.createElement('div');
        projectControl.setAttribute('id', 'projectControl');
        commonFunctions.createArea(projectControl, projects.projectControls, 'projectControl')

        projectArea.appendChild(projectContainer);
        projectArea.appendChild(projectControl);


    leftColumn.appendChild(homeArea)
    leftColumn.appendChild(projectArea)









const rightColumn = document.getElementById('rightColumn')
    const timeLine = document.createElement('div');
        timeLine.setAttribute('id', 'timeLine');

    const myDay = document.createElement('div');
        myDay.setAttribute('id', 'myDay');

    
    rightColumn.appendChild(timeLine)
    rightColumn.appendChild(myDay)


footer.innerText = 'Copyright © github.com/soonsay'

// Set grid style properties example

// gridContainer.style.setProperty('--grid-rows', rows); 
// gridContainer.style.setProperty('--grid-cols', cols);