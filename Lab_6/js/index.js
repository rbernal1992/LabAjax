var counter = 0;
var chktext = false;
function watchForm(){
	$('#shopList').on('submit',function(event){
		event.preventDefault();
		counter = counter + 1;
		$('#items').append(`<li class="loweritem"><div class="newlistitem">
							<div class="wrtnitem" id = "`+ counter    +`">`+  $("#holder").val() + `</div>
							<div class="btnitem"><button type="button" id="check">check</button> <button type="button" id="delete">delete</button></div>
							</div></li>` );
		$('#holder').val('');
	});
	$('#items').on('click','.btnitem > #delete', function(element){
		event.preventDefault();
		$(this).parent().parent().parent().remove();
		
		
	});

	$('#items').on('click','.btnitem > #check', function(element){
		event.preventDefault();
		
	
		console.log($(this).parent().parent().children('.wrtnitem').css("text-decoration"));
		if($(this).parent().parent().children('.wrtnitem').css("text-decoration") == "none solid rgb(255, 255, 255)"){
		
		console.log($(this).parent().parent().children('.wrtnitem').css("text-decoration"));
		$(this).parent().parent().children('.wrtnitem').css("text-decoration", "line-through");}
		else
		{
			$(this).parent().parent().children('.wrtnitem').css("text-decoration", "none");	}
		
	});
	
	
}

watchForm();