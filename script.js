const fs = require('browserify-fs');
const $ = require('jquery');
const msgsFile = require('./messages.json');

var msgsContainer = $("#messages")

let refreshMsgs = async () => {
    msgsFile.messages.forEach(msg => {
        msgsContainer.append(`<div class="message">${msg}</div>`)
    });
};

refreshMsgs()

$('.add-btn').click(() => {
    let msg = $(".message-input").val()
    $(".message-input").val("")
    // msgsFile.messages.push(msg)
    msgsContainer.append(`<div class="message">${msg}</div>`)
    fs.writeFile(msgsFile.messages, JSON.stringify(msg) , function (err) {
        if (err) throw err;
        fs.readFile("messages.json", function (err,data) { 
            console.log(data);
        })
    });
})
