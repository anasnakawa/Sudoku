/**
 * game module custom extensions
 */

/**
 * box class calculations
 */

ko.bindingHandlers.box = {
  update: function( element, value, bindings, viewModel, context ) {
    // debugger;
    var $parent = context.$parent;
    var $data = util.unwrap( value() );
    var css = [ 'box' ];
    var selectedCell = $parent.selectedCell();

    css.push( 'box-' + $data[ 0 ].box );

    if( selectedCell && selectedCell.box === $data[ 0 ].box ) {
      css.push( 'active-row-' + selectedCell.x );
      css.push( 'active-col-' + selectedCell.y );
      css.push( 'active-box-' + selectedCell.box );
      css.push( 'active-digit-' + selectedCell.data() );
    }

    // update element classes
    $( element ).addClass( css.join( ' ' ) ); 
  }
}

/**
 * cell class calculations
 */

ko.bindingHandlers.cell = {
  update: function( element, value, bindings, viewModel, context ) {
    var $data = util.unwrap( value() );
    var css = [ 'cell' ];
    
    css.push( 'cell-digit-[0] cell-row-[1] cell-col-[2]'.parse( $data.data(), $data.x, $data.y ) );
    css.push( 'cell-input-[0]'.parse( Sudoku.cellType.SYSTEM ? 'auto' : 'user' ) );
    css.push( 'cell-[0]'.parse( $data.data() > 0 ? 'filled': 'empty' ) );

    if( $data.isActive() ) {
      css.push( 'cell-active' );
    }

    $( element ).attr( 'class', css.join( ' ' ) );
  }
}


/**
 * control class calculations
 */

ko.bindingHandlers.control = {
  update: function( element, value, bindings, viewModel, context ) {
    var $data = util.unwrap( value() );
    var css = [ 'control' ];

    css.push( 'control-' + $data );

    $( element ).addClass( css.join( ' ' ) );
  }
}