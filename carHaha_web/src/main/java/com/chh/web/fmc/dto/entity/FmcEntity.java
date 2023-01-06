package com.chh.web.fmc.dto.entity;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Alias("IndctEntity")
public class FmcEntity {
	// 추후 DB설계후 수정
	//TB_FDMC
	private Integer carSeq;
}
