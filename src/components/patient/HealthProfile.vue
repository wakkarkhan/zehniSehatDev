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

								<div class="health pt-0">
                  <span><router-link to="/patient/visit-question"><span class="back-left"><i class="fas fa-chevron-left"></i>  </span>Back</router-link></span>
                  <div class="health-questions">
                    <p class="ques">Complete your health profile</p>                    
                  </div>                      
                  <div class="card">
                    <div class="medications pt-3 pb-2 pl-3">
                      <p>Are you currently taking any medications?</p>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="optradio">No
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="optradio">Yes
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="medications pt-3 pb-2 pl-3">
                      <p>Do you have any known drug allergies?</p>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="optradio">No
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="optradio">Yes
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="medications pt-3 pb-1 pl-3">
                      <p>Do you have any medical conditions?</p>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">Abnormal Thyroid
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">Anxiety
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">Arthritis
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">Asthma
                            </label>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">History of fainting
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">History of falls
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">History of skin cancer
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" value="">History of STD
                            </label>
                          </div>
                        </div>
                      </div>
                      <p class="add-medical pt-3">+ add medical condition</p>
                    </div>
									</div>
									<div>
                  <router-link to="/patient/find-doctor"><button class="next-btn mb-3">Next</button></router-link>
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