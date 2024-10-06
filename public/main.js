const socket = io(); //use to connect

const form = document.getElementById("message-form");
const nameinput = document.getElementById("name-input");
const messagecontainer = document.getElementById("message-container");
const messageinput = document.getElementById("message-input");
const audio=new Audio('./ring.mp3');

//Handling the event of emmited by the servere of total number of clients

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendmessage();
});

const totalclient = document.getElementById("client-total");
socket.on("client total", (total) => {
  totalclient.innerText = `Total clients: ${total}`;
});

function sendmessage() {
  if (messageinput.value === "") {
    return;
  }
  console.log(messageinput.value);

  const data = {
    name: nameinput.value,
    message: messageinput.value,
    datetime: new Date(),
  };
  socket.emit("message", data);
  addMessage(true, data);
  messageinput.value = "";
}

// Listen for chat messages from the server
socket.on("chat message", (data) => {
  console.log(data);
  audio.play();
  addMessage(false, data);
});

//is message is own=true and if clients=false
//moment(data.datetime).fromNow()  it is from the moment library
function addMessage(isOwnMessage, data) {
    clearfeedback()
  const element = `<li class="${
    isOwnMessage ? "message-right" : "message-left"
  }">
          <p class="message">
            ${data.message}
            <span>${data.name} ${moment(data.datetime).fromNow()}</span>
          </p>
        </li>`;

  messagecontainer.innerHTML += element;
  scrollBottom();
}

//Automatically scroll the messgae container when new message is recieved or send
function scrollBottom() {
  messagecontainer.scrollTo(0, messagecontainer.scrollHeight);
}

messageinput.addEventListener("focus", (event) => {
  socket.emit("feedback", {
    feedback: `${nameinput.value} is Typing `,
  });
});
messageinput.addEventListener("keypress", (event) => {
  socket.emit("feedback", {
    feedback: `${nameinput.value} is Typing `,
  });
});

//if not typing anything then emit the empty feedback
messagecontainer.addEventListener("blur", (event) => {
  socket.emit("feedback", {
    feedback: "",
  });
});

socket.on("feedback", (data) => {
  clearfeedback();
  const element = `<li class="message-feedback">
          <p class="feedback" id="feedback">✍️ ${data.feedback} is typing a message...</p>
        </li>`;
  messagecontainer.innerHTML += element;
});

function clearfeedback() {
  //select all the li elements with the class of message-feedback
     (document.querySelectorAll("li.message-feedback")).forEach((element) => {
      //element.parentNode.removeChild(element);
      element.remove(element);
    });
}
