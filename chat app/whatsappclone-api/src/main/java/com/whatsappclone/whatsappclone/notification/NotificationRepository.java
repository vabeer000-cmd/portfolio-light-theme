package com.whatsappclone.whatsappclone.notification;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whatsappclone.whatsappclone.Entity.Notification;
import com.whatsappclone.whatsappclone.Entity.User;
import com.whatsappclone.whatsappclone.enums.NotificationStatus;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUserAndStatus(User user, NotificationStatus status);
}