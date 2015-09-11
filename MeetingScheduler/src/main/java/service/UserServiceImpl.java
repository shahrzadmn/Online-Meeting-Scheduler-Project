package com.sandbox.MeetingScheduler.service;


import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sandbox.MeetingScheduler.dao.UserDAO;
import com.sandbox.MeetingScheduler.data.UserTbl;
 
@Service
public class UserServiceImpl implements UserService {
     
    private UserDAO userDAO;
 
    public void setUserDAO(UserDAO UserDAO) {
        this.userDAO = UserDAO;
    }
 
    @Override
    @Transactional
    public void addUser(UserTbl p) {
        this.userDAO.addUser(p);
    }
 
    @Override
    @Transactional
    public void updateUser(UserTbl p) {
        this.userDAO.updateUser(p);
    }
 
    @Override
    @Transactional
    public List<UserTbl> listUsers() {
        return this.userDAO.listUsers();
    }
 
    @Override
    @Transactional
    public UserTbl getUserById(int id) {
        return this.userDAO.getUserById(id);
    }
 
    @Override
    @Transactional
    public void removeUser(int id) {
        this.userDAO.removeUser(id);
    }
 
}