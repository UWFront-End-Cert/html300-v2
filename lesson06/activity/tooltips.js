// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })
//
// $('#element').tooltip('disable')
//
// $('#myTooltip').on('hidden.bs.tooltip', function () {
//   // do something...
// })
//
// $('#clickMeTooltip').on('show.bs.tooltip', function (activate) {
//   // do something...
//   if ($('.btn.secondary').button('toggle').addClass('')  )
// })


// show.bs.tooltip: fires immediately when show instance method is called.
// shown.bs.tooltip: fired when tooltip has been made visible to the user (will wait for CSS transitions to complete.)
// hide.bs.tooltip: fired when hide instance method has been called.
// hidden.bs.tooltip: fired when tooltip has finished being hidden from the user (user will wait for CSS transitions to complete).
// inserted.bs.tooltip: fired after show.bs.tooltip event when tooltip template has been added to DOM.

// Jquery
// $('#clickMe').on('click', function(){
//   $('#submit').removeAttr('disabled')
// })

// Vanilla JS
document.querySelector('#clickMe').addEventListener('click', function (event) {
	document.querySelector('#submit').removeAttribute('disabled')
});
