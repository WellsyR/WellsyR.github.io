document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');
  const messageContainer = document.querySelector('.message-container');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      messageContainer.innerHTML = `
        <p>"Con determinación y perseverancia, puedes alcanzar todas tus metas. Cree en ti mismo y mantén una actitud positiva. Recuerda que el camino puede ser desafiante, pero cada paso cuenta en tu camino hacia el éxito. ¡Tú tienes el poder de lograrlo!"</p>
      `;
    } else {
      messageContainer.innerHTML = '';
    }
  });
});
