package com.whatsappclone.whatsappclone.chat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whatsappclone.whatsappclone.Entity.Chat;
import com.whatsappclone.whatsappclone.Entity.Message;
import com.whatsappclone.whatsappclone.Entity.User;
import com.whatsappclone.whatsappclone.enums.MessageStatus;
import com.whatsappclone.whatsappclone.enums.MessageType;
import com.whatsappclone.whatsappclone.message.MessageRepository;
import com.whatsappclone.whatsappclone.user.UserRepository;

@Service
public class ChatService {
	
	@Autowired
	private ChatRepository chatRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MessageRepository messageRepository;
	
	
	
	public Chat getOrCreateChat(Long userId1,Long userId2) {
		User user1=userRepository.findById(userId1).orElseThrow();
		User user2=userRepository.findById(userId2).orElseThrow();
		
		return chatRepository.findByUser1AndUser2(user1, user2).orElseGet(
				()->{
					Chat chat=new Chat();
					chat.setUser1(user1);
					chat.setUser2(user2);
					return chatRepository.save(chat);
				});
	}
	
	public Message sendMessage(Long chatId,Long senderId,String content,MessageType type) {
		 Chat chat=chatRepository.findById(chatId).orElseThrow();
		 User sender=userRepository.findById(senderId).orElseThrow();
		 
		 Message message=new Message();
		 message.setChat(chat);
		 message.setSender(sender);
		 message.setContent(content);
		 message.setMessageType(type);
		 message.setStatus(MessageStatus.SENT);
		 
		 return messageRepository.save(message);
	}
	
	public List<Message> getChatMessages(Long chatId){
		Chat chat=chatRepository.findById(chatId).orElseThrow();
		return messageRepository.findByChatOrderByTimestampAsc(chat);
	}
	
      
}
