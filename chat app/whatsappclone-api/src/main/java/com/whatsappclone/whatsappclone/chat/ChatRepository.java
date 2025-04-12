package com.whatsappclone.whatsappclone.chat;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whatsappclone.whatsappclone.Entity.Chat;
import com.whatsappclone.whatsappclone.Entity.User;

@Repository
public interface ChatRepository extends JpaRepository<Chat,Long >{

	Optional<Chat>findByUser1AndUser2(User user1,User user2);
	
}
