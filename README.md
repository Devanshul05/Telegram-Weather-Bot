# Weather Bot Telegram - Nest.js

[Daily Weather Bot](https://web.t.me/DevanshulBot?start=task_name) is a Telegram bot built using NestJS that provides weather updates to subscribed users. Users can register to receive weather updates for a specific city.git commit -m "first commit"

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Users can subscribe to receive weather updates.
- Weather updates are sent daily to subscribed users.
- Users can unsubscribe to stop receiving weather updates.
- Admin can unsubscribe any user.
- Admin can block any user.
- MongoDB is used to store user data.
- Admin can update API the OpenWeatherMap key.
- Integration with the OpenWeatherMap API for weather data.

## Prerequisites

Before running the project, make sure you have the following installed:

- [NestJs](https://nestjs.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/Devanshul05/Daily-Weather-Bot.git
   ```
2. Install packages:
   ```shell
   cd Daily-Weather-Bot/NestJS-Bot
   npm i
   cd ../Admin-Panel
   npm i
   ```

## Usage

### Telegram Bot
1. Create a .env file in the folder and configure your environment variables:
   ```
   TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
   CITY=YOUR_DEFAULT_CITY
   MONGODB_URI=YOUR_MONGODB_CONNECTION_URI
   OPENWEATHERMAP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
   ```
2. Fire up the NestJS application:
   ```
   npm run dev
   ```
3. Your Telegram bot is now running and ready to receive commands.
4. Users can interact with the bot by sending commands like /subscribe and /unsubscribe.

### Admin Panel
1. Fireup the React application:
   ```
   npm start
   ```

## Contributing

- Contributions are welcome! Please follow these guidelines:
  - Fork the repository.
  - Create a new branch: git checkout -b feature/your-feature.
  - Commit your changes: git commit -m 'Add new feature'.
  - Push to your branch: git push origin feature/your-feature.
  - Create a pull request.