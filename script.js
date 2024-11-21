function showDetails(destination) {
    alert(`Ви вибрали подорож до ${destination}!`);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякуємо за ваше повідомлення! Ми зв’яжемося з вами найближчим часом.');
    this.reset();
});
