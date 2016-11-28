# swagger api mock server

Runs an api mock server, by parsing a swagger.yaml file.
You can edit the swagger.yaml, reload the browser and everything should
be up-to-date.


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

If you need to specify a different name for YAML file you can mount a volume like the following:

    docker run -i \
        -p 8000:8000 \
        -v /path/to/file.yaml:/data/swagger.yaml \
        -t palo/swagger-api-mock

## CORS support

HTTP headers for Cross-Origin Resource Sharing (CORS) are automatically set to **allow** any kind of access.
All _preflight_ or normal requests will be automatically served with the following values:

| Header                        | Value
|:-----------------------------------|:-----------------
| `Access-Control-Allow-Origin`      | If the HTTP request includes an `Origin` header, then this value is echoed back; otherwise value is a wildcard `*`
| <nobr>`Access-Control-Allow-Credentials`</nobr> | If the `Access-Control-Allow-Origin` is a wildcard `*` value is `false`; otherwise `true`.
| `Access-Control-Allow-Methods`     | _All_ HTTP methods are always sent.
| `Access-Control-Allow-Headers`     | If the HTTP request includes an `Access-Control-Request-Headers` header, then this value is echoed back; otherwise it is not set.

Please note that _preflight_ requests (with `OPTIONS` method) will be always forced to HTTP code 200, even if not declared in YAML file.

# links

* [swagger-api-mock](https://www.npmjs.com/package/swagger-mock-api)
* [swagger-api-mock-docker](https://hub.docker.com/r/palo/swagger-api-mock)
* [chance](http://chancejs.com)
* [swagger-spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)
* [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
