/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.getElementById('input');
const messagesContainer = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) {
    const messageText = sendInput.value;
    const newMessage = document.createElement('div');
    newMessage.classList.add('items');
    newMessage.textContent = messageText;


    if (event.code === 'Enter' && messageText != '') {
        messagesContainer.append(newMessage);
    };

});

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список sendInput.value = '';*/