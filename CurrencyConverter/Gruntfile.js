module.exports = function(grunt) {
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),
        //grunt task configuration will go here  
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    base: '.',
                    keepalive: true
                }
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-connect');

    //register grunt default task
    grunt.registerTask('default', ['connect']);

}
