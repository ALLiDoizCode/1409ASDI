
Ti.UI.backgroundColor = 'silver';
var tabGroup = Ti.UI.createTabGroup();	
	tabGroup.tabsBackgroundColor = 'black';
	

//windows
var imageWin = Ti.UI.createWindow();
	imageWin.title = 'Image';
	imageWin.url = 'imageWin.js';
	imageWin.layout = 'vertical';
	
var savedWin = Ti.UI.createWindow();
	savedWin.title = 'Saved';
	savedWin.url = 'saved.js';
	savedWin.layout = 'vertical';

//tabs
var tab1 = Ti.UI.createTab();
	tab1.title = 'Image';
	tab1.window = imageWin;
	tab1.icon = "Icon/light_pictures.png";
	
var tab2 = Ti.UI.createTab();
	tab2.title = 'Saved';
	tab2.window = savedWin;
	tab2.icon = Ti.UI.iPhone.SystemIcon.BOOKMARKS,
	



tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();
