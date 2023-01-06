		//숫자만 입력
		function onlyNumber(id){
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
        });
    }
    
    //숫자와 .만 입력
    function versionChk(id){
        $("#"+id).on("focusout", function() {
            var x = $(this).val();
            if (x.length > 0) {
                if (x.match(/[^(\d+\.)?(\d+\.)?(\*|\d+)$]/gi)) {
                   x = x.replace(/[^(\d+\.)?(\d+\.)?(\*|\d+)$]/gi, "");
                }
                $(this).val(x);
            }
        }).on("keyup", function() {
            $(this).val($(this).val().replace(/[^(\d+\.)?(\d+\.)?(\*|\d+)$]/gi, ""));
        });
    }
    
    
   //숫자와 영문 대문자만 입력가능
		function numUpperCheck(id){
		    $("#"+id).on("focusout", function() {
		        var x = $(this).val();
		        if (x.length > 0) {
		            if (x.match(/[ㄱ-힣~!@#$%^&*()_+|<>?:{}=a-z ]/g)) {
		               x = x.replace(/[ㄱ-힣~!@#$%^&*()_+|<>?:{}=a-z ]/g, "");
		            }
		            $(this).val(x);
		        }
		    }).on("keyup", function() {
		        $(this).val($(this).val().replace(/[ㄱ-힣~!@#$%^&*()_+|<>?:{}=a-z ]/g, ""));
		    });
		}
		
		//영문 대문자만 입력가능
		function upperCheck(id){
		    $("#"+id).on("focusout", function() {
		        var x = $(this).val();
		        if (x.length > 0) {
		            if (x.match(/([^A-Z])/g)) {
		               x = x.replace(/([^A-Z])/g, "");
		            }
		            $(this).val(x);
		        }
		    }).on("keyup", function() {
		        $(this).val($(this).val().replace(/([^A-Z])/g, ""));
		    });
		}