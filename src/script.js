function toggleHamburger(x) {
  x.classList.toggle("change");
     if ($( ".headerContentSm" ).hasClass('open')) {
	$( ".headerContentSm" ).removeClass( 'open');
} else {
  $( ".headerContentSm" ).addClass( 'open');
}

}