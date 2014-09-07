//LogoView
var logo = Ti.UI.createImageView({});
	logo.image = 'Images/MMPR.png';
	logo.top = '0%';
	logo.width = '50%';
	logo.right = '3%';
	logo.method = function(){
		alert('Right is ' + this.right + ' and Top is ' + this.top);	
	};
	

var logo2 = Ti.UI.createImageView({});
	logo2.image = 'Images/red.jpg';
	logo2.top = '21%';
	logo2.right ='75%';
	logo2.height = '20%';
	logo2.method = function(){
		alert('Right is ' + this.right + ' and Top is ' + this.top);	
	};
	
var logo3 = Ti.UI.createImageView({});
	logo3.image = 'Images/green.png';
	logo3.top = '43%';
	logo3.right = '75.5%';
	logo3.height = ' 20%';
	logo3.method = function(){
		alert('Right is ' + this.right + ' and Top is ' + this.top);
	};
	
var logo4 = Ti.UI.createImageView({});
	logo4.image = 'Images/whiteranger.jpg';
	logo4.top = '66%';
	logo4.right = '79%';
	logo4.height = '20%';
	logo4.method = function(){
		alert('Right is ' + this.right + ' and Top is ' + this.top);
	};
	
var logo5 = Ti.UI.createImageView({});
	logo5.image = 'Images/lordzedd.jpg';
	logo5.top = '83%';
	logo5.right = '70%';
	logo5.height = ' 20%';
	logo5.method = function(){
		alert('Right is ' + this.right + ' and Top is ' + this.top);
	};

var header = Ti.UI.createImageView({
	image: 'Images/header.jpg',
	top: '0%',
	height: '20%',
	right: '55%'
	
});



//Switches
var redSwitch = Ti.UI.createSwitch({
	top: '25%',
	right:'30%',
	value: false,
	sound: Ti.Media.createSound({
		url:'Sound/GoGoPowerRangers.mp3'
	})
});

var greenSwitch = Ti.UI.createSwitch({
	top: '53%',
	right:'30%',
	value: false,
	sound: Ti.Media.createSound({
		url:'Sound/GoGreenRangerGo.mp3'
	})
});

var whiteSwitch = Ti.UI.createSwitch({
	top: '72%',
	right:'30%',
	value: false,
	sound: Ti.Media.createSound({
		url:'Sound/WhiteRangerTigerPower.mp3',
	})
});

var zeddSwitch = Ti.UI.createSwitch({
	top: '89.5%',
	right:'30%',
	value: false,
	sound: Ti.Media.createSound({
		url:'Sound/Lord.Zedd.mp3',
	})
});

var handleSound = function(ctrl,value){
	if(value){
		ctrl.sound.play();
	}else{
		ctrl.sound.pause();
	}
};

//EventListeners
redSwitch.addEventListener('change',function(e){
	handleSound(e.source,e.value);
	
});

redSwitch.addEventListener('change',logo2.method);


greenSwitch.addEventListener('change',function(e){
	handleSound(e.source,e.value);
	
});

greenSwitch.addEventListener('change',logo3.method);

whiteSwitch.addEventListener('change',function(e){
	handleSound(e.source,e.value);
});

whiteSwitch.addEventListener('change',logo4.method);

zeddSwitch.addEventListener('change',function(e){
	handleSound(e.source,e.value);
});

zeddSwitch.addEventListener('change',logo5.method);

//Logo
exports.head = header;
exports.main = logo;
exports.red = logo2;
exports.green = logo3;
exports.white = logo4;
exports.zedd = logo5;

//Switch
exports.switch1 = redSwitch;
exports.switch2 = greenSwitch;
exports.switch3 = whiteSwitch;
exports.switch4 = zeddSwitch;





