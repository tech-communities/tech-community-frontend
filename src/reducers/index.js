import { combineReducers } from 'redux';
import currentUser from './currentUser';
import socialAuth from './socialAuth';
import posts from './posts';
import feed from './feed';
import sharePost from './sharePost';
import singlePost from './singlePost';
import postComment from './postComment';
import search from './search';
import postComments from './postComments';

const reducers = combineReducers({
  currentUser,
  posts,
  feed,
  socialAuth,
  sharePost,
  singlePost,
  postComment,
  search,
  postComments,
});

export default reducers;
