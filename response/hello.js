// response to / bot hello
const helloResponse = {
  blocks: [
    {
      type: 'actions',
      elements: [
        {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: ':grin: Doing Well',
                emoji: true,
              },
              value: 'Doing Well',
            },
            {
              text: {
                type: 'plain_text',
                text: ':neutral_face: Neutral ',
                emoji: true,
              },
              value: 'Neutral',
            },
            {
              text: {
                type: 'plain_text',
                text: ':innocent: Feeling Lucky',
                emoji: true,
              },
              value: 'Feeling Lucky',
            },
          ],
          action_id: 'hello-response-completed',
        },
      ],
    },
  ],
  text: 'Hello Response Question',
};

module.exports = helloResponse;
