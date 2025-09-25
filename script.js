document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Fade-In on Scroll Animation ---
    
    // Select all sections that have the 'hidden' class
    const sections = document.querySelectorAll('.hidden');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the section is intersecting the viewport (i.e., visible)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
            }
        });
    }, {
        // Options for the observer
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // trigger when 10% of the element is visible
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

});