
	$(function(){
  	//Calendar
  	var _from = $( "#srchStrtDt" ).datepicker({
  		dateFormat: "yy.mm.dd",
  		showOn: "both",
  		yearSuffix: '.',
  		showMonthAfterYear: true,
  		buttonImage: '/assets/images/icon/ico_cal.png',
  		buttonImageOnly: true,
  		monthNames: [ "01","02","03","04","05","06","07","08","09","10","11","12" ], 
  		monthNamesShort: [ "01","02","03","04","05","06","07","08","09","10","11","12" ],
  		dayNames: [ "일요일","월요일","화요일","수요일","목요일","금요일","토요일" ], 
  		dayNamesShort: [ "일","월","화","수","목","금","토" ], 
  		dayNamesMin: [ "일","월","화","수","목","금","토" ],
  		onClose: function( selectedDate ) {
  			$( "#srchEndDt" ).datepicker( "option", "minDate", selectedDate );
  		}
  	});
  	var _to = $( "#srchEndDt" ).datepicker({
  		dateFormat: "yy.mm.dd",
  		showOn: "both",
  		yearSuffix: '.',
  		showMonthAfterYear: true,
  		buttonImage: '/assets/images/icon/ico_cal.png',
  		buttonImageOnly: true,
  		monthNames: [ "01","02","03","04","05","06","07","08","09","10","11","12" ], 
  		monthNamesShort: [ "01","02","03","04","05","06","07","08","09","10","11","12" ],
  		dayNames: [ "일요일","월요일","화요일","수요일","목요일","금요일","토요일" ], 
  		dayNamesShort: [ "일","월","화","수","목","금","토" ], 
  		dayNamesMin: [ "일","월","화","수","목","금","토" ],
  		onClose: function( selectedDate ) {
  			$( "#srchStrtDt" ).datepicker( "option", "maxDate", selectedDate );
  		}
  	});
  	
  	//날짜 기간선택시 날짜 입력창 셋팅
  	$("input:radio[name='srchTerm']").click(function() {
	    //기간설정안함 uncheck
   		$("#chkTermYn").prop("checked", false);
   		$("#srchTermYn").val("Y");
   		$("#srchStrtDt").datepicker("option", "disabled", false);
	  	$("#srchEndDt").datepicker("option", "disabled", false);
	  	
	 		// 오늘날의 년, 월, 일 데이터
	 		var date = new Date();
	  	var d = date.getDate();
	  	var m = date.getMonth();
	  	var y = date.getFullYear();
	  	
	  	var today = toStringByFormatting(date, '.');
   		var week = toStringByFormatting(new Date(new Date().setDate(d-7)), '.');
   	  var month = toStringByFormatting(new Date(new Date().setMonth(m-1)), '.');
   	  var threeMonth = toStringByFormatting(new Date(new Date().setMonth(m-3)), '.');
   		var sixMonth = toStringByFormatting(new Date(new Date().setMonth(m-6)), '.');
   		var year = toStringByFormatting(new Date(new Date().setYear(y-1)), '.'); 
   		
   		if($("input:radio[name='srchTerm']:checked").val()=="week") {
   			$("#srchStrtDt").val(week);
			  $("#srchEndDt").val(today);
   		} else if($("input:radio[name='srchTerm']:checked").val()=="month") {
   			$("#srchStrtDt").val(month);
			  $("#srchEndDt").val(today);
   		} else if($("input:radio[name='srchTerm']:checked").val()=="threeMonth") {
   			$("#srchStrtDt").val(threeMonth);
			  $("#srchEndDt").val(today);
 			} else if($("input:radio[name='srchTerm']:checked").val()=="sixMonth") {
   			$("#srchStrtDt").val(sixMonth);
			  $("#srchEndDt").val(today);
   		} else if($("input:radio[name='srchTerm']:checked").val()=="year") {
   			$("#srchStrtDt").val(year);
			  $("#srchEndDt").val(today);
 			}
   	});
   	
   	//기간설정안함 체크시 날짜 입력창 비활성화 
		$("#chkTermYn").on("click", function() {
			//기간버튼 uncheck
			$("input:radio[name='srchTerm']").prop("checked", false);
			if($("#chkTermYn").prop("checked")) {
				$("#srchStrtDt").datepicker("option", "disabled", true);
  			$("#srchEndDt").datepicker("option", "disabled", true);
  			$("#srchStrtDt").datepicker("setDate", "");
				$("#srchEndDt").datepicker("setDate", "");
				$("#srchTermYn").val("N");
			} else {
		  	$("#srchStrtDt").datepicker("option", "disabled", false);
		  	$("#srchEndDt").datepicker("option", "disabled", false);
		  	$("#srchTermYn").val("Y");
		  }	
		});
		
		if($("input:radio[name='srchTerm']").val() != null) $("#chkTermYn").attr("checked", false);
  });
	
	//날짜 포맷
	function leftPad(value) {
    if (value >= 10) {
        return value;
    }

    return "0"+value;
	}

	function toStringByFormatting(source, delimiter = '-') {
		var year = source.getFullYear();
    var month = leftPad(source.getMonth()+1);
    var day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
	}