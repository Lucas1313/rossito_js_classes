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

    /** public**/
    return {
        'initListeners':function(){
            privateInitListeners()
        }
    }
})()



/**
 * @method Listener
 * doc ready
 */
$(document).ready(function(){
    pageEventsManager. ...?;
    globalEventsManager. ...?
});