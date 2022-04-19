import msgsFile from './messages.json' assert { type: "json" };

let messages = msgsFile.messages
var msgsContainer = document.getElementById("messages")

let addMsg = (msg) => {
    msgsContainer.innerHTML += `<div class="message">${msg}</div>`
}

messages.forEach(msg => {
    addMsg(msg)
});