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
						
						<div class="col-md-7 col-lg-8 col-xl-9 visit-reason">
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
							
										<div class="visit-col pt-3 pb-3">                      
                          <span><router-link to="/patient/vist-type"><span class="back-left"><i class="fas fa-chevron-left"></i>  </span>Back</router-link></span>
                          <div class="visit-questions">
                            <p class="ques">SELECT PAYMENT METHOD</p>
                          </div>                        
                    <div class="card">
                        <div class="card-body select-pay pt-0">
                          <div class="row">
                            <div class="col-md-1 pt-3">
                              <i class="fa fa-credit-card" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-11">
                          <div class="method-of-pay pt-3 pb-2 pl-3">
                            <p>Payment Methods</p>
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="optradio">Credit Card, HSA, FSA
                              </label>
                            </div>
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="optradio">Paypal
                              </label>
                            </div>
                            <button class="pay-ctn-btn mt-4">CONTINUE</button>
                          </div>
                        </div>
                          </div>
                    </div>							
									
                </div>
                
                <p><span class="available">DO YOU NEED INVOICE:   </span> <input type="text" value="YES/NO" class="intake-box"></p>
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