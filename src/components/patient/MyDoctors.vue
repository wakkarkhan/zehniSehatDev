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
							<div class="col-md-7 col-lg-8 col-xl-9">
              <div class="my-doctors">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="my-doctor-img">
                          <img src="@/assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
                        </div> 
                          <h4 class="doc-name mt-2">Dr. Christopher R <i class="fas fa-check-circle doc-check"></i></h4>
                          <p class="doc-speciality">Neurology</p>
                          <div class="rating mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="d-inline-block average-rating">(0)</span>
                          </div>
                          <div class="row">
                            <div class="col-md-6 pr-0">
                             <p class="doc-location mb-0">
                               <i class="fas fa-map-marker-alt"></i> Coimbatore<br>
                               <i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle doc-info"></i>
                              </p>
                            </div>
                          <div class="col-md-6 pl-0 pr-0">
                            <div class="view-my-doc-profile">
                               <router-link class="profile-doc-btn" to="/doctor/profile">
                                View Profile
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="my-doctor-img">
                          <img src="@/assets/img/doctors/doctor-thumb-03.jpg" class="img-fluid" alt="User Image">
                        </div> 
                        <h4 class="doc-name mt-2">Dr. Dana E <i class="fas fa-check-circle doc-check"></i></h4>
                          <p class="doc-speciality">Urology</p>
                          <div class="rating mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="d-inline-block average-rating">(0)</span>
                          </div>
                          <div class="row">
                            <div class="col-md-6 pr-0">
                             <p class="doc-location mb-0">
                               <i class="fas fa-map-marker-alt"></i> Dyer<br>
                               <i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle doc-info"></i>
                              </p>
                            </div>
                          <div class="col-md-6 pl-0 pr-0">
                            <div class="view-my-doc-profile">
                             <router-link class="profile-doc-btn" to="/doctor/profile">
                                View Profile
                              </router-link>
                            </div>
                          </div>
                        </div>               
                        
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="my-doctor-img">
                          <img src="@/assets/img/doctors/doctor-thumb-01.jpg" class="img-fluid" alt="User Image">
                        </div> 
                        <h4 class="doc-name mt-2">Dr. Manual Tapia <i class="fas fa-check-circle doc-check"></i></h4>
                          <p class="doc-speciality">Psychiatrist</p>
                          <div class="rating mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="d-inline-block average-rating">(0)</span>
                          </div>
                          <div class="row">
                            <div class="col-md-6 pr-0">
                             <p class="doc-location mb-0">
                               <i class="fas fa-map-marker-alt"></i> - <br>
                               <i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle doc-info"></i>
                              </p>
                            </div>
                          <div class="col-md-6 pl-0 pr-0">
                            <div class="view-my-doc-profile">
                              <router-link class="profile-doc-btn" to="/doctor/profile">
                                View Profile
                              </router-link>
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