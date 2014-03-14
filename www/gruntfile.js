/*!
 * grunt main task file that 
 * will power our rocking game
 */

module.exports = function( grunt ) {

  grunt.initConfig({

    watch: {
      amman: {
        files: [ './js/amman/**/*.js' ]
        , tasks: [ 'concat:amman' ]
      }
    }

    , concat: {
      amman: {
        src: [
            // base
            './bower_components/knockout.js/knockout.debug.js'
          , './bower_components/jquery/jquery.js'
          , './bower_components/lodash/dist/lodash.underscore.js'
          , './js/amman/core/core.base.js'
            // core components
          , './js/amman/core/core.config.js'
          , './js/amman/core/core.events.js'
          , './js/amman/core/core.log.js'
          , './js/amman/core/core.util.js'
          , './js/amman/core/core.pubsub.js'
          , './js/amman/core/core.storage.js'
          , './js/amman/core/core.pageFactory.js'
          , './js/amman/core/core.pageBase.js'
          , './js/amman/core/core.moduleFactory.js'
          , './js/amman/core/core.moduleBase.js'
          , './js/amman/core/core.moduleMain.js'
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