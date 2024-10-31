document.getElementById('bookingButton').addEventListener('click', function() {
    const name = prompt("Введите ваше имя:");
    const phone = prompt("Введите ваш номер телефона:");
    const tariff = prompt("Выберите тариф (Базовый, Премиум, VIP):");

    if (name && phone && (tariff === 'Базовый' || tariff === 'Премиум' || tariff === 'VIP')) {
        alert(`Вы успешно забронировали место!\nИмя: ${name}\nТелефон: ${phone}\nТариф: ${tariff}`);
    } else {
        alert("Пожалуйста, заполните все поля корректно.");
    }
});

document.getElementById('contactButton').addEventListener('click', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    alert(`Сообщение отправлено!\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`);
    document.getElementById('feedbackForm').reset();
});
