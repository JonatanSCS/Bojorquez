module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: 'Grunt file/\n'
      },
      build: {
        src: 'scripts/jquery.cookie.js',
        dest: 'scripts/jquery.cookie.min.js'
      }
    },
    
    jade: {
      debug: {
        options: {
          data: {
          debug: true
          }
        },
        files: {
          'index.html': 'index.jade',
          'html/municipios.html':'html/municipios.jade',
          'html/municipio-Tlax.html':'html/municipio-Tlax.jade',
          'html/tlaxcala.html':'html/tlaxcala.jade',
          'html/videos.html':'html/videos.jade',
          'polymer-elements/header.html': 'polymer-elements/header.jade',
          'polymer-elements/estados.html': 'polymer-elements/estados.jade',
          'polymer-elements/arte-cultura.html': 'polymer-elements/arte-cultura.jade',
          'polymer-elements/header-min.html': 'polymer-elements/header-min.jade'
        }
      } 
    },

    stylus:{
      debug: {
        options: {
          data: {
          debug: true
          }
        },
        files: {
          'css/style.css': 'css/style.styl'
        }
      } 
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          keepalive: true
        }
      }
    },
    watch: {
            stylesheets: {
                files: ['css/style.styl',
                        'index.jade',
                        'html/municipios.jade',
                        'html/municipio-Tlax.jade',
                        'html/tlaxcala.jade',
                        'html/videos.jade',
                        'polymer-elements/header.jade',
                        'polymer-elements/estados.jade',
                        'polymer-elements/arte-cultura.jade',
                        'polymer-elements/header-min.jade'
                        ],


                tasks: ['stylus','jade'],
                options: {
                    interrupt: true
                }
            }
        },
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify', 'jade', 'stylus', 'watch']);
  grunt.registerTask('server', ['connect:server']);



};