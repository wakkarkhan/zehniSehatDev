<template>
   <!-- Main Wrapper -->
		<div class="main-wrapper">
			<layout-header2></layout-header2>
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
							<div class="card">
								<div class="card-body">
                  <div class="my-acc">
                    <p class="acc-detail">Account Details</p>
                    <p>Update your profile and the information we use to customize your experience</p>
                  </div>
									<div class="row">
										<div class="col-md-12 col-lg-12">
                      <!-- Profile Settings Form -->
									<form>
										<div class="row form-row">
											
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Email ID</label>
													<input type="email" class="form-control" value="richard@example.com">
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Mobile</label>
													<input type="text" value="+1 202-555-0125" class="form-control">
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
												<label>Address</label>
													<input type="text" class="form-control" value="806 Twin Willow Lane">
												</div>
                      </div>
                      <div class="col-12 col-md-6">
												<div class="form-group">
													<label>Date of Birth</label>
													<div class="cal-icon">
														<input type="text" class="form-control datetimepicker" value="24-07-1983">
													</div>
												</div>
											</div>
											
										</div>
										<div class="submit-section">
											<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
										</div>
									</form>
									<!-- /Profile Settings Form -->
                      
											<!-- Change Password Form -->
											<form class="mt-5">
												<div class="form-group">
													<label>Old Password</label>
													<input type="password" class="form-control">
												</div>
												<div class="form-group">
													<label>New Password</label>
													<input type="password" class="form-control">
												</div>
												<div class="form-group">
													<label>Confirm Password</label>
													<input type="password" class="form-control">
												</div>
												<div class="submit-section">
													<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
												</div>
											</form>
											<!-- /Change Password Form -->
											
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