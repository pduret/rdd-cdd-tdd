# Cli-Weather


**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Introduction](#introduction)
- [Packages Installation](#packages-installation)
- [Packages Description](#packages-description)

## Introduction

Cli-Weather is a client useful to get weather from your terminal. You can easily get the weather online from your current location, or your favorite city ! The forecast is about 4 days :)

![](Screen2.png)

## Packages Installation

- Open a console
- Go to the directory `/weather`
- Follow those command lines :

```sh
❯ npm install public-ip
❯ npm install chalk
❯ npm install cli-table
❯ npm install minimist
```

- Test for your current location
```sh
❯ node index.js
```
![](Screen1.png)

- Or test from your favorite city
```sh
❯ node index.js -a "Lyon,FR"
```
![](Screen3.png)

## Packages Description

1. `public-ip` is used to get your public Ip
1. `chalk` is used to add color to your terminal
1. `cli-table` is used to render unicode_aided tables
1. `minimist` is used to add fanciful decoration