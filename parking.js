
let parkedVehicles = [];
let totalSpace = 100;
let used = 0;
let vehicleId = 1;


let vehiclesize = { car: 3, bike: 1, truck: 5}

console.log(vehiclesize['car']);
console.log(vehiclesize['cycle']);

function addVehicle(type) {
  
if (vehiclesize[type] == undefined) {
    console.log("not valid");
    return
  }

  let space = vehiclesize[type];
  

  if (used + space > totalSpace) {
    console.log("no space for parking");
    return
  }

  let vehicle = {
    id: vehicleId,
    type: type,
    space: space
  }

  vehicleId++;
  parkedVehicles.push(vehicle)
  used = used + space;

  console.log(" vehicle parked", vehicle);
}

 function removeVehicle(vecid){
  
   index = -1;
  for(let i=0; i<parkedVehicles.length;i++){
   if(parkedVehicles[i].id === vecid ){
    index=i;
    break;
   }
   
}
if(index === -1 ){
  console.log("vehicle not found or its not parked");
}

let vid=parkedVehicles[index];
 used = used-vid.space;
 console.log(vid);
 parkedVehicles.splice(index,1);
  console.log( "vehicle",vid," has been removed");
}

function Leftspace() {
  let availablespace= totalSpace - used;
  return availablespace
}

function showvehicles() {
  return parkedVehicles
}

addVehicle("bike")
addVehicle("car")
console.log("all parked vehicles",showvehicles());
addVehicle("truck")
addVehicle("cycle")
console.log("all parked vehicles",showvehicles());
console.log(showvehicles());
console.log("left:", Leftspace());
removeVehicle(1)