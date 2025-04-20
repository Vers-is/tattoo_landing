 // ==== GREY-TO-GREEN_ARROW: makes arrow on _services_
 // ==== section green if the mouse on the service row.
 // ==== and also again gray if mause was waped away
document.addEventListener("DOMContentLoaded", () => {
const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        const arrow = row.querySelector('.arrow_icon');
        if (!arrow) return; 

        const grey = arrow.dataset.grey;
        const green = arrow.dataset.green;

        row.addEventListener('mouseenter', () => {
            arrow.src = green;
        });

        row.addEventListener('mouseleave', () => {
            arrow.src = grey;
        });
    });
});


// ==== SHOW-MORE_BUTTON: show some more questions on click
// ==== and also shows less when button clicked second time
const showMoreBtn = document.querySelector('.show_more_cover');
const extraQuestions = document.querySelectorAll('.question_cover.extra');
let isExpanded = false;

showMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    extraQuestions.forEach(q => {
      q.style.display = isExpanded ? 'flex' : 'none';
    });

    const label = showMoreBtn.querySelector('.show_more');
    const icon = showMoreBtn.querySelector('.down_icon');

    label.textContent = isExpanded ? 'show less' : 'show more';
    icon.style.transform = isExpanded ? 'rotate(90deg)' : 'rotate(0deg)';
});
  extraQuestions.forEach(q => {
    q.style.display = 'none';
  });


// ==== PHONE_NUMBER_VALIDATION: on _contact_ section.
  const phoneInput = document.getElementById("phoneInput");
  const sendButton = document.getElementById("sendButton");
  const phoneError = document.getElementById("phoneError");

  sendButton.addEventListener("click", function (e) {
    e.preventDefault();

    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^\+?\d{10,15}$/;

    if (phoneRegex.test(phoneValue)) {
      phoneError.textContent = "";
      phoneError.classList.remove("visible");
    } else {
      phoneError.textContent = "Please enter a valid phone number.";
      phoneError.classList.add("visible");
    }
  });