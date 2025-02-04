document.getElementById("votingForm").addEventListener('submit',(e)=>{
	e.preventDefault();
	const age=document.getElementById("age").value;
	const name=document.getElementById("name").value;
	if(age=="" && name==""){
		alert("Please enter valid details");
		return;
	}else{
		let promise=new Promise((resolve,reject)=>{
			if(parseInt(age)>18){
				setTimeout(()=>{
					resolve(`Welcome,${name}. You can vote.`);
				},4000)
			}else{
				setTimeout(()=>{
					reject("Oh sorry Doe. You aren't old enough.");
				},4000)
			}
		});
		promise.then((data)=>{
			alert(data);
		}).catch((err)=>{
			alert(err);
		})
	}
})
