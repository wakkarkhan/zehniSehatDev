<template>
    <!-- Latest Posts -->
        <div class="card post-widget">
            <div class="card-header">
                <h4 class="card-title">Related Posts</h4>
            </div>
            <div class="card-body">
                <ul class="latest-posts">
                    <li v-for="singleRelatedArticle in this.related_articles" :key="singleRelatedArticle.id">
                        <div class="post-thumb">
                            <router-link to="/doctor/blog-details">
                                <img class="img-fluid" src="@/assets/img/blog/blog-01_old.jpg" alt="">
                            </router-link>
                        </div>
                        <div class="post-info">
                            <h4>
                                <router-link :to="'/doctor/blog-details/'+singleRelatedArticle.title">{{singleRelatedArticle.title}}</router-link>
                            </h4>
                            <p>{{singleRelatedArticle.created_at}}</p>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </div>
    <!-- /Latest Posts -->
</template>
<script>
export default {
     props:['related_articles'],
}
</script>