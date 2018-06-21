<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        // 1,1,2,3,5,8,13...

	var a,b,result;
	a=0;
	b=1;
	result=b;
	for(var i=1;i<100;i++)
	{
	document.write(result+"<br>");
		result	=a+b;
		a=b;
		b=result;
	}
    
    </script>


</head>
<body>

</body>
</html>
