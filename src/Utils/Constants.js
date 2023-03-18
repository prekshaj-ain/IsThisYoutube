export const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&chart=mostPopular&maxResults=50&regionCode=IN&key='+process.env.REACT_APP_API_KEY;
export const YOUTUBE_VIDEO_URL = (id)=>(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
)
export const YOUTUBE_SUGGESTION_URL = (id)=>(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${id}&type=video&key=${process.env.REACT_APP_API_KEY}`
)
export const YOUTUBE_TAG_API =  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${process.env.REACT_APP_API_KEY}&q=`
export const YOUTUBE_SEARCH_API =  `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;