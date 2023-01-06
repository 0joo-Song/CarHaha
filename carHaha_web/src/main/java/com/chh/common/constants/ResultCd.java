package com.chh.common.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultCd {
	SUCCESS("success"),
	FAIL("fail");
	
	String code;  
	
}