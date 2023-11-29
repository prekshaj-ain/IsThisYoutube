import {
  YOUTUBE_API_URL,
  YOUTUBE_TAG_URL,
  YOUTUBE_VIDEO_URL,
} from "./Constants";
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./homeVideoSlice";
import {
  RELATED_FETCH_FAIL,
  RELATED_FETCH_START,
  RELATED_FETCH_SUCCESS,
} from "./relatedVideosSlice";
import {
  SEARCH_FETCH_FAIL,
  SEARCH_FETCH_START,
  SEARCH_FETCH_SUCCESS,
} from "./searchVideosSlice";
import {
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_START,
  SELECTED_VIDEO_SUCCESS,
} from "./selectedVideoSlice";

export const getPopularVideos = async (dispatch) => {
  dispatch(FETCH_START());
  try {
    const data = await fetch(YOUTUBE_API_URL);
    if (data.status === 200) {
      const json = await data.json();
      dispatch(FETCH_SUCCESS(json.items));
    } else {
      dispatch(FETCH_FAIL());
    }
  } catch (err) {
    dispatch(FETCH_FAIL());
  }
};
export const getVideosByTag = async (tag, dispatch) => {
  dispatch(FETCH_START());
  try {
    const data = await fetch(YOUTUBE_TAG_URL + tag);
    if (data.status === 200) {
      const json = await data.json();
      dispatch(FETCH_SUCCESS(json.items));
    } else {
      dispatch(FETCH_FAIL());
    }
  } catch (err) {
    dispatch(FETCH_FAIL());
  }
};
export const getVideoById = async (id, dispatch) => {
  dispatch(SELECTED_VIDEO_START());
  try {
    const data = await fetch(YOUTUBE_VIDEO_URL + id);
    if (data.status === 200) {
      const json = await data.json();
      dispatch(SELECTED_VIDEO_SUCCESS(json.items[0]));
    } else {
      dispatch(SELECTED_VIDEO_FAIL());
    }
  } catch (err) {
    dispatch(SELECTED_VIDEO_FAIL());
  }
};
export const getRelatedVideos = async (title, dispatch) => {
  dispatch(RELATED_FETCH_START());
  try {
    const data = await fetch(YOUTUBE_TAG_URL + title);
    if (data.status === 200) {
      const json = await data.json();
      dispatch(RELATED_FETCH_SUCCESS(json.items));
    } else {
      dispatch(RELATED_FETCH_FAIL());
    }
  } catch (err) {
    dispatch(RELATED_FETCH_FAIL());
  }
};
export const getVideosByQuery = async (query, dispatch) => {
  dispatch(SEARCH_FETCH_START());
  try {
    const data = await fetch(YOUTUBE_TAG_URL + query);
    if (data.status === 200) {
      const json = await data.json();
      dispatch(SEARCH_FETCH_SUCCESS(json.items));
    } else {
      dispatch(SEARCH_FETCH_FAIL());
    }
  } catch (err) {
    dispatch(SEARCH_FETCH_FAIL());
  }
};
