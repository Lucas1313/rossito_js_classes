/**
 * @object pageEventsManager
 * purpose: An object that dispatch changes and preserve these changes
 *
 * @author Ross and Luc
 * @version 1.0
 *
 * Instructions: Replace all ...? by the appropriate values
 * Goal :
 * a) Listen to button click using a class
 * b) get the ID of the button that is clicked
 * c) Get the data-customtext of the button that is clicked
 *
 */
var pageEventsManager = (function()(){

    // Closure to preserve the id and the data-customtext of the buttons
    var clickedButtons = {
        {'eventsTargetID' : 'data-customtext'},
    }
    /**
     * @method privateInitListeners
     * Purpose initialize listeners for the page
     * Listen to button clicks
     */
    function privateInitListeners(){

        // add a listener for the button class
        /*
          $('body').on(...?, ...? , function(e){

            // handle the action
            ...?
        }
        */
    }

    /**
     * @method handleButtonClick
     * Purpose: To process a button click, Dispatch a global event to page the body
     */
    function handleButtonClick(e){

        // get the id of the button
        var eventTarget = '...?';

        // saves the button id and inner html
        clickedButtons.eventTargets//. ...? = ...?

        // dispatch event to the body
        // Pass some custom text to the event using a Key Value
        /*
         *   $('body').trigger( ...?, {...?, ...?});
         */
    }

    /** public**/
    return {
        'initListeners':function(){
            privateInitListeners()
        }
    }
})()

/**
 * @object globalEventsManager
 * purpose: An object that Listen to body events changes and preserve these changes
 *
 * @author Ross and Luc
 * @version 1.0
 */
var globalEventsManager = (function()(){

    // Closure to preserve the state of the buttons
    var globalEvents = {
        'eventsType' : {
            '#targetId' : 'custom Text',
        },
        //...? here you will store all events type ids and text
    }
    /**
     * @method privateInitListeners
     * Purpose initialize listeners for the page
     * Listen to button clicks
     */
    function privateInitListeners(){

        // add a listener to the body
        /*
        $('body').on(...?, ...? , function(e, args){

            // handle the action
            ...?
        }
        */
    }

    /**
     * @method handleButtonClick
     * Purpose: To process a button click, Dispatch a global event to page the body
     */
    function handleEvent(e, args){

        // get the id of the button
        var eventTarget = '...?';

        // saves the button id and inner html
        globalEvents.eventTargets //. ...? = ...?

        // list all events
        //...?
    }

    /**
     * @method listAllEvents
     * Purpose: feedback on all events that have happened on the page
     *
     */
    function listAllEvents(){

        // init the feedback string
        var feedbackText = '';

        //Iterate through all events
        for(var someEvent in globalEvents){

            // format the text for html purpose
            feedbackText += '...?';

        }
        // feedback into a div
        $('.feedbackDiv').html()
    }

    /** public**/
    return {
        'initListeners':function(){
            privateInitListeners()
        }
    }
})()

alert('congratulation you are ready to get to level 1')

/**
 * @method Listener
 * doc ready
 */
$(document).ready(function(){
    pageEventsManager // . ...?;
    globalEventsManager// . ...?
});