import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getVideoById } from "../Utils/apiCalls";
import { closeMenu } from "../Utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import Suggestions from "./Suggestions";
import VideoMetaData from "./VideoMetaData";
import useWindowDimensions from "../Utils/Hooks/useWindowDimensions";

const WatchVideo = () => {
  const { video } = useSelector((store) => store.selectedVideo);
  const [searchParams] = useSearchParams();
  const [openComment, setOpenComment] = useState(false);
  const id = searchParams.get("v");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  useEffect(() => {
    getVideoById(id, dispatch);
  }, [id, dispatch]);
  const { width } = useWindowDimensions();
  if (!video) {
    return null;
  }
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className=" basis-2/3 flex flex-col lg:px-5 py-4 h-fit">
        <iframe
          className="w-full max-w-xl lg:max-w-full aspect-video m-auto"
          title={`${video?.snippet?.title}`}
          src={`//www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
          allowFullScreen="allowFullScreen"
        ></iframe>
        <VideoMetaData info={video} id={id} />
        {width >= 520 ? (
          <CommentsContainer />
        ) : (
          <div>
            <button
              className="w-full border rounded-lg  p-1 bg-slate-300 text-black font-bold my-2"
              onClick={() => setOpenComment((prev) => !prev)}
            >
              {openComment ? "Hide Comments" : "Show Comments"}
            </button>
            {openComment && <CommentsContainer />}
          </div>
        )}
      </div>
      <Suggestions title={video?.snippet?.title} />
    </div>
  );
};

export default WatchVideo;
