package com.example.mesTEApplication.model;

import java.util.List;

public class ApplicationStatusDTO {
	
	public List autoApproveApplications;
	public List approveApplications;
	public List rejectedApplicatios;
	
	public ApplicationStatusDTO(List autoApproveApplications, List approveApplications,List rejectedApplicatios) {
		this.autoApproveApplications = autoApproveApplications;
		this.approveApplications = approveApplications;
		this.rejectedApplicatios = rejectedApplicatios;
	}
	public ApplicationStatusDTO() {
		
	}
	
	
	

}
