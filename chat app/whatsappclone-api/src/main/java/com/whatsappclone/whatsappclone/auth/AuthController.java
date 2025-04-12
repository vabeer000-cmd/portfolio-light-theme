package com.whatsappclone.whatsappclone.auth;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.whatsappclone.whatsappclone.Entity.User;
//import com.whatsappclone.whatsappclone.Utilities.JwtUtil;
//import com.whatsappclone.whatsappclone.user.UserRepository;
//import com.whatsappclone.whatsappclone.user.UserResponseDTO;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody UserResponseDTO user) {
//       
//        return ResponseEntity.ok(new AuthResponse(token));
//    }
//
//    // Add registration endpoint if needed
//}
