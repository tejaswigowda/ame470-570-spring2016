var ENV = {
  device:{
    iOS: false,
    android: false,
    iPad: false,
    touchSupport: false,
  },
  screen:{
    height: 0,
    width: 0,
    small: false
  }
}

function spoofUserAgent(){
    var agent = navigator.userAgent.toLowerCase();

    if( agent.indexOf('iphone') != -1 || agent.indexOf('ipod') != -1) {
      ENV.device.iOS = true;
      ENV.device.android = false;
      ENV.device.iPad = false;
      ENV.device.touchSupport = true;
    }

    else if( agent.indexOf('ipad') != -1) {
      ENV.device.iOS = false;
      ENV.device.android = false;
      ENV.device.iPad = true;
      ENV.device.touchSupport = true;
    }

    else if( agent.indexOf('android') != -1) {
      ENV.device.iOS = false;
      ENV.device.android = true;
      ENV.device.iPad = false;
      ENV.device.touchSupport = true;
    }  
    else{
      ENV.device.iOS = false;
      ENV.device.android = false;
      ENV.device.iPad = false;
      ENV.device.touchSupport = false;
    }
    
    
    
    if(ENV.device.android){
      ENV.screen.height = window.innerHeight;
      ENV.screen.width = window.innerWidth;
    }
    else{
      ENV.screen.height = $(window).height();
      ENV.screen.width = $(window).width();
    }

    if(ENV.device.touchSupport){
      if (ENV.screen.width < 640 || ENV.screen.height < 480){
        ENV.screen.small = true;
      }
      else{
        ENV.screen.small = false;
      }
    }
    else{
      ENV.screen.small = false;
    } 

    assignClassNames()
  }

function assignClassNames()
{
  var cn = "";
  // do something
  if(ENV.screen.small){
     cn += " smallScreen";
  }
  else{
     cn += " bigScreen";
  }

  if(ENV.device.touchSupport){
     cn += " touchSupport";
  }
  else{
     cn += " mouseSupport";
  }

  if(ENV.device.android){
     cn += " android";
  }

  if(ENV.device.iPad){
     cn += " iPad";
  }

  if(ENV.device.iOS){
     cn += " iOS";
  }
  $("body").addClass(cn)

}

