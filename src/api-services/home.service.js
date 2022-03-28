import Axios from 'axios';

const RESOURCE_SINGLE_LATEST_CATEGORY = '/getSingleLatestCategory';
const RESOURCE_LATEST_CATEGORIES = '/getLatestSevenCategories';
const RESOURCE_LATEST_CATEGORIES_ARTICLES = '/getLatestcategoriesArticles';
const RESOURCE_LATEST_CATEGORIES_ALL_ARTICLES = '/getLatestEightArticles';
const RESOURCE_LATEST_ARTICLES_SERVICE = '/getAllCategoriesArticles';
const RESOURCE_USER_REVIEWS = '/getUserReviews';
const RESOURCE_RANDOM_ARTICLES = '/getRandomArticles';
const RESOURCE_BOOK_APPOINTMENT = '/bookAppointment';
const RESOURCE_ALL_BLOG_ARTICLES = '/getBlogArticles';
const RESOURCE_ALL_HOME_CATEGORIES = '/getAllHomeCategories';

export default {

  getHomeAllCategories(){
    return Axios.get(RESOURCE_ALL_HOME_CATEGORIES);
  },
  getAllBlogArticles(){
    return Axios.get(RESOURCE_ALL_BLOG_ARTICLES);
  },
  bookAppointment(bookingData) {
    
    return Axios.post(RESOURCE_BOOK_APPOINTMENT, bookingData
    );

  },
  getSingleLatestCategoryService() {
    return Axios.get(RESOURCE_SINGLE_LATEST_CATEGORY);
  },
  getLatestCategoriesService() {
    return Axios.get(RESOURCE_LATEST_CATEGORIES);
  },
  getLatestCategoriesArticlesService() {
    return Axios.get(RESOURCE_LATEST_CATEGORIES_ARTICLES);
  },
  getLatestCategoriesAllArticlesService(){
    return Axios.get(RESOURCE_LATEST_CATEGORIES_ALL_ARTICLES);
  },
  getLatestArticlesService(){
    return Axios.get(RESOURCE_LATEST_ARTICLES_SERVICE);
  },
  getUserReviewsService(){
    return Axios.get(RESOURCE_USER_REVIEWS);
  },
  getRandomArticlesService(){
    return Axios.get(RESOURCE_RANDOM_ARTICLES);
  }

//   get(id) {
//     return Axios.get(`${RESOURCE_NAME}/${id}`);
//   },

//   create(data) {
//     return Axios.post(RESOURCE_NAME, data);
//   },

//   update(id, data) {
//     return Axios.put(`${RESOURCE_NAME}/${id}`, data);
//   },

//   delete(id) {
//     return Axios.delete(`${RESOURCE_NAME}/${id}`);
//   }
};