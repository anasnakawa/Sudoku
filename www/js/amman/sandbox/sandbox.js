/*!
 * amman sandbox
 */

(function( core ) { 'use strict';

  // util
  amman.util = core.util;

  // config
  amman.config = core.config;

  // communication
  amman.PubSub = core.PubSub;
  amman.pubsub = core.pubsub;

  // logging
  amman.log = core.log.normal;
  amman.error = core.log.error;
  amman.info = core.log.info;
  amman.warn = core.log.warn;

})( this.amman.core );