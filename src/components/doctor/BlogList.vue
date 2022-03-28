<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb14></breadcrumb14>
        
			<!-- Page Content -->
			<div class="content">
				<div class="container">
             
					<div class="row">
					
						<div class="col-lg-8 col-md-12">

							<!-- Blog Post -->
							<div class="blog" v-for="singleArticle in this.all_articles" :key="singleArticle.id">
								<div class="blog-image">
									<router-link :to="'/doctor/blog-details/'+singleArticle.article_title"><img class="img-fluid" :src='require("../../assets/img/blog/blog-01_old.jpg")' alt="Post Image"></router-link>
								</div>
								<h3 class="blog-title"><router-link class="color-yellow" :to="'/doctor/blog-details/'+singleArticle.article_title">{{singleArticle.article_title}}</router-link></h3>
								<div class="blog-info clearfix">
									<div class="post-left">
										<ul>
											<li>
												<div class="post-author">
													<router-link to="#"><img src='../../assets/img/doctors/doctor-11.jpg' alt="Post Author"> <span>{{singleArticle.full_name}}</span></router-link>
												</div>
											</li>
											
											<li><i class="fa fa-tags"></i>{{singleArticle.category_title}}</li>
										</ul>
									</div>
								</div>
								<div class="blog-content">
									<p>{{singleArticle.short_description}}</p>
									<router-link :to="'/doctor/blog-details/'+singleArticle.article_title" class="read-more">Read More</router-link>
								</div>
							</div>
							<!-- /Blog Post -->

							

							

							

							<!-- Blog Pagination -->
							<div class="row">
								<div class="col-md-12">
									<div class="blog-pagination">
										<nav>
											<ul class="pagination justify-content-center">
												<li class="page-item disabled">
													<a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-double-left"></i></a>
												</li>
												<li class="page-item active">
													<a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
												</li>
												<li class="page-item ">
													<a class="page-link" href="#">2 </a>
												</li>
												<li class="page-item">
													<a class="page-link" href="#">3</a>
												</li>
												<li class="page-item">
													<a class="page-link" href="#"><i class="fas fa-angle-double-right"></i></a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<!-- /Blog Pagination -->
							
						</div>
						
						<!-- Blog Sidebar -->
						<div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

							<!-- Search -->
							    <!-- <search-bar></search-bar> -->
							<!-- /Search -->

							 <!-- Categories -->
								<div class="card category-widget">
									<div class="card-header">
										<h4 class="card-title">Blog Categories</h4>
									</div>
									<div class="card-body">
										<ul class="categories">
											<li v-for="singleCategory in this.all_categories" :key="singleCategory.id">
												<a href="#">{{singleCategory.title}} </a>
											</li>
										</ul>
									</div>
								</div>
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
import HomeService from '@/api-services/home.service';

export default {
    data() {
        return {
			all_articles:{},
			all_categories:{},
        }
	},
	created() {
    	this.getAllBlogArticles();
    	this.getAllHomeCategories();
	},
     methods:{
		 getAllHomeCategories(){
			HomeService.getHomeAllCategories().then((response) => {
                if(response.status==200){
					
                    this.all_categories = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		 },
		 getAllBlogArticles(){
            HomeService.getAllBlogArticles().then((response) => {
                if(response.status==200){
					
                    this.all_articles = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
    }
}
</script>
<style>
.color-yellow{
	color: #E1AD01 !important;
}
</style>