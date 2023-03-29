export const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&chart=mostPopular&maxResults=50&regionCode=IN&key='+process.env.REACT_APP_API_KEY;
export const YOUTUBE_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_API_KEY}&id=`

export const YOUTUBE_SUGGESTION_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${process.env.REACT_APP_API_KEY}&relatedToVideoId=`;

export const YOUTUBE_TAG_URL =  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${process.env.REACT_APP_API_KEY}&q=`
export const YOUTUBE_SEARCH_URL =  `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const YOUTUBE_CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_API_KEY}&id=`
export const LIVE_CHAT_COUNT = 100; 