package com.dailycoder.confifgserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfifgServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfifgServerApplication.class, args);
	}

}
