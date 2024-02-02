(()=>{
    function aboutContainerChange() {
        var scrollLimit = 180;
        var aboutContainer = document.getElementById('aboutme');

        if (window.scrollY >= scrollLimit) {
            aboutContainer.style.transition = 'transform 1s ease-out 0s';
            aboutContainer.style.transform = 'translateX(0px)';
        } else {
            aboutContainer.style.transition = 'transform 1s ease-out 0s';
            aboutContainer.style.transform = 'translateX(-200vh)';
        }

    }

    window.addEventListener('scroll', aboutContainerChange);
})();