package com.chh.web.fmc.dto.request;

import org.apache.ibatis.type.Alias;

import com.chh.common.model.PagingModel;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter	
@Setter
@ToString
@Alias("FmcReqDto")
public class FmcReqDto {
	private PagingModel paging;
	
	public FmcReqDto() {
		this.paging = new PagingModel();	
	}
}
