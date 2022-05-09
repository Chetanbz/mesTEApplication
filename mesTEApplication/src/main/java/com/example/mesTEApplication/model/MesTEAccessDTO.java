package com.example.mesTEApplication.model;

import java.util.List;

public class MesTEAccessDTO {
	
	public String userId;
	public String userName;
	public int isTerminalUserFlag;
	public int isApplicationSelectedFlag;
	public String collegueId;
	public String packageName;
	public List packageNameList;
	public List applicationList;
	
	public MesTEAccessDTO(String userId, String userName, int isTerminalUserFlag, int isApplicationSelectedFlag,
			String collegueId, String packageName, List packageNameList, List applicationList) {
		super();
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
