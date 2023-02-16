const openChat = document.querySelector('.chat-widget__side-text')
const container = document.querySelector( '.chat-widget__messages-container' )
const input = document.getElementById('chat-widget__input')

openChat.onclick = () => {
    const parent = openChat.closest('.chat-widget')
    parent.classList.toggle('chat-widget_active')
}

function newMessage(text, authorClass) {
    // let now = new Date().toLocaleTimeString(); // 11:02:48
    let now = new Date().toLocaleTimeString().slice(0,-3);  // 11:02  
    messages.innerHTML += `
    <div class="${authorClass}">
        <div class="message__time">${now}</div>
        <div class="message__text">
        ${text}
        </div>
    </div>
    `;
    container.scrollTop = container.scrollHeight
}

const messages = document.querySelector( '.chat-widget__messages' );
newMessage('Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 'message')

input.addEventListener('keydown', (e) => {
    let idleTime = 0;
    if (e.key === 'Enter') {
        if (input.value != "") {
            newMessage(input.value, 'message message_client')
            input.value = ""
            newMessage(arrayRandElement(listAnswer), 'message')
        }
    }
});

input.addEventListener('focus', function () {
    let idleTime = 0;
    let idleInterval = setInterval(function () {
        idleTime = idleTime + 1;
        if (idleTime > 30) { // 30 secondes
            newMessage(arrayRandElement(listQuestion), 'message')
            clearInterval(idleInterval)
        }
    }, 1000); // 1 seconde
})

const listAnswer = ['К сожалению все операторы сейчас заняты. Не пишите нам больше!',
                    'Мы ничего не будем вам продавать!',
                    'Вы не купили ни одного товара, чтобы с нами разговаривать!']

const listQuestion = ['Молчание затянулось. Вас долго ждать?',
                    'Где ваша совесть?']

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
