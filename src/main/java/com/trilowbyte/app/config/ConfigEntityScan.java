package com.trilowbyte.app.config;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;

//@Configuration
//@EnableTransactionManagement
public class ConfigEntityScan {

//    @Bean
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
//        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
//        bean.setDataSource(dataSource);
//        bean.setPackagesToScan("com.trilowbyte.app.entity");
//        bean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
//        return bean;
//    }
//    @Bean
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
//        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
//        em.setDataSource(dataSource());
//        em.setPackagesToScan("com.trilowbyte.app.entity");
//        JpaVendorAdapter jpaAdapter = new HibernateJpaVendorAdapter();
//        em.setJpaVendorAdapter(jpaAdapter);
//        em.setJpaProperties(jpaProperties());
//
//        return em;
//    }
//
//    private final Properties jpaProperties() {
//        Properties properties = new Properties();
//        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
//
//        return properties;
//    }
//
//    @Bean
//    public DataSource dataSource() {
//        BasicDataSource dataSource = new BasicDataSource();
//        dataSource.setDriverClassName("org.postgresql.Driver");
//        dataSource.setUrl("jdbc:postgresql://172.17.0.2:5432/trylobuy");
//        dataSource.setUsername("admin");
//        dataSource.setPassword("admin");
//
//        return dataSource;
//    }
}
