var imageHeight=120  //local
var title="";
var shortTitle="";

function showImage(path, nr) {
  document.write('<a href="', path, '001church_Gallery.html#', nr, '" TARGET="_parent">');
  document.write('<img src="', path, thumb[nr], '" HEIGHT=', imageHeight, ' border=0 > ');
  document.write('</a>');
}

function showImageFrontPage(path, nr) {
  document.write('<a href="', path, '001church_Gallery.html#', nr, '" TARGET="_parent">');
  document.write('<img src="', path, thumb[nr], '" HEIGHT=', imageHeight, ' border=0 align="top" alt="', title, ", ",imageCount, ' photos"  onmouseover="runScroll = 0" onmouseout="runScroll = 1" />');
  document.write('</a>');
}

function imageLink(path, nr1, nr2, nr3) {
  document.write('<div align="center">');
  showImage(path, nr1);
  showImage(path, nr2);
  showImage(path, nr3);
  document.write('<a href="', path, '001church_Gallery.html">');
  document.write('<br>', title, '</a> - ', imageCount, ' photos<br>');
  document.write('<br>');
  document.write('</div>');
}

function imageLinkFrontPage(path, nr) {
  document.write('<td><center>');
  showImageFrontPage(path, nr);	
  if (shortTitle == "") {
	shortTitle=title;  
  }
  document.write('<br><a href="', path, '001church_Gallery.html" TARGET="_parent">', shortTitle, '</center></td>');
  shortTitle="";
 }

//not used
//borrow form http://www.phpied.com/javascript-include/
function include(script_filename) {
    document.write('<' + 'script');
    document.write(' language="javascript"');
    document.write(' type="text/javascript"');
    document.write(' src="' + script_filename + '">');
    document.write('</' + 'script' + '>');
}

function addImages(path, nr1, nr2, nr3) {
  include(path+'local-images.js');
  imageLink(path, nr1, nr2, nr3);
}
//end not used