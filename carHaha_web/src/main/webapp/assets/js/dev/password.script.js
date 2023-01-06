function fn_checkPassword(pwd){
  
 	var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
	if(!reg.test(pwd)) {
    return false;
  }
  
  // 반복된 문자 확인
  
 
  
  // 연속된 문자 확인
  let checkTarget = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "01234567890"];

  let localMaxCnt = 0;
  let globalMaxCnt = 0;
  let dummy = '';
  let hasContinuos = false;

	for(var i=0; i<pwd.length; i++) {
    if(pwd[i] == dummy) {
      localMaxCnt++;
      globalMaxCnt = Math.max(globalMaxCnt, localMaxCnt);
    } else {
      localMaxCnt = 0;
    }
    dummy = pwd[i];
  }
  
	if(globalMaxCnt+1 >= 3){
	  return false;
  }else{
	  localMaxCnt = 0;
 		globalMaxCnt = 0;
  	dummy = '';
  	hasContinuos = false;
  }
	
  for(var i=0; i<pwd.length; i++) {
    const currentChar = pwd[i];
    for(var j=0; j<checkTarget.length; j++) {
      const targetIndex =  checkTarget[j].indexOf(currentChar)
      if(targetIndex > -1) {
        if(dummy == checkTarget[j][targetIndex-1]) {
          localMaxCnt++;
          globalMaxCnt = Math.max(globalMaxCnt, localMaxCnt);
          hasContinuos = true;
          continue;
        }
      }
    }
    if(!hasContinuos) {
      localMaxCnt = 0;
    }
    hasContinuos = false;
    dummy = pwd[i];
  }
  
  if(globalMaxCnt+1 >= 3){
	  return false;
  }
  
 
    
  return true;
};
