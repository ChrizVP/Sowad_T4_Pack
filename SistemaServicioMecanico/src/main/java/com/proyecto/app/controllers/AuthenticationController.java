package com.proyecto.app.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import com.proyecto.app.models.User;
import com.proyecto.app.security.UnauthorizedException;
import com.proyecto.app.security.security.JwtTokenUtil;
import com.proyecto.app.security.security.JwtUser;
import com.proyecto.app.security.security.UserDTO;


@Controller
public class AuthenticationController {
	
	@Value("${jwt.header}")
	private String tokenHeader;
	
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	private ResponseEntity<UserDTO> userDTO;
	
	@RequestMapping(value = "/login/auth", method = RequestMethod.POST)
	public String loginUser(@Valid User user, HttpServletRequest request, HttpServletResponse response, Model model){
		
		
				Authentication authentication = authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
				
				if(authentication != null) {
					final JwtUser userDetails = (JwtUser)authentication.getPrincipal();
					SecurityContextHolder.getContext().setAuthentication(authentication);
					final String token = jwtTokenUtil.generateToken(userDetails);
					response.setHeader("Token", token);
					userDTO = new  ResponseEntity<UserDTO>(new UserDTO(userDetails.getUser(), token), HttpStatus.OK);
				
					return "redirect:/home/admin";
					
				}else {
					model.addAttribute("param", true);
					return "redirect:/login";
				}
			
			
	}
	
	
	@RequestMapping(value = "/home/admin")
	private String homeAdmin() {
		return "Home";
	}
	
	@RequestMapping(value = "/home/user")
	private String homeUser() {
		return "Home";
	}
	
	
	@RequestMapping(value = "/login")
	private String servicioHome(Model model) {
		model.addAttribute("param", false);
		return "Login";
	}
	
	@RequestMapping(value = "/")
	private String index() {
		
		return "redirect:/login";
	}
	
}
