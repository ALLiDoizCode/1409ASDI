
var file = require('data');

var mainWindow = Ti.UI.createWindow({
	//backgroundImage: 'black'
});

var backView = Ti.UI.createView({
	backgroundImage:'Images/Megazord.jpg',
	width: '140%',
	top: '20%'
});
//header
console.log('Header height is ' +file.head.height);
console.log('Header right is ' +file.head.right);

//mmpr
console.log('MMPR height is ' +file.main.width);
console.log('MMPR right is ' +file.main.right);

//red
console.log('Red Ranger height is ' +file.red.height);
console.log('Red Ranger right is ' +file.red.right);

//green
console.log('Green Ranger height is ' +file.green.height);
console.log('Green Ranger right is ' +file.green.right);

//red
console.log('White Ranger height is ' +file.white.height);
console.log('Whiter Ranger right is ' +file.white.right);

//red
console.log('Lord Zedd height is ' +file.zedd.height);
console.log('Lord Zedd height is ' +file.zedd.right);


mainWindow.add(backView,file.head,file.main,file.red,file.green,file.white,file.zedd,file.switch1,file.switch2,file.switch3,file.switch4);
mainWindow.open();
