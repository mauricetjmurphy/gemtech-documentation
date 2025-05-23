---
title: "Raspberry Pi Configuration"
date: "2024-07-18"
---

# Prepare the Raspberry Pi

## SSH into the Pi

```
ssh pi@192.168.0.20
```

## Update the System:

```
sudo apt-get update && sudo apt-get upgrade -y
```

## Install Docker:

```
sudo apt install docker.io -y
```

## Install Docker Compose:

```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-linux-armv7" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Verify the Installation

docker-compose --version

## Add Your User to the Docker Group:

```
sudo usermod -aG docker $USER
```

## Reboot the system to apply the group changes:

```
sudo reboot
```
