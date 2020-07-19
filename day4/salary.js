let sales=+prompt("Enter the sales")
		if(sales <= 5000 )
		{
		console.log("you  are no of sales are :",sales,"So  total commission earned by you is 2% ");
		} 
		else if(sales>5000 && sales <=10000)
		{
			console.log("you  are no of sales are :",sales,"So  total commission earned by you is 5% ");
		} 
		else if(sales>10001 && sales <=20000)
		{
			console.log("you  are no of sales are:",sales,"So  total commission earned by you is 7% ");
		} 
		else 
		{
			console.log("you  are no of sales are:",sales,"So  total commission earned by you is 10% ");
		}