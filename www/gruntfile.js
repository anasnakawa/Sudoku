/*!
 * grunt main task file that 
 * will power our rocking game
 */

module.exports = function( grunt ) {

  grunt.initConfig({

    concat: {
      amman: {
        src: [
            // core components
            './js/amman/core/core.config.js'
          , './js/amman/core/core.events.js'
          , './js/amman/core/core.log.js'
          , './js/amman/core/core.util.js'
          , './js/amman/core/core.pubsub.js'
          , './js/amman/core/core.storage.js'
          , './js/amman/core/core.pageBase.js'
          , './js/amman/core/core.moduleBase.js'
          // ui
          // sandbox
          , './js/amman/sandbox/sandbox.js'
        ]
        , dest: './js/amman/amman.js'
      }
    }
  });

  // load tasks
  // ----------
  // official
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  // other

  // define tasks
  // ------------

}