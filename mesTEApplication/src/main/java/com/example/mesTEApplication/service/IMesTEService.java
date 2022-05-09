package com.example.mesTEApplication.service;

import java.util.List;

import com.example.mesTEApplication.model.MesTEAccessDTO;
import com.example.mesTEApplication.model.MesTERequestAccess;

public interface IMesTEService {
	

	public List<String> getPackageFromDB();
	
	public List<String> getApplicationListFromDB(String packageName);
	
	public List<MesTERequestAccess> getmesTERequestList();
	
	public MesTERequestAccess getmesTERequestById(int reqId);
	
	public MesTERequestAccess createRequestAccess(MesTEAccessDTO  mesTEAccessDTO);
	

}
