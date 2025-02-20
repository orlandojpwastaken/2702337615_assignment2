document.addEventListener('scroll', () => {
    const h1 = document.querySelector('h1');
    const section = document.querySelector('.title');
    const sectionRect = section.getBoundingClientRect();

    // Calculate the scroll ratio within the section (0 at top, 1 at bottom)
    const scrollRatio = Math.max(0, Math.min(1, 1 - (sectionRect.top / window.innerHeight)));

    // Apply opacity and translateY based on the scroll ratio
    h1.style.opacity = 1 - scrollRatio;
    h1.style.transform = `translateY(${scrollRatio * -30}px)`;
});
