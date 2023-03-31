//your JS code here. If required.
function validate(){
    let age = document.getElementById('age').value;
	let name = document.getElementById('name').value;
    if(age=="" || name==""){
        alert("input fields cannot be empty");
        return ;
                
    }
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			
            // console.log(age, name);
			if(age>18){
            
                var ans = `Welcome, ${name}. You can vote.`;
                // console.log(ans);
				resolve(ans);
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