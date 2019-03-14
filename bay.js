//bay_assign  here
//if the car received finished status, next platid will come
//array sorting sort()
//for time_arrived, period, status
//replaced by period instead of time_remaining
//which will be in different js file

let log = console.log;
let available = "no";
//platid, 
//time_arrived, period, status
//let platid = [123,456,789,110,120,130,140];

//generate random time for time remaining
let getTime_remaining = function(start,range){
  let getRandom = Math.floor((Math.random() * range) + start);
  while(getRandom > range){
    getRandom = Math.floor((Math.random()* range) + start);
  }
  return getRandom;
}
console.log(getTime_remaining(800, 2000));
//time_arrived
//in hours
//aku buat 2: satu string, satu int
//sbb aku x pasti nak convert mase
let time_arrived = ['8:00','8:30','9:30','10:30','12:00','14:30','16:00'];

//period
let time_remaining = ['30_minutes','40_minutes','10_minutes','5_minutes','0_minutes','75_minutes','90_minutes'];

//status and platid;
let platid = [{"id":123, "time_arrived":"8:00", "time_remaining":"30_minutes", "status":"unfinished"},
{"id":456, "time_arrived":"8:30", "time_remaining":"40_minutes", "status":"unfinished"},
{"id":789, "time_arrived":"9:30", "time_remaining":"10_minutes", "status":"unfinished"},
{"id":110, "time_arrived":"10:30", "time_remaining":"5_minutes", "status":"unfinished"},
{"id":120, "time_arrived":"12:00", "time_remaining":"0_minutes", "status":"finished"},
{"id":130, "time_arrived":"14:30", "time_remaining":"75_minutes", "status":"unfinished"},
{"id":140, "time_arrived":"16:00", "time_remaining":"90_minutes", "status":"unfinished"}];


//custom sort
//let sortedPlat = time_arrived.sort( ( a, b) => {
  //  log ('sorting', a,b );
    //if( a > b) return 1;
   // else if( b > a )return -1;
    //else return 0;
//});
//log(sortedPlat);

//this array show which bay is available 
let bay = [{"id":1, "platid":123,"time_arrived":"8:00", "time_remaining":"30_minutes", "available":"no"},
{"id":2, "platid":456,"time_arrived":"8:30", "time_remaining":"40_minutes", "available":"no"},
{"id":3,"platid":789, "time_arrived":"9:30", "time_remaining":"10_minutes", "available":"no"},
{"id":4,"platid":110, "time_arrived":"10:30", "time_remaining":"5_minutes", "available":"no"},
{"id":5,"platid":120, "time_arrived":"12:00", "time_remaining":"0_minutes", "available":"yes"},
{"id":6,"platid":130,"time_arrived":"14:30", "time_remaining":"75_minutes", "available":"no"},
{"id":7,"platid":140, "time_arrived":"16:00", "time_remaining":"90_minutes", "available":"no"}];

//doing const on the bay, set the property but push new one
const bayId = {
    available: 'Yes',
    time_remaining: 0,
    

}

bayId.platid = '123';
console.log(platid);

const time_arrived = [];

//doing custom sort on part of if bay is empty, data will be stored inside 


//sort by time_arrival and platid
let sortedplatid = platid.sort ( (a,b) => {
    if(a.platid > b.platid)
        return 1;
    else if(b.platid > a.platid)
        return -1;
});
log(sortedplatid);


//set bay available to yes if time_remaining is 0
if(bay.time_remaining = 0){
  available = "yes";
  //change available to yes
  return available;
}else{
   return 0;
};




//let sortedbay = bay.sort ( (a,b) => {
  //if(time_remaining = 0)
    //this.setState.status = yes;
  //return 1;
  //else if(b.platid > a.platid)
    //  return -1;
//});
//log(sortedbay);

