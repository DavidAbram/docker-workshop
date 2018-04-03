//#include <unistd.h>
#include <sys/syscall.h>

#ifndef DOCKER_ARCH
	#define DOCKER_ARCH "amd64"
#endif

const char message[] =
	"\n"
	"Welcome to the Docker workshop!\n"
	"You can see all the materials at https://github.com/DavidAbram/docker-workshop\n"
	"\n";

void _start() {
	syscall(SYS_write, 1, message, sizeof(message) - 1);
  
	syscall(SYS_exit, 0);
}