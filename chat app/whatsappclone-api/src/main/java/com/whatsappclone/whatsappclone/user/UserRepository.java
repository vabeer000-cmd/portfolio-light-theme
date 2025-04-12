package com.whatsappclone.whatsappclone.user;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whatsappclone.whatsappclone.Entity.User;

//Why this design?
//
//JpaRepository provides CRUD operations out of the box.
//Adheres to the ISP (Interface Segregation Principle) by keeping data access separate from business logic.


public interface UserRepository extends JpaRepository<User, Long> {
	   public boolean existsByPhone(String phone); // This will check if a user with the given phone exists
//       public Optional<User> findByUsername(String username);
	   public Optional<User> findByPhone(String phone);
       
}
