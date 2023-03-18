import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React from "react";
const commentsData = [
  {
    name: "Preksha jain",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Preksha jain",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        name: "Preksha jain",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Preksha jain",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Preksha jain",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                name: "Preksha jain",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "Preksha jain",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Preksha jain",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    name: "Preksha jain",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Preksha jain",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Preksha jain",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Preksha jain",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Preksha jain",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
      },
    ],
  },
  {
    name: "Preksha jain",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center gap-3 p-2 my-2 bg-gray-200 rounded-lg">
      <AccountCircleIcon fontSize="large" />
      <div className="text-xs">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      {comment.replies && (
        <div className=" pl-5 border border-l-black ml-2">
          <CommentsList comments={comment?.replies} />
        </div>
      )}
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="py-4">
      <p className="font-bold">Comments</p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;