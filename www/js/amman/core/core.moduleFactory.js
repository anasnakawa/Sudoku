/*!
 * core.moduleFactory
 */

(function( core ) { 'use strict';

  var modules = {}
  , util = core.util;

  function registerModule( moduleName, impl ) {
    if( moduleName in modules ) {
      core.warn( 'attempt to register an already registered module: {moduleName}' );
    }

    if( !( 'create' in impl ) ) {
      return core.error( '{moduleName} does not have implementation for create method' );
    }

    // module instance constructor
    modules[ moduleName ] = function( element, options ) {
      // inheritance setup
      modules.moduleBase.prototype.constructor.apply( this, arguments );
      util.each( impl, function( object, key ) {
        if( !!key.match(/^create$|^init$/) ) return;
        this[ key ] = object;
      }, this );      

      this.moduleName = moduleName;
      this.element = element;
      util.extend( this.options, options );

      this.create();
      ko.applyBindings( this, this.element.get ? this.element.get( 0 ) : this.element );

      this.init();
    }

    modules[ moduleName ].prototype.create = function() {
      modules.moduleBase.prototype.create.apply( this, arguments );
      impl.create.apply( this, arguments );
    }

    modules[ moduleName ].prototype.init = function() {
      modules.moduleBase.prototype.init.apply( this, arguments );
      // init method is optional
      util.is.fn( impl.init ) && impl.init.apply( this, arguments );
    }
  }

  core.modules = modules;
  core.registerModule = registerModule;

})( this.amman.core );