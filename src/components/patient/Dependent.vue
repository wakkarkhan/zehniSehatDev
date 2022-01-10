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
								<div class="card-body dependent pt-0">
									<p class="help-title">WHO NEEDS HELP?</p>
										<div class="row justify-content-center">
											<div class="col-md-3">
												<img src="@/assets/img/patients/patient.jpg" class="dependent-img">
												<p class="depedent-name pt-3 pl-4">Jacopo</p>
											</div>
											<div class="col-md-3">
												<img src="@/assets/img/patients/patient1.jpg" class="dependent-img">
												<p class="depedent-name pt-3 pl-4">Alessandro</p>
											</div>
											<div class="col-md-3">
												<router-link to="/patient/add-dependent" target="_blank" class="add-dependent-link">
													<!-- <img src="assets/img/patients/add-dependent.png" class="add-dependent-img"> -->
													<i class="fa fa-plus add-dependent-img" aria-hidden="true"></i>
												</router-link>
												<p class="add-depedent-name pt-3">Add dependent</p>
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