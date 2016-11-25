'use strict';

var path = require('path');
var mockApi = require('swagger-mock-api');

function corsMiddleware(req, res, next) {
    var hasOrigin = req.headers.origin != null
    res.setHeader('Access-Control-Allow-Origin', hasOrigin ? req.headers.origin : '*');
    var requestMethods = req.headers['access-control-request-headers'];

    var requestMethods = req.headers['access-control-request-method'];
    var methods = requestMethods != null ? requestMethods : 'GET, HEAD, PUT';
    res.setHeader('Access-Control-Allow-Methods', methods);

    res.setHeader('Access-Control-Allow-Credentials', !hasOrigin);

    var requestHeaders = req.headers['access-control-request-headers'];
    if (requestHeaders != null) {
        res.setHeader('Access-Control-Allow-Headers', requestHeaders);
    }

    if (req.method === 'OPTIONS') {
        res.setHeader('Allow', methods);
        res.end();
    }
    next();
}

module.exports = function (grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    keepalive: true,
                    middleware: function (connect, options) {
                        var middlewares = [];

                        middlewares.push(corsMiddleware);

                        middlewares.push(mockApi({
                            swaggerFile: '/data/swagger.yaml',
                            watch: true
                        }));

                        return middlewares;
                    },
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect']);
};
