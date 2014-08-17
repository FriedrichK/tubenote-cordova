module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      shared: {
        src: ['www/dev_js/messageboard/**/*.js'],
        dest: 'www/js/messageboard.js'
      },
      home: {
        src: ['www/dev_js/home/**/*.js'],
        dest: 'www/js/home.js'
      }
    },
    uglify: {
      shared: {
        src: 'www/js/messageboard.js',
        dest: 'www/js/messageboard.min.js'
      },
      home: {
        src: 'www/js/home.js',
        dest: 'www/js/home.min.js'
      }
    },
    jshint: {
      files: 'www/dev_js/**/*.js',
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        ignores: ['www/dev_js/_libraries/*']
      }
    },
    clean: ['www/js', 'www/css', 'www/dev_css'],
    sass: {
      dist: {
        options: {

        },
        files: {
          'www/dev_css/messageboard.css': 'www/dev_scss/messageboard/messageboard.scss',
          'www/dev_css/home.css': 'www/dev_scss/home/home.scss'
        }
      }
    },
    cssmin: {
      minify: {
        files: {
          'www/css/messageboard.css': 'www/dev_css/messageboard.css',
          'www/css/home.css': 'www/dev_css/home.css'
        }
      }
    },
    copy: {
      libraries: {
        files: [
          {expand: true, cwd: 'www/dev_js/_libraries/', src: ['**/*'], dest: 'www/js/'},
          {expand: true, cwd: 'www/dev_scss/_libraries/', src: ['**/*.css'], dest: 'www/css/'},
        ]
      }
    },
    watch: {
      scripts: {
        files: ['www/dev_js/**/*.js', 'www/dev_scss/**/*.scss'],
        tasks: ['jshint', 'clean', 'sass', 'cssmin', 'concat', 'uglify', 'copy'],
        options: {
          spawn: false,
        },
      }
    }
  });

  // Default task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', 'runs my tasks', function() {
    var tasks = ['jshint', 'clean', 'sass', 'cssmin', 'concat', 'uglify', 'copy'];
    grunt.option('force', true);
    grunt.task.run(tasks);
  });

};