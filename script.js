// Функции для работы модальных окон
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto'; // Возвращаем прокрутку
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Функция для добавления комментариев на форуме
function addComment() {
    const commentText = document.getElementById('commentText').value;
    if (!commentText.trim()) {
        alert('Пожалуйста, введите текст комментария');
        return;
    }

    const commentsList = document.getElementById('commentsList');
    
    // Создаем новый комментарий
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    
    // Получаем текущую дату
    const now = new Date();
    const dateString = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
    
    // Заполняем содержимое комментария
    newComment.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">Аноним</span>
            <span class="comment-date">${dateString}</span>
        </div>
        <div class="comment-content">
            ${commentText}
        </div>
    `;
    
    // Добавляем комментарий в начало списка
    commentsList.insertBefore(newComment, commentsList.firstChild);
    
    // Очищаем поле ввода
    document.getElementById('commentText').value = '';
    
    // Прокручиваем к новому комментарию
    newComment.scrollIntoView({ behavior: 'smooth' });
}

// Закрытие модального окна при нажатии ESC
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
        const modals = document.getElementsByClassName('modal');
        for (let modal of modals) {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    }
};