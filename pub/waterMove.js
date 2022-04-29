
 "use strict";
 (function(global, document, $) { 
	function WaterMove() {
  this.rainfall =0;
  this.snowfall =0;
  this.hailVolume =0;
  this.rain_time =0;
  this.snow_time= 0;
  this.hail_time= 0;
  this.rain_amount= 0;
  this.rain_speed= 0;
  this.snow_amount=0;
  this.snow_speed=0;
  this.hail_amount= 0;
  this.hail_speed=0;
  this.rain_start = 0;
  this.snow_start = 0;
  this.hail_start=0;
}

//  const state1 = {
//   rainfall: 0,
//   snowfall: 0,
//   hailVolume: 0,
//   rain_time: 0,
//   snow_time: 0,
//   hail_time: 0,
//   rain_amount: 0,
//   rain_speed: 0,
//   snow_amount:0,
//   snow_speed:0,
//   hail_amount: 0,
//   hail_speed:0.
// }


// let rain_start = 0;
// let snow_start = 0;
// let hail_start=0;

// const e = require("express");
WaterMove.prototype={
  getRainTime:function() {
  if(this.rain_start!==0){
    this.rain_time += new Date().getTime() - this.rain_start;
    this.rainfall +=  this.rain_time*(this.rain_amount+(9-this.rain_speed))/100000;
    this.rain_start = new Date().getTime();
  }
  return("Total rain time " + Math.floor(this.rain_time/1000)+"s\n"
  +"Total rainfall "+this.rainfall+"um\n");
},

getSnowTime:function() {
  if(this.snow_start!==0){
    this.snow_time += new Date().getTime() - this.snow_start;
    this.snowfall +=  this.snow_time*(this.snow_amount+(9-this.snow_speed))/100000;
    this.snow_start = new Date().getTime();
  }
  return("Total snow time " + Math.floor(this.snow_time/1000)+"s\n"
  +"Total snowfall "+this.snowfall+"um\n");
},

getHailTime:function() {
  if(this.hail_start!==0){
    this.hail_time += new Date().getTime() - this.hail_start;
    this.hailVolume +=  this.hail_time*(this.hail_amount+(9-this.hail_speed))/100000;
    this.hail_start = new Date().getTime();
  }
  return("Total hail time " + Math.floor(this.hail_time/1000)+"s\n"
  +"Total hail volume "+this.hailVolume+"um");
},

clearInfo: function(){
  this.rainfall =0;
  this.snowfall =0;
  this.hailVolume =0;
  this.rain_time =0;
  this.snow_time= 0;
  this.hail_time= 0;
  this.rain_amount= 0;
  this.rain_speed= 0;
  this.snow_amount=0;
  this.snow_speed=0;
  this.hail_amount= 0;
  this.hail_speed=0;
  this.rain_start = 0;
  this.snow_start = 0;
  this.hail_start=0;

},

makeRain:function(amount, s1) {
    //clear out everything
    $('.rain').empty();
    if(amount===0){
      if(this.rain_start!==0){
        this.rain_time += new Date().getTime() - this.rain_start;
        this.rainfall +=  this.rain_time*(this.rain_amount+(9-this.rain_speed))/100000;
        this.rain_start = 0;
      }
    }else{
      this.rain_start = new Date().getTime(); 
      this.rain_amount =amount;
      this.rain_speed =s1;
    }

    const new_amount =10-amount+1;
    let i = 0;
    let drops = "";
    let drops2 = "";
    
    while (i < 1000) {
  
      const rand1 = (Math.floor(Math.random() * (98-1+1) + 1));
       const rand2 = (Math.floor(Math.random() * (2-2+1) + 2));
      i += rand2;
      drops += '<div class="drop" style="left: ' + i*new_amount + '%; bottom: ' + (rand2 + rand2 +99) + '%; animation-delay: 0.' 
      + rand1 + 's; animation-duration:'+ 0.10*s1 + rand1 + 's;"><div class="main" style="animation-delay: 0.' 
      + rand1 + 's; animation-duration: 0.5' + rand1 + 's;"></div><div class="move" style="animation-delay: 0.' 
      + rand1 + 's; animation-duration: 0.5' + rand1 + 's;"></div></div>';

      drops2 += '<div class="drop" style="right: ' + i*new_amount + '%; bottom: ' + (rand2 + rand2 +99) + '%; animation-delay: 0.' 
      + rand1 + 's; animation-duration:'+ 0.10*s1 + rand1+ 's;"><div class="main" style="animation-delay: 0.' 
      + rand1 + 's; animation-duration: 0.5' + rand1 + 's;"></div><div class="move" style="animation-delay: 0.' 
      + rand1 + 's; animation-duration: 0.5' + rand1 + 's;"></div></div>';
    }
    $('.rain.drops').append(drops);
    $('.rain.drops').append(drops2);
    if(amount===0){
      $('.rain').empty();
    }
  },
  

  makeSnow:function(amount, s1){
    //clear out everything
    $('.snow').empty();

    if(amount===0){
      if(this.snow_start!==0){
        this.snow_time += new Date().getTime() - this.snow_start;
        this.snowfall +=  this.snow_time*(this.snow_amount+(9-this.snow_speed))/100000;
        this.snow_start = 0;
      }
    }else{
      this.snow_start = new Date().getTime(); 
      this.snow_amount =amount;
      this.snow_speed=s1;
    }

    const new_amount =10-amount+1;
    let i = 0;
    let flakes = "";
    let flakes2 = "";
   
    while (i < 1000) {

    
      const width =Math.random() * 7 + 5 + 'px';
      const duration = Math.random() * 3 + s1*0.5 ;

      const rand1 = (Math.floor(Math.random() * (98) + 1));
      const rand2 = (Math.floor(Math.random() * (1) + 2));
      i += rand2;

      flakes += '<div class="snowflake" style="left: ' + i*new_amount+ '%; bottom: ' + (rand2 + rand2 +99) +  '%; width:'+ width+'; height:'+ width+'; animation-delay: 0' 
        + rand1 + 's; animation-duration: '+duration + 's;"></div>';

      flakes2 += '<div class="snowflake" style="right: ' + i*new_amount+ '%; bottom: ' + (rand2 + rand2 +99) + '%; width:'+ width+'; height:'+ width+';animation-delay: 0.' 
      + rand1 + 's; animation-duration: ' + duration + 's;"></div>';
    }
  
  $('.snow.flakes').append(flakes);
   $('.snow.flakes').append(flakes2);
   if(amount===0){
    $('.snow').empty();
  } 
  },
  
  makeHail:function(amount, s1){
    //clear out everything
    $('.hail').empty();
    if(amount===0){
      if(this.hail_start!==0){
        this.hail_time += new Date().getTime() - this.hail_start;
        this.hailVolume +=  this.hail_time*(this.hail_amount+(9-this.hail_speed))/100000;
        this.hail_start = 0;
      }
    }else{
      this.hail_start = new Date().getTime(); 
      this.hail_amount =amount;
      this.hail_speed =s1;
    }
    const new_amount =10-amount+1;
    let i = 0;
    let hails1 = "";
    let hails2 = "";

    while (i < 1000) {
      const width =Math.random() * 5 + 15 + 'px';
      const height =Math.random() * 1 + 15 + 'px';
      const duration = Math.random() * 1 + s1*0.1 ;
      
      const rand1 = (Math.floor(Math.random() * (98 ) + 1));
       const rand2 = (Math.floor(Math.random() * (1) + 2));
      i += rand2;
      hails1 += '<div class="hailstone" style="left: ' + i*new_amount + '%; bottom: ' + (rand2 + rand2 +99) + '%; '+'width:'+ width +'; height:'+ height+'; animation-delay: 0'
      + rand1 + 's; animation-duration:' + duration+ 's;"></div>';

      hails2 += '<div class="hailstone" style="right: ' + i*new_amount + '%; bottom: ' + (rand2 + rand2 +99) + '%; '+'width:'+ height+'; height:'+ width+';animation-delay: 0.' 
      + rand1 + 's; animation-duration:' + duration+ 's;"></div>';
    }
    $('.hail.hails').append(hails1);
    $('.hail.hails').append(hails2);
    if(amount===0){
      $('.hail').empty();
    }
  },

makeSun: function(amount, direction, s1, radius, height_diff){
    $('.sun').empty();
    let suns='';
    if(direction === 'right'){
      suns= '<div class="sunshape2" style="--i:'+s1+'; --j:'+radius+'; --k:'+height_diff+'"</div>';
    }else{
      suns= '<div class="sunshape"style="--i:'+s1+'; --j:'+radius+'; --k:'+height_diff+'"</div>';
    }
    $('.sun').append(suns);
    if(amount===0){
        $('.sun').empty();
  }},


  makeFog:function (amount,direction, i1, s1, i2, s2,i3,s3, i4,s4, i5, s5){
  $('.fogmove').empty();
  let fogbottom ='';
  if(amount===1){
    if (direction ==='right'){
      fogbottom = '<div class="fog2"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"></div>';
    }
    else{
      fogbottom = '<div class="fog"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"></div>';
    }
  }else if(amount===2){
    if (direction ==='right'){
    fogbottom = '<div class="fog2"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'"></div>';
    }
    else{
    fogbottom = '<div class="fog"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'"></div>';
    }
  }else if (amount ===3){
    if (direction ==='right'){
      fogbottom = '<div class="fog2"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'">'+
      '<img src="./fog'+i3+'.png" alt="" style="--i:'+s3+'"></div>';
    }
    else{
    fogbottom = '<div class="fog"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'">'+
    '<img src="./fog'+i3+'.png" alt="" style="--i:'+s3+'"></div>';
    }
  }else if(amount===4){
    if (direction ==='right'){
      fogbottom = '<div class="fog2"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'">'+
      '<img src="./fog'+i3+'.png" alt="" style="--i:'+s3+'"><img src="./fog'+i4+'.png" alt="" style="--i:'+s4+'"></div>';
    }
    else{
    fogbottom = '<div class="fog"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'">'+
    '<img src="./fog'+i3+'.png" alt="" style="--i:'+s3+'"><img src="./fog'+i4+'.png" alt="" style="--i:'+s4+'"></div>';
    }
  }
  else{
      if (direction ==='right'){
        fogbottom = '<div class="fog2"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'">'+
        '<img src="./fog'+i3+'.png" alt="" style="--i:'+s3+'"><img src="./fog'+i4+'.png" alt="" style="--i:'+s4+'"><img src="./fog'+i5+'.png" alt="" style="--i:'+s5+'">'+
      '</div>';
      }else{
      fogbottom = '<div class="fog"> <img src="./fog'+i1+'.png" alt="" style="--i:'+s1+'"><img src="./fog'+i2+'.png" alt="" style="--i:'+s2+'">'+
      '<img src="./fog'+i3+'.png" alt="" style="--i:'+s3+'"><img src="./fog'+i4+'.png" alt="" style="--i:'+s4+'"><img src="./fog'+i5+'.png" alt="" style="--i:'+s5+'">'+
    '</div>';
    }}
  
  $('.fogmove').append(fogbottom);
  if(amount===0){
    $('.fogmove').empty();
  }
},

    
makeCloud:function (amount, direction, i1, s1, i2, s2,i3,s3, i4,s4, i5, s5){
  $('.cloudmove').empty();
  let clouds='';
  if(amount===1){
    if (direction ==='right'){
      clouds = '<div class="cloud2"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'"></div>';
    }
    else{
    clouds = '<div class="cloud"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'"></div>';
    }
  }else if(amount===2){
    if (direction ==='right'){
      clouds = '<div class="cloud2"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
      '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"> </div>'
    }
    else{
    clouds = '<div class="cloud"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
    '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"> </div>'
    }
  }else if (amount===3){
    if (direction ==='right'){
      clouds = '<div class="cloud2"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
      '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"><img src="./cloud'+i3+'.png" alt="" style="--i:'+s3+'"></div>'
    }
    else{
    clouds = '<div class="cloud"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
    '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"><img src="./cloud'+i3+'.png" alt="" style="--i:'+s3+'"></div>'
    }
  }else if(amount === 4){
    if (direction ==='right'){
      clouds = '<div class="cloud2"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
      '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"><img src="./cloud'+i3+'.png" alt="" style="--i:'+s3+'">'+
      '<img src="./cloud'+i4+'.png" alt="" style="--i:'+s4+'"></div>'
    }
    else{
    clouds = '<div class="cloud"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
    '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"><img src="./cloud'+i3+'.png" alt="" style="--i:'+s3+'">'+
    '<img src="./cloud'+i4+'.png" alt="" style="--i:'+s4+'"></div>'
    }
  }else{
    if (direction ==='right'){
      clouds = '<div class="cloud2"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
      '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"><img src="./cloud'+i3+'.png" alt="" style="--i:'+s3+'">'+
      '<img src="./cloud'+i4+'.png" alt="" style="--i:'+s4+'"><img src="./cloud'+i5+'.png" alt="" style="--i:'+s5+'"></div>'
    }
    else{
    clouds = '<div class="cloud"><img src="./cloud'+i1+'.png" alt="" style="--i:'+s1+'">'+
    '<img src="./cloud'+i2+'.png" alt="" style="--i:'+s2+'"><img src="./cloud'+i3+'.png" alt="" style="--i:'+s3+'">'+
    '<img src="./cloud'+i4+'.png" alt="" style="--i:'+s4+'"><img src="./cloud'+i5+'.png" alt="" style="--i:'+s5+'"></div>'
   } }
  $('.cloudmove').append(clouds);
  if(amount===0){
    $('.cloudmove').empty();
  }
},}
global.WaterMove = global.WaterMove || WaterMove

})(window, window.document, $);