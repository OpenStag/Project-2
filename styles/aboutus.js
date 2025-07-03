// Newsletter AJAX submission
const form = document.getElementById('newsletter-form');
const messageDiv = document.getElementById('newsletter-message');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        messageDiv.textContent = '';
        fetch('subscribe.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'email=' + encodeURIComponent(email)
        })
        .then(res => res.text())
        .then(data => {
            messageDiv.textContent = data;
            form.reset();
        })
        .catch(() => {
            messageDiv.textContent = 'Something went wrong. Please try again.';
        });
    });
}

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
} 