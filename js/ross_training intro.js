/**
 * @object pageEventsManager
 * purpose: An object that dispatch changes and preserve these changes
 *
 * @author Ross and Luc
 * @version 1.0
 *
 * Instructions:  Trigger a body event called customEvent
 *
 */
var pageEventsManager = (function()(){


    /**
     * @method privateInitListeners
     * Purpose initialize listeners for the page
     * Listen to button clicks
     */
    function privateInitListeners(){

        // add a listener for the button class
        $('body').on('customEvent',  function(e){

            alert('Yo Dawg!');
            handleSuccess();

        }
    }

    function handleSuccess(){

        $.getScript( "/js/ross_training 1.js" )
            .done(function( script, textStatus ) {
                console.info( 'success' );
            })
            .fail(function( jqxhr, settings, exception ) {
                console.info( 'fail '+exception );
            }
        );
    }

    function privateTriggerCustomEvent{
        //  ROSS THIS IS WHERE YOU TRIGGER THE CUSTOM EVENT
    }


    /** public**/
    return {
        'initListeners':function(){
            privateInitListeners()
        },
        triggerCustomEvent : function(){

            privateTriggerCustomEvent()
        }
    }
})()



/**
 * @method Listener
 * doc ready
 */
$(document).ready(function(){

    pageEventsManager.initListeners();
    // Trigger customEvent
});