/**
 * game module custom extensions
 */


/**
 * cell class calculations
 */

/**
'box' +' box-' + $data[0].box
    +($parent.selectedCell()&& $parent.selectedCell().box==$data[0].box?' active-row-'+$parent.selectedCell().x:'')
    +($parent.selectedCell()&& $parent.selectedCell().box==$data[0].box?' active-col-'+$parent.selectedCell().y:'')
    +($parent.selectedCell()&& $parent.selectedCell().box==$data[0].box?' active-box-'+$parent.selectedCell().box:'')
    +($parent.selectedCell()&& $parent.selectedCell().box==$data[0].box?' active-digit-'+$parent.selectedCell().data():'')
 */
ko.bindingHandlers.box = {
  update: function( element, value, bindings, viewModel, context ) {
    var $parent = context.$parent;
    var $data = context.$data;
    var css = [ 'box' ];
    var selectedCell = $parent.selectedCell();

    css.push( 'box-' + data[ 0 ].box );

    if( selectedCell && selectedCell.box === $data[0].box ) {
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
class: 'cell'
+(' cell-digit-' + $data.data())
+(' cell-row-' +$data.x )
+(' cell-col-' +$data.y )
+(Sudoku.cellType.SYSTEM==$data.type?' cell-input-auto':' cell-input-user')
+($data.data() >0 ?' cell-filled':' cell-empty' )
+($data.isActive()?' cell-active':''
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








