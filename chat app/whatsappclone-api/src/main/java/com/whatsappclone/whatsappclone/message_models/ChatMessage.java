package com.whatsappclone.whatsappclone.message_models;

import java.time.LocalDateTime;

import com.whatsappclone.whatsappclone.enums.MessageType;

import lombok.Data;

@Data
public class ChatMessage {

	private String sender;
	private String content;
	private MessageType messageType;
	private LocalDateTime timestamp;
}
