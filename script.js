let keyInput;
let dataList = document.getElementById("dataList");
let userInputBox = document.getElementById("inputBox");

document.addEventListener("keypress", (event) => {
    dataList.textContent = "";
    userInputBox.value = "";

    keyInput = event.key;
    document.getElementById("keyInputDisplay").textContent = keyInput;
    console.log(event);

    let codeLI = document.createElement(`li`);
    codeLI.innerText = `Code : ${event.code}`;
    dataList.appendChild(codeLI);

    let keyLI = document.createElement(`li`);
    keyLI.innerText = `Key : ${event.key}`;
    dataList.appendChild(keyLI);

    let charCodeLI = document.createElement(`li`);
    charCodeLI.innerText = `Char Code : ${keyInput.charCodeAt()}`;
    dataList.appendChild(charCodeLI);
    console.log(window.navigator.userAgent);

});

