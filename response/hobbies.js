const hobbiesResponse = {
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
                text: ':soccer: Football',
                emoji: true,
              },
              value: 'Football',
            },
            {
              text: {
                type: 'plain_text',
                text: ':notes: Music ',
                emoji: true,
              },
              value: 'Music',
            },
            {
              text: {
                type: 'plain_text',
                text: ':bed: Sleep',
                emoji: true,
              },
              value: 'Sleep',
            },
            {
              text: {
                type: 'plain_text',
                text: ':clapper: Movies',
                emoji: true,
              },
              value: 'Movies',
            },
            {
              text: {
                type: 'plain_text',
                text: ':basketball: Basketball',
                emoji: true,
              },
              value: 'Basketball',
            },
          ],
          action_id: 'hobbies-response-completed',
        },
      ],
    },
  ],
  text: 'Hobbies Question',
};

module.exports = hobbiesResponse;
