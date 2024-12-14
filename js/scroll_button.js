// Когда пользователь прокручивает страницу, показать кнопку
window.onscroll = function () {
    scrollFunction();
};
  
function scrollFunction() {
    const myBtn = document.getElementById("myBtn");
    if (!myBtn) return; 
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
      myBtn.classList.add('show'); // Добавляем класс для плавного появления кнопки
    } else {
      myBtn.classList.remove('show'); // Удаляем класс для плавного исчезновения кнопки
    }
}
  
// Когда пользователь нажимает на кнопку, прокрутить страницу наверх
function topFunction() {
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTop.scrollTo({top: 0, behavior: 'smooth'});
}