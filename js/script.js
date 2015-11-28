function getTimeToEvent()
{
    
var daysContent = document.getElementById('day');
var hourContent = document.getElementById('hour');
var minuteContent = document.getElementById('minute');
var secondContent = document.getElementById('second');    
    
    var now = new Date();
    var newYear = new Date(2016,0,1);
    var totalRemains = (newYear.getTime()-now.getTime());

        var RemainsSec=(parseInt(totalRemains/1000));
          var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));
		  if (RemainsFullDays<10){RemainsFullDays="0"+RemainsFullDays};

          var secInLastDay=RemainsSec-RemainsFullDays*24*3600;
          var RemainsFullHours=(parseInt(secInLastDay/3600));
          if (RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};
          var secInLastHour=secInLastDay-RemainsFullHours*3600;
          var RemainsMinutes=(parseInt(secInLastHour/60));
          if (RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};
          var lastSec=secInLastHour-RemainsMinutes*60;
          if (lastSec<10){lastSec="0"+lastSec};
        
        daysContent.innerHTML = RemainsFullDays;
        hourContent.innerHTML = RemainsFullHours;
        minuteContent.innerHTML = RemainsMinutes;
        secondContent.innerHTML = lastSec;
        
        setTimeout("getTimeToEvent()",10);        

}
 
function incline(words,n){ // первый параметр -- 3-и варианта склонения существительного по правилу 1, 2, 5; второй -- сама переменная с числом
   return words[(n%100>4 && n%100<20)?2:[2,0,1,1,1,2][Math.min(n%10,5)]];
}
 
getTimeToEvent();
