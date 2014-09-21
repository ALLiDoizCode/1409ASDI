// UI for Add Data window

// Window: add new data
var addWindow = Ti.UI.createWindow({  
    title: "New User",
    backgroundColor: "#fff"
});

// Tab 1: add data window
var addTab = Ti.UI.createTab({  
    icon: "KS_nav_views.png",
    title: "New User",
    window: addWindow
});

// View for containing main elements
var mainView = Ti.UI.createView({
	layout: "horizontal",
	left: "4dp",
	right: "4dp",
});

// View to contain top elements
var topView = Ti.UI.createView({
	layout: "vertical",
	height: Ti.UI.SIZE,
	top: "24dp"
});

// Label for add data window
var addLabel = Ti.UI.createLabel({
	color: "#000",
	text: "User Information",
	font: { fontSize: "20sp", fontFamily: "Helvetica Neue" },
	top: "4dp"
});


// Label for required fields
var requiredFieldsLabel = Ti.UI.createLabel({
	color: "#777",
	text: "* Required Fields",
	font: { fontSize: "14sp", fontFamily: "Helvetica Neue" },
	top: "4dp"
});

// View to contain input rows
var rowView = Ti.UI.createView({
	layout: "vertical",
	top: "64dp",
	left: "0dp",
	height: Ti.UI.SIZE
});

// View to contain bottom elements
var bottomView = Ti.UI.createView({
	layout: "vertical",
	height: Ti.UI.SIZE,
	top: "56dp"
});

// Button to submit name & age to database
var submitButton = Ti.UI.createButton({
	title: "Sign Up",
	font: { fontSize: "20sp", fontFamily: "Helvetica Neue" }
});

// Variables & function to create an input row
var inputFields = [];
var inputFieldIndex = 0;

var createInputRow = function(labelText, textFieldText, keyboardType, keyboardAutoFix) {
	
	// View for row
	var inputView = Ti.UI.createView({
		layout: "composite",
		top: "4dp",
		width: Ti.UI.FULL,
		height: Ti.UI.SIZE
	});
	
	// Label for row
	var inputLabel = Ti.UI.createLabel({
		text: labelText,
		font: { fontSize: "16sp", fontFamily: "Helvetica Neue" },
		color: "#777",
		top: "4dp",
		left: "8dp"
	});
	
	// Text field for row
	inputFields[inputFieldIndex] = Ti.UI.createTextField({
		hintText: textFieldText,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType: keyboardType,
		autocapitalization: keyboardAutoFix,
		autocorrect: keyboardAutoFix,
		width: "50%",
		top: "0dp",
		right: "8dp"
	});
	
	inputView.add(inputLabel);
	inputView.add(inputFields[inputFieldIndex]);
	
	rowView.add(inputView);
		
	inputFieldIndex++;
};

// Function to check entry validity
var checkData = function(firstName, lastName) {
	var validFirstName = false;
	var validLastName = false;
	var validEntries = false;
	
	if(firstName != "") { validFirstName = true; }
	if(lastName != "") { validLastName = true; }
	
	if(!validFirstName && !validLastName) {
		createDialog("Issue Found", "Please enter a Username name and email");
	} else if(!validFirstName) {
		createDialog("Issue Found", "Please enter a first name");
	} else if(!validLastName) {
		createDialog("Issue Found", "Please enter a last name");
	} else {
		validEntries = true;
	}
	
	return validEntries;
};

// Event listener(s)
submitButton.addEventListener("click", function(){
	var userName = inputFields[0].value;
	var firstName = inputFields[1].value;
	var lastName = inputFields[2].value;
	var email = inputFields[3].value;
	
	if(checkData(firstName, lastName)) {
		inputFields[0].setValue("");
		inputFields[1].setValue("");
		inputFields[2].setValue("");
		inputFields[3].setValue("");
		
		sqlFunctions.createData(userName, firstName, lastName, email);
		
		// Alert dialog for successful database addition
		createDialog("Success", "User was added");
		
		tabGroup.setActiveTab(displayData.displayDataTab);
	}
});

// Add window elements
topView.add(addLabel);
topView.add(requiredFieldsLabel);

createInputRow("Username *", "Username", Ti.UI.KEYBOARD_DEFAULT, true);
createInputRow("First name", "First name", Ti.UI.KEYBOARD_DEFAULT, true);
createInputRow("Last name *", "Last name", Ti.UI.KEYBOARD_PHONE_PAD, false);
createInputRow("Email address", "Email address", Ti.UI.KEYBOARD_EMAIL, false);

bottomView.add(submitButton);

mainView.add(topView);
mainView.add(rowView);
mainView.add(bottomView);

addWindow.add(mainView);

// Exports
exports.addDataTab = addTab;
exports.checkData = checkData;
