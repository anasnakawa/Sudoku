/*!
 * native extensions
 */

(function() { 'use strict';

  /**
   * string parser with data passed as arguments
   *
   * @param {arguments}
   * @return {string}
   *
   * example: 
   * --------
   * 'i used both [0] & [1], however [1] looks good so far'.parse( 'iphone', 'andoird' );         // "i used both iphone & andoird, however andoird looks good so far"
   * 'the weather now in [0] seems to be [1]'.parse( 'Dubai', function() { return 'very hot'; }); // "the weather now in Dubai seems to be very hot"
   */
   
  String.prototype.parse = function() {
    var args = arguments;
    return this.replace( /\[([0-9]+)\]/g, function( token, match ) {
      var index = parseInt( match, 10 );
      var data = args[ index ];
      return isNaN( index ) || data == null ? token: ( typeof data !== 'function' ? data: data() );
    });
  }
   
   
  /**
   * string parser with data passed as an object literal
   *
   * @param {object} data
   * @return {string}
   *
   * example: 
   * --------
   * 'i used both {mob1} & {mob2}, however {mob2} looks good so far'.tmpl({ mob1: 'iphone', mob2: 'andoird' });         // "i used both iphone & andoird, however andoird looks good so far"
   * 'the weather now in {city} seems to be {temp}'.tmpl({ city: 'Dubai', temp: function() { return 'very hot'; } });   // "the weather now in Dubai seems to be very hot"
   */
   
  String.prototype.tmpl = function( data ) {
    return this.replace( /{([A-Za-z0-9_$\-]+)}/g, function ( token, match ) {
      return ( typeof data[ match ] !== 'function' ) ? data[ match ] : data[ match ]();
    });
  }

})();