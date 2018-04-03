# Installing Docker
1. Add the GPG key for the official Docker repository to the system
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
2. Add the Docker repository to APT sources
```shell
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
3. Update the package database
```shell
sudo apt-get update
```
4. Install docker
```shell
sudo apt-get install -y docker-ce
```
5. If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group
```shell
sudo usermod -aG docker ${USER}
```
6. Log out of the machine and back in

# Installing Docker compose
1. Get docker-compose from repo
```shell
sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```
2. Set the permissions
```shell
sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```