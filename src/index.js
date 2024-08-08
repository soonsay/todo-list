import './style.css';


const body = document.body;

const leftColumn = document.getElementById('leftColumn')

    const homeArea = document.createElement('div');
        homeArea.setAttribute('id', 'homeArea');
        homeArea.innerText = 'homeArea'
    const projectArea = document.createElement('div');
        projectArea.setAttribute('id', 'projectArea');
        projectArea.innerText = 'projectArea'

    leftColumn.appendChild(homeArea)
    leftColumn.appendChild(projectArea)


const rightColumn = document.getElementById('rightColumn')
    const urgentTasks = document.createElement('div');
        urgentTasks.setAttribute('id', 'urgentTasks');
        urgentTasks.innerText = 'urgentTasks'

    const myDay = document.createElement('div');
        myDay.setAttribute('id', 'myDay');
        myDay.innerText = 'myDay'

    
    rightColumn.appendChild(urgentTasks)
    rightColumn.appendChild(myDay)


footer.innerText = 'Copyright © github.com/soonsay'

// Set grid style properties example

// gridContainer.style.setProperty('--grid-rows', rows); 
// gridContainer.style.setProperty('--grid-cols', cols);