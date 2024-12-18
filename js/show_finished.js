// Получаем все карточки мероприятий 
const eventCards = document.querySelectorAll('.event'); 
    
// Получаем сегодняшнюю дату 
const today = new Date(); 

eventCards.forEach(eventCard => {
    const isFinishedTag = eventCard.querySelector('.finish-log'); 
    
    // Получаем дату мероприятия из атрибутов карточки 
    const eventDate = new Date(eventCard.getAttribute('data-date').split('.').reverse().join('-')); // Преобразуем строку даты в Date 
    console.log(isFinishedTag.classList);
    // Сравниваем дату мероприятия с сегодняшней 
    if (eventDate < today) { 
    
        isFinishedTag.classList.add('is-finished');
    } 
    else {
        isFinishedTag.classList.add('is-will'); 
        isFinishedTag.innerHTML = "Мероприятие ещё не началось! Не забудьте посетить!"
    }
    console.log(isFinishedTag.classList);
});

