package com.whatsappclone.whatsappclone.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="chats")
@Getter
@Setter
@NoArgsConstructor

public class Chat extends BaseEntity{
	
	@ManyToOne
	@JoinColumn(name="user1_id")
	 private User user1;
	
	@ManyToOne
	@JoinColumn(name="user2_id")
	private User user2;
	
	@OneToOne
	@JoinColumn(name="last_message_id")
	private Message last_message;
	
	

}
