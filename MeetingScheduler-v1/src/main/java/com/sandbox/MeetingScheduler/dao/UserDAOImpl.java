package com.sandbox.MeetingScheduler.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.sandbox.MeetingScheduler.data.UserTbl;


@Repository
public class UserDAOImpl implements UserDAO {
     
	private static final Logger logger = LoggerFactory.getLogger(UserDAOImpl.class);
 
    private SessionFactory sessionFactory;
     
    public void setSessionFactory(SessionFactory sf){
        this.sessionFactory = sf;
    }
 
    @Override
    public void addUser(UserTbl p) {
        Session session = this.sessionFactory.getCurrentSession();
        session.persist(p);
        logger.info("User saved successfully, User Details="+p);
    }
 
    @Override
    public void updateUser(UserTbl p) {
        Session session = this.sessionFactory.getCurrentSession();
        session.update(p);
        logger.info("User updated successfully, USer Details="+p);
    }
 
    @SuppressWarnings("unchecked")
    @Override
    public List<UserTbl> listUsers() {
        Session session = this.sessionFactory.getCurrentSession();
        List<UserTbl> usersList = session.createQuery("from UserTbl").list();
        for(UserTbl p : usersList){
            logger.info("Users List::"+p);
        }
        return usersList;
    }
 
    @Override
    public UserTbl getUserById(int id) {
        Session session = this.sessionFactory.getCurrentSession();      
        UserTbl p = (UserTbl) session.load(UserTbl.class, new Integer(id));
        logger.info("User loaded successfully, User details="+p);
        return p;
    }
 
    @Override
    public void removeUser(int id) {
    	Session session = this.sessionFactory.getCurrentSession();
        UserTbl p = (UserTbl) session.load(UserTbl.class, new Integer(id));
        if(null != p){
            session.delete(p);
        }
        logger.info("User deleted successfully, User details="+p);
    }
 
}