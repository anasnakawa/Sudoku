/*!
 * amman sandbox
 */

(function( amman, global ) { 'use strict';

  // locals
  var core = amman.core;
  var util = amman.util;
  var _ = core._;

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
  amman.publish     = _.bind( core.pubsub.publish, amman.pubsub );
  amman.subscribe   = _.bind( core.pubsub.subscribe, amman.pubsub );
  amman.unsubscribe = _.bind( core.pubsub.unsubscribe, amman.pubsub );

  // logging
  amman.log   = core.log;
  amman.error = core.error;
  amman.info  = core.info;
  amman.warn  = core.warn;

  global.util = amman.util;

})( this.amman, this );