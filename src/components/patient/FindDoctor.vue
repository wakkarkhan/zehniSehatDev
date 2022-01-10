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

								<div class="find-doc pt-0">
                  <div class="doc-questions">
                    <p class="ques">FIND A DOCTOR</p>     
                    <p><span class="available">WHEN YOU ARE AVAILABLE?</span> <input type="text" value="Anytime" class="intake-box"></p> 
                    <p>
                      <span class="lang">LANGUAGE:</span> <input type="text" value="English" class="intake-box">
                      <span class="my-doc">MY DOCTORS:</span>  <i class="fa fa-check" aria-hidden="true"></i>

                    </p>               
                  </div>                   

                  <div class="card find-doctr">
                    <div class="card-body">
                      <div class="doctor-widget">
                        <div class="doc-info-left">
                          <div class="doctor-img">
                            <img src="@/assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
                          </div>
                          <div class="doc-info-cont">
                            <h4 class="doc-name">Dr. Oscar Dill</h4>
                            <p class="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                            <p class="doc-department"><img src="@/assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality">Physiotherapist</p>
                            <div class="rating">
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star"></i>
                              <span class="d-inline-block average-rating">(35)</span>
                            </div>
                            <div class="clinic-details">
                              <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA - <a href="javascript:void(0);">Get Directions</a></p>
                              <p class="avail-slots">First available slots (today):</p>
                            </div>
                            <div class="clinic-services">
                              
                              <span>02:10PM - 02:15PM</span>
                              <span>02:15PM - 02:20PM</span>
                            </div>
                          </div>
                        </div>
                        <div class="doc-info-right">                          
                          <div class="clinic-booking">
                            <router-link class="view-prof" to="/doctor/profile">VIEW PROFILE</router-link>
                            <router-link class="full-calender" to="/booking">FULL CALENDER</router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card find-doctr">
                    <div class="card-body">
                      <div class="doctor-widget">
                        <div class="doc-info-left">
                          <div class="doctor-img">
                            <img src="@/assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
                          </div>
                          <div class="doc-info-cont">
                            <h4 class="doc-name">Dr. Oscar Dill</h4>
                            <p class="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                            <p class="doc-department"><img src="@/assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality">Physiotherapist</p>
                            <div class="rating">
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star filled"></i>
                              <i class="fas fa-star"></i>
                              <span class="d-inline-block average-rating">(35)</span>
                            </div>
                            <div class="clinic-details">
                              <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA - <a href="javascript:void(0);">Get Directions</a></p>
                              <p class="avail-slots">First available slots (today):</p>
                            </div>
                            <div class="clinic-services">                              
                              <span>02:10PM - 02:15PM</span>
                              <span>02:15PM - 02:20PM</span>
                            </div>
                          </div>
                        </div>
                        <div class="doc-info-right">                          
                          <div class="clinic-booking">
                            <router-link class="view-prof" to="/doctor/profile">VIEW PROFILE</router-link>
                            <router-link class="full-calender" to="/patient/booking">FULL CALENDER</router-link>
                          </div>
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