package com.ams.interfaces.web.spring_mvc.controller;

import java.util.LinkedHashMap;
import java.util.concurrent.BlockingDeque;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController
{
	@RequestMapping(value = "login.action")
	public String loginPage(Model model)
	{
		return "login";
	}

	@RequestMapping("index.action")
	public String loadHomePage(Model model)
	{
		return "indexAng.jsp";
	}
	
	@RequestMapping("indexuser.action")
	public String loadUserHomePage(Model model)
	{
		new LinkedHashMap();
		return "index.jsp";
	}
}
