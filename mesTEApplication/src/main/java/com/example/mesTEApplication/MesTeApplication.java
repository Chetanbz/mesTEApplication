package com.example.mesTEApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MesTeApplication {

	public static void main(String[] args) {
		System.out.print("Spring Container starting from here");
		SpringApplication.run(MesTeApplication.class, args);
		System.out.print("Welcome to mesTE Applocation");
	}

}
