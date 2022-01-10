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

								<div class="type-visit pt-0">
                  <div class="typess">
                    <p>OK, got it!</p>   
                    <p>Your visit will be with Dr.Xxxx</p> 
                    <p>On 24/03/2020 at 17:00</p>            
									</div> 
									<div class="row justify-content-center">             
                  <div class="visits col-lg-6">
                    <p class="visit-like pt-2">What type of visit would you like?</p>
                    <div class="row">
                      <div class="col-md-6">
                        <span class="visit-cont-icons"><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <p class="mt-3">PHONE</p>
                      </div>
                      <div class="col-md-6">
                        <span class="visit-cont-icons"><i class="fas fa-video"></i></span>
                        <p class="mt-3">VIDEO</p>
                      </div>
                    </div>
                    <p class="video-learn pt-3">Video vs phone visits. Learn how they work.</p>
                    <p class="visit-like pt-3">What's the best number to reach you at during your visit?</p>
                    <p class="tel pt-3">510-642-9490</p>
                    <p class="need-tel pt-3">Why do we need this?</p>
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