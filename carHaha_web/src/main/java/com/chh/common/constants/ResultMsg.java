package com.chh.common.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultMsg {
	SUCC_REG("등록이 완료되었습니다."),
	SUCC_MOD("수정이 완료되었습니다."),
	SUCC_DEL("삭제가 완료되었습니다."),
	SUCC_CNCL("이용해지 되었습니다."),
	SUCC_WTHDR("탈퇴 처리 되었습니다."),
	SUCC_RJT("반려 처리되었습니다."),
	SUCC_PWD("비밀번호가 재설정되었습니다."),
	APRV_SUCC("승인 완료되었습니다."),
	AVBL_ID("사용가능한 아이디입니다."),
	DUP_ID("중복된 아이디입니다."),
	DUP_CD("이미 사용중인 코드 값이 입니다."),
	DUP_NM("중복된 이름입니다."),
	DUP_NM_AUTH("이미 사용중인 권한명입니다."),
	NOT_LOGIN("아이디 또는 비밀번호를 잘못 입력했습니다. \n확인 후 다시 입력해주세요."),
	SAME_PREV_PWD("이전 비밀번호와 동일합니다."),
	SUCC_MOD_PWD("비밀번호가 변경 되었습니다."),
	FAIL("처리가 실패하였습니다.");	
	
	String msg;  
	
}