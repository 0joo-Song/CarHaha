package com.chh.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Value("${spring.webservice.intro}")
	private String introPage;
	
	@Override
	  public void addViewControllers(ViewControllerRegistry registry) {
	    // 루트 (/) 로 접근 시 introPage 이동
	  	// gnb 세션 저장 용  메인 주소
	    registry.addRedirectViewController("/", introPage);
	  }
}
