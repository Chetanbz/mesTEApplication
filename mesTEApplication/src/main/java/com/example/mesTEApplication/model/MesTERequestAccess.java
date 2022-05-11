package com.example.mesTEApplication.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;

public class MesTERequestAccess {
	
	public int mesTERequestAccessId;
	public String loginId;
	public String userId;
	public String userName;
	public int isTerminalUserFlag;
	public int isApplicationSelectedFlag;
	public String collegueId;
	public String packageName;
	public List packageNameList;
	public List applicationList;
	public ApplicationStatusDTO applicationStatus;	
	public LocalDate localDate;
	
	public MesTERequestAccess() {
		
		System.out.print("mesTE Request Constructor Called");
	}
	
	public MesTERequestAccess(int mesTERequestAccessId, MesTEAccessDTO mesTEAccessDTO) {
		this.mesTERequestAccessId = mesTERequestAccessId;
		this.loginId = mesTEAccessDTO.loginId;
		this.userId = mesTEAccessDTO.userId;
		this.userName = mesTEAccessDTO.userName;
		this.isTerminalUserFlag = mesTEAccessDTO.isTerminalUserFlag;
		this.isApplicationSelectedFlag = mesTEAccessDTO.isApplicationSelectedFlag;
		this.collegueId = mesTEAccessDTO.collegueId;
		this.packageName = mesTEAccessDTO.packageName;
		this.packageNameList = mesTEAccessDTO.packageNameList;
		this.applicationList = mesTEAccessDTO.applicationList;
		
		//this.applicationStatus = new ApplicationStatusDTO();
		
	}
	
	public void MesTERequestAccessUpdate(ApplicationStatusDTO applicationStatus, LocalDate localDate ) {
          this.applicationStatus = applicationStatus;
          this.localDate = localDate;
		
	}
	
	
	
	public MesTERequestAccess(int mesTERequestAccessId, String userId, String userName, int isTerminalUserFlag,
			int isApplicationSelectedFlag, String collegueId, String packageName, List packageNameList,
			List applicationList) {
		this.mesTERequestAccessId = mesTERequestAccessId;
		this.userId = userId;
		this.userName = userName;
		this.isTerminalUserFlag = isTerminalUserFlag;
		this.isApplicationSelectedFlag = isApplicationSelectedFlag;
		this.collegueId = collegueId;
		this.packageName = packageName;
		this.packageNameList = packageNameList;
		this.applicationList = applicationList;
	}
	
	
	

}
