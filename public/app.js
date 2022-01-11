function start(){
 
    interval = setInterval(function(){
      seconds.selectedIndex--;
      if(seconds.selectedIndex==00 && minutes.selectedIndex!=00){
        seconds.value="59";
        minutes.selectedIndex--;
      }
      if(seconds.selectedIndex==00 && minutes.selectedIndex==00 && hours.selectedIndex!==00){
        hours.selectedIndex--;
        minutes.value="59";
        seconds.value="59";
      }
    },1000);
  }
  function stop(){
      clearInterval(interval);
  }
  function reset(){
    hours.value= "00";
    minutes.value = "00";
    seconds.value = "00";
  }