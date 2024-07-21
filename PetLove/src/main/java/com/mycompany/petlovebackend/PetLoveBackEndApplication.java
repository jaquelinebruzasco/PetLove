package com.mycompany.petlovebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
@EnableJpaRepositories(basePackages = { "com.mycompany.petlovebackend.model", "com.mycompany.petlovebackend.repository" })
@ComponentScan(basePackages = "com.mycompany.petlovebackend")
@EntityScan(basePackages = "com.mycompany.petlovebackend.model")
public class PetLoveBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetLoveBackEndApplication.class, args);
	}

}