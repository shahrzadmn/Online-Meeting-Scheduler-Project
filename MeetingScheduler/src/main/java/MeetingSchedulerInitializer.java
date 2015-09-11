//package com.sandbox.MeetingScheduler;
//
//import javax.servlet.ServletContext;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRegistration;
//
//import org.springframework.web.WebApplicationInitializer;
//import org.springframework.web.context.ContextLoaderListener;
//import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
//import org.springframework.web.servlet.DispatcherServlet;
//
//import com.sandbox.MeetingScheduler.configuration.MeetingSchedulerConfiguration;
//
//public class MeetingSchedulerInitializer implements WebApplicationInitializer {
//	@Override
//	public void onStartup(ServletContext container) throws ServletException {
//		AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
//		rootContext.register(MeetingSchedulerConfiguration.class);
//		rootContext.setServletContext(container);
//		
//		ServletRegistration.Dynamic servlet = container.addServlet(
//				"dispatcher", new DispatcherServlet(rootContext));
//
//		servlet.setLoadOnStartup(1);
//		servlet.addMapping("/");
//	}
//}
