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