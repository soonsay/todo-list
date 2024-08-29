let commonFunctions = {

    addButtons: function(container, buttons, classList) {

        function addProject(projectName) {
            let newProject = document.createElement('div');

            let projectContainer = document.getElementById('projectContainer');
            newProject.classList.add('projectButton');

                let dragButton = document.createElement('button');
                dragButton.innerText = ' = '
                newProject.appendChild(dragButton);

                let textNode = document.createTextNode(projectName);
                newProject.appendChild(textNode);

                let burgerButton = document.createElement('button');
                burgerButton.innerText = '. . .'
                newProject.appendChild(burgerButton);



            projectContainer.insertAdjacentElement('afterbegin', newProject);
        };

        function createElement(type) {

            let modalAdd = document.getElementById('modalAdd');
            let close = document.getElementById('modalClose')

            if (type == 'project') {
                let modal = document.getElementById('projModal');


                modal.style.display = 'block';
                modalAdd.innerText = 'Add Project';
                close.onclick = function() {
                    modal.style.display = "none";
                }

                let nameField = document.getElementById('projNameEntry');
                nameField.maxLength = 15;
                modalAdd.onclick = function() {

                    let projectName = nameField.value;
                    
                    if (projectName != '') {
                        addProject(projectName);
                        nameField.value = ''
                        modal.style.display = "none";
                    }

                }
            }
            if (type == 'task');
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
                addButton.addEventListener('click', () => {createElement('project')});
                button.appendChild(addButton);
            }

            container.appendChild(button);
        }
    },


}

export { commonFunctions }