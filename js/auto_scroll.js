window.onload = function() {  
    const scrollElement = document.getElementById('auto-scroll');   
    const container = document.getElementById('carousel-container');   
      
    let scrollSpeed = 0.3; // Скорость прокрутки   
    let scrollPosition = 0; // Начальная позиция элемента   
    let animationFrameId;  
    let isAnimating = false; // Флаг для проверки, идет ли анимация 

    function animate() {   
        isAnimating = true; // Устанавливаем флаг анимации 
        scrollPosition -= scrollSpeed;  

        // Получаем ширину контейнера и ширину карточек
        const containerWidth = container.clientWidth;
        const cardWidth = scrollElement.children[0].clientWidth + 20; // 20 - это gap между карточками

        // Проверяем, вышла ли первая карточка за пределы контейнера
        const firstCard = scrollElement.children[0];
        if (firstCard && (scrollPosition + firstCard.offsetLeft + cardWidth < 0)) {
            // Переместите первый элемент в конец
            scrollElement.appendChild(firstCard);
            // Обновляем позицию
            scrollPosition += cardWidth; 
        }

        // Обновляем позицию элемента   
        scrollElement.style.transform = `translateX(${scrollPosition}px)`;  
  
        // Запускаем анимацию снова   
        animationFrameId = requestAnimationFrame(animate);   
    }   
  
    // Запускаем анимацию   
    animate();  
  
    // Останавливаем анимацию при наведении на элемент   
    scrollElement.addEventListener('mouseenter', function() {  
        if (isAnimating) { // Проверяем, идет ли анимация 
            cancelAnimationFrame(animationFrameId);  
            isAnimating = false; // Сбрасываем флаг 
        } 
    });  
  
    // Возобновляем анимацию при выходе курсора   
    scrollElement.addEventListener('mouseleave', function() {  
        if (!isAnimating) { // Проверяем, не идет ли анимация 
            animate();  
        } 
    });  
};  
