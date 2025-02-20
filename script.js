window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > window.innerHeight) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingValueDisplay = document.getElementById('ratingValue');
    let currentRating = 0;

    stars.forEach(star => {
        // On click, set the current rating
        star.addEventListener('click', () => {
            currentRating = parseInt(star.getAttribute('data-rating'));
            updateStars(currentRating);
            ratingValueDisplay.textContent = `You rated: ${currentRating} star(s)`;
        });

        // On hover, temporarily show the hovered rating
        star.addEventListener('mouseover', () => {
            const hoverRating = parseInt(star.getAttribute('data-rating'));
            updateStars(hoverRating);
        });

        // On mouse out, revert to the saved rating
        star.addEventListener('mouseout', () => {
            updateStars(currentRating);
        });
    });

    // Function to update the star display
    function updateStars(rating) {
        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            star.classList.toggle('filled', starRating <= rating);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const aboutSection = document.getElementById("about");

    window.addEventListener("scroll", () => {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            footer.classList.add("show-footer");
        } else {
            footer.classList.remove("show-footer");
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.progress.html').style.width = '70%';
    document.querySelector('.progress.java').style.width = '70%';
    document.querySelector('.progress.python').style.width = '85%';
});
