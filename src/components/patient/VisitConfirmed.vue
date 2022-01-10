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
							
						 <div class="appoint-col pt-3 pb-3">                      
                <div class="visit-questions">
                  <p class="ques">YOUR VISIT IS CONFIRMED</p>
                </div>  
                
                <div class="appoint-section">
                <div class="card">
                  <div class="card-body confirm-visit pt-0">
                      <p class="appoint-start pt-4">Your appointment will start</p>
                      <p class="appoint-start-time">between 5:15 and 5:30 on Tuesday, March 24th</p>
                  </div>						
                </div>
                <div class="add-appointment">
                  <span>Add to</span>
                  <button class="google-cal"><i class="fa fa-calendar" aria-hidden="true"></i>
                    Google Calender</button>
                  <button class="outlook-cal"><i class="fa fa-calendar" aria-hidden="true"></i>
                    Outlook Calender (.ics)</button>
                  <button class="yahoo-cal"><i class="fa fa-calendar" aria-hidden="true"></i>
                    Yahoo Calender</button>
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