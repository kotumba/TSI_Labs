 // Получаем все карточки мероприятий 
 const eventCards = document.querySelectorAll('.event-card'); 
    
 // Получаем сегодняшнюю дату 
 const today = new Date(); 
 
 eventCards.forEach(eventCard => {
     // Получаем элемент кнопки "Записаться" внутри текущей карточки 
     const registerButton = eventCard.querySelector('.btn-primary'); 
     
     // Получаем дату мероприятия из атрибутов карточки 
     const eventDate = new Date(eventCard.getAttribute('data-date').split('.').reverse().join('-')); // Преобразуем строку даты в Date 
     
     // Сравниваем дату мероприятия с сегодняшней 
     if (eventDate < today) { 
         // Если мероприятие прошло, делаем кнопку неактивной для нажатия
         registerButton.addEventListener("click", function(event) {
            event.preventDefault(); 
          });
        registerButton.innerHTML = "Запись завершена";
        registerButton.style.opacity = '0.5'; // Уменьшаем непрозрачность кнопки (тусклый стиль) 
        registerButton.title = 'Это мероприятие уже прошло! Вы не можете записаться на него.'; // Подсказка при наведении 
        registerButton.classList.add('no-hover');
         
     } 
 });

