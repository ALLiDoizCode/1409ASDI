var url = 'http://api.reddit.com/r/aww';

var showImage = function(evt){
	//console.log(evt.source.image);
	var imageWin = Ti.UI.createWindow({
	backgroundColor: 'white'
	});
	
	var image = Ti.UI.createImageView({
		image: evt.source.image
	});
	
	imageWin.add(image);
	imageWin.open();
	imageWin.addEventListener('click',function(){
		this.close();
	});
};

var success = function(){/*function call when the data is avialable and returned to us*/
	alert('data was found and retrieved');
	var replyData = JSON.parse(this.responseText);
	var post = replyData.data.children;
	
	
	for(var i=0; i<post.length; i++){
		var image = post[i].data.url;
		var invalid = image.substring((image.length - 3), image.length);
		console.log(invalid);
		if(invalid === 'jpg' || invalid === 'gif' || invalid === 'png'){
		var title = post[i].data.title;
		
		var view = Ti.UI.createView({
			backgroundColor: 'white',
			top: '1.2%',
			bottom: 3,
			image:image,
			height: Ti.UI.SIZE
		});
		
		var label = Ti.UI.createLabel({
			text: title,
			color: 'black',
			font: {fontSize: 14},
			top: 3,
			bottom: 3,
			left: 10,
			right: 10,
			textAlign: 'left',
			image: image,
			height: 'auto'
		});
		view.add(label);
		scrollView.add(view);
		label.addEventListener('click',showImage);	
		}
		
	};
};
		
	
var error = function(){/*function call when an error occurs, including timeouts*/
	alert('something went wrong');
	console.log(evt.error);
	};
	
var client = Ti.Network.createHTTPClient({
	onload: success,
    onerror: error,
	timeout: 5000 
});



//prepare Conection by opening it.
client.open('GET', url);
client.send();