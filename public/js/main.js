const numberInput = document.querySelector('#number');
const textInput = document.querySelector('#msg');
const button = document.querySelector('#button');
const response = document.querySelector('.response');

button.addEventListener('click', send, false);

const socket = io();
socket.on('smsStatus', (data) => {
    response.innerHTML = '<h5>Text message sent to ' + data.number + '</h5>';
})

function send() {

    const number = numberInput.value.replace(/\D/g, '');
    const text = textInput.value;

    fetch('/', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ number: number, text: text })
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
}