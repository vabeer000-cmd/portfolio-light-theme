package com.whatsappclone.whatsappclone.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/*
 * Why this design?

Inheritance: Common fields (id, createdAt, updatedAt) are inherited from BaseEntity, ensuring consistency.
Keeps the entity focused on user-specific data (SRP).

 */

@Getter
@Setter

@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "phone", nullable = false, unique = true, length = 15)
    private String phone;

    @Column(name = "profile_picture")
    private String profilePicture;
    
    @Column(name = "password")
    private String password;

}
