var male =[
    "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
]
var female =[
    "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
]

function calculator(){
    var name=""
    var gender=document.forms["myStuff"]["gender"].value;
    var date=document.forms["myStuff"]["date"].value;
    var dateObject=new Date(date);
    var day=dateObject.getDay();
if (gender==="male"){
    name=male[day];
}else if (gender==="female"){
    name=female[day];
}else{
    console.log("not applicable")
}
 document.getElementById("prompt").innerHTML=name;
 return name
}
