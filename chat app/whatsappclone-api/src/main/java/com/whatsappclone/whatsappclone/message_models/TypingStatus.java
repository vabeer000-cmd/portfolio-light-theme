package com.whatsappclone.whatsappclone.message_models;

import lombok.Data;

@Data
public class TypingStatus {

	private String sender;
	private boolean isTyping;
}
