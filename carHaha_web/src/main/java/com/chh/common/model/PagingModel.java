package com.chh.common.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class PagingModel {

	private Integer pageCount;
	private Integer currentPage;
	private Integer totalCount;
	private Integer totalPageCount;
	private Integer pageBlockSize;
	
	@JsonIgnore
	public int getStartRowNum() {
		return (currentPage != null) ? (currentPage - 1) * pageCount : 0;
	}

	@JsonIgnore
	public int getEndRowNum() {
		return (currentPage != null) ? currentPage * pageCount : 0;
	}

	@JsonIgnore
	public int getStartNum() {
		return (totalCount != null) ? totalCount - ((currentPage - 1) * pageCount) : 0;
	}
	
	public void setPagingInfo(int totalCount) {
		this.totalCount = totalCount;
		this.totalPageCount = totalCount / pageCount + ((totalCount % pageCount == 0) ? 0 : 1);
	}

	public PagingModel(){
		this.pageCount = 10;
		this.currentPage = 1;
		this.pageBlockSize = 10;
	}
}
