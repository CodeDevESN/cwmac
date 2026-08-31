const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark')
    })
})
const counters = document.querySelectorAll('.counter');
let speed = 200;
const runCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    })
};
let statsSection = document.querySelector('stats-bar');
let animated = false;
window.addEventListener('scroll', () => {
    if (!statsSection) return;
    let sectionPosition =
        statsSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition && !animated) {
        runCounters();
        animated = true;
    }
});
const proposalForm =
    document.getElementById('proposalForm');
const formFeedback =
    document.getElementById('formFeedback');
if (proposalForm) {
    proposalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name =
            document.getElementById('name').value.trim();
        const email =
            document.getElementById('email').value.trim();
        const message =
            document.getElementById('message').value.trim();
        if (name && email && message) {
            formFeedback.style.color = 'var(--accent)';
            formFeedback.innerText = Thank you, ${ name } !Your proposal / inquiry has been successfully prepared for submission to info@cwmac.or.tz.;
            proposalForm.reset();
        } else {
            formFeedback.style.color = '#d90429';
            formFeedback.innerText = 'Please fill in all required fields before submitting';
        }
    });
}