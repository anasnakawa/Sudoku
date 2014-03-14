/*!
 * core.moduleBase
 */

(function( core ) { 'use strict';

  var util = core.util
  , $ = core.$;

  function startModule( moduleName, element, options ) {

    if( util.is.string( element ) ) {
      element = $( element ).get( 0 );
    }    

    if( core.modules[ moduleName ] == null ) {
      core.error( 'could not find a registered module with the name: ' + moduleName );
      return;
    }

    var instance;
    util.defer( function() {
      instance = new core.modules[ moduleName ]( element, options );
    });

    return instance;
  }

  core.startModule = startModule;

})( this.amman.core );