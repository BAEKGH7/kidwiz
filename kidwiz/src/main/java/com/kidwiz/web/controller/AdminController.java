package com.kidwiz.web.controller;

import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kidwiz.web.service.AdminService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/api/admin/member")
	public String getMember() {
		
		List<Map<String, Object>> map = adminService.getMember();
		
		JSONObject json = new JSONObject();
		JSONArray arr= new JSONArray(map);
		json.put("member", arr);

		return json.toString();
	}
	
	@PostMapping("/api/admin/changeGrade")
	public int changeGrade(@RequestBody Map<String, Object> row) {
		System.out.println(row);
		
		return adminService.changeGrade(row);
	}
	
	
}
