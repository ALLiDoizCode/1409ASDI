// SQL Functions

// Gets database and table or creates them if they don't exist
var getDatabase = function() {
	var db = Ti.Database.open('contactData');
	db.execute('CREATE TABLE IF NOT EXISTS contactTable (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, userName TEXT, firstName TEXT, lastName TEXT, email TEXT)');
	
	return db;
};

// Reads data in database and returns an array
var readData = function() {
	var tableData = [];
	var db = getDatabase();
	var rows = db.execute('SELECT id, userName, firstName, lastName, email FROM contactTable');
	
	while (rows.isValidRow()) {
		tableData.push({
			id: rows.fieldByName('id'),
			userName: rows.fieldByName('userName'),
			firstName: rows.fieldByName('firstName'),
			lastName: rows.fieldByName('lastName'),
			email: rows.fieldByName('email')
		});
		rows.next();
	}
	
	rows.close();
	db.close();
	return tableData;
};

// Creates new row in database
var createData = function(userName, firstName, lastName, email) {
	var db = getDatabase();
	db.execute('INSERT INTO contactTable (userName, firstName, lastName, email) VALUES (?, ?, ?, ?)', userName, firstName, lastName, email);
	db.close();
};

// Updates existing row in database
var updateData = function(id, userName, firstName, lastName, email) {
	var db = getDatabase();
	db.execute('UPDATE contactTable SET userName=?, firstName=?, lastName=?, email=? WHERE id=?', userName, firstName, lastName, email, id);
	db.close();
};

// Deletes row in database
var deleteData = function(id) {
	var db = getDatabase();
	db.execute('DELETE FROM contactTable WHERE id=?', id);
	db.close();
};

// Exports
exports.readData = readData;
exports.createData = createData;
exports.updateData = updateData;
exports.deleteData = deleteData;