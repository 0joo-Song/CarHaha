package com.chh.web.fmc.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chh.web.fmc.dto.request.FmcReqDto;
import com.chh.web.fmc.dto.response.FmcRespDto;
import com.chh.web.fmc.mapper.FmcMapper;

@Service
@Transactional
public class FmcService {
	
	Logger log = LoggerFactory.getLogger(FmcService.class);

	@Autowired
	FmcMapper fmcMapper;
	
	public FmcRespDto test(FmcReqDto fmcReqDto) {
		FmcRespDto resp = new FmcRespDto();
		int test = fmcMapper.selectTestCnt();
		System.out.println(test);
		
		// ajax 확인
		resp.setResultMsg(test+"");
		return resp;
	}

}
