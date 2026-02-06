console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
    return (
        (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
        100
    );
}

document.addEventListener("scroll", () => {
    progressBar.style.width = `${calculateScrollPercentage()}%`;
});
