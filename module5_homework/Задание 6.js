let numberArr = [1, 45, 100, 6, 7, 2, 9]
 for (let i = 0; i < numberArr.length; i++)
     {
       for(let j = i+1; j < numberArr.length; j++) 
       {
         if(numberArr[i] == numberArr[j])
		       { 
			         console.log("false")
               return
		       } 
        }
     }
 console.log("true") 