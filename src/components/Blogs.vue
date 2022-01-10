<template>
  	<!-- Blog Section -->
			<section class="section blog-section">
				<div class="container">
					<div class="section-header">
						<h6>Latest News</h6>
						<h2>Our Blog <router-link to="/doctor/blog-list" class="member-btn">View all Blogs</router-link> </h2>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-6 col-lg-4">
							<div class="blog-sec">
								<div class="blog-image">
									<img class="img-fluid" src="@/assets/img/blog/blog-01.jpg" alt="Post Image">
								</div>
								<div class="blog-content text-center">
									<p>23/02/2020 | Category</p>
									<h3>Lorem ipsum, or lipsum as it is sometimes known doloremque.</h3>
									<router-link to="/doctor/blog-details" class="readmore"> Readmore </router-link>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="blog-sec">
								<div class="blog-image">
									<img class="img-fluid" src="@/assets/img/blog/blog-02.jpg" alt="Post Image">
								</div>
								<div class="blog-content text-center">
									<p>11/03/2020 | Category</p>
									<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
									<router-link to="/doctor/blog-details" class="readmore"> Readmore </router-link>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="blog-sec">
								<div class="blog-image">
									<img class="img-fluid" src="@/assets/img/blog/blog-03.jpg" alt="Post Image">
								</div>
								<div class="blog-content text-center">
									<p>13/03/2020 | Category</p>
									<h3>Lorem ipsum, or lipsum as it is sometimes known doloremque.</h3>
									<router-link to="/doctor/blog-details" class="readmore"> Readmore </router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>	
			<!-- /Blog Section -->	
</template>

<script>
const images = require.context('@/assets/img', false, /\.png$|\.jpg$/)

export default {
    props: {
        blogs: { type: Array }
    },
    methods: {
        loadImg(imgPath, value) {
            return images('./'+imgPath)
        },
    },
}
</script>