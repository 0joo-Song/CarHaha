<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" isELIgnored="false"%>
<%@ include file="/WEB-INF/views/include/incDeclare.jsp" %>
<%@ include file="/WEB-INF/views/include/incHeader.jsp" %>

<script type="text/javascript">
	function start(){
		//db 연결 확인
		$.ajax({             
		  	type: "POST",          
		    url: "/fmc/test.do",        
		    data: $("#frm").serialize(), 
		    async : false,
		    success: function (data) { 
		    	alert(data.resultMsg);
			  },          
			  error: function (e) {  
			 		console.log(e);    
			  }    
			});
	}
</script>

</head> 
<body>
<div class="mainTitle">Find My Car</div>
<div class="startBtn" onclick="start()">
	<div class="txtarea"><i class="xi-car xi-4x"></i><span class="txt"> START!</span></div>
</div>
</body>
</html>
