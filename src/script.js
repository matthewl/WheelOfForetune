$(document).ready(function(){
      const suggestions = [
        'Driver',
        '3 wood',
        'Hybrid',
        '5 iron',
        '7 iron',
        '9 iron',
        '52 degree',
        '56 degree',
        '60 degree',
        'Putter'
      ];
      let ezslot0 = new EZSlots("suggestions",{"reelCount":1,"winningSet":[],"symbols":suggestions,"height":300,"width":300});
  	  $("#spin").click(function(){ console.log(ezslot0.spin());});
    });