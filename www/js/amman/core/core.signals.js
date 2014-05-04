/*!
 * core.signals
 * tiny signals implementation
 * utilizing knockout under the hood
 */

(function( core ) { 'use strict';

  /**
   * locals
   */

  var ko = core.ko;

  
  /**
   * `Signal` constructor
   */

  function Signal() {
    return ko.observable();
  }


  /**
   * dispatch a signal ( publish )
   *
   * @param {object} payload
   * @api public
   */

  ko.observable.prototype.dispatch = function( payload ) {
    this( payload );
  }

  /**
   * listen to signal updates ( subscribe )
   *
   * @param {fn} handler
   * @param {object} context
   * @return {object} listen instance
   * @api public
   */

  ko.observable.prototype.listen = function( handler, context ) {
    var instance = this.subscribe( handler, context );
    instance.unlisten = instance.dispose;
    return instance;
  }

  
  /**
   * `expose` Signals
   */

  core.Signal = Signal;

})( this.amman.core );