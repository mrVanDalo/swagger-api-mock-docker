
'use strict';

var path = require('path');
var mockApi = require('swagger-mock-api');

module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    keepalive: true,
                    middleware: [
                        mockApi({
                            swaggerFile: '/data/swagger.yaml',
                            watch: true
                        })
                    ],
                },
            },
        },
    });


    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect']);
};
