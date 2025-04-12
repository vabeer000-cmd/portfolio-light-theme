package com.whatsappclone.whatsappclone.user;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.whatsappclone.whatsappclone.exceptions.PhoneNumberAlreadyExistsException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET: Retrieve all users
    @GetMapping("/allUsers")
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    // POST: Create a new user
    @PostMapping("/createUser")
    public ResponseEntity<UserResponseDTO> createUser(@Valid @ModelAttribute CreateUserRequestDTO requestDTO) {
    	System.out.println("CREATE USER");
        return ResponseEntity.ok(userService.saveUser(requestDTO));
    }
    
//    @ExceptionHandler(PhoneNumberAlreadyExistsException.class)
//    public ResponseEntity<String> handlePhoneNumberAlreadyExists(PhoneNumberAlreadyExistsException ex) {
//        // Returns a 400 Bad Request status with the exception message
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
//    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable Long id, @Valid @RequestBody CreateUserRequestDTO requestDTO) {
        return ResponseEntity.ok(userService.updateUser(id, requestDTO));
    }
    
    @GetMapping("/profilePicture/{filename}")
    public ResponseEntity<byte[]> getProfilePicture(@PathVariable String filename) throws IOException {
        // Path to the image file
        Path filePath = Paths.get("uploads/" + filename);
        
        // Read the image file as a byte array
        byte[] imageBytes = Files.readAllBytes(filePath);
        
        // Determine the MIME type based on the file's content (using probeContentType)
        String mimeType = Files.probeContentType(filePath);
        
        // If MIME type is not found, default to "application/octet-stream"
        if (mimeType == null) {
            mimeType = "application/octet-stream";
        }

        // Return the image with the correct MIME type
        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(mimeType)) // Set the MIME type dynamically
                .body(imageBytes);
    }

    
    //Login controller
    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> userLogin(@RequestBody UserResponseDTO userResponseDTO){
    	return ResponseEntity.ok(userService.userLogin(userResponseDTO));    	
    }
}
