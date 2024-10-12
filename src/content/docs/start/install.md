---
title: Install Cubtera
description: Installation documentation page for Cubtrera
sidebar:
  # Set a custom label for the link
  label: Install Cubtera
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 1
  # Add a badge to the link
  # badge:
    # text: start here
    # variant: caution #note, tip, danger, caution or success
---

&emsp; Cubtera currently supports MacOS and Linux. Be sure [brew](https://brew.sh/) is installed on your machine before proceeding. For Cubtera installation, run the following commands in your terminal:

```bash
brew tap cubtera/cubtera
brew install cubtera
cubtera --version
```

&emsp; If you prefer direct binary installation, download the [latest release](https://github.com/cubtera/cubtera/releases) from Github.

:::caution
Direct installation on MacOS will require Security & Privacy settings to be changed. To allow the installation, go to `System Preferences > Security & Privacy > General` and click `Allow Anyway` for Cubtera.
:::