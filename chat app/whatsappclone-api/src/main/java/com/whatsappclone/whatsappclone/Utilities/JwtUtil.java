
package com.whatsappclone.whatsappclone.Utilities;
//
//import io.jsonwebtoken.*;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//
//import javax.crypto.SecretKey;
//import java.nio.charset.StandardCharsets;
//import java.util.Date;
//
//@Component
//public class JwtUtil {
//
//    private final SecretKey secretKey;
//    private final long jwtExpiration = 3600000; // 1 hour
//
//    public JwtUtil(@Value("${jwt.secret.key}") String jwtSecret) {
//        // Use a secure HMAC-SHA256 key
//        this.secretKey = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
//    }
//
//    // Generate JWT token
//    public String generateToken(String phone) {
//        return Jwts.builder()
//                .setSubject(phone)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
//                .signWith(secretKey, SignatureAlgorithm.HS256)
//                .compact();
//    }
//
//    // Extract phone number from token
//    public String extractPhoneNumber(String token) {
//        return Jwts.parserBuilder()
//                .setSigningKey(secretKey)
//                .build()
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//
//    // Validate token and handle errors gracefully
//    public boolean isTokenValid(String token) {
//        try {
//            Jwts.parserBuilder()
//                    .setSigningKey(secretKey)
//                    .build()
//                    .parseClaimsJws(token);
//            return true;
//        } catch (ExpiredJwtException e) {
//            System.out.println("Token expired");
//        } catch (UnsupportedJwtException e) {
//            System.out.println("Unsupported JWT");
//        } catch (MalformedJwtException e) {
//            System.out.println("Malformed JWT");
//        } catch (SignatureException e) {
//            System.out.println("Invalid signature");
//        } catch (IllegalArgumentException e) {
//            System.out.println("Invalid token");
//        }
//        return false;
//    }
//}
