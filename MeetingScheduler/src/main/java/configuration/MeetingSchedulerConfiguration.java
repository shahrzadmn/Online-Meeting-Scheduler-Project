//package com.sandbox.MeetingScheduler.configuration;
//
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Properties;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//
//import org.hibernate.annotations.Filter;
//import org.hibernate.dialect.MySQLDialect;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.JpaVendorAdapter;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.Database;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//
//
//@EnableWebMvc
//@ComponentScan({ "com.sandbox.MeetingSchduler" })
//public class MeetingSchedulerConfiguration {
////	@Bean
////	public Properties dataSourceProperties() {
////		// TODO move properties to MeetingScheduler.properties file
////
////		Properties props = new Properties();
////		props.put("driverClassName", "com.mysql.jdbc.Driver");
////		props.put("url", "jdbc:mysql://localhost:3306/msdb");
////		props.put("username", "root");
////		props.put("password", "polarSoosk");
////		return props;
////	}
//
//	@Bean
//	public DataSource dataSource() {
//		DriverManagerDataSource dmds = new DriverManagerDataSource();
//		Properties dsp = dataSourceProperties();
//		//dmds.setConnectionProperties(dsp);
//		dmds.setDriverClassName((String) dsp.get("driverClassName"));
//		dmds.setUrl((String) dsp.get("url"));
//		dmds.setUsername((String) dsp.get("username"));
//		dmds.setPassword((String) dsp.get("password"));
//
//		return dmds;
//	}
//
////	@Bean
////	public Map<String, Object> jpaProperties() {
////		Map<String, Object> props = new HashMap<String, Object>();
////		props.put("hibernate.dialect", MySQLDialect.class.getName());
////		/*
////		 * props.put("hibernate.cache.provider_class",
////		 * HashtableCacheProvider.class.getName());
////		 */
////		return props;
////	}
////
////	@Bean
////	public JpaVendorAdapter jpaVendorAdapter() {
////		HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
////		hibernateJpaVendorAdapter.setShowSql(true);
////		hibernateJpaVendorAdapter.setGenerateDdl(true);
////		hibernateJpaVendorAdapter.setDatabase(Database.MYSQL);
////		return hibernateJpaVendorAdapter;
////	}
////
////	@Bean
////	public PlatformTransactionManager transactionManager() {
////		return new JpaTransactionManager((EntityManagerFactory)
////				localContainerEntityManagerFactoryBean());
////	}
////
////	@Bean
////	public LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean() {
////		LocalContainerEntityManagerFactoryBean lef = new LocalContainerEntityManagerFactoryBean();
////		lef.setDataSource(dataSource());
////		lef.setJpaPropertyMap(this.jpaProperties());
////		lef.setJpaVendorAdapter(this.jpaVendorAdapter());
////		return lef;
////	}
//
//}
