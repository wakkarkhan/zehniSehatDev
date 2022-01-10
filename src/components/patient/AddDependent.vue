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
								<div class="card">
									<div class="card-body add-dependent pt-5">
					<p class="add-title-one">Add A New Dependent</p>
					<p class="add-title-two">Dependent Information</p>
												

										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label>First Name</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Last Name</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Relationship to you</label>
													<select class="form-control select">
														<option>Select</option>
														<option>Father</option>
														<option>Mother</option>
														<option>Sibling</option>
														<option>Spouse</option>
													</select>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Gender</label>
													<select class="form-control select">
														<option>Select</option>
														<option>Male</option>
														<option>Female</option>
														<option>Non-Binary</option>
													</select>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Date of Birth</label>
													<div class="cal-icon">
														<input type="text" class="form-control datetimepicker" value="24-07-1983">
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