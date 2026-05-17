// ===== Navigation Handler =====
function navigate(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Add active class to clicked nav link
    event.target.classList.add('active');
}

// ===== Contact Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!validateForm(formData)) {
                return;
            }

            // Show success message
            showSuccessMessage();

            // Reset form
            contactForm.reset();

            // Log form data (in a real application, this would be sent to a server)
            console.log('Form submitted with data:', formData);
        });
    }
});

// ===== Form Validation =====
function validateForm(formData) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
        showErrorMessage('Lütfen adınızı girin');
        return false;
    }

    if (!formData.email.trim()) {
        showErrorMessage('Lütfen email adresinizi girin');
        return false;
    }

    if (!emailRegex.test(formData.email)) {
        showErrorMessage('Geçerli bir email adresi girin');
        return false;
    }

    if (!formData.subject) {
        showErrorMessage('Lütfen bir konu seçin');
        return false;
    }

    if (!formData.message.trim()) {
        showErrorMessage('Lütfen mesajınızı yazın');
        return false;
    }

    return true;
}

// ===== Message Display =====
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = '✓ Mesajınız başarıyla gönderildi! En kısa zamanda size dönüş yapacağız.';
    
    form.parentNode.insertBefore(messageDiv, form);

    // Remove message after 5 seconds
    setTimeout(function() {
        messageDiv.remove();
    }, 5000);
}

function showErrorMessage(message) {
    const form = document.getElementById('contactForm');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'error-message';
    messageDiv.textContent = '✗ ' + message;
    
    form.parentNode.insertBefore(messageDiv, form);

    // Remove message after 5 seconds
    setTimeout(function() {
        messageDiv.remove();
    }, 5000);
}

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
        }
    });
});

// ===== Set Active Nav Link on Page Load =====
window.addEventListener('load', function() {
    document.querySelector('.nav-link').classList.add('active');
});
