let ws = null;
function onConnect() {
    console.log('click');
    //使用 WebSocket 的網址向 Server 開啟連結
    ws = new WebSocket('ws://localhost:3000');
    //開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
    ws.onopen = () => {
        document.getElementById("content").innerHTML += "<li>open connection</li>";
        console.log('open connection');
    }
    //關閉後執行的動作，指定一個 function 會在連結中斷後執行
    ws.onclose = () => {
        document.getElementById("content").innerHTML += "<li>close connection</li>";
        console.log('close connection');
    }
    //接收 Server 發送的訊息
    ws.onmessage = event => {
        document.getElementById("content").innerHTML += "<li>" + event.data + "</li>";
        console.log(event);
    }
    ws.onerror = event => {
        document.getElementById("content").innerHTML += "<li>" + event.data + "</li>";
        console.log('error');
    }
};
function onSend() {
    if (ws) {
        let data = document.getElementById('message');
        ws.send(data.value);
        console.log(data.value);
    }
};