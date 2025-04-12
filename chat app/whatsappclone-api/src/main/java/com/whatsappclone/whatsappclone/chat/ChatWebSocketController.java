package com.whatsappclone.whatsappclone.chat;

import java.time.LocalDateTime;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.whatsappclone.whatsappclone.message_models.ChatMessage;
import com.whatsappclone.whatsappclone.message_models.TypingStatus;

@Controller
public class ChatWebSocketController {

	 @MessageMapping("/chat.sendMessage") // Client sends messages here
	    @SendTo("/topic/public") // Broadcast message to all subscribers
	    public ChatMessage sendMessage(ChatMessage message) {
	        message.setTimestamp(LocalDateTime.now());
	        return message;
	    }

	    @MessageMapping("/chat.typing")
	    @SendTo("/topic/typing")
	    public TypingStatus typingStatus(TypingStatus status) {
	        return status;
	    }
}
