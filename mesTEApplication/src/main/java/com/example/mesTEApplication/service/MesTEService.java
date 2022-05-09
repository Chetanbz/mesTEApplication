package com.example.mesTEApplication.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.mesTEApplication.model.MesTEAccessDTO;
import com.example.mesTEApplication.model.MesTERequestAccess;


@Service
public class MesTEService implements IMesTEService{
	
	List<MesTERequestAccess> mesTERequestAccessList = new ArrayList<>();
	
	
	@Override
	public List<MesTERequestAccess> getmesTERequestList(){
		return mesTERequestAccessList;
	}
	
	@Override
	public MesTERequestAccess getmesTERequestById(int reqId){
		return mesTERequestAccessList.get(reqId-1);
	}
	
	@Override
	public MesTERequestAccess createRequestAccess(MesTEAccessDTO  mesTEAccessDTO) {
		
		MesTERequestAccess mesTERquestAccess = null;
		mesTERquestAccess = new MesTERequestAccess(mesTERequestAccessList.size()+1, mesTEAccessDTO );
		mesTERequestAccessList.add(mesTERquestAccess);
		
		return mesTERquestAccess;
		
	}
	
	@Override
	public List<String> getPackageFromDB(){
		List packageList = new ArrayList<>(Arrays.asList("Car","Scooty","Bike","Skate"));
		return packageList;
		
	}
	
	@Override
	public List<String> getApplicationListFromDB(String packageName){
		List<String> applicationList = null;
		
		if(packageName.equals("Car")){
			applicationList = new ArrayList<>(Arrays.asList("Fortuner","Maruti","Alto","Swift"));
		}
		else if(packageName.equals("Bike")){
			applicationList = new ArrayList<>(Arrays.asList("Pulser","CD110","Honda","Kawasaki"));
		}
		
		return applicationList;
	}
	
	
	
	

}
