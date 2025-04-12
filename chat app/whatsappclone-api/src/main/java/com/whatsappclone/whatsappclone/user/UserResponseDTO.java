package com.whatsappclone.whatsappclone.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDTO {

    private Long id;
    private String username;
    private String phone;
    private String profilePicture;
    private String password;
    private String token;

    public UserResponseDTO(Long id, String username, String phone, String profilePicture,String password) {
        this.id = id;
        this.username = username;
        this.phone = phone;
        this.profilePicture = profilePicture;
        this.password=password;
    }

}
