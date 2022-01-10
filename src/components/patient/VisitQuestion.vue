<template>
   <!-- Main Wrapper -->
		<div class="main-wrapper">
			<layout-header4></layout-header4>
			<breadcrumb></breadcrumb>
			<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						
						<!-- Profile Sidebar -->
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<sidebar1></sidebar1>
						</div>
						<!-- / Profile Sidebar -->
						
						
							<div class="col-md-7 col-lg-8 col-xl-9 visit-question">
              <div class="visit-progress pb-3">
                <div class="row">
                  <div class="col-md-2">
                    <span class="progress-text">Jaccopa Piazzi</span>
                    <div class="progress">                      
                      <div class="progress-bar bg-success" style="width:100%"></div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <span class="progress-text">Reason for visit</span>
                    <div class="progress">
                      <div class="progress-bar bg-success" style="width:100%"></div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <span class="progress-text">Interview</span>
                    <div class="progress">
                      <div class="progress-bar bg-success" style="width:0%"></div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <span class="progress-text">Health Profile</span>
                    <div class="progress">
                      <div class="progress-bar bg-success" style="width:0%"></div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <span class="progress-text">Pharmacy</span>
                    <div class="progress">
                      <div class="progress-bar bg-success" style="width:0%"></div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <span class="progress-text">Visit Type</span>
                    <div class="progress">
                      <div class="progress-bar bg-success" style="width:0%"></div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <span class="progress-text">Payment</span>
                    <div class="progress">
                      <div class="progress-bar bg-success" style="width:0%"></div>
                    </div>
                  </div>
                </div>

              </div>
							<div class="row justify-content-center">
								<div class="questionn col-lg-9 pt-0">
										<div class="visit-col pt-3 pb-3">                      
                      <div class="visit-questions">
                        <p class="ques">VISIT QUESTIONNAIRE</p>                            
                      </div>  
                      <div class="photo pt-3 pb-2">
                        <p class="photo-help">A Photo may be helpful for a treatment.</p>
                        <p>You can upload a photo or document if you believe it will help the provider understand your problem better.</p>
                      </div>
                      <div class="row">                        
                        <div class="col-md-6 uploads pt-3 pb-3">
													<div class="upload-img">
														<div class="change-photo-btn">
															<span> UPLOAD FROM A PHONE</span>
															<input type="file" class="upload">
														</div>														
													</div> 
                            <p class="mt-4">We will send a text message with instructions on how to upload photos</p>                  
                        </div>
                        <div class="col-md-6 uploads pt-3 pb-3">
                          <div class="change-photo-btn">
														<span> UPLOAD FROM THIS DEVICE</span>
														<input type="file" class="upload">
													</div>
                          <p class="mt-4">Already have the photos ready? Upload them right now from here</p>                      
                        </div>  
                      </div>
                      <hr>
                      <div class="row">                        
                        <div class="col-md-2">
                          <span class="ques-icon"><i class="fa fa-question mt-3 mb-4" aria-hidden="true"></i></span>                  
                        </div>
                        <div class="col-md-10">                          
                          <p class="need-photo">Why do I need to upload a photo?</p> 
                          <p>Photos can be very useful for problems related to your Skin, Eye, Throat, or any issue that shows a change in color or swelling. A photo of your prescription bottle also helps if you need a refill.</p>                     
                        </div>  
                      </div>
                      <div class="row pb-3">                        
                        <div class="col-md-6">
                            <router-link to="/visit-reason"><button class="bck-btn mt-5 mb-5">BACK</button> </router-link>                 
                        </div>
                        <div class="col-md-6">
                          <router-link to="/health-profile"><button class="continue-btn mt-5 mb-5">CONTINUE</button></router-link>
                                                
                        </div>  
                      </div>


                    </div>							
									
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
   
			<layout-footer />
		   
		</div>
		<!-- /Main Wrapper -->
</template>


<script>
export default {
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
        }
    },
}
</script>