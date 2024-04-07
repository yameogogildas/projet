document.addEventListener('DOMContentLoaded', () => {
    const btnContact = document.getElementById('btnContact');
    const btnVideo = document.getElementById('btnVideo');
    const btnPhoto = document.getElementById('btnPhoto');
    const btnCv = document.getElementById('btnCv');
    const contactForm = document.getElementById('contactForm');
    const videoSection = document.getElementById('presentationVideo');
    const photoSection = document.getElementById('photoSection');
    const cvSection = document.getElementById('cvSection');
    const closeBtn = document.querySelector('.close');

    btnContact.addEventListener('click', () => toggleSection(contactForm, btnContact));
    btnVideo.addEventListener('click', () => toggleSection(videoSection, btnVideo));
    btnPhoto.addEventListener('click', () => toggleSection(photoSection, btnPhoto));
    btnCv.addEventListener('click', () => toggleSection(cvSection, btnCv));

    closeBtn.addEventListener('click', () => contactForm.style.display = 'none');

    function toggleSection(section, btn) {
        const sections = [contactForm, videoSection, photoSection, cvSection];
        const buttons = [btnContact, btnVideo, btnPhoto, btnCv];
        sections.forEach(s => {
            if (s === section) {
                s.classList.toggle('hidden');
            } else {
                s.classList.add('hidden');
            }
        });
        buttons.forEach(b => {
            if (b === btn) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
        if (section === contactForm) {
            section.style.display = 'block';
        }
    }
});
