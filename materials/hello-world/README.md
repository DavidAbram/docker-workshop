# Hello World

1. Build binary from hello.c
```shell
gcc -static -Os -nostartfiles -o hello hello.c
```
2. Build docker image from Dockerfile
```shell
docker image build ./ -t hello-docker-workshop
```
3. Run docker container from created image
```shell
docker run hello-docker-workshop
```
4. Get information about this workshop