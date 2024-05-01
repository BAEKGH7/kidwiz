package com.kidwiz.web.controller;

import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kidwiz.web.service.VueService;

@CrossOrigin
@RestController
public class VueController {
	
	@Autowired
	private VueService vueService;
	
	@GetMapping("/test")
	public String test() {
		List<Map<String, Object>> list = vueService.list();
		JSONObject json = new JSONObject();
		JSONArray arr = new JSONArray(list);
		json.put("list", arr);
		return json.toString();
	}
	
	@GetMapping("/")
	public String index() {
		List<Map<String, Object>> list = vueService.list();
		JSONObject json = new JSONObject();
		JSONArray arr = new JSONArray(list);
		json.put("list", arr);
		return json.toString();
	}
}