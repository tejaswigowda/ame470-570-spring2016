
function (){
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
    var realHeight;
    var realWidth;

    var aspectRatio = ENV.screen.width / ENV.screen.height;


    if (aspectRatio > 1){
      ENV.screen.orientation = "landscape";
    }
    else{
      ENV.screen.orientation = "portrait";
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
  }
