const form = document.querySelector("form");
const emailOrUser = form.querySelector('input[type="text"]');
const password = form.querySelector('input[type="password"]');
const submitBtn = form.querySelector('button[type="submit"]');
const registerBtn = form.querySelector('button[type="button"]');

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Отменить стандартное поведение формы

  const emailOrUserValue = emailOrUser.value.trim();
  const passwordValue = password.value.trim();

  if (!emailOrUserValue || !passwordValue) {
    alert("Необходимо заполнить все поля");
    return;
  }

  // Отправка введенных данных на сервер для проверки

});

registerBtn.addEventListener("click", function () {
  // Редирект на страницу регистрации
});