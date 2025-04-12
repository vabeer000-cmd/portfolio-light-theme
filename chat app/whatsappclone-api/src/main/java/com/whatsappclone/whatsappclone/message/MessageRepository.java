package com.whatsappclone.whatsappclone.message;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whatsappclone.whatsappclone.Entity.Chat;
import com.whatsappclone.whatsappclone.Entity.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long>{

	List<Message> findByChatOrderByTimestampAsc(Chat chat);
}
