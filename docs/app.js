
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

  // по умолчанию скрываем дополнительные вопросы
  extraQuestions.forEach(q => {
    q.style.display = 'none';
  });

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
      // Здесь можешь продолжить обработку, отправку данных и т.п.
    } else {
      phoneError.textContent = "Please enter a valid phone number.";
      phoneError.classList.add("visible");
    }
  });