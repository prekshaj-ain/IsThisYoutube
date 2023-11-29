import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import moment from "moment";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddComment from "./AddComment";

const Comment = ({ data }) => {
  const { id, user, text, timestamp, replies } = data;
  const [openReplies, setOpenReplies] = useState(false);
  const [reply, setReply] = useState(false);
  return (
    <div className="flex items-start gap-1 p-2 w-full">
      <AccountCircleIcon fontSize="small" />
      <div className="text-xs w-full">
        <div className="flex gap-1">
          <p className="font-bold">{user}</p>
          <p className="text-slate-500">{moment(timestamp).fromNow()}</p>
        </div>
        <p className="text-[.6rem] md:text-xs">{text}</p>
        <button
          className="text-blue-500"
          onClick={() => setReply((prev) => !prev)}
        >
          Reply
        </button>
        {reply && <AddComment type="reply" commentId={id} />}
        {replies.length > 0 && (
          <div>
            <button
              className="text-blue-600 font-bold hover:bg-blue-100 rounded-2xl p-[10px]"
              onClick={() => setOpenReplies((prev) => !prev)}
            >
              {replies.length} replies
            </button>
            {openReplies && <CommentsList comments={replies} />}
          </div>
        )}
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  console.log(comments);
  return comments.map((comment) => (
    <div>
      <Comment key={comment.id} data={comment} />
    </div>
  ));
};
const CommentsContainer = () => {
  const comments = useSelector((store) => store.Comments.nestedComments);

  return (
    <div className="py-4 w-full dark:text-white">
      <p className="font-bold">Comments</p>
      <AddComment type="comment" />
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
