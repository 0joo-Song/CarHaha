	//파일 다운로드 URL
	function procDownloadFile(url) {
		$.fileDownload(url)
			.done(function() { alert('파일이 다운로드 되었습니다.'); })
			.fail(function() { alert('파일 다운로드가 실패하였습니다.'); });
	}

