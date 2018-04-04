# Node-app

1. Build docker image from Dockerfile
```shell
docker build . -t node-app
```
2. Run docker container from created image
```shell
docker run -p 8080:8080 node-app
```
3. Go to your browser to [http://localhost:8080/](http://localhost:8080/)
4. If you want to leave node-app container running run
```shell
docker run -p 8080:8080 -d --name node-app1 node-app
```
5. Stop and remove node-app container with
```shell
docker stop node-app1
docker rm node-app1
```