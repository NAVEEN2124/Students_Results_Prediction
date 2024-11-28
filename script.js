document.querySelectorAll('.dropdown a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const url = e.target.getAttribute('href');
    console.log(`Navigating to ${url}`); // Log navigation for testing
    window.location.href = url; // Redirect to the page
  });
});
