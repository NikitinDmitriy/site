function orderForm(event) {
  if ((validateProduct() && validateEmail() && validateQuantity()) === true) {
      event.preventDefault();
      const product = document.getElementById("product").value;
      const email = document.getElementById("e-mail").value;
      const quantity = document.getElementById("quantity").value;

      let summaryHtml = `
          <strong>Продукт:</strong> ${product}<br>
          <strong>Почта:</strong> ${email}<br>
          <strong>Количество:</strong> ${quantity}
      `;
  }
}
// Функция для обработки формы заказа
function OrderForm() {
  // Получение значений полей формы
  var product = document.getElementById('product').value;
  var email = document.getElementById('e-mail').value;
  var quantity = document.getElementById('quantity').value;

  // Обновление содержимого блока "order-summary"
  document.getElementById('selected-product').innerText = 'Выбранный продукт: ' + product;
  document.getElementById('selected-email').innerText = 'E-mail: ' + email;
  document.getElementById('selected-quantity').innerText = 'Количество: ' + quantity;

  // Дополнительный код для отправки данных на сервер или других действий

  return false; // Чтобы предотвратить реальную отправку формы
}
function validateProduct() {
  var product = document.getElementById("product").value;
  var regex = /^[a-zA-Z\u0400-\u04FF\s\-]{2,30}$/;

  if (regex.test(product)) {
      document.getElementById("product").style.color = "green";
      document.getElementById("product").nextElementSibling.innerHTML = "";
      return true;
  } else {
      document.getElementById("product").style.color = "red";
      document.getElementById("product").nextElementSibling.innerHTML = "не допускается использование цифр в названии";
      return false;
  }
}

function validateEmail() {
  var email = document.getElementById("e-mail").value;
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (regex.test(email)) {
      document.getElementById("e-mail").style.color = "green";
      document.getElementById("e-mail").nextElementSibling.innerHTML = "";
      return true;
  } else {
      document.getElementById("e-mail").style.color = "red";
      document.getElementById("e-mail").nextElementSibling.innerHTML = "Неправильный email. Пожалуйста, введите корректный адрес электронной почты.";
      return false;
  }
}

function validateQuantity() {
  var quantity = document.getElementById("quantity").value;
  var regex = /^[1-9][0-9]*$/;
  
  if (regex.test(quantity) && quantity >= 1 && quantity <= 30) {
  document.getElementById("quantity").style.color = "green";
  document.getElementById("quantity").nextElementSibling.innerHTML = "";
  return true;
  } else if (quantity <= 1) {
  document.getElementById("quantity").style.color = "red";
  document.getElementById("quantity").nextElementSibling.innerHTML = "число не может быть меньше 1";
  return false;
  } else if (quantity > 30) {
  document.getElementById("quantity").style.color = "red";
  document.getElementById("quantity").nextElementSibling.innerHTML = "число должно быть меньше 30";
  return false;
  }
}
