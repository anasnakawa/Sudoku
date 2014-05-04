/*!
 * amman sandbox
 */

(function( amman ) { 'use strict';

  // locals
  var core = amman.core;

  // base libs
  amman.$   = core.$;
  amman._   = core._;
  amman.ko  = core.ko;

  // util
  amman.util = core.util;

  // module system
  amman.start           = core.startModule;
  amman.module          = core.registerModule;
  amman.modules         = core.modules;
  amman.startModule     = core.startModule;
  amman.registerModule  = core.registerModule;

  // config
  amman.config = core.config;

  // communication
  amman.Signal      = core.Signal;
  amman.PubSub      = core.PubSub;
  amman.pubsub      = core.pubsub;
  amman.publish     = util.fn.bind( core.pubsub.publish, amman.pubsub );
  amman.subscribe   = util.fn.bind( core.pubsub.subscribe, amman.pubsub );
  amman.unsubscribe = util.fn.bind( core.pubsub.unsubscribe, amman.pubsub );

  // logging
  amman.log   = core.log;
  amman.error = core.error;
  amman.info  = core.info;
  amman.warn  = core.warn;

})( this.amman );