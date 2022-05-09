package com.example.mesTEApplication.model;

public class MesTEPackageDTO {
	
	private int packageID;
	private String packageName;
	
	public MesTEPackageDTO() {
		System.out.print("mesTE PackageDTO Constructor Called");
		
	}

	
	public MesTEPackageDTO(int packageID, String packageName) {
		this.packageID = packageID;
		this.packageName = packageName;
	}
	
	public int getPackageID() {
		return packageID;
	}
	public void setPackageID(int packageID) {
		this.packageID = packageID;
	}
	public String getPackageName() {
		return packageName;
	}
	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}
	
}
