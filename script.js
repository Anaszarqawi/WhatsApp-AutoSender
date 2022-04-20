const fs = require('browserify-fs');
// const fs = require('fs');
const $ = require('jquery');
const msgsFile = require('./messages.json');

var msgsContainer = $("#messages");

(async () => {
    msgsFile.msgs.forEach(msg => {
        msgsContainer.append(`<div class="message">${msg}</div>`)
    });
})();

let jsonGenerator = (newMsg) => {
    let messages = msgsFile.msgs;
    messages.push(newMsg);
    let jsonStr = '{"msgs":[';
    messages.forEach(element => {
        jsonStr += `"${element}",`;
    });
    jsonStr = jsonStr.slice(0, -1);
    jsonStr += ']}';

    return jsonStr
}

$('.add-btn').click(() => {
    let msg = $(".message-input").val()
    $(".message-input").val("")
    msgsContainer.append(`<div class="message">${msg}</div>`)

    let json = jsonGenerator(msg)

    fs.writeFile("messages.json", json.toString())
    console.log(msgsFile.msgs);
})
