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
    this._signal = ko.observable();
    return this;
  }


  /**
   * dispatch a signal ( publish )
   *
   * @param {object} payload
   * @api public
   */

  Signal.prototype.dispatch = function( payload ) {
    this._signal( payload );
  };


  /**
   * listen to signal updates ( subscribe )
   *
   * @param {fn} handler
   * @param {object} context
   * @return {object} listen instance
   * @api public
   */

  Signal.prototype.listen = function( handler, context ) {
    var instance = this._signal.subscribe( handler, context );
    instance.unlisten = instance.dispose;
    return instance;
  };
  
  /**
   * `expose` Signals
   */

  core.Signal = Signal;

})( this.amman.core );