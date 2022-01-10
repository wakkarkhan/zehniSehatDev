import Axios from 'axios';

const RESOURCE_SINGLE_ARTICLE = '/getSingleArticle';

export default {
    getSingleArticleService(data) {
        return Axios.post(RESOURCE_SINGLE_ARTICLE, data);
      },
}
