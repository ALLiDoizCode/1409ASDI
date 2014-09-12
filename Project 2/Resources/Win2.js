//windows
var data = require('data2');

var win = Ti.UI.createWindow({});
	win.backgroundColor = 'gray';
	win.fullscreen = true;
	

//view
var header = Ti.UI.createView({});
	header.height = 40;
	header.backgroundColor = 'white';
	header.bottom = 0;
	header.addEventListener('click',function(){
		win.close();
	});

var bg = Ti.UI.createImageView({});
	bg.image = 'image/ibsQgHq3XOuR8x.png';	
	
	
var scrollView = Ti.UI.createScrollView({});
	scrollView.height = Ti.Platform.displayCaps.platformHeight - header;
	scrollView.layout = 'vertical';

	
//label	
var imageLabel = Ti.UI.createImageView({});
	imageLabel.image = 'image/back-button.png';
	imageLabel.right = '80%';


scrollView.add(header);	
header.add(imageLabel);
win.add(header,bg);
win.add(scrollView);
win.open();