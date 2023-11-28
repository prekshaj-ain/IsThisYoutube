import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideos } from "../Utils/apiCalls";
import useWindowDimensions from "../Utils/Hooks/useWindowDimensions";
import HorizontalVideo from "./HorizontalVideo";
import LiveChat from "./LiveChat";
import VideoCard from "./VideoCard";

const Suggestions = ({ title }) => {
  const dispatch = useDispatch();
  const { videos } = useSelector((store) => store.relatedVideo);
  const { width } = useWindowDimensions();
  const [openChat, setOpenChat] = useState(false);
  useEffect(() => {
    getRelatedVideos(title, dispatch);
  }, [title, dispatch]);
  return (
    <div className="flex flex-col py-4 basis-1/3 gap-3">
      {width >= 520 && (
        <div>
          {openChat && <LiveChat />}
          <button
            className="w-full border rounded-lg border-black p-1 bg-black text-white font-bold my-2"
            onClick={() => setOpenChat((prev) => !prev)}
          >
            {openChat ? "Hide Chat" : "Show Chat"}
          </button>
        </div>
      )}
      {videos.map((video) =>
        width >= 520 ? (
          <HorizontalVideo key={video?.id?.videoId} info={video} size="small" />
        ) : (
          <VideoCard
            key={video?.id?.videoId}
            info={video}
            id={video?.id?.videoId}
          />
        )
      )}
    </div>
  );
};

export default Suggestions;
