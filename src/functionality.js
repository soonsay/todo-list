let commonFunctions = {

    addButtons: function(container, buttons, classList) {

        function addProject(projectName) {
            let newProject = document.createElement('div');
            let projectContainer = document.getElementById('projectContainer');
            newProject.innerText = projectName;
            newProject.classList.add('projectButton');

                let burgerButton = document.createElement('button');
                burgerButton.innerText = '. . .'
                newProject.appendChild(burgerButton);

                let dragButton = document.createElement('button');
                dragButton.innerText = ' = '
                newProject.appendChild(dragButton);

            projectContainer.insertAdjacentElement('afterbegin', newProject);
        }

        for (let button of buttons) {
            let text = button;
            button = document.createElement('div');
            button.classList.add(classList)
            button.innerText = text;
            if (classList == 'projectButton') {
                let burgerButton = document.createElement('button');
                burgerButton.innerText = '. . .'
                button.appendChild(burgerButton);

                let dragButton = document.createElement('button');
                dragButton.innerText = ' = '
                button.appendChild(dragButton);
            }

            if (classList == 'projectControl') {
                let addButton = document.createElement('button');
                addButton.innerText = ' + '
                addButton.addEventListener('click', () => {addProject('testProject')})
                button.appendChild(addButton);
            }

            container.appendChild(button);
        }
    },


}

export { commonFunctions }