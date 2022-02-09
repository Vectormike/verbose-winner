# Slack Bot

## Overview

A Simple Slack Bot that responds to greetings and pleasantries and has a small short conversation with the slack user

## Running locally

### 0. Create a new Slack App

- Go to https://api.slack.com/apps
- Click **Create App**
- Choose a workspace
- Enter App Manifest using contents of `manifest.yaml`
- Click **Create**

Once the app is created click **Install to Workspace**
Then scroll down in Basic Info and click **Generate Token and Scopes** with both scopes

### 1. Setup environment variables

```zsh
# Replace with your bot and app token
export SLACK_BOT_TOKEN=<your-bot-token> # from the OAuth section
export SLACK_APP_TOKEN=<your-app-level-token> # from the Basic Info App Token Section
```

### 2. Setup your local project

```zsh
# Clone this project onto your machine
git clone https://github.com/TonyCookey/slack-bot.git

# Change into the project
cd slack-bot

# Install the dependencies
npm install
```

### 3. Start servers

```zsh
npm run start
```

### 4. Test

Go to the installed workspace and type **/Hello** in a DM to your new bot. You can also type **/Hello** in a channel where the bot is present
