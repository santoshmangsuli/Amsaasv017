<%@ page session="false" %>
<html>
<head>
<title>Upload File Request Page</title>
</head>
<body>

	<form method="POST" action="AMS-REST/uploady" enctype="multipart/form-data">
		File to upload: <input type="file" name="file"><br /> 
		 
		<input type="submit" value="Upload"> Press here to upload the file!
	</form>
	
</body>
</html>