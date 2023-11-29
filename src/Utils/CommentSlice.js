import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "Comments",
  initialState: {
    nestedComments: [
      {
        id: 1,
        user: "User1",
        text: "Comment 1",
        timestamp: "2023-01-01T12:00:00",
        replies: [
          {
            id: 2,
            user: "User2",
            text: "Reply 1 to Comment 1",
            timestamp: "2023-01-01T12:05:00",
            replies: [
              {
                id: 3,
                user: "User1",
                text: "Reply 1 to Reply 1",
                timestamp: "2023-01-01T12:10:00",
                replies: [],
              },
              {
                id: 4,
                user: "User3",
                text: "Reply 2 to Reply 1",
                timestamp: "2023-01-01T12:12:00",
                replies: [],
              },
              {
                id: 5,
                user: "User4",
                text: "Reply 3 to Reply 1",
                timestamp: "2023-01-01T12:15:00",
                replies: [],
              },
            ],
          },
          {
            id: 6,
            user: "User5",
            text: "Reply 2 to Comment 1",
            timestamp: "2023-01-01T12:08:00",
            replies: [
              {
                id: 7,
                user: "User6",
                text: "Reply 1 to Reply 2",
                timestamp: "2023-01-01T12:10:00",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        user: "User7",
        text: "Comment 2",
        timestamp: "2023-01-02T08:30:00",
        replies: [
          {
            id: 10,
            user: "User8",
            text: "Reply 1 to Comment 2",
            timestamp: "2023-01-02T08:35:00",
            replies: [
              {
                id: 11,
                user: "User9",
                text: "Reply 1 to Reply 1",
                timestamp: "2023-01-02T08:40:00",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 12,
        user: "User1",
        text: "Comment 1",
        timestamp: "2023-01-01T12:00:00",
        replies: [
          {
            id: 13,
            user: "User2",
            text: "Reply 1 to Comment 1",
            timestamp: "2023-01-01T12:05:00",
            replies: [
              {
                id: 14,
                user: "User1",
                text: "Reply 1 to Reply 1",
                timestamp: "2023-01-01T12:10:00",
                replies: [],
              },
              {
                id: 15,
                user: "User3",
                text: "Reply 2 to Reply 1",
                timestamp: "2023-01-01T12:12:00",
                replies: [],
              },
              {
                id: 16,
                user: "User4",
                text: "Reply 3 to Reply 1",
                timestamp: "2023-01-01T12:15:00",
                replies: [],
              },
            ],
          },
          {
            id: 17,
            user: "User5",
            text: "Reply 2 to Comment 1",
            timestamp: "2023-01-01T12:08:00",
            replies: [
              {
                id: 18,
                user: "User6",
                text: "Reply 1 to Reply 2",
                timestamp: "2023-01-01T12:10:00",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 19,
        user: "User7",
        text: "Comment 3",
        timestamp: "2023-01-02T08:30:00",
        replies: [
          {
            id: 20,
            user: "User8",
            text: "Reply 1 to Comment 3",
            timestamp: "2023-01-02T08:35:00",
            replies: [
              {
                id: 21,
                user: "User9",
                text: "Reply 1 to Reply 1",
                timestamp: "2023-01-02T08:40:00",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  reducers: {
    addReply: (state, action) => {
      const { commentId, reply } = action.payload;
      const updatedComments = addReplyToComment(
        state.nestedComments,
        commentId,
        reply
      );
      state.nestedComments = updatedComments;
    },
    addComment: (state, action) => {
      const { comment } = action.payload;
      state.nestedComments = [comment, ...state.nestedComments];
    },
  },
});

const addReplyToComment = (comments, commentId, reply) => {
  return comments.map((comment) => {
    if (commentId === comment.id) {
      return {
        ...comment,
        replies: [...comment.replies, reply],
      };
    } else if (comment.replies.length > 0) {
      return {
        ...comment,
        replies: addReplyToComment(comment.replies, commentId, reply),
      };
    }
    return comment;
  });
};

export default CommentSlice.reducer;
export const { addReply, addComment } = CommentSlice.actions;
