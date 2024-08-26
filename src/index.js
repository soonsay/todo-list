import './style.css';
import { commonFunctions } from './functionality.js';

import { home } from './home.js';
import { projects } from './projects.js';


const body = document.body;

const leftColumn = document.getElementById('leftColumn')

    const homeArea = document.createElement('div');
        homeArea.setAttribute('id', 'homeArea');
        homeArea.innerText = 'Mile-A-Minute'

        commonFunctions.addButtons(homeArea, home.homeButtons, 'homeButton');


    const projectArea = document.createElement('div');
        projectArea.setAttribute('id', 'projectArea');

        const projectContainer = document.createElement('div');

        projectContainer.setAttribute('id', 'projectContainer');

        const projectControl = document.createElement('div');
        projectControl.setAttribute('id', 'projectControl');
        commonFunctions.addButtons(projectControl, projects.projectControls, 'projectControl')

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