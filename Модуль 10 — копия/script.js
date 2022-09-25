const wsUri = "wss://echo-ws-service.herokuapp.com";
const messageInput = document.querySelector('.message');
const sendBtn = document.querySelector('.j-btn-message');
const textWindow = document.querySelector('.text-window');
const geoBtn = document.querySelector('.j-btn-geo');
const placeholder = 'Здесь вводится текст сообщения';

// create a websocket object and describe its behavior
let websocket = new WebSocket(wsUri); 

websocket.onopen = function(evt) {
    console.log("CONNECTED");
};

websocket.onerror = function(evt) {
    console.log(evt.data)
};

websocket.onmessage = function(evt) {
  console.log(evt.data);
  addMessage(evt.data, 'flex-start');
};

//add an event handler when the send button is clicked
sendBtn.addEventListener('click', () => {
    let message = messageInput.value;
    websocket.send(message);
    addMessage(message);
    messageInput.value = ''
})

//function to add messages to chat
function addMessage(message, position='flex-end') {
    let element = `
        <p class='message-window' style='align-self: ${position}'>
            ${message}
        </p>
    `;
    let chat = textWindow.innerHTML;
    textWindow.innerHTML = chat + element;
}


//describe the behavior when determining the geo-position
const error = () => {
    let error = "Позиция не может быть определена" 
    addMessage(error);
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    addLink(link)
}


//function to insert a link in the chat
function addLink(link) {
    let element = `
    <a  href='${link}'
        target='_blank'
        style='text-decoration: none;'
        >
        Гео-позиция
        </a>
    `;
    let chat = textWindow.innerHTML;
    textWindow.innerHTML = chat + element;
};



// add an event handler when the geo-position button is clicked
geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log("You can't use geolocation")
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    };
});