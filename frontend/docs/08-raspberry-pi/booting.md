---
title: "Booting from NVME"
date: "2024-07-18"
---

# Booting from NVME

## Initial boot from Micro SD card

Flash your micro sd card with the latest 64bit PI OS desktop version. We recommend using a 16gb of higher card.

## Install OS on NVME

Once instlled go to Accessories > Imager from the toolbar and run through the process again. Make sure you have your NVME drive selected this time. If you cant see you NVME device in the list you can try update the OS or double check you ribbon cable connections.

## Change the boot order

```
sudo raspi-config
```

Navigate to Advanced Options > Boot Order > NVME drive

## Set the NVME drive to PCIE Gen 3

```
sudo nano /boot/firmware/config.txt
```

Add the line `dtparam=pciex1_gen3`
