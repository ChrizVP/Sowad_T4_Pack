package com.proyecto.app.controllersRest;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.app.models.User;
import com.proyecto.app.repository.UserRepository;
import com.proyecto.app.service.UserService;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
public class UserRestController {

	@Autowired private UserService userService;
	
	@GetMapping(value = "/users")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> users = userService.findAll();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@GetMapping(value = "/getuser")
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	public ResponseEntity<User> getUser(Principal principal){
		
		User user = userService.getUserByEmail(principal.getName());
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
}
