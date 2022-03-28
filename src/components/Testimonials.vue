<template>
   <!-- Testimonial -->
			<section class="testimonial">
				<div class="container">
					<h3 class="top-title text-center">Testimonials</h3>
					<h2 class="section-title text-center">WHat PEOPLE SAY ABOUT US</h2>
					<p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>

					<div id="carouselExampleIndicators" class="carousel slide mt-5" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<!-- <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
						</ol>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<div class="row">
									<div class="col-sm-4 col-md-4" v-for="item in testimonials" :key="item.id">
										<div class="card">
											<div class="user-details">
												<div class="d-flex justify-content-between align-items-center">
													<img :src="loadImg(item.image)" alt="User Pic" />
													<h4 class="patient-name">{{item.full_name}}</h4>
												</div>												
												<i class="fas fa-quote-left"></i>
											</div>
											<div class="card-body">
												<p>{{item.feedback}}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div class="row">
									<div class="col-sm-4 col-md-4" v-for="item in testimonials" :key="item.id">
										<div class="card">
											<div class="user-details">
												<div class="d-flex justify-content-between align-items-center">
													<img :src="loadImg(item.image)" alt="User Pic" />
													<h4 class="patient-name">{{item.full_name}}</h4>
												</div>												
												<i class="fas fa-quote-left"></i>
											</div>
											<div class="card-body">
												<p>{{item.feedback}}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- <div class="carousel-item">
								<div class="row">
									<div class="col-sm-4 col-md-4" v-for="item in testimonials" :key="item.id">
										<div class="card">
											<div class="user-details">
												<div class="d-flex justify-content-between align-items-center">
													<img :src="loadImg(item.image)" alt="User Pic" />
													<h4 class="patient-name">{{item.name}}</h4>
												</div>												
												<i class="fas fa-quote-left"></i>
											</div>
											<div class="card-body">
												<p>{{item.description}}</p>
											</div>
										</div>
									</div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
			</section>
			<!-- /Testimonial -->
</template>

<script>
import HomeService from '@/api-services/home.service';
const images = require.context('@/assets/img/blog', false, /\.png$|\.jpg$/)
import testimonials from '../assets/json/testimonials'
export default {
    data() {
        return {
			// testimonials: testimonials,
			testimonials: {},
            slickOptions: {
                slidesToShow: 4,
                arrows:true,
                dots: false,
				swipeToSlide: true,
				variableWidth: true,
                responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                ]
            },
        };
	},
	created(){
		this.getUserReviews();
	},

    methods: {
		getUserReviews(){
			HomeService.getUserReviewsService().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.testimonials = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});

		},
        next() {
            this.$refs.slick.next();
        },
        prev() {
            this.$refs.slick.prev();
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
		},
		 loadImg(imgPath, value) {
			return images('./blog-01_old.jpg')
        },
        
    },
}
</script>
<style scoped>
.testimonial{
	padding-top: 40px !important;

}
</style>