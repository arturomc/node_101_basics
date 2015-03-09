module.exports = function(grunt){

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'public/assets/**/*.js'],
            options: {
                globals: {
                    jQuery:true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('watchStuff', ['jshint','watch']);
};

