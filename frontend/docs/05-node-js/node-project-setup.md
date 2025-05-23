---
title: "NodeJS Project Structure"
date: "2024-07-18"
---

# Node JS API Project setup

## Initialize a new Node.js project

This will create a package.json file, which will manage the dependencies and scripts for your project.

```
yarn init -y
```

## Install TypeScript and Node.js types

Install TypeScript and the type definitions for Node.js.

```
yarn add typescript @types/node --dev
```

## Initialize TypeScript configuration

This will generate a tsconfig.json file with the default configuration options.

```
yarn tsc --init
```

## Add the required dependancies

```
yarn add express zod config cors express pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb

```

```
yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript @aws-sdk/types -D
```
