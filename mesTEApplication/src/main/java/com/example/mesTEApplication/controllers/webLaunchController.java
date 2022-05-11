package com.example.mesTEApplication.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class webLaunchController {
	
	@GetMapping("/hellopage")
	public String helloapp() {
		System.out.print("Hello app");
		return "helloUser";
		
	}
	
	@GetMapping("/mesTEPage")
	public String mesTEPage() {
		System.out.print("mesTE Page and user is " );
		return "mesTE";
	}
	@GetMapping("/requestMesTEPage")
	public String requestMesTEPage() {
		System.out.print("Request mesTE Page is " );
		return "allrequestPage";
	}

}
