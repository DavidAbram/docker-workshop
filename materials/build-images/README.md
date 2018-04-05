# build-images

1. Build docker image from Dockerfile
```shell
docker build -t friendlyhello .
```
2. Run docker container from created image
```shell
docker run -p 4000:80 --name web friendlyhello
```