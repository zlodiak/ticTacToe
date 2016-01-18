var Informer = function(parentElement, infoArr) {   
  $('<table class="informer" id="informer"> \
      <tr><td class="label level_label">уровень: </td><td class="value level_value" id="levelValue"></td></tr> \
      <tr><td class="label score_label">счёт: </td><td class="value score_value" id="scoreValue"></td></tr> \
    </table>').appendTo('#' + parentElement);  

  $('<div class="messager" id="messager"></div>').appendTo('#' + parentElement); 

  this.refreshMessage('Игра началась', 'orange');
  this.refreshInfo(infoArr);
  this.messageCount = 0;
};

Informer.prototype = {

  refreshMessage: function(message, textColor) {  console.log(message);
    $('<div class="message_unit" id="messageUnit_' + this.messageCount + '" >' + message + '</div>').css({
      color: textColor
    }).appendTo('#messager');

    setTimeout(function() { 
      $('#messageUnit_' + this.messageCount).hide(3000, function() { 
        $('#messager').empty();
        $('.message_unit').remove();
      }); 

    }, 3000);

    this.messageCount++;    
  },

  refreshInfo: function(infoArr) {  console.log(infoArr);
    $('#scoreValue').text(infoArr['score']);
    $('#levelValue').text(infoArr['level']);
  }  

}