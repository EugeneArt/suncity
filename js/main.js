$(document).ready(function(){

   $(".objects").click(function(e){
      showButton();
      switch (event.target.className) {
         case 'clickSwan':
         case 'arrow _swan':
            $(".content-item.__swan").toggle();
         break;
         case 'clickFern':
         case 'arrow _fern':
            $(".content-item.__fern").toggle();
         break;
         case 'clickButterfly':
         case 'arrow _butterfly':
            $(".content-item.__butterfly").toggle();
         break;
         case 'clickBooks':
         case 'arrow _books':
            $(".content-item.__books").toggle();
         break;
         case 'clickPiano':
         case 'arrow _piano':
            $(".content-item.__piano").toggle();
         break;
         case 'clickRaspberries':
         case 'arrow _raspberries':
            $(".content-item.__raspberries").toggle();
         break;
         case 'clickBike':
         case 'arrow _bike':
            $(".content-item.__bike").toggle();
         break;
         case 'clickGlobe':
         case 'arrow _globe':
            $(".content-item.__globe").toggle();
         break;
         case 'clickTelescope':
         case 'arrow _telescope':
            $(".content-item.__telescope").toggle();
         break;
         case 'clickHome':
         case 'arrow _home':
            $(".content-item.__home").toggle();
         break;
         case 'clickFlags':
         case 'arrow _flags':
            $(".content-item.__flags").toggle();
         break;
      }
   });

   $("nav").click(function(e){
      showButton();
      console.log(event.target.className);
      switch(event.target.className){
         case 'nav-item _town':
            $(".content-description.__town").toggle();
         break;
         case 'nav-item _summer':
            $(".content-description.__summer").toggle();
         break;
         case 'nav-item _contacts':
            $(".content-description.__contacts").toggle();
         break;
         case 'nav-item _dreams':
            $(".content-description.__dreams").toggle();
         break;
      }
   });

   function showButton(){
      $(".content-item.__logo").hide();
      $(".content-button").show();
   }

});
