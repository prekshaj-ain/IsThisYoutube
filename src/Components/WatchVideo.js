import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getVideoById } from "../Utils/apiCalls";
import { closeMenu } from "../Utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import Suggestions from "./Suggestions";
import VideoMetaData from "./VideoMetaData";

const WatchVideo = () => {
  const { loading, video } = useSelector((store) => store.selectedVideo);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    getVideoById(id, dispatch);
  }, [dispatch, id]);
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className=" basis-2/3 flex flex-col lg:px-5 py-4">
        <iframe
          className="w-full max-w-xl lg:max-w-full aspect-video m-auto"
          title={`${video?.snippet?.title}`}
          src={`//www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
          allowFullScreen="allowFullScreen"
        ></iframe>
        <VideoMetaData info={video} id={id}/>
        <CommentsContainer />
      </div>
      <Suggestions id={id} />
    </div>
  );
};

export default WatchVideo;
