$(document).ready(function () {
    // JQuery code goes here
    console.log("JQuery Learning")

    // console.log($);
    // $('selector').action()
    $('p').click(); // click on p
    $('p').click(function () {
        console.log("Clicked on p", this);
        // $('p').hide(); // hides all p
        // $(this).hide(); // hide only clicked element
    }); // run this function when click on p


    // Element Selector
    // $('p').click();

    // id Selector
    // $("#secondpara").click();

    // class Selector
    // $('.odd').click();


    // events in JQuery
    // Mouse Events = click, dblclick, mouseenter, mouseleave
    // keyboard Events = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, UnloadEvent

    $('p').dblclick(function () {
        console.log("Double Clicked on p", this);
    }); // run this function when double click on p

    $('p').mouseenter(function () {
        console.log("You entered in p :", this);
    }); // run this function when mouse going/entering on p

    // $('.txt').hide();
    // $('.txt').hide(1000);
    // $('.txt').hide(1000, function () {
    //     console.log("Message Disappeared");
    // });

    // $('.txt').show(1000, function () {
    //     console.log("Message Displayed");
    // });

    // Toggle = show <--> Hide
    // Toggle(time,callback)
    // $('#toggle').click(function(){
    //     $('.txt').toggle(1000)
    // });

    //fadeIn()
    // fadeIn(time,callback)
    // $('#toggle').click(function(){
    //     $('.txt').fadeIn(1000)
    // });

    //fadeOut()
    // fadeOut(time,callback)
    // $('#toggle').click(function(){
    //     $('.txt').fadeOut(1000)
    // });

    //fadeToggle()
    // fadetoggle(time,callback)
    // $('#toggle').click(function(){
    //     $('.txt').fadeToggle(1000)
    // });

    //fadeTo() = give opacity also
    //fadeTo(time,opacity,callback)
    // $('#toggle').click(function(){
    //     $('.txt').fadeTo(1000,0.5)
    // });


    // Slide Methods in JQuery

    // slideDown()
    // slideDown(time,callback)
    // $('#toggle').click(function(){
    //     $('.txt').slideDown(1000)
    // });

    // slideUp()
    // slideUp(time,callback)
    // $('#toggle').click(function(){
    //     $('.txt').slideUp(1000)
    // });

    // slideToggle()
    // slidetoggle(time,callback)
    // $('#toggle').click(function(){
    //     $('.txt').slideToggle(1000)
    // });


    // Animate function in JQuery
    // $('.txt').animate({
    //     opacity : 0.5,
    //     height : '135px',
    //     width : '300px'
    // },1000);

    // animate with button click
    // $('#toggle').click(function(){
    //     $('.txt').animate({
    //         opacity : 0.5,
    //         height : '250px',
    //         width : '300px'
    //     },1000);
    // });

    // Add animations in queue = executed one by one
    $('.txt').animate({ opacity: 0.1 }, 1500);
    $('.txt').animate({ opacity: 0.9 }, 1000);
    $('.txt').animate({ width: '300px' }, 1500);
    $('.txt').animate({ width: '100%' }, 1500);


    // getting text of para
    $('#secondpara').text();
    
    
    //changing text of para
    // $('#secondpara').text('This is changed text of second paragraph');
    
    //getting text of form
    $("#address").text();
    $("#address").val();

    //changing text in forms
    $("#address").val('Hello, textarea text changed');
    $("#inputtext").val('inputbox changed');

    // remove = remove entire things
    // $(".essay").remove(); 

    // empty = remove child elements
    // $('.essay').empty();

    // add new class
    $('#secondpara').addClass('secPara');

    // remove class
    $('#secondpara').removeClass('secPara');
    
    // toggle class
    $('#secondpara').toggleClass('secPara');

    // get Attributes
    $('#address').attr("name"); // display the value of name attribute
    $('#myLink').attr('href'); // display the value of href attribute


    // setting CSS
    $('.txt').css('background-color', 'yellow');
    // to get background color
    $('.txt').css('background-color'); 
    $('.txt').css('color', 'red');

    // set multiple css
    // $('.oddpara').css({"background-color":"red","font-size":"25px","margin":"5px"});

    // JQuery height width get
    $('.essay').width();
    $('.essay').height();

    // innerWidth(), innerHeight() returns height and width includes padding
    $('.essay').innerWidth();
    $('.essay').innerHeight();

    // outerWidth(), outerHeight() returns height and width includes padding and borders
    $('.essay').outerWidth();
    $('.essay').outerHeight();


});