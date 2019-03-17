//array sorting sort()
//for time_arrived, period, status
//replaced by period instead of time_remaining
//which will be in different js file

let log = console.log;

//platid, 
//time_arrived, period, status
//let platid = [123,456,789,110,120,130,140];



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

//sort by time_arrival and platid
let sortedplatid = platid.sort ( (a,b) => {
    if(a.time_arrived < b.time_arrived)
        return 1;
    else if(b.time_arrived > a.time_arrived)
        return -1;
});
log(sortedplatid);
