package com.sandbox.MeetingScheduler.service;

import java.util.List;
 
import com.sandbox.MeetingScheduler.data.UserTbl;;
 
public interface UserService {
 
    public void addUser(UserTbl p);
    public void updateUser(UserTbl p);
    public List<UserTbl> listUsers();
    public UserTbl getUserById(int id);
    public void removeUser(int id);
     
}