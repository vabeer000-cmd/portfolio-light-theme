package com.whatsappclone.whatsappclone.Entity;



import java.time.LocalDateTime;

import com.whatsappclone.whatsappclone.enums.MessageStatus;
import com.whatsappclone.whatsappclone.enums.MessageType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity(name="messages")
@Getter
@Setter
public class Message  extends BaseEntity{
	
	@ManyToOne
	@JoinColumn(name="chat_id",nullable=false)
	private Chat chat;
	
	@ManyToOne
	@JoinColumn(name="sender_id",nullable=false)
	private User sender;
	
	@Column(name="content", columnDefinition = "TEXT")
	private String content;
	
	@Enumerated(EnumType.STRING)
	@Column(name="message_type")
	private MessageType messageType;
	
	@Column(name = "mediaUrl")
	private String mediaUrl;
	
	@Enumerated(EnumType.STRING)
	@Column(name="status")
	private MessageStatus status;

	@Column(name="timestamp")
	private LocalDateTime timestamp;
}


