/* Новые элементы должны добавляться в список по нажатию на Enter */
/* Пустые элементы не должны добавляться */

const sendInput = document.getElementById('input');
const messagesContainer = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) {
    const messageText = sendInput.value;
    const newMessage = document.createElement('div');
    newMessage.classList.add('items');
    newMessage.textContent = messageText;


    if (event.code === 'Enter' && messageText != '') {
        messagesContainer.append(newMessage);
    }
});

/* Если кликнуть на элемент списка, он зачеркивается */
/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

messagesContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
        const parentDiv = event.target.closest("div");
        parentDiv.classList.toggle("done");
    }
});

/* Очищать input после добавления нового элемента в список sendInput.value = '';*/