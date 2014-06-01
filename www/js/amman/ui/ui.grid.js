/*!
 * grid system
 */

(function( amman ) { 'use strict';

  // locals
  var $ = amman.core.$;

  // templates
  var sheet = '<style id="css" type="text/css">[0]</style>';
  var gridTemplate = [
      '.grid-width-[0] { width: [1]px; }'
    , '.grid-height-[0] { height: [1]px; }'
    , '.grid-line-height-[0] { line-height: [1]px; }'
  ].join( '\n' );
  var size = Math.floor( document.body.clientWidth / 81 );
  var cache = [];

  function updateCss( styles ) {
    var css = document.getElementById( 'css' );
    if( !css ) {
      document.write( sheet.parse( styles ) );
      return;  
    }
    css.innerHtml( styles );
  }

  function calculate() {
    var size = Math.floor( document.body.clientWidth / 9 )
    , css = [ 
        ''
      , '.board { width: [0]px; }'.parse( ( size * 9 ) - 9 )
      , '.box { width: [0]px; }'.parse( ( size * 3 ) - 3 )
      , '.box .cell { width: [0]px; height: [0]px; line-height: [0]px; font-size: [1]px; }'.parse( size - 2, ( size - 2 ) / 2 )
      , '.control { width: [0]px; height: [0]px; line-height: [0]px; font-size: [1]px; }'.parse( size - 4 , ( size - 4 ) / 2 )
      , ''
    ].join( '\n' )
    , board = document.getElementById( 'board' );
    
    updateCss( css );

    $( board ).width( $( board ).width() ).css( 'display', 'block' );    
  }

  calculate();

  // grid system
  // -----------

  for( var i = 1; i <= 81; i++ ) {
    cache.push( gridTemplate.parse( i, i * size ) );
  }

  document.write( sheet.parse( cache.join( '\n' ) ) );


})( this.amman );