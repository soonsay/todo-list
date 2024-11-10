import { projects } from './projects';
import tasks from './tasks';


let commonFunctions = {

    logger: function(message) {
        console.log(message);
        function superLogger(message) {
            console.log(message)
        }
    },

    createArea: function(container, buttons, classList) {

        // Adds buttons.. maybe shouldn't be nested in createArea - tbd
        console.log(buttons);

        function addButtons(container, buttons, classList) {

            for (let button of buttons) {
                let text = button;
                button = document.createElement('div');
                button.classList.add(classList)
                button.innerText = text;
    
                if (classList == 'projectControl') {
                    let addButton = document.createElement('button');
                    addButton.innerText = ' + '
                    addButton.addEventListener('click', () => {createElement('project')});
                    button.appendChild(addButton);
                }
    
                container.appendChild(button);
            }
        };

        function showProjects() {
            for (let i = 0; i < projects.projectsList.length; i += 1) {
                const projectLink = document.createElement('a');
                const projectIconandTextDiv = document.createElement('div');
                const projectIcon = document.createElement('i');
                const projectText = document.createElement('p');
                const projectIconsDiv = document.createElement('div');
                const projectEditIcon = document.createElement('i');
                const projectDeleteIcon = document.createElement('i');

                projectIconandTextDiv.classList.add(
                    'project-icon-and-text-div',
                    'project',
                    'select'
                );
                projectIconandTextDiv.setAttribute('data-link-index', i);
                projectIconsDiv.classList.add(
                    'project-default-icons-div',
                    'project',
                    'select'
                );
            }

        }
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
                burgerButton.classList.add('burgerbutton');
                // Burger button should do something (reveal dropdown)
                burgerButton.appendChild(createDropdown('project'));
                burgerButton.addEventListener('click', function (e) {
                    for (let node of this.childNodes) {
                        for (let childNode of node.childNodes) {
                            if (childNode.classList) {
                                let classes = childNode.classList
                                if(classes.contains('dropdown-content')) {
                                    classes.toggle('show');

                                }
                            }
                        }
                

                        // if (node.classList.contains('dropdown')) {
                        //     console.log('is a dropdown!');
                        // }
                    }
                })

                newProject.appendChild(burgerButton);



            projectContainer.insertAdjacentElement('afterbegin', newProject);
        };

        function createElement(type) {

            let modalAdd = document.getElementById('modalAdd');
            let close = document.getElementById('modalClose')
            let nameField = document.getElementById('projNameEntry');

            if (type == 'project') {
                let modal = document.getElementById('projModal');


                modal.style.display = 'block';
                modalAdd.innerText = 'Add Project';
                close.onclick = function() {
                    modal.style.display = "none";
                    nameField.value = "";
                }


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

        function createDropdown(type) {
            let dropdown = document.createElement('div');
            let dropdownContent = document.createElement('div');
            dropdown.classList.add('dropdown');
            dropdownContent.classList.add('dropdown-content');

            if (type == 'project') {
                let options = ['delete', 'add task']
                for (let option of options) {
                    let item = document.createElement('button');
                    item.classList.add('dropbtn');
                    item.innerText = option;
                    dropdownContent.appendChild(item);
                    if (option =='delete') {
                        let project = item.innerText;
                        item.addEventListener('click', () => {deleteProject(project)})
                    }
                }
                dropdown.appendChild(dropdownContent);
                return dropdown;
            }
        }

        function deleteProject(project) {
            
        }
        addButtons(container, buttons, classList);
    },


}

export { commonFunctions }