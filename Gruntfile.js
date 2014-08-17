module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      shared: {
        src: ['www/dev_js/shared/**/*.js'],
        dest: 'www/js/shared.js'
      },
      home: {
        src: ['www/dev_js/home/**/*.js'],
        dest: 'www/js/home.js'
      }
    },
    uglify: {
      shared: {
        src: 'www/js/shared.js',
        dest: 'www/js/shared.min.js'
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
        ignores: ['www/dev_js/_libraries/**/*']
      }
    },
    clean: ['www/js', 'www/css', 'www/dev_css'],
    sass: {
      dist: {
        options: {

        },
        files: {
          'www/dev_css/shared.css': 'www/dev_scss/shared/shared.scss',
          'www/dev_css/home.css': 'www/dev_scss/home/home.scss'
        }
      }
    },
    cssmin: {
      minify: {
        files: {
          'www/css/shared.css': 'www/dev_css/shared.css',
          'www/css/home.css': 'www/dev_css/home.css'
        }
      }
    },
    watch: {
      scripts: {
        files: ['www/dev_js/**/*.js', 'www/dev_scss/**/*.scss', 'www/dev_html/**/*.html'],
        tasks: ['htmlbuild', 'wiredep', 'jshint', 'clean', 'sass', 'cssmin', 'concat', 'uglify', 'copy'],
        options: {
          spawn: false,
        },
      }
    },
    htmlbuild: {
      main: {
        src: 'www/dev_html/index.html',
        dest: 'www/',
        options: {
          beautify: true,
          sections: {
            test: 'www/dev_html/test/**/*.html'
          }
        }
      }
    },
    wiredep: {
      main: {
        src: [
          'www/index.html'
        ]
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
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', 'runs my tasks', function() {
    var tasks = ['htmlbuild', 'wiredep', 'jshint', 'clean', 'sass', 'cssmin', 'concat', 'uglify'];
    grunt.option('force', true);
    grunt.task.run(tasks);
  });

};