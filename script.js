//your JS code here. If required.
function validate(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let age = document.getElementById('age').value;
			let name = document.getElementById('name').value;
			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
				
		}, 4000);
		
	});

	
}

function ageVerify(){

validate().then((res)=>{
    // console.log(res);
	alert(res);
}).catch((err)=>{
    alert(err);
});
}