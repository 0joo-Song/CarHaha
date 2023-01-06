package com.chh.web.fmc.contoller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class FmcController {
	
	/**
     * find my car - 시작 화면
     * @return String
     * @throws Exception
     * @author 0joo
     */ 
    @RequestMapping(value = "/fmc/main.do", method = {RequestMethod.GET, RequestMethod.POST})
    public String findMyCarMain() throws Exception{
    	return "blank:web/fmc/main";
    }
}
