var imagedb = require('db');
var currentWin = Ti.UI.currentWindow;
	currentWin.backgroundColor = 'silver';

var view = Ti.UI.createView();
	view.top = '15%',
	view.bottom = '15%',
	view.backgroundColor = 'white';
	
var imageView = Ti.UI.createImageView();

// read database
var db = imagedb.getDatabase();
var seeData = db.execute('SELECT * FROM contactTable');
while(seeData.isValidRow()){
	var dbData = (seeData.fieldByName('image'));
	console.log(dbData);
	seeData.next();
}
	
	seeData.close();
	db.close();
	
	
view.add(imageView);
currentWin.add(view);
currentWin.open();
