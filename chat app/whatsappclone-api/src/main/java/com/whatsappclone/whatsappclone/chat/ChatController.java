package com.whatsappclone.whatsappclone.chat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.whatsappclone.whatsappclone.Entity.Chat;
import com.whatsappclone.whatsappclone.Entity.Message;
import com.whatsappclone.whatsappclone.enums.MessageType;


@RestController
@RequestMapping("/api/chats")
public class ChatController {
	
	@Autowired
	private ChatService chatService;

	@PostMapping("/create")
	public ResponseEntity<Chat> createChat(@RequestParam Long user1,@RequestParam Long user2){
		return ResponseEntity.ok(chatService.getOrCreateChat(user1, user2)) ;
		
	}
	
	@PostMapping("/send-message")
	public ResponseEntity<Message> sendMessage(@RequestParam Long ChatId,
			                                   @RequestParam Long senderId,
			                                   @RequestParam String content,
			                                   @RequestParam MessageType type
			                                   )
	{
		
		return ResponseEntity.ok(chatService.sendMessage(ChatId, senderId, content, type));
	}
	@GetMapping("/{chatId}/messages")
	public ResponseEntity<List<Message>> getChatMessages(
			@PathVariable Long chatId){
		
		return ResponseEntity.ok(chatService.getChatMessages(chatId));
		
		
	}
}
