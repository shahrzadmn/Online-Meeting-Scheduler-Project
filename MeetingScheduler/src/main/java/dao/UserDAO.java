package com.sandbox.MeetingScheduler.dao;

import java.util.List;

import com.sandbox.MeetingScheduler.data.UserTbl;

public interface UserDAO {
 
    public void addUser(UserTbl p);
    public void updateUser(UserTbl p);
    public List<UserTbl> listUsers();
    public UserTbl getUserById(int id);
    public void removeUser(int id);
}
