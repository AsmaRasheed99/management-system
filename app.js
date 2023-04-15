let empData=[];
if(localStorage.empData != null){
    empData=JSON.parse(localStorage.empData);
    render();
  }
 
let userName;
let userLevel;
let userID;
let userSalary;
let userDepartment;
let userImg;



let DataCollected=document.getElementById("form");

DataCollected.addEventListener("submit",function(event){


  userName=event.target.username.value;
  userLevel=event.target.userLevel.value;
  userID=event.target.userID.value;
  userSalary=event.target.userSalary.value;
  userDepartment=event.target.userDepartment.value;
  userImg=event.target.userimg.value;
  DataCollected.reset();


  let Employee = new Person(userName ,userLevel,userID,userSalary,userDepartment,userImg);

     empData.push(Employee);
     localStorage.setItem('empData',JSON.stringify(empData) );
     render();
});


function Person(userName ,userLevel,userID,userSalary,userDepartment,userImg) {
  this.userName = userName; 
  this.userLevel = userLevel;
  this.userID = userID;
  this.userSalary = userSalary;
  this.userDepartment = userDepartment;
  this.userImg = userImg;
  

}

function juniorSalary(min, max) {
  return Math.floor( Math.random() *(max - min + 1) + min);
  
   }
  

function MseniorSalary(min, max) {
  return Math.floor( Math.random() *(max - min + 1) + min);
  
   }
  

function seniorSalary(min, max) {
  return Math.floor( Math.random() *(max - min + 1) + min);
  
   }

 function calculateSalary(){
  var selectedValue = document.getElementById("userLevel").value;
  if(selectedValue == "Junior"){
    var input = document.getElementById("userSalary");
    input.setAttribute('value', juniorSalary(500, 1000));
  }
  else if (selectedValue == "Mid-Senior"){
    var input = document.getElementById("userSalary");
    input.setAttribute('value', MseniorSalary(1000, 1500));
  }
  else {
    var input = document.getElementById("userSalary");
    input.setAttribute('value', seniorSalary(1500, 2000));
  }
 }


  


function render(){
  for(let i=0;i<empData.length;i++){

    let sdcard= document.getElementById("Employee-card");
    let divContainer = document.createElement('div');
    let img0 = document.createElement('img');
    img0.src=`${empData[i].userImg}`;
    let divData = document.createElement("div");
    let p1= document.createElement("p");
    p1.textContent=`Name: ${empData[i].userName} - ID: ${empData[i].userID}`;
    let p2= document.createElement("p");
    p2.textContent=`Department: ${empData[i].userDepartment} - Level: ${empData[i].userLevel}`;
    let p3= document.createElement("p");
    p3.textContent=`${empData[i].userSalary}`;
   
  
   
    divContainer.style.boxShadow=" 5px 7px 10px #609EA2";
    
   

    divData.appendChild(p1);
    divData.appendChild(p2);
    divData.appendChild(p3);

  
    divContainer.appendChild(img0);
    divContainer.appendChild(divData);
    sdcard.appendChild(divContainer);

  }
}





