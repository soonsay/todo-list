const projects = (() => {

  const projectsList = [];
  const projectButtons = ['test'];
  const projectControls = ['New Project']

    class Project {
        constructor(icon, title) {
            this.icon = icon;
            this.title = title;
            this.tasks = [];
        }
    }
    
    function addProject(icon, title) {
        const project = new Project(icon, title);
        projectsList.push(project);
        //dom.showProjects();
    }
    
    function editProject(icon, title, index, link) {
        projectsList[index].icon = icon;
        projectsList[index].title = title;
        // dom.showProjects();
        // dom.selectLink(link, index, 'edit');
    }

    function deleteProject(index) {
        if (index > -1) {
            projectsList.splice(index, 1);
        }
        // dom.showProjects();
    }

    return {
        projectsList,
        projectButtons,
        projectControls,
        addProject,
        editProject,
        deleteProject
    };
})()





export { projects }