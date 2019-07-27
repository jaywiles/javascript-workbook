'use strict';

$(document).ready(function() {
  let block = null;
  let pickUp = null;
  let dropOff = null;
  
  $('[tower]').click(function() {
    // gets block's value
    if(block) {
      dropOff = $(this).children().last().data("value");
    } else {
      pickUp = $(this).children().last().data("value");
    }

    // moves block
    if ((block) && (pickUp < dropOff) || (block) && (dropOff === undefined)) {
      $(this).append(block);
      block = null;
    } else if (block === null) {
      block = $(this).children().last().detach();
    }
  })
})