package com.ams.application.common;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.ams.domain.repository.UserLoginRepository;

public class MySimpleUrlAuthenticationSuccessHandler implements AuthenticationSuccessHandler
{
	protected Log logger = LogFactory.getLog(this.getClass());
	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
 
	
	public  MySimpleUrlAuthenticationSuccessHandler (){
		
	}
	private UserLoginRepository userLoginRepository;
	
	    public UserLoginRepository getUserLoginRepository()
	{
		return userLoginRepository;
	}

	public void   setUserLoginRepository(UserLoginRepository userLoginRepository)
	{
		this.userLoginRepository = userLoginRepository;
	}

	@Override
	    public void onAuthenticationSuccess(HttpServletRequest request, 
	      HttpServletResponse response, Authentication authentication) throws IOException {
	        handle(request, response, authentication);
	        clearAuthenticationAttributes(request);
	    }
	 
	    protected void handle(HttpServletRequest request, 
	      HttpServletResponse response, Authentication authentication) throws IOException {
	        String targetUrl = determineTargetUrl(authentication);
	 
	        if (response.isCommitted()) {
	            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
	            return;
	        }
	        System.out.println(" User details "+userLoginRepository.getUserPersnId(authentication.getName()));
	        request.getSession(false).setAttribute("persnId", userLoginRepository.getUserPersnId(authentication.getName()));
	        redirectStrategy.sendRedirect(request, response, targetUrl);
	    }
	 
	    /** Builds the target URL according to the logic defined in the main class Javadoc. */
	    protected String determineTargetUrl(Authentication authentication) {
	        boolean isUser = false;
	        boolean isAdmin = false;
	        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
	        for (GrantedAuthority grantedAuthority : authorities) {
	            if (grantedAuthority.getAuthority().equals("ROLE_USER")) {
	                isUser = true;
	                break;
	            } else if (grantedAuthority.getAuthority().equals("ROLE_ADMIN")) {
	                isAdmin = true;
	                break;
	            }
	        }
	 
	        if (isUser) {
	            return "/AMS-REST/indexuser.action";
	        } else if (isAdmin) {
	            return "/AMS-REST/index.action";
	        } else {
	            throw new IllegalStateException();
	        }
	    }
	 
	    protected void clearAuthenticationAttributes(HttpServletRequest request) {
	        HttpSession session = request.getSession(false);
	        if (session == null) {
	            return;
	        }
	        session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
	    }
	 
	    public void setRedirectStrategy(RedirectStrategy redirectStrategy) {
	        this.redirectStrategy = redirectStrategy;
	    }
	    protected RedirectStrategy getRedirectStrategy() {
	        return redirectStrategy;
	    }

}
