package com.ams.interfaces.web.spring_mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.ams.application.common.ServiceException;
import com.ams.application.service.usermanagerservice.ManageUser;
import com.ams.domain.model.person.Person;
import com.ams.domain.model.person.Response;

@Controller
@SessionAttributes("persnId")
public class UserController
{
	@Autowired
	private ManageUser	manageUser;

	@RequestMapping("users")
	@ResponseBody
	public List<Person> getUsersList() throws ServiceException
	{
		return manageUser.getAllUsers();
	}

	@RequestMapping(value = "user/{userId}",method = RequestMethod.POST)
	@ResponseBody
	public Person getUserDetail(@PathVariable Long userId) throws
												ServiceException
	{

		return manageUser.getUserDetails(userId);

	}

	@RequestMapping(value = "user/UserDetail",method = RequestMethod.POST)
	@ResponseBody
	public Person getUserDetailByPersnIdInSesion(@ModelAttribute("persnId") long persnId) throws
												ServiceException
	{
		return manageUser.getUserDetails(persnId);

	}

	@RequestMapping(value = "user/flatNum/{flatNumber}",method = RequestMethod.POST)
	@ResponseBody
	public Person getUserDetailByFlatNumber(@PathVariable Long flatNumber) throws
															ServiceException
	{
		System.out.println("FlatNumber : " + flatNumber);
		return manageUser.getUserDetailsByFlatNumber(flatNumber);

	}
	
	
	
	@RequestMapping(value = "registeruser",method = RequestMethod.POST)
	@ResponseBody
	public Response saveUser(@RequestBody final Person user) throws ServiceException
	{
		try
		{
			System.out.println(user.getStartDate());
			manageUser.registerUser(user);
			Response response = new Response();
			response.setResult("SUCCESS");
			return response;
		} catch (Exception e)
		{
			throw new ServiceException(e.toString());
		}

	}

	@RequestMapping(value = "user",method = RequestMethod.PUT)
	@ResponseBody
	public String updateUseretail(@RequestBody final Person user) throws ServiceException
	{
		System.out.println(user.getPersnFirstName());
		manageUser.updateUserDetails(user);
		return "SUCCESS";

	}

	@RequestMapping(value = "user/{userId}",method = RequestMethod.DELETE)
	@ResponseBody
	public String deleteUser(@PathVariable final Long userId) throws ServiceException
	{
		System.out.println(userId);
		manageUser.deleteUser(userId);
		return "SUCCESS";

	}

	@RequestMapping(value="/static/view/usermanager.html")
	    public String getComputersTemplate() {
		System.out.println("usermanager");
	        return "usermanager.html";   
	    }

	@RequestMapping(value="/static/view/billdashboard.html")
	    public String getBillTemplate() {
		System.out.println("billdashboard");
	        return "billdashboard.html";   
	    }

	@RequestMapping(value="/static/view/userprofile.html")
	    public String getComputers() {
		System.out.println("usermanager");
	        return "userprofile.html";   
	    }

}
