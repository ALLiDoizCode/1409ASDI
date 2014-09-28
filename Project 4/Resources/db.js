// Gets database and table or creates them if they don't exist
var getDatabase = function() {
	var db = Ti.Database.open('imageData');
	db.execute('CREATE TABLE IF NOT EXISTS contactTable (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, image TEXT, comment TEXT)');
	
	return db;
};

exports.getDatabase = getDatabase;


//read

/*var readDatabase = function(){
	var db = Ti.Database.open('imageData');
var seeData = db.execute('SELECT * FROM contactTable');
while(seeData.isValidRow()){
	var dbData = JSON.parse(seeData.fieldByName('image'));
	console.log(dbData);
	seeData.next();
	//view.title = dbData;
}
seeData.close();
db.close();
};

exports.readDatabase = readDatabase;*/
