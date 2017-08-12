package com.ams.domain.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



@Repository("UserLoginRepository")
public class UserLoginRepository_Impl implements UserLoginRepository
{

	
	private DataSource dataSource;
	public DataSource getDataSource()
	{
		return dataSource;
	}

	private String sql = "SELECT * FROM user_roles where username=?";
	Connection conn = null;
	
	public void setDataSource(DataSource dataSource)
	{
		this.dataSource = dataSource;
	}
	
	@Override
	public long getUserPersnId(String username)
	{
		long persnId = 0;
		try{
		conn = dataSource.getConnection();
		PreparedStatement ps = conn.prepareStatement(sql);
		ps.setString(1, username);
		ResultSet result =  ps.executeQuery();
		if(result.next()){
			persnId = result.getLong("persnId");
		}
		ps.close();
		}catch (SQLException e) {
			throw new RuntimeException(e);
				
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {}
			}
		}

		return persnId;
	}

}
