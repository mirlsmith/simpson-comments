import { Comment } from "../models/comment";

export const COMMENTS: Comment[] =  [
    {
      "id": 1,
      "parentCommentId": null,
      "ownerId": 1,
      "txt": "You're all right stupid Flanders, you're all right",
      "createdAt": '2018-11-01T09:00:00.000Z',
      "deletedAt": null
    },
    {
      "id": 11,
      "parentCommentId": 8,
      "ownerId": 1,
      "txt": "Homer: Yeah, but doesn't the money go to schools? Apu: You have been to our schools, what do you think?",
      "createdAt": "2018-11-02T09:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 12,
      "parentCommentId": 9,
      "ownerId": 1,
      "txt": "Oh my god! If a dead fish and a homeless person had a baby and the baby puked, and a dog ate the puke, this smells like the rear end of that dog!",
      "createdAt": "2018-11-02T09:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 13,
      "parentCommentId": 6,
      "ownerId": 1,
      "txt": "For once the Indian has been outsourced.",
      "createdAt": "2018-11-02T09:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 2,
      "parentCommentId": 1,
      "ownerId": 2,
      "txt": "I’ve learned that life is one crushing defeat after another until you just wish Flanders was dead",
      "createdAt": "2018-11-01T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 14,
      "parentCommentId": 5,
      "ownerId": 2,
      "txt": "What's the point of going out? We're just gonna wind up back here anyway.",
      "createdAt": "2018-11-02T09:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 15,
      "parentCommentId": 6,
      "ownerId": 2,
      "txt": "My beer! You never had a chance to become my urine!",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 16,
      "parentCommentId": 7,
      "ownerId": 2,
      "txt": "I believe that children are our future. Unless we stop them now.",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 3,
      "parentCommentId": 1,
      "ownerId": 3,
      "txt": "Eat My Shorts!",
      "createdAt": "2018-11-01T11:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 17,
      "parentCommentId": 4,
      "ownerId": 3,
      "txt": "Don't Have a Cow, Man!",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 18,
      "parentCommentId": 5,
      "ownerId": 3,
      "txt": "I'm Bart Simpson, Who the Hell are You?",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 19,
      "parentCommentId": 9,
      "ownerId": 3,
      "txt": "Bart has on occasion, borrowed \"D'oh\" from Homer",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 4,
      "parentCommentId": 3,
      "ownerId": 4,
      "txt": "Excellent!",
      "createdAt": "2018-11-01T11:01:00.000Z",
      "deletedAt": null
    },
    {
      "id": 5,
      "parentCommentId": null,
      "ownerId": 4,
      "txt": "Release the Hounds!",
      "createdAt": "2018-11-01T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 20,
      "parentCommentId": 11,
      "ownerId": 4,
      "txt": "Smithers!",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 21,
      "parentCommentId": 14,
      "ownerId": 4,
      "txt": "Simpson, eh?",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 6,
      "parentCommentId": 5,
      "ownerId": 5,
      "txt": "If it's the blue hair and the schnoz you're digging, I've got plenty more cousins.",
      "createdAt": "2018-11-01T12:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 7,
      "parentCommentId": null,
      "ownerId": 5,
      "txt": "What about me?",
      "createdAt": "2018-11-01T10:30:00.000Z",
      "deletedAt": null
    },
    {
      "id": 22,
      "parentCommentId": 16,
      "ownerId": 5,
      "txt": "A fat kid with a dream. I can't compete with that.",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 23,
      "parentCommentId": 6,
      "ownerId": 5,
      "txt": "Did you ever wonder if hippopotamuses think that rhinos are unicorns?",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 24,
      "parentCommentId": 8,
      "ownerId": 5,
      "txt": "I can't wait to use your moves on Lisa",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 25,
      "parentCommentId": 13,
      "ownerId": 5,
      "txt": "My heart makes up for my shortcomings, like Rudy!",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 8,
      "parentCommentId": 7,
      "ownerId": 6,
      "txt": "How can they say I'm past my prime? Me, the voice of Ovaltine",
      "createdAt": "2018-11-01T12:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 9,
      "parentCommentId": 8,
      "ownerId": 6,
      "txt": "It said ow! Put me out! How many talking bushes do you think there are?",
      "createdAt": "2018-11-01T12:30:00.000Z",
      "deletedAt": null
    },
    {
      "id": 10,
      "parentCommentId": 8,
      "ownerId": 6,
      "txt": "Come back, I'm a clown. I can't afford to look ridiculous.",
      "createdAt": "2018-11-01T12:31:00.000Z",
      "deletedAt": null
    },
    {
      "id": 26,
      "parentCommentId": 20,
      "ownerId": 6,
      "txt": "Go off the air while I'm still good? That horse has left the stable, gone to the glue factory and has been used to make art projects.",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    },
    {
      "id": 27,
      "parentCommentId": 19,
      "ownerId": 6,
      "txt": "They were kids, and we gave them candy if they laughed! And if they didn't, until the 70s, I hit them with a stick! Some jerk tracked down the kids and made a documentary. It's called \"Circus of Shame\" or something.",
      "createdAt": "2018-11-02T10:00:00.000Z",
      "deletedAt": null
    }
  ]