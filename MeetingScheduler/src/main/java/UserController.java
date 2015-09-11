package com.sandbox.MeetingScheduler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sandbox.MeetingScheduler.dao.UserDAOImpl;
import com.sandbox.MeetingScheduler.data.UserTbl;
import com.sandbox.MeetingScheduler.service.UserService;
 

@Controller
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	 
    private UserService userService;
     
    @Autowired(required=true)
    @Qualifier(value="userService")
    public void setUserService(UserService ps){
        this.userService = ps;
    }
     
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public String listUsers(Model model) {
        model.addAttribute("user", new UserTbl());
        model.addAttribute("listUsers", this.userService.listUsers());
        return "user";
    }
     
    //For add and update user both
    @RequestMapping(value= "/user/add", method = RequestMethod.POST)
    public String addUser(@ModelAttribute("user") UserTbl p){
    	 logger.info(">>> ADDING USER: " + p);
    	 
    	 try{
    		 p.getUserId();
    		 this.userService.updateUser(p);
    	 }catch(Exception e) {
    		 this.userService.addUser(p);
    	 
    	 }
    
        return "redirect:/users";
         
    }
     
    @RequestMapping("/remove/{id}")
    public String removeUser(@PathVariable("id") int id){
         
        this.userService.removeUser(id);
        return "redirect:/users";
    }
  
    @RequestMapping("/edit/{id}")
    public String editUser(@PathVariable("id") int id, Model model){
        model.addAttribute("user", this.userService.getUserById(id));
        model.addAttribute("listUsers", this.userService.listUsers());
        return "user";
    }
     
}