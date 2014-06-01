/*!
 * base.main
 */

(function( amman, $, ko, underscore ) { 'use strict';

  amman.core = amman.core || {};

  // encapsulating base libraries
  // for easier access
  amman.core.$ = $;
  amman.core.ko = ko;
  amman.core._ = underscore;

})( this.amman = this.amman || {}, jQuery, ko, _ );