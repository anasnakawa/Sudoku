/*!
 * amman sandbox
 */

(function( amman ) { 'use strict';

  // base libs
  amman.$ = amman.core.$;
  amman.ko = amman.core.ko;
  amman._ = amman.core._;

  // util
  amman.util = amman.core.util;

  // module system
  amman.registerModule = amman.core.registerModule;
  amman.modules = amman.core.modules;
  amman.startModule = amman.core.startModule;

  // config
  amman.config = amman.core.config;

  // communication
  amman.PubSub = amman.core.PubSub;
  amman.pubsub = amman.core.pubsub;

  // logging
  amman.log = amman.core.log;
  amman.error = amman.core.error;
  amman.info = amman.core.info;
  amman.warn = amman.core.warn;

})( this.amman );