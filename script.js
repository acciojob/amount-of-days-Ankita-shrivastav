//your JS code here. If required.
function daysOfYear(noofDays){
	if((noofdays%4==0 && noofDays%100!==0)|| noofDays%400==0){
		return 366;
	}else{
		return 365;
	}
}
