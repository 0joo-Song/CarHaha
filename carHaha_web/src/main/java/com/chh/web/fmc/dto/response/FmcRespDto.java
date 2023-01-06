package com.chh.web.fmc.dto.response;

import java.util.List;

import org.apache.ibatis.type.Alias;

import com.chh.common.model.PagingResponseModel;
import com.chh.web.fmc.dto.entity.FmcEntity;
import com.chh.web.fmc.dto.request.FmcReqDto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Alias("FmcRespDto")
public class FmcRespDto extends PagingResponseModel {
	private FmcReqDto search;
	private List<FmcEntity> result;
	private FmcEntity info;
	private String pagingHtml;
	private Integer indctSeq;
	
	private String resultCd;
	private String resultMsg;
}
