package com.whatsappclone.whatsappclone.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ControllerAdvice;
//Why Use @ControllerAdvice for Global Handling:
//Centralized Error Handling: You can manage error responses from one location.
//Cleaner Controllers: Keeps your controllers focused on the main logic, while error handling is centralized.
//Reusability: The same exception handler can be applied to multiple controllers.
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(PhoneNumberAlreadyExistsException.class)
    public ResponseEntity<String> handlePhoneNumberAlreadyExists(PhoneNumberAlreadyExistsException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    // You can add other global exception handlers here as needed
    @ExceptionHandler(InvalidPhoneNumberOrPasswordException.class)
    public ResponseEntity<String> handle(InvalidPhoneNumberOrPasswordException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
}
