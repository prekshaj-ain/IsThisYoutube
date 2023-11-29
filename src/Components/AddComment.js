import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { addComment, addReply } from "../Utils/CommentSlice";

const AddComment = ({ type, commentId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState();
  const handleComment = () => {
    let date = new Date();
    let newComment = {
      id: date.getTime(),
      user: "Anonymous",
      text: comment,
      timestamp: date,
      replies: [],
    };
    setComment("");
    if (type == "comment") {
      dispatch(addComment({ comment: newComment }));
    } else if (type == "reply") {
      dispatch(addReply({ commentId: commentId, reply: newComment }));
    }
  };
  return (
    <div className="flex items-start gap-1 p-2 w-full">
      <AccountCircleIcon fontSize="small" />
      <div className="text-xs w-full">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          name="comment"
          placeholder={type == "comment" ? "Add Comment" : "Add Reply"}
          className=" border-b border-black w-full outline-none"
        />
        <div className="font-bold w-full p-2 flex gap-1 justify-end">
          <button
            className="p-2 rounded-2xl hover:bg-slate-100"
            onClick={() => setComment("")}
          >
            Cancel
          </button>
          <button
            className="p-2 bg-blue-500 rounded-2xl text-white"
            onClick={handleComment}
          >
            {type == "comment" ? "Comment" : "Reply"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
