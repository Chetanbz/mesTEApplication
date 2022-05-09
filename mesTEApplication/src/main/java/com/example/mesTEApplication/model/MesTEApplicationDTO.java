package com.example.mesTEApplication.model;

public class MesTEApplicationDTO {
	
	private int applicationId;
	private String applicationName;
	private int applicationCriticality;
	private int isTerminalApplication;   // 1 Terminal Package // 0 Web Application
	
	
	public MesTEApplicationDTO(int applicationId, String applicationName, int applicationCriticality,
			int isTerminalApplication) {
		super();
		this.applicationId = applicationId;
		this.applicationName = applicationName;
		this.applicationCriticality = applicationCriticality;
		this.isTerminalApplication = isTerminalApplication;
	}

	public int getApplicationId() {
		return applicationId;
	}
	public void setApplicationId(int applicationId) {
		this.applicationId = applicationId;
	}
	public String getApplicationName() {
		return applicationName;
	}
	public void setApplicationName(String applicationName) {
		this.applicationName = applicationName;
	}
	public int getApplicationCriticality() {
		return applicationCriticality;
	}
	public void setApplicationCriticality(int applicationCriticality) {
		this.applicationCriticality = applicationCriticality;
	}
	public int getIsTerminalApplication() {
		return isTerminalApplication;
	}
	public void setIsTerminalApplication(int isTerminalApplication) {
		this.isTerminalApplication = isTerminalApplication;
	}

	
	

}
