let common = {

	init:function(){
		common.lnb();

		//헤더 스크롤
		$(window).on('scroll.gnb', function(){
			let scrollTop = $(window).scrollTop();

			if( scrollTop > 0 ){
				$('#header').addClass('sticky');
			}else{
				$('#header').removeClass('sticky');
			}
		});

		$(window).trigger('scroll.gnb');
	},

	// lnb 메뉴
	lnb:function(){
		// 1depth 메뉴 클릭 설정
		$(".lnb").find(".toggle").each(function(i){
			// 활성화 시 열림 체크
			if( $(this).hasClass("fold") ){
				$(this).next().slideDown(0);
				$(this).addClass("fold");
			}else{
				$(this).next().slideUp(0);
				$(this).removeClass("fold");
			}

			// 태그 내에 링크 유무 확인
			if ( $(this).next().length > 0 ){
				$(this).removeClass("link");
				
			}else{
				$(this).addClass("link");
			}

			// lnb 아코디언 기능
			$(this).on("click", function(e){
				// 1depth 클릭시 아코디언 초기화
				$(".toggle").next().slideUp('fast');
				$(".toggle").removeClass("fold");
				$(".toggle-sub").next().slideUp('fast');
				$(".toggle-sub").removeClass("fold");
				
				if( $(this).next().css("display") == "none" ){
					$(this).next().slideDown('fast');
					$(this).addClass("fold");
				}else{
					$(this).next().slideUp('fast');
					$(this).removeClass("fold");
				}

				// 태그 내에 링크 없을 시 이벤트 막기
				if (!$(this).attr("href")){
					e.preventDefault();
				}

			});
		});

		// 서브뎁스 메뉴 열림 설정
		$(".lnb").find(".toggle-sub").each(function(i){
			// 활성화 시 열림 체크
			if( $(this).hasClass("fold") ){
				$(this).next().slideDown(0);
				$(this).addClass("fold");
			}else{
				$(this).next().slideUp(0);
				$(this).removeClass("fold");
			}

			// 태그 내에 링크 유무 확인
			if ( $(this).next().length > 0 ){
				$(this).removeClass("link");
				
			}else{
				$(this).addClass("link");
			}

			// lnb 아코디언 기능
			$(this).on("click", function(e){
				
				if( $(this).next().css("display") == "none" ){
					$(this).next().slideDown('fast');
					$(this).addClass("fold");
				}else{
					$(this).next().slideUp('fast');
					$(this).removeClass("fold");
				}

				// 태그 내에 링크 없을 시 이벤트 막기
				if (!$(this).attr("href")){
					e.preventDefault();
				}
			});
		});

		// lnb 최소화
		$(".btn-lnb").on("click", function(){
			$(".lnb").toggleClass("close");
			$(this).toggleClass("open");
		});
	},

	// 모달 팝업 띄우기
	openModalPopup:function( tar ){
		let _tar = $("." + tar);
						
		$("body").append("<div class='modal'>");
		$("body").css("position", "absolute").css("overflow", "hidden");
		$(".modal").show();

		_tar.show();
	},

	// 모달 팝업 닫기
	closeModalPopup:function(){
		$(".modal").remove();
		$("body").css("position", "relative").css("overflow", "auto");
		$(".popup").hide();
	}
}

$(function () {
	common.init();
});