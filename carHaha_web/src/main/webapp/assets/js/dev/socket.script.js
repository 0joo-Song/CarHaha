/* 웹소켓 script */
$(function() {
    const userId = $("#loginId").val(); 
    console.log("userId: "+userId);
    $("#disconn").on("click", (e) => {
        disconnect();
    })
    
    $("#button-send").on("click", (e) => {
        send();
    });

    const websocket = new WebSocket("ws://localhost:8080/ws/alram");

    websocket.onmessage = onMessage;
    websocket.onopen = onOpen;
    websocket.onclose = onClose;

    function send(){
				/*
					보낼 때 type으로 구분해서 주의, 응급, 일반등으로 구분 가능
					let type = 'emgcy'
				*/
				
        let content = $("#content").val();  // 실시간 알림 내용
        let id = $("#id").val();		   			// 받는 회원의 ID

        websocket.send(id + ":" + content);
        $("#content").val("");
        $("#id").val("");
    }
    
    //소켓 close
    function onClose(evt) {
        console.log("소켓 종료");
        //websocket.send("소켓 종료")
    }
    
    //소켓 open
    function onOpen(evt) {
        console.log("소켓 연결")
        //websocket.send("소켓 연결");
    }

    // 실시간 알림 전송
    function onMessage(msg) {
        var data = msg.data;
        
        var id = null;
        var content = null;
        
        var arr = data.split(":");

        for(var i=0; i<arr.length; i++){
            console.log('arr[' + i + ']: ' + arr[i]);
        }

        // 알림을 받을 아이디
        id = arr[0];
        // 내용
        content = arr[1];
 
        console.log("알림 받는 id : " + id);
        console.log("현재 로그인 id : " + userId);

        // 알림을 받는 회원인지 체크
        // 여러명을 그룹으로 묶어서 알림을 보낼경우 세션에 권한을 저장해서 비교해서 알림을 보낼 수 있음.
        if(id == userId){
        	alert(content);
        }
    }
  });
	