  var timer;
  var msg = "";

function scrollMaster () {
  msg = customDateString(new Date())
  //clearTimeout(timer)
  msg += " " + showtime();// + " " + osd
  //for (var i= 0; i < 100; i++){
  //  msg = " " + msg;
  //}
  //scrollMe()
  // document.write("<b>CURRENT TIME:</b>"+msg);
  document.write(msg);
}

function scrollMe(){
  window.status = msg;
  msg = msg.substring(1, msg.length) + msg.substring(0,1);
  timer = setTimeout("scrollMe()", 200);
}

function showtime () {
  var now = new Date();
  var hours= now.getHours();
  var minutes= now.getMinutes();
  var seconds= now.getSeconds();
  var months= now.getMonth();
  var dates= now.getDate();
  var years= now.getYear();
  var timeValue = ""
  timeValue += ((months >9) ? "" : " ")
  timeValue += ((dates >9) ? "" : " ")
  timeValue = ( months +1)
  timeValue +="/"+ dates
  timeValue +="/"+  years
  var ap="A.M."
  if (hours == 12) {
    ap = "P.M."
  }
  if (hours == 0) {
    hours = 12
  }
  if(hours >= 13){
    hours -= 12;
    ap="P.M."
  }
  var timeValue2 = " " + hours
  timeValue2 += ((minutes < 10) ? ":0":":") + minutes + " " + ap
  return timeValue2;
}

function MakeArray(n) {
  this.length = n
  return this
}

monthNames = new MakeArray(12)
monthNames[1] = "JAN"
monthNames[2] = "FEB"
monthNames[3] = "MAR"
monthNames[4] = "APL"
monthNames[5] = "MAY"
monthNames[6] = "JUN"
monthNames[7] = "JUL"
monthNames[8] = "AUG"
monthNames[9] = "SEP"
monthNames[10] = "OCT"
monthNames[11] = "NOV"
monthNames[12] = "DEC"
daysNames = new MakeArray(7)
daysNames[1] = "SUNDAY"
daysNames[2] = "MONDAY"
daysNames[3] = "TUESDAY"
daysNames[4] = "WEDNESDAY"
daysNames[5] = "THURSDAY"
daysNames[6] = "FRIDAY"
daysNames[7] = "SATURDAY"

function customDateString(oneDate) {
  var theDay = daysNames[oneDate.getDay() +1]
  var theDate =oneDate.getDate()
  var theMonth = monthNames[oneDate.getMonth() +1]
  var dayth="th"
  if ((theDate == 1) || (theDate == 21) || (theDate == 31)) {
    dayth="st";
  }
  if ((theDate == 2) || (theDate ==22)) {
    dayth="nd";
  }
  if ((theDate== 3) || (theDate  == 23)) {
    dayth="rd";
  }
  return theDay + ", " + theMonth + " " + theDate + dayth + ","
}
scrollMaster();

