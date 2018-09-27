//channel 1: YUMMY
/* function listChannels(){
    $( "ul" ).append( '<li></li>' );



    createChannelElement(channelObject);
    createChannelElement(channelObject);
    createChannelElement(channelObject);
    createChannelElement(channelObject);
    createChannelElement(channelObject);
   
   
}

function createChannelElement(name, createdOn, crea){
    channelName = 
    
    var new_li = $("<li>").attr("onclick","switchChannel(" + channelName + ")").append(
        $("<span>").addClass(channel-meta).append(
            $("<i>").addClass('star far fa-star') + 
            $("<i>").addClass('fas fa-chevron-right')
        )
    );
    
    $("ul").append(new_li);


    $("li").attr("onclick", "switchChannel(" + channelName + ")");

    <li onclick="switchChannel(yummy)">
    #Yummy
    <!-- #5 #channels #icons now grouped in .channel-meta span -->
    <span class="channel-meta">
        <!--Awesome starry night-->
        <i class="star far fa-star" alt="not starred"></i>
        <!-- #5 #channels #icons now with chevron -->
        <i class="fas fa-chevron-right" alt="select"></i>
    </span>


    var link ='<h3><a href="https://map.what3words.com/' + messageObject.createdBy 
                + '" target="_blank"><strong>' + messageObject.createdBy + '</strong></a>' 
                + cDate +'<em>' + minutes + 'min. left</em></h3>' +
                ( "<p>" + messageObject.text + "</p>" ) + ( "<button> +5 min. <button/>")
   
    $('<div>').html(link).addClass('message').appendTo('#messages');

</li>
} */

var yummy = {
    name: '#Yummy',
    //createdOn: new Date(1459504800),
    createdOn: new Date(2016, 03,01),
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999, 
}

var sevenContinents = {
    name: '#SevenContinents',
    //createdOn: new Date(1459504800),
    createdOn: new Date(2016, 03,01),
    createdBy: 'cheeses.yard.applies',
    starred: true,
    expiresIn: 100,
    messageCount: 999, 
}

var killerApp = {
    name: '#KillerApp',
    //createdOn: new Date(1459504800),
    createdOn: new Date(2016, 03,01),
    createdBy: 'truck.cotton.zone',
    starred: false,
    expiresIn: 100,
    messageCount: 999, 
}

var firstPersonOnMars = {
    name: '#FirstPersonOnMars',
    //createdOn: new Date(1459504800),
    createdOn: new Date(2016, 03,01),
    createdBy: 'thus.best.dishes',
    starred: true,
    expiresIn: 100,
    messageCount: 999, 
}

var octoberfest = {
    name: '#Octoberfest',
    //createdOn: new Date(1459504800),
    createdOn: new Date(2016, 03,01),
    createdBy: 'meanings.identity.pays',
    starred: false,
    expiresIn: 100,
    messageCount: 999, 
}

console.log(yummy);
