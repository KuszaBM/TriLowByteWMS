package com.trilowbyte.app;

import com.trilowbyte.app.controllers.DefController;
import com.trilowbyte.app.entity.Customer;
import com.trilowbyte.app.repositories.CustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//@EntityScan("com.trilowbyte.app.entity")
//@EnableJpaRepositories("com.trilowbyte.app.repositories")
//@ComponentScan("com.trilowbyte.app")
//@EnableAutoConfiguration(exclude = { DataSourceAutoConfiguration.class })
@SpringBootApplication

//@EnableAutoConfiguration(exclude = { DataSourceAutoConfiguration.class })
public class TrylobuyApplication {
	protected Logger log = LoggerFactory.getLogger(DefController.class);
	public static void main(String[] args) {
		SpringApplication.run(TrylobuyApplication.class, args);
	}
}
