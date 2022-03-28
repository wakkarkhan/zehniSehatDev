<template>
    <div class="main-wrapper">
         <layout-header2></layout-header2>
         <breadcrumb5></breadcrumb5>
         <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>

							<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="doc-review review-listing">
							
								<!-- Review Listing -->
								<ul class="comments-list">
								
									<!-- Comment List -->
									<li v-for="item in this.all_reviews" :key="item.id">
										<div class="comment">
											<img class="avatar rounded-circle" alt="User Image" src="@/assets/img/patients/patient.jpg">
											<div class="comment-body">
												<div class="meta-data">
													<span class="comment-author">{{item.full_name}}</span>
													<span class="comment-date">Reviewed 2 Days ago</span>
													<div class="review-count rating" v-if="item.rating==1">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star "></i>
														<i class="fas fa-star "></i>
														<i class="fas fa-star "></i>
														<i class="fas fa-star "></i>
													</div>
													<div class="review-count rating" v-if="item.rating==2">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star "></i>
														<i class="fas fa-star "></i>
														<i class="fas fa-star "></i>
													</div>
													<div class="review-count rating" v-if="item.rating==3">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star "></i>
														<i class="fas fa-star "></i>
													</div>
													<div class="review-count rating" v-if="item.rating==4">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star "></i>
													</div>
													<div class="review-count rating" v-if="item.rating==5">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
													</div>
												</div>
												<!-- <p class="recommended"><i class="far fa-thumbs-up"></i> I recommend the doctor</p> -->
												<p class="comment-content">
													{{item.feedback}}
												</p>
												
											</div>
										</div>
										
										
										
									</li>
									<!-- /Comment List -->
									
								
									
								</ul>
								<!-- /Comment List -->
								
							</div>
						</div>
					</div>
				</div>
			</div>		
			<!-- /Page Content -->
        <layout-footer></layout-footer>
     </div>
</template>

<script>
import TherapistService from '@/api-services/therapists.service';

import patients from '../../assets/json/doctor/mypatients.json'
const images = require.context('@/assets/img/patients', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
			patients: patients,
			all_reviews:{}
        }
	},
	created() {
    if(window.localStorage.getItem('token') !='' && window.localStorage.getItem('user') !='' && window.localStorage.getItem('role') =='therapist') {
		this.getTherapistReviewsData();
	}
    else{ this.$router.push({ path: '/login'})}
   
	},
     methods:{
		 getTherapistReviewsData(){
			 let token = window.localStorage.getItem('token');
            TherapistService.therapistReviewsService(token).then((response) => {
                if(response.status==200){
					
                    this.all_reviews = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
}
</script>