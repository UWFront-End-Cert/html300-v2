
// Simple form submission response/clear
const formEl = document.getElementById('contact-form');

formEl.addEventListener('submit', function(e){
    alert('Thank you for your request. An agent will reach out shortly.');
    formEl.reset();
})

