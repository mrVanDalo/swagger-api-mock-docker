FROM digitallyseamless/nodejs-bower-grunt

ADD swagger.yaml /data/swagger.yaml
VOLUME /data

ADD Gruntfile.js /mock/Gruntfile.js
ADD package.json /mock/package.json

RUN useradd --create-home swagger-mock && \
    chown -R swagger-mock /mock && \
    chown -R swagger-mock /data
USER swagger-mock


WORKDIR /mock
RUN npm install
CMD grunt
