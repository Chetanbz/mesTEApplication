package com.example.mesTEApplication.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mesTEApplication.model.MesTEAccessDTO;
import com.example.mesTEApplication.model.MesTERequestAccess;
import com.example.mesTEApplication.model.ResponseDTO;
import com.example.mesTEApplication.service.IMesTEService;

@RestController
@RequestMapping("/Request")
public class mesTEApplicationLogicController {
	
	@Autowired
	IMesTEService mesTEService;
	
	@RequestMapping("/getPackageListFromDB")
	public ResponseEntity<ResponseDTO> getPackageList(){
		List <String> packageListfromDB = mesTEService.getPackageFromDB();
		ResponseDTO responseDTO = new ResponseDTO("get Package successful from DB", packageListfromDB);
		return new ResponseEntity<ResponseDTO>(responseDTO, HttpStatus.OK);
	
	}
	
	@RequestMapping("/getApplicationListFromDB/{packageName}")
	public ResponseEntity<ResponseDTO> getApplicationList(@PathVariable("packageName") String packageName){
		List <String> applicationListfromDB = mesTEService.getApplicationListFromDB(packageName);
		ResponseDTO responseDTO = new ResponseDTO("get Application successful from DB", applicationListfromDB);
		return new ResponseEntity<ResponseDTO>(responseDTO, HttpStatus.OK);
		
	}
	
	@RequestMapping(value = {"","/","/get"})
	public ResponseEntity<ResponseDTO> getMesTEResquestData(){
		List<MesTERequestAccess> mesTERequestAccessList = null;
		mesTERequestAccessList = mesTEService.getmesTERequestList();
		ResponseDTO responseDTO = new ResponseDTO("Get Call Sucess", mesTERequestAccessList);
		return new ResponseEntity<ResponseDTO>(responseDTO, HttpStatus.OK);
		
	}
	
	@RequestMapping("/get/{reqId}")
	public  ResponseEntity<ResponseDTO> getEmployeePayrollData(@PathVariable("reqId") int reqId){
		MesTERequestAccess mesTERequestAccess = null;
		mesTERequestAccess = mesTEService.getmesTERequestById(reqId);
		ResponseDTO responseDTO = new ResponseDTO("Get Call Sucess", mesTERequestAccess);
		return new ResponseEntity<ResponseDTO>(responseDTO, HttpStatus.OK);
	}
	
	@PostMapping("/createRequest")
	public ResponseEntity<ResponseDTO> createRequest(@RequestBody MesTEAccessDTO  mesTEAccessDTO ){
		MesTERequestAccess  mesTERequestAccess = mesTEService.createRequestAccess(mesTEAccessDTO);
		ResponseDTO responseDTO = new ResponseDTO("created request successfully from DB", mesTERequestAccess);
		return new ResponseEntity<ResponseDTO>(responseDTO, HttpStatus.OK);
		
	}

}
