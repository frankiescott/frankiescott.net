$(function() {
    	$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
            $('#projectlanguage').text($(this).attr('language'));
            $('#projectcaption').text($(this).attr('caption'));
            $('#projecttitle').text($(this).attr('title'));
		});
});
