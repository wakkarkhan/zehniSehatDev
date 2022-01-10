<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb13></breadcrumb13>
        <!-- Page Content -->
			<div class="content">
				<div class="container">
				
					<div class="row">
						<div class="col-lg-8 col-md-12">
							<div class="blog-view">
								<div class="blog blog-single-post">
									<div class="blog-image">
										<a href="javascript:void(0);"><img alt="" src="@/assets/img/blog/depression.jpeg" class="img-fluid"></a>
									</div>
									<h3 class="blog-title">{{this.singleArticleData.title}}</h3>
									<div class="blog-info clearfix">
										<div class="post-left">
											<ul>
												<!-- <li>
													<div class="post-author">
														<router-link to="/doctor/profile"><img src="@/assets/img/doctors/doctor-thumb-02.jpg" alt="Post Author"> <span>Dr. Mary Nielson</span></router-link>
													</div>
												</li> -->
												<li><i class="far fa-calendar"></i>{{this.singleArticleData.created_at}}</li>
												<!-- <li><i class="far fa-comments"></i>12 Comments</li>
												<li><i class="fa fa-tags"></i>Health Tips</li> -->
											</ul>
										</div>
									</div>
									<div class="blog-content">
										<p v-html="this.singleArticleData.description"></p><br>
									</div>
								</div>
								
							</div>
						</div>
					
						<!-- Blog Sidebar -->
						<div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

                            <!--Search Bar -->
                                <search-bar></search-bar>
                            <!-- /Search Bar -->
							<!-- Latest Posts -->
                                <latest-posts :related_articles="relatedArticlesData" ></latest-posts>
							<!-- /Latest Posts -->

							<!-- Categories -->
                                <blog-categories :related_categories="relatedCategoriesData"></blog-categories>
							<!-- /Categories -->

							
						</div>
						<!-- /Blog Sidebar -->
						
                </div>
				</div>

			</div>		
			<!-- /Page Content -->
            <layout-footer></layout-footer>
    </div>
</template>
<script>
import ArticleService from '@/api-services/article.service';

export default {
	data(){
		return{
			singleArticleData:{},
			relatedArticlesData:{},
			relatedCategoriesData:{},
		}

	},
	methods:{
		 loadPage(articleSlug) {
			let Data = {
                slug:articleSlug,     
            }
			ArticleService.getSingleArticleService(Data).then((response) => {
					if(response.data.status==200){
						//alert(response.data.article_detail.id);
						this.singleArticleData = response.data.article_detail;
						this.relatedArticlesData = response.data.related_articles;
						this.relatedCategoriesData = response.data.latest_categories;
					}
					else{
						
					}
				}).catch((error) => {
					console.log(error.response.data);
			});
		}
	},
	created(){
		var slug = this.$route.params.slug;
		//console.log(article_slug);

		this.loadPage(slug);
	}
}
</script>