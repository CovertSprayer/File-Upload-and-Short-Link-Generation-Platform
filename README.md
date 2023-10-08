# File-Upload-and-Short-Link-Generation-Platform

## Overview
This project is a file upload and short link generation platform that allows users to easily upload files and generate short links to share with others. When someone accesses the short link, they can download the uploaded file.

## Prerequisites

Make sure you have the following prerequisites installed on your operating system before you start:

- [Nodejs and npm](https://nodejs.org/en/)

  To verify run:

  ```
  node -v
  ```

  ```
  npm -v
  ```

# Set up your Local Development Environment

Follow the following instructions to start.

**1.** Fork [this](https://github.com/CovertSprayer/File-Upload-and-Short-Link-Generation-Platform) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your-username>/File-Upload-and-Short-Link-Generation-Platform.git
```

**3.** Navigate to the project directory.

```
cd File-Upload-and-Short-Link-Generation-Platform
```

**4.** Create one `.env` file.

```
touch .env
```
**5.** Head to the [cloudinary.com](https://cloudinary.com/) and make a profile, grab `cloud_name`, `api_key`, `api_secret` from "getting started section".

**6.** Open `.env` file and inject your credentials so it looks like this.
```
CLOUD_NAME=<cloud_name>
CLOUD_API_KEY=<api_key>
CLOUD_API_SECRET=<api_secret>
```

or you can use these variables
```
CLOUD_NAME=djnsbazjy
CLOUD_API_KEY=981875581155473
CLOUD_API_SECRET=OcZypFycp7JEihA-JFvexFtyoPM
```

**7.** Run build command.

```
npm install
```

**8.** Run dev command.

```
npm run dev
```

Open http://localhost:4444 and take a look around.
