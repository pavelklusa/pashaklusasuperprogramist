let c;
let paint = false;

$('ul li').on('click',function(){
	c = $(this).css('background-color')
})





$('#box').on('mousemove',function(e){
	if(!paint) return;
	let b = document.createElement('div')
	$(b).css('background',c)
	$(b).css('left',e.offsetX-5)
	$(b).css('top',e.offsetY-5)
	$(this).append(b)
})


$('#clr').on('click',function(){
	$('#box').html('')
})




$('#box').on('mousedown',function(){
	paint=true
})



$('#box').on('mouseup',function(){
	paint=false
})










