

//Navigation//
var navWindow = Ti.UI.iOS.createNavigationWindow({
window: mainWin
});

var mainWin = Ti.UI.createWindow({
	backgroundColor: 'white'
});

img1 = Ti.UI.createImageView({
	title: 'Pets',
	image: 'image/reddit.png',
	width: '65%',
	top: '15%'
});

img2 = Ti.UI.createImageView({
	title: 'Anime',
	image: 'image/012346-glossy-black-3d-button-icon-animals-animal-dog-print(3).png',
	width: '32%',
	top: '57%',
	right: '58%'
});

img3 = Ti.UI.createImageView({
	image: 'image/img-thing.jpeg',
	width: '40%',
	top: '55%',
	right: '8%'
});

var intro = function(){
		var loadFile = Ti.UI.createWindow({
				//backgroundColor: 'white',
				layout: "vertical",
				url:"Win1.js",
				nav: navWindow
});
		navWindow.openWindow(loadFile);

};

var intro2 = function(){
		var loadFile = Ti.UI.createWindow({
				//backgroundColor: 'white',
				layout: "vertical",
				url:"Win2.js",
				nav: navWindow
});
		navWindow.openWindow(loadFile);

};

img2.addEventListener('click',intro);
img3.addEventListener('click',intro2);

mainWin.add(img1,img2,img3);
mainWin.open();

