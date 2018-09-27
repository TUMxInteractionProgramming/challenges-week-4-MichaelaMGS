/* #6 start the #external #action and say hello */
console.log("App is alive");



//Public Variables
var currentChannel;

var currentLocation = {
    longitude: 48.158271, 
    latitude: 11.503306,
    what3words: 'shovels.drums.markets',
}

function Message (text) {
     this.createdBy = currentLocation.what3words;
     this.latitude = currentLocation.latitude;
     this.longitude = currentLocation.longitude;
     this.createdOn = Date.now();
     this.expiresOn = new Date().setTime(new Date().getTime() + (15 * 60 * 1000));
     this.text = text;
     this.own = true;
}



/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch

    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    //channelName.createdBy.setAttribute('href', 'www.google.at');
    document.getElementById('channel-location').innerHTML = 'by ' + '<a href="http://w3w.co/' + channelName.createdBy + '" target="_blank">' + channelName.createdBy + "</a>";

    /* #6 #liking channels on #click */
    // #7 DEAL WITH STARS IN SWITCHCHANNEL
    channelName.starred == true ? $('#channel-star').attr('class', 'fas fa-star') : $('#channel-star').attr('class', 'far fa-star');

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    currentChannel = $('#channels li:contains(' + channelName.name + ')').addClass('selected');

    //Stores channelName in public variable 
    currentChannel = channelName;
}


/* #6 #liking a channel on #click */
function star() {
    //toggleClass is used for switching the images of the star by clicking on it
    $('#channel-star').toggleClass('fas far');
    currentChannel.starred =!currentChannel.starred;
    //$('.fa-star selected').toggleClass('fas far');
    $('.selected .star').toggleClass('fas far'); 

}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

function sendMessage(){
    var mes1 = new Message($('#inputText').val());
    console.log(mes1);
    createMessageElement(mes1);
    
    $('#inputText').val('');
}

function createMessageElement(messageObject){

    var dateCreate = new Date(messageObject.createdOn);

    var monthNames = [
        "Jan", "Feb", "March",
        "April", "May", "June", "July",
        "Aug", "Sept", "Oct",
        "Nov", "Dec"
      ];

      var weekDays = [
        "Mon", "Tue", "Wed",
        "Thu", "Fri", "Sat", "Sun"
      ];
    
      var day = dateCreate.getDate();
      var hour = dateCreate.getHours();
      var cDateMin = dateCreate.getMinutes();
      var monthIndex = dateCreate.getMonth();
      var cDateWeekDay = dateCreate.getDay();

    
      var cDate = weekDays[cDateWeekDay] + ', ' + monthNames[monthIndex] + ' ' + day + ', ' + hour + ':' + cDateMin;
    
    var eDate = new Date(messageObject.expiresOn);
    var minutes = eDate.getMinutes();
    
    var link ='<h3><a href="https://map.what3words.com/' + messageObject.createdBy 
                + '" target="_blank"><strong>' + messageObject.createdBy + '</strong></a>' 
                + cDate +'<em>' + minutes + 'min. left</em></h3>' +
                ( "<p>" + messageObject.text + "</p>" ) + ( "<button> +5 min. <button/>")
   
    $('<div>').html(link).addClass('message').appendTo('#messages');


}

/* $( "<a/>", {
        html: "<strong>:createdBy:</strong>",
        "class": "new",
        href: ":createdBy:",
        target: "_blank",
    });
    $( "<p>:text:</p>" );
   

    <div class="message">
            <h3><a href=":createdBy:" target="_blank"><strong>:createdBy:</strong></a>
                :createdOn: <em>:expiresIn: min. left</em></h3>
            <p>:text:</p>
            <button>+5 min.</button>
        </div>
    
    function addStation(){
        var station = $('Input[id=station-input]').val();
        $('<p>').html(station).appendTo('#stations');
      }*/