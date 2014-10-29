//for loop dumping all
//rev 0.1 juli 05
//rev 0.2 jan 06: play
//rev 0.3 jan 06: zoom +/-, preload one image
//rev 0.4 Juli 2013

currentImage=0;
simpleiTime=7000; // global
imageHeight = 972;
currentImageHeight = imageHeight/1.1/1.1/1.1;
simpleiPlaying=0;


function simpleiInit() {
  //document.write("hihi");
  document.fgColor="ffffff"; 
  document.linkColor="000000"; 
  document.vlinkColor="000000";
  document.alinkColor="000000";
  }

function simpleiBody() {
  simpleiPlaying=0;
}

function simpleiStart() {
//display individual image og defalut?

urlquery=location.href.split("?")
a= urlquery[1]

if (a != undefined) 
  { simpleiSpecialStart(a) } else { simpleiDefaultStart() }
}

function simpleiDefaultStart() {
  document.write('<SPAN LANG="da-DK"><h1>', title, '</h1></SPAN><p>');
  for (var i = 0; i <= imageCount-1; i++)
    {
    //document.write(i, 'hi');
	document.write('<A NAME="', i, '"></A>');
    document.write('<a href="005_events_Carnaval_El-Mahaba_13Oct2013.html?', i, '">', '<img name="simplei', i,  '" src="', thumb[i], '" border=20></a>')
    }
  }

function simpleiSpecialStart(command) {
  //simpleiError(command);
  commands=command.split("&");
  number=commands[0];
  //document.write(number);
  if (number != undefined) 
    {simpleiShowImage(number)} else {simpleiError("No number")}
}

function simpleiShowImage(number) {
  simpleiPanel();
  if( number<imageCount)
    {
      currentImage=number;
      //link
      document.write('<a href="005_events_Carnaval_El-Mahaba_13Oct2013.html">');
      //image
      document.write('<center><img name="image1"src="', image[number], '" border=0 ></center>');  
    
      //test should these lines be here??
      setTimeout("simpleiPreloadImage()", 1000);
      simpleiShowNumber();

      //link end
      document.write("</a>");
    } else {
      simpleiError("no more images");
    }
  //document.write(document.image1.height);
  //document.write(image1.src);
  document.image1.height=currentImageHeight;
}

function simpleiUpdateImage() {
  if (currentImage<imageCount) {
    document.image1.src=image[currentImage];
    document.image1.height=currentImageHeight;
    simpleiShowNumber();
  }
  simpleiPreloadImage()
}

function simpleiPreloadImage() {
  //simpleiMessage(image[preloadImage]);
  document.preload.src="../../black.png"
  document.preload.src=image[(currentImage+1)];
  
}

function simpleiPanel () {
  document.write('<center>');
//  document.write('<a name="simpleiMsg">hih</a>');
  document.write('<table border=0 ><tr>');
  document.write('<td width=100><B><a name="simpleiState"></a> ');
  document.write('<a name="simpleiMsg">:</a></B></td>');
  document.write('<td width=45></td>');
  //back
  document.write('<td><a onClick="simpleiBottonBack()"><img src="simplei/botton-back.png"></a>');  
  //play
  document.write('<a onClick="simpleiBottonPlay()"><img src="simplei/botton-play.png"></a>');  
  //pause
  document.write('<a onClick="simpleiBottonPause()"><img src="simplei/botton-pause.png"></a>');  
  //stop
  document.write('<a onClick="simpleiBottonStop()"><img src="simplei/botton-stop.png"></a>');  
  //next
  document.write('<a onClick="simpleiBottonNext()"><img src="simplei/botton-next.png"></a>');  

  //percent
  document.write('</td><td width=35> <b><a name="percent" onClick="simpleiPercent100()" name="percent">..%</a></b></td><td>');
  //simpleiPercent();
  
  //zoom-plus
  document.write('<a onClick="simpleiBottonZoomPlus()"> <img src="simplei/zoom-plus.png" height=34></a>');  

  //zoom-minus
  document.write('<a onClick="simpleiBottonZoomMinus()"> <img src="simplei/zoom-minus.png" height=34></a>');  

  //preload
  document.write('<img name="preload"src="simplei/black.png" border=0 height=34 width=45>');  

  document.write('</td>');

  document.write('<td width=45></td>');
  document.write('<td><b>', title, '</b></td>');

  document.write('</tr></table>');
  document.write('</center>');
}


function simpleiPercent() {
  // 2 lines commented 6/8-6 mp
  percent.innerText='hihi';
  percent.innerText=Math.round(100*currentImageHeight/imageHeight)+'%';
  
}

function simpleiPercent100() {
  currentImageHeight=imageHeight;
  document.image1.height=currentImageHeight;
  simpleiPercent();
}

function simpleiBottonZoomPlus () {
  currentImageHeight = 1.1*currentImageHeight;
  document.image1.height=currentImageHeight;
  simpleiPercent()
}

function simpleiBottonZoomMinus () {
  currentImageHeight = currentImageHeight/1.1;
  document.image1.height=currentImageHeight;
  simpleiPercent()
}




function simpleiBottonBack() {
  //reset timer??
  if (currentImage>0) {
    currentImage--;
    simpleiUpdateImage();
  }
}

function simpleiBottonPlay() {  
  if (simpleiPlaying == 0) {
    simpleiPlaying=1;
    setTimeout("simpleiTimer()", simpleiTime);
    var msg="play"
    simpleiSetState(msg);
  }
}

function simpleiBottonPause() {
  //some block for timer
  if (simpleiPlaying == 0) {//start
    simpleiBottonPlay()
  } else {
    //pause
    simpleiPlaying=0;
    var msg="pause"
    simpleiSetState(msg);
  }
}

function simpleiBottonStop() {
  //just call pause
  simpleiPlaying=0;
  var msg="stop"
  simpleiSetState(msg);
  currentImage=0;
  simpleiUpdateImage();
}

function simpleiBottonNext() {
  //reset timer??
  currentImage++;
  if (currentImage<imageCount) {
    simpleiUpdateImage(); 
  } else {
    currentImage--;
  }
}

function simpleiTimer() {
  if (simpleiPlaying>0) {
    if (currentImage<imageCount-1) {
      simpleiBottonNext();
      setTimeout("simpleiTimer()", simpleiTime);
      } else {
        simpleiBottonStop();
      }
  }
}



function simpleiShowNumber(){
  var current = currentImage+1;
  var last = imageCount;
  var str= current.toString() + ":" + last.toString();
  simpleiMessage(str);
}

function simpleiError(errorText){
  document.writeln("Simplei error: ", errorText, "\n");
}

function simpleiMessage(messageText){
  //document.write("Simplei message: ", messageText, "\n");
  simpleiMsg.innerText = messageText;
}

function simpleiSetState(stateText){
  //document.write("Simplei message: ", messageText, "\n");
  simpleiState.innerText = stateText;
}


// about windows and image sizes see here:
// http://www.therotunda.net/code/autosized-popup-window.html
