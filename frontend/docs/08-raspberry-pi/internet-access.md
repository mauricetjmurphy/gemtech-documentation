---
title: "Exposing the Raspberry Pi to the web"
date: "2024-07-18"
---

# Exposing the Raspberry Pi to the web

## Assign a Static Local IP Address

Open the DHCP configuration file

```
sudo nano /etc/dhcpcd.conf
```

Add the following lines at the end of the file, adjusting the IP address, router, and DNS to match your network configuration:

```
interface eth0
static ip_address=192.168.1.100/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1
```
