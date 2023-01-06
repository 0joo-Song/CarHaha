		// 지표설정 점수타입 값 체크
		function gradeValueCheck(inputId){
			var val0 = 0;
			var val9999 = 0;
			for(var i = 0; i < 7; i++ ){
				var strtVal = $("#"+inputId+"Strt"+i).val()
		    var endVal = $("#"+inputId+"End"+i).val()
				//console.log(i+"번 시작값: "+strtVal);
				//console.log(i+"번 종료값: "+endVal);
				
				// 1. 0과 9999값 있는지 확인(1)
				if(strtVal == '0' ){
					val0++;
				}
				if(endVal == '9999' ){
					val9999++;
				}
				
				// 2. 시작값 종료값이 둘다 있는지 확인
				if(strtVal == "" && endVal != ""){
					alert("시작,종료 값 둘중에 하나 공백");
					valChkRst = false;
					return false;
				}else if(strtVal != "" && endVal == ""){
					alert("시작,종료 값 둘중에 하나 공백");
					valChkRst = false;
					return false;
				}
				
				// 3. 시작값 > 종료값 체크
				if(strtVal != "" && endVal != ""){
					if(Number(strtVal) > Number(endVal)){
						alert("시작값이 종료값보다 큽니다.\n다시 입력해주세요.");
						valChkRst = false;
						return false;
					}
				}
				
				// 4. 값이 연결 되는 지 확인
				var prevVal = endVal;
				var nextVal;
				if(prevVal != ""){
					for(var j = 1; j < 7-(i+1); j++){
						if($("#"+inputId+"Strt"+(j+i)).val() != ""){
							nextVal = $("#"+inputId+"Strt"+(j+i)).val();
							break;
						}
					}
					if(nextVal != "" && (Number(prevVal)+1) != Number(nextVal)){
						alert("시작값과 종료값이 연결되지않습니다.\n다시 입력해주세요.");
						valChkRst = false;
						return false;
					}
					// 초기화
					prevVal = "";
					nextVal = "";
				}
			}
			
			// 5. 0과 9999값 있는지 확인(2)
			if( val0 != 1){
				alert("시작 값을 입력해주세요.");
				valChkRst = false;
				return false;
			}
			if( val9999 != 1){
				alert("종료 값을 입력해주세요.");
				valChkRst = false;
				return false;
			}
		}
		
		// 지표설정 점수타입 값 체크 - 체온
		function gradeValueCheck_btep(inputId){
			var val0 = 0;
			var val9999 = 0;
			for(var i = 0; i < 7; i++ ){
				var strtVal = $("#"+inputId+"Strt"+i).val()
		    var endVal = $("#"+inputId+"End"+i).val()
				//console.log(i+"번 시작값: "+strtVal);
				//console.log(i+"번 종료값: "+endVal);
				
				// 1. 0과 9999값 있는지 확인(1)
				if(strtVal == '0' ){
					val0++;
				}
				if(endVal == '9999' ){
					val9999++;
				}
				
				// 2. 시작값 종료값이 둘다 있는지 확인
				if(strtVal == "" && endVal != ""){
					alert("시작,종료 값 둘중에 하나 공백");
					valChkRst = false;
					return false;
				}else if(strtVal != "" && endVal == ""){
					alert("시작,종료 값 둘중에 하나 공백");
					valChkRst = false;
					return false;
				}
				
				// 3. 시작값 > 종료값 체크
				if(strtVal != "" && endVal != ""){
					if(Number(strtVal) > Number(endVal)){
						alert("시작값이 종료값보다 큽니다.\n다시 입력해주세요.");
						valChkRst = false;
						return false;
					}
				}
				
				// 4. 값이 연결 되는 지 확인
				var prevVal = endVal;
				var nextVal;
				if(prevVal != ""){
					for(var j = 1; j < 7-(i+1); j++){
						if($("#"+inputId+"Strt"+(j+i)).val() != ""){
							nextVal = $("#"+inputId+"Strt"+(j+i)).val();
							console.log(prevVal+" | "+nextVal);
							break;
						}
					}
					if(nextVal != "" && (Number(prevVal)+0.1) != Number(nextVal)){
						alert("시작값과 종료값이 연결되지않습니다.\n다시 입력해주세요.");
						valChkRst = false;
						return false;
					}
					// 초기화
					prevVal = "";
					nextVal = "";
				}
			}
			
			// 5. 0과 9999값 있는지 확인(2)
			if( val0 != 1){
				alert("시작 값을 입력해주세요.");
				valChkRst = false;
				return false;
			}
			if( val9999 != 1){
				alert("종료 값을 입력해주세요.");
				valChkRst = false;
				return false;
			}
		}
		
		// 위험도설정 점수 값 체크
		var endValRst;
		function riskValueCheck(){
			// 위험도설정 end값보다 높은지 확인
			endValRst = true;
			riskEndValCheck("nrmlEnd");
			riskEndValCheck("cautnStrt");
			riskEndValCheck("cautnEnd");
			riskEndValCheck("dngrsStrt");
			if(!endValRst){
				alert("위험 종료점수보다 높음")
				valChkRst = false;
				return false;
			}
			if((Number($("#nrmlEnd").val())+1) != $("#cautnStrt").val()){
				alert("위험도 설정 점수 다시 입력");
				valChkRst = false;
				return false;
			}
			if((Number($("#cautnEnd").val())+1) != $("#dngrsStrt").val()){
				alert("위험도 설정 점수 다시 입력");
				valChkRst = false;
				return false;
			}
		}
		
		// 위험도설정 end값보다 높은지 확인
		function riskEndValCheck(inputId){
			var endVal = Number($("#dngrsEnd").val())
			if(Number($("#"+inputId).val()) > endVal){
				valChkRst = false;
			}
		}
		
		// 공백 체크
		function nullValueCheck(inputId){
			if($("#"+inputId).val() == ""){
				nullValRst = false
			}
		}
		
		// 숫자만 입력 (0 삭제 추가버전)
		function onlyNumber_del0(id){
      $("#"+id).on("focusout", function() {
         var x = $(this).val();
         if (x.length > 0) {
            if (x.match(/[^0-9]/gi)) {
               x = x.replace(/[^0-9]/gi, "");
            }
            $(this).val(x);
         }
      }).on("keyup", function() {
         $(this).val($(this).val().replace(/[^0-9]/gi, ""));
         // 0이 아닐때 왼쪽 0 제거
         if($(this).val() !== '0'){
          $(this).val($(this).val().replace(/(^0+)/, ""));
         }
      });
    }