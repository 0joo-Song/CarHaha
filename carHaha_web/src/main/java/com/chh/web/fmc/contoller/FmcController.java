package com.chh.web.fmc.contoller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chh.web.fmc.dto.request.FmcReqDto;
import com.chh.web.fmc.dto.response.FmcRespDto;
import com.chh.web.fmc.service.FmcService;

@Controller
public class FmcController {
	
	Logger log = LoggerFactory.getLogger(FmcController.class);

	@Resource(name = "fmcService")
  	private FmcService fmcService;
	  
	/**
     * find my car - 메인 화면
     * @return String
     * @throws Exception
     * @author 0joo
     */ 
    @RequestMapping(value = "/fmc/main.do", method = {RequestMethod.GET, RequestMethod.POST})
    public String findMyCarMain() throws Exception{
    	return "blank:web/fmc/main";
    }
    
    //db연결 테스트
    @ResponseBody
    @RequestMapping(value="/fmc/test.do", method = {RequestMethod.GET, RequestMethod.POST})
    public FmcRespDto test(FmcReqDto fmcReqDto) throws Exception {	
  		return fmcService.test(fmcReqDto);
  		
    }
    
    /**
     * find my car - 시작
     * @return String
     * @throws Exception
     * @author 0joo
     */ 
   
}
