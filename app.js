const { App } = require('@slack/bolt');

const helloResponse = require('./responses/hello');
const hobbiesResponse = require('./responses/hobbies');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.message('hi', async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});

app.command('/bot', async ({ command, ack, say }) => {
  await ack();

  await say(`Hey there <@${command.user_name}>!`);

  await say(`Type in '/bot-hello' to continue...`);
});

app.command('/bot-hello', async ({ ack, say }) => {
  await ack();

  await say('Welcome. How are you doing?');

  await say(helloResponse);
});

app.action('hello-response-completed', async ({ ack, say }) => {
  await ack();

  await say('What are your favorite hobbies?');

  await say(hobbiesResponse);
});

app.action('hobbies-response-completed', async ({ ack, say }) => {
  await ack();

  await say(`Thank you`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Slack Bot is online!');
})();
