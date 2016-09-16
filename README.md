# swagger API mock container

A container to run a mock server loading (and watching) a `swagger.yaml` file.

# how to run

> The `-i` is important for the `ctrl-c` command to be send to `grunt`.

## just to take a look

    docker run -i \
        -p 8000:8000 \
        -t palo/swagger-api-mock

## with your swagger.yaml

You need a folder where your `swagger.yaml` is placed.
It has to be named `swagger.yaml`.

    docker run -i \
        -p 8000:8000 \
        -v /path/to/folder:/data \
        -t palo/swagger-api-mock

# links

* [swagger-api-mock](https://www.npmjs.com/package/swagger-mock-api)
* [swagger-api-mock-docker](https://hub.docker.com/r/palo/swagger-api-mock)
* [chance](http://chancejs.com)
* [swagger-spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md")
