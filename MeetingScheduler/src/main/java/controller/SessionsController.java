//package com.sandbox.MeetingScheduler.controller;
//
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.sandbox.MeetingScheduler.service.SessionsService.Credentials;
//
//@RestController
//@RequestMapping("/sessions")
//public class SessionsController {
//
//	@RequestMapping(method = RequestMethod.POST)
//	public String login(@RequestBody Credentials credentials) {
//		return "login";
//	}
//
//	@RequestMapping(value = "/{sessionToken}", method = RequestMethod.GET)
//	@ResponseBody
//	public String getSession(@PathVariable String sessionToken) {
//		return "getSession";
//	}
//
//}
