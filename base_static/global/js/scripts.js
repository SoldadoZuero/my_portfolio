(()=>{
    function aboutContainerChange() {
        var scrollLimit = 180;
        var aboutContainer = document.getElementById('aboutme');

        if (window.scrollY >= scrollLimit) {
            aboutContainer.classList.remove('about_panel_hidden');
        } else {
            aboutContainer.classList.add('about_panel_hidden');
        }

    }

    window.addEventListener('scroll', aboutContainerChange);
})();

(document.addEventListener('DOMContentLoaded', ()=> {
    var projectTitle = document.getElementById('project_title');
    var projectPanel = document.getElementById('project_panel');
    var projectMenu = document.getElementById('project_menu');
    var aboutButton = document.getElementById('aboutme_button')
    const menuOpen = document.querySelector('.project_panel_open')
    const menuClosed = document.querySelector('.project_panel_close')

    const projectTitleShowClass = 'project_title_open';
    const projectPanelShowClass = 'project_panel_open';
    const projectPanelHiddenClass = 'project_panel_close';
    const projectMenuShowClass = 'project_menu_open';
    const buttonProjectMoveClass = 'button_project_menu_open';
    const buttonAboutHiddenClass = 'button_about_menu_open'

    const toggleClass = (element, className) => {
        element.style.transition = 'all 1s cubic-bezier(0.65, 0.05, 0.36, 1)';
        element.classList.toggle(className);
    };

    function menuOpening () {
        if (menuOpen) {
            toggleClass(projectTitle, projectTitleShowClass);
            toggleClass(projectPanel, projectPanelHiddenClass);
            toggleClass(aboutButton, buttonAboutHiddenClass);
            toggleClass(projectPanel, projectPanelShowClass);
            toggleClass(projectMenu, projectMenuShowClass);
        } else {
            toggleClass(projectMenu, projectMenuShowClass);
            toggleClass(projectPanel, projectPanelHiddenClass);
            toggleClass(aboutButton, buttonAboutHiddenClass);
            toggleClass(projectPanel, projectPanelShowClass);
            toggleClass(projectTitle, projectTitleShowClass);
        }
    };

    const openMenu = () => {
        toggleClass(projectTitle, projectTitleShowClass);
        toggleClass(projectPanel, projectPanelHiddenClass);
        toggleClass(aboutButton, buttonAboutHiddenClass);
        toggleClass(projectPanel, projectPanelShowClass);
        toggleClass(projectMenu, projectMenuShowClass);
    };

    const closeMenu = () => {
        toggleClass(projectMenu, projectMenuShowClass);
        toggleClass(projectPanel, projectPanelHiddenClass);
        toggleClass(aboutButton, buttonAboutHiddenClass);
        toggleClass(projectPanel, projectPanelShowClass);
        toggleClass(projectTitle, projectTitleShowClass);
    };

    aboutButton.removeEventListener('click', menuOpening);
    aboutButton.addEventListener('click', menuOpening);
}))