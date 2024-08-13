let commonFunctions = {
    addButtons: function(container, buttons, classList) {
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
            container.appendChild(button);
        }
    }
}

export { commonFunctions }