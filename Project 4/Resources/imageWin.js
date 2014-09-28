var data = require('api');
var currentWin = Ti.UI.currentWindow;
	currentWin.backgroundColor = 'gray';
	//win.fullscreen = true;
	
/*var bg = Ti.UI.createImageView({});
	bg.image = 'image/dogs-9.jpg';
	bg.width = '120%';*/
	
var scrollView = Ti.UI.createScrollView();
	scrollView.layout = 'vertical';
	scrollView.scrollType = 'vertical';
	scrollView.showVerticalScrollIndicator = true;

	
//currentWin.add(bg);
currentWin.add(scrollView);
