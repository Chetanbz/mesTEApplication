package com.example.mesTEApplication.model;

import java.util.List;

import javax.persistence.Entity;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonInclude;

@Component
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MesTEAccessDTO {
	
	public String loginId;
	public String userId;
	public String userName;
	public int isTerminalUserFlag;
	public int isApplicationSelectedFlag;
	public String collegueId;
	public String packageName;
	public List packageNameList;
	public List applicationList;
	
	public MesTEAccessDTO(Object object) {
		
	}
	
	public MesTEAccessDTO(String loginId,String userId, String userName, int isTerminalUserFlag, int isApplicationSelectedFlag,
			String collegueId, String packageName, List packageNameList, List applicationList) {
		super();
		this.loginId = loginId;
		this.userId = userId;
		this.userName = userName;
		this.isTerminalUserFlag = isTerminalUserFlag;
		this.isApplicationSelectedFlag = isApplicationSelectedFlag;
		this.collegueId = collegueId;
		this.packageName = packageName;
		this.packageNameList = packageNameList;
		this.applicationList = applicationList;
	}

	public MesTEAccessDTO() {
		// TODO Auto-generated constructor stub
	}
	
	

}
