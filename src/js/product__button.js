// Функция для активации кнопки
function activateButton(button) {
  // Убираем класс "active" у всех кнопок
  document
    .querySelectorAll('.button')
    .forEach(btn => btn.classList.remove('active'));

  // Добавляем класс "active" к нажатой кнопке
  button.classList.add('active');
}
