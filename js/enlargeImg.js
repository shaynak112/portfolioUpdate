$(function ()
{

    $('.projectImg').on('click', function ()
    {
    	$('.projectImg').css("width","30%");
		$('.projectImgMain').css("width","20%");
        $(this).width(1000);
    });
});


/*$(".projectImg").click(function()
{
   $(this).attr('width', '400');
    $(this).attr('height', '300');
});*/