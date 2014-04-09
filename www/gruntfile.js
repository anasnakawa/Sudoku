
/**
 * `expose` grunt
 */

module.exports = grunt;


/**
 * `grunt` constructor
 */

function grunt( grunt ) {
  grunt.initConfig({
      concat      : concat()
    , watch       : watch()
    , typescript  : typescript()
  });

  // load all grunt modules at once
  require( 'load-grunt-tasks' )( grunt );

  // register tasks
  // typescript tasks
  grunt.registerTask( 'ts', [ 'watch', 'typescript', 'concat:engine' ] );
  grunt.registerTask( 'ts-compile', [ 'typescript', 'concat:engine' ] );
}


/**
 * `grunt watch` task
 */

function watch() {
  return {
    amman: {
        files: [ './js/amman/**/*.js' ]
      , tasks: [ 'concat:amman' ]
    }
    , typescript: {
        files: [ './ts/**/*.ts' ]
      , tasks: [ 'typescript' ]
    }
    , engine: {
        files: [ './js-auto/engine/**/*.js' ]
      , tasks: [ 'concat:engine' ]
    }
  }
}


/**
 * `grunt concat` task
 */

function concat() {
  return {
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
    , engine: {
      src: [
          './js-auto/engine/gameLevel.js'
        , './js-auto/engine/baseGenerator.js'
        , './js-auto/engine/baseSolver.js'
        , './js-auto/engine/cell.js'
        , './js-auto/engine/subSquare.js'
        , './js-auto/engine/board.js'
        , './js-auto/engine/sudUtils.js'
        , './js-auto/engine/fixedGenerator.js'
        , './js-auto/engine/solver.js'
        , './js-auto/engine/analyzer.js'
        , './js-auto/engine/config.js'
        , './js-auto/engine/game.js'
        , './js-auto/engine/sudoku.js'
      ]
      , dest: './js-auto/engine.js'
    }
  }
}


/**
 * `grunt ts` ( typescript ) task
 *
 * @reference https://github.com/k-maru/grunt-typescript
 */

function typescript() {
  return {
    engine: {
        src: [ 'ts/**/*.ts' ]
      , dest: 'js-auto/'
      , options: {
          basePath: 'ts'
        , sourceMap: false
      }
    }
  }
}