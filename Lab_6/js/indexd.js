var counterposition = 0;
var globaljson = {};
function watchForm(){
	
	//var i;
	$('#shopList').on('submit',function(event){
		event.preventDefault();
		var qyoutube = $('#holder').val();
		$.ajax({
			url: "https://www.googleapis.com/youtube/v3/search",
			data: $.extend({
				key: 'AIzaSyA-lcRjBZLQ1M4SYWnIymYR1OBTCVeduAY',
				q: qyoutube,
				part: 'snippet'
				
			} ,{
				 maxResults : 50
				
			 }
			),
			method: 'GET',
			dataType: 'json',
			timeout: 5000,
			success: function(responseJson){
				console.log(responseJson.items);
				globaljson = responseJson;
				 //for(i in responseJson.items){ for each in javascript
					for(var i = counterposition; i < counterposition + 5; i++){
					 let thumbnail = responseJson.items[i].snippet.thumbnails.medium.url;
					 let titlevideo = responseJson.items[i].snippet.title;
					//console.log(responseJson.items[i].id.videoId);
					$('#items').append(`<li> <div width="60%" align="center"> <h3>`+ titlevideo +`</h3> <a href="https://www.youtube.com/watch?v=` + responseJson.items[i].id.videoId + `" target="_blank"> <img src="`+thumbnail+`" width = "30%" height="30%"></a>
					</div></li>  
					`)
					
				}
				$('#addmore').show();
				counterposition = counterposition + 5;
			},
			error: function(err){
				console.log("Error algo salio mal");
				
			}
			
			
		})
		
	});
	


	 	$('#addmore').on('click',function(event){
			event.preventDefault();
				for(var i = counterposition; i < counterposition + 5; i++){
					 let thumbnail = globaljson.items[i].snippet.thumbnails.medium.url;
					 let titlevideo = globaljson.items[i].snippet.title;
					//console.log(responseJson.items[i].id.videoId);
					$('#items').append(`<li> <div width="60%" align="center"> <h3>`+ titlevideo +`</h3> <a href="https://www.youtube.com/watch?v=` + globaljson.items[i].id.videoId + `" target="_blank"> <img src="`+thumbnail+`" width = "30%" height="30%"></a>
					</div></li>  
					`)
					
				}
				if(counterposition < globaljson.items.length - 5)
				counterposition = 5 + counterposition;
				
		});

};
watchForm();