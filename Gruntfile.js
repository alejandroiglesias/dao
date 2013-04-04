/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    sass: {
      dist: {
        files: {
          '_demo/css/main.css': '_dao.scss'
        }
      },
      options: {
        style: 'compact',
        debugInfo: true
      }
    },
    watch: {
      lib: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['sass']);

};
