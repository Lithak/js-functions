let role;
switch(role){
	case "Guest":
		console.log("Guest User");
		break;
	case "moderator": 
		console.log("Moderator User");
	default:
		console.log("Unknown User");
}
let myspeed=140;
let result;
switch (true){
    case (myspeed>0 && myspeed<80):
    result = "Speed id Ok";
    break;
case (myspeed>=80 && myspeed<120):
    result="Fast";
    break;
default:
    result="Extreemly Fast";
}
document.write(result);


function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));
  
  x=5;

if (x>2){

console.log(x +" is greater than 2")

}else

{

console.log(x + " is less than 2")

};

let accessAllowed;
let age = 12;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));

  let our_ages = 22;
  if(our_ages < 18 ){
    alert('Too Young.');
  }else if( our_ages > 18 && our_ages < 60){
    alert('You..qualify');
  }else{
    alert('you are too senior');
  }

  let i = 10;
  if (i == 10) {
    if (i < 15)
    document.write(i + " is smaller than 15");
    if (i < 12)
    document.write(i +" is smaller than 12 too");
  else
    document.write(i + " is greater than 15");
}