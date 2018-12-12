let actualTheme = 'light';
$(document).ready(function(ev) {

 $('input.onoffswitch-checkbox').change(function(ev) {
   if (actualTheme === 'light') {
     $('body').css({'background-color' : 'black'});
     actualTheme = 'dark';
     console.log(actualTheme);;
   } else {
     $('body').css({'background-color' : 'blue'});
     actualTheme = 'light';
     console.log(actualTheme);
   }
 })
})
