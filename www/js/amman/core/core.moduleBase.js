/*!
 * core.moduleBase
 */

(function( core ) { 'use strict';

  var $ = core.$;

  function ModuleBase( element, options ) {
    this.options = options;
    this.element = element;

    core.log( 'ModuleBase constructor' );
  }

  ModuleBase.prototype.constructor = ModuleBase;

  ModuleBase.prototype.create = function() {
    $( this.element ).attr( 'data-module', this.moduleName );
    core.log( 'ModuleBase create' );
  };
  ModuleBase.prototype.init = function() {
    core.log( 'ModuleBase init' );
  };

  core.modules.moduleBase = ModuleBase;

})( this.amman.core );