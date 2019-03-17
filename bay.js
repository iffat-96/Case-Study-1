//bay_assign  here
//if the car received finished status, next platid will come
//array sorting sort()
//for time_arrived, period, status
//replaced by period instead of time_remaining
//which will be in different js file

let log = console.log;




//main idea is 
//make a array of 5 bay
//insert initial data with random time remaining 
//every bay has properties of status, time_remaining, time_arrived
//let status = "available"
//if time_remaining equal to 0, push new platid based on time_arrived sort into available bay
//minus the time_remaining on others based on current how long period this particular bay achieved 0
//foreach bayid, everytime time_remaining  = 0, set status to available and push a platid based on time_arrived sort on this
//return the result
//output should be
//bay 1: available    //bay 2: not available 40 minutes left


//let bay = [{id:"platid",time_remaining:getTime_remaining,status:0}];


///create a constructor for bay and platid

function Platid(platid, time_arrived, time_remaining, status){
  this.platid = platid;
  this.time_arrived = time_arrived;
  this.time_remaining = time_remaining;
  this.status = status;
}

function Bayid(id, Platid, time_arrived, time_remaining, available){
   this.id = id;
   this.time_arrived = time_arrived;
   this.time_remaining = time_remaining;
   this.available = available;
}

let Bay = new Bayid();
bay[0] = bayid(1,123,805,30,"no");

let CarServiceMoment = [];

//generate random time for period
let getPeriod = function(start,range){
  let getRandom = Math.floor((Math.random() * range) + start);
  while(getRandom > range){
    getRandom = Math.floor((Math.random()* range) + start);
  }
  return getRandom;
}
getPeriod(10, 200);  
if(getPeriod > 10 && getPeriod <= 200){
  //make a for loop for 5 bay only
for(i = 0; i<=5; i++){
  time_remained +=getPeriod[i];
}
console.log(time_remained);
}





//this function will return time remaining for each platid
//we will then create setimeout that stop it

//this will check which bay is available 
function checkAvailable(bay){
  return bay.status = "yes";
}
bay.find(checkAvailable);


function getServiceTime(){
    var now = new Date();
    //var hours = now.getHours();
    var mins = now.getMinutes();
    if(mins > 30){
      status = "unavailable";  //unavailable since it been occupied by a platid
      return status;
    }else{
      return -1;
    }
}

function getTime_remaining(){
    var time_left = getPeriod - getServiceTime;
    if(time_left = 0){
      return status = "available";
   }
    return time_left;
}

setImmediate(getTime_remaining, 1800000 ); //just after time remaining  is 0, insert other..every 30 minutes

//create 5 objects for bay
//this is for inital only
// let bay_1 = new Bayid(1,123,805,30,"no");
// let bay_2 = new Bayid(2,456,805,60,"no");
// let bay_3 = new Bayid(3,789,805,15,"no");
// let bay_4 = new Bayid(4,110,805,45,"no");
// let bay_5 = new Bayid(5,120,805,0,"yes");

let bay = new Bay();
bay[0] = id;
bay[1] = getTimeArrived;
bay[2] = getPeriod;
bay[3] = checkAvailable;






let service_time ="";
let time_remaining = getPeriod - ;

if (service_time > 5 && service_time <= 200){
  status = 0;
  return time_remaining;
} else if( service_time > 200){
  return false;
}

//sort the bay systrm based on shortest time remaining
//if time remaining is 0, foreach bay that have remaining time 0, the front platid of the front bay is delete
//and another platid is added at at the empty bay using splice()
if (time_remaining = 0){
  bay.shift();
  var platid;
  bay.splice(1, 0, "250");//just dummy data
}
 



//rught way..malam nie buat n test
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

//time_arrived
//in hours
//aku buat 2: satu string, satu int
//sbb aku x pasti nak convert mase
// let time_arrived = ['8:00','8:30','9:30','10:30','12:00','14:30','16:00'];

// //period
// let time_remaining = ['30_minutes','40_minutes','10_minutes','5_minutes','0_minutes','75_minutes','90_minutes'];

// //status and platid;
// let platid = [{"id":123, "time_arrived":"8:00", "time_remaining":"30_minutes", "status":"unfinished"},
// {"id":456, "time_arrived":"8:30", "time_remaining":"40_minutes", "status":"unfinished"},
// {"id":789, "time_arrived":"9:30", "time_remaining":"10_minutes", "status":"unfinished"},
// {"id":110, "time_arrived":"10:30", "time_remaining":"5_minutes", "status":"unfinished"},
// {"id":120, "time_arrived":"12:00", "time_remaining":"0_minutes", "status":"finished"},
// {"id":130, "time_arrived":"14:30", "time_remaining":"75_minutes", "status":"unfinished"},
// {"id":140, "time_arrived":"16:00", "time_remaining":"90_minutes", "status":"unfinished"}];


// //custom sort
// //let sortedPlat = time_arrived.sort( ( a, b) => {
//   //  log ('sorting', a,b );
//     //if( a > b) return 1;
//    // else if( b > a )return -1;
//     //else return 0;
// //});
// //log(sortedPlat);


//if service time exceeded 2 hours//this context we do 200 
//in this block, if service time is bigger than 5 minutes but lesser than 2 hours,
// change status to 0 which is unavailable for any new platid
// then return current time remaining
// then if time remaining 


// //this array show which bay is available 
let bay = [{"id":1, "platid":123,"time_arrived":"8:00", "time_remaining":"30_minutes", "available":"no"},
 {"id":2, "platid":456,"time_arrived":"8:30", "time_remaining":"40_minutes", "available":"no"},
 {"id":3,"platid":789, "time_arrived":"9:30", "time_remaining":"10_minutes", "available":"no"},
 {"id":4,"platid":110, "time_arrived":"10:30", "time_remaining":"5_minutes", "available":"no"},
 {"id":5,"platid":120, "time_arrived":"12:00", "time_remaining":"0_minutes", "available":"yes"},
 {"id":6,"platid":130,"time_arrived":"14:30", "time_remaining":"75_minutes", "available":"no"},
 {"id":7,"platid":140, "time_arrived":"16:00", "time_remaining":"90_minutes", "available":"no"}];

// //doing const on the bay, set the property but push new one
// const bayId = {
//     available: 'Yes',
//     time_remaining: 0,
    

// }

// bayId.platid = '123';
// console.log(platid);

// const time_arrived = [];

// //doing custom sort on part of if bay is empty, data will be stored inside 


// //sort by time_arrival and platid
// let sortedplatid = platid.sort ( (a,b) => {
//     if(a.platid > b.platid)
//         return 1;
//     else if(b.platid > a.platid)
//         return -1;
// });
// log(sortedplatid);


// //set bay available to yes if time_remaining is 0
// if(bay.time_remaining = 0){
//   available = "yes";
//   //change available to yes
//   return available;
// }else{
//    return 0;
// };




// //let sortedbay = bay.sort ( (a,b) => {
//   //if(time_remaining = 0)
//     //this.setState.status = yes;
//   //return 1;
//   //else if(b.platid > a.platid)
//     //  return -1;
// //});
// //log(sortedbay);

