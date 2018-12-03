//点击显示隐藏的ul
$('a + ul').prev().on('click', function () {
	$(this).next().toggleClass('hidden');
	console.log($(this).children('i')[1]);
	if($(this).next().hasClass('hidden')){
		$(this).children('i')[1].className = 'fa fa-chevron-down';
	}else{
		$(this).children('i')[1].className = 'fa fa-chevron-up';
	}
})