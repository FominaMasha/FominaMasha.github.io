if (window.Telegram) {
  let tg = window.Telegram.WebApp;

  tg.expand();

  tg.MainButton.textColor = "#FFFFFF";
  tg.MainButton.color = "#7C5BFF";

  let userName = document.getElementById("userName");

  userName.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
}

$(document).ready(function () {
  var acc = document.getElementsByClassName("accordion-item__header");

  for (var i = 0; i < acc.length; i++) {
    // Добавляем обработчик события click
    acc[i].addEventListener("click", function () {
      // При клике на элемент меняем класс "active" для родителя элемента
      this.parentNode.classList.toggle("active");
    });
  }
});
