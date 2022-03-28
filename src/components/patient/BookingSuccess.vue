<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb16></breadcrumb16>
        <!-- Page Content -->
			<div class="content success-page-cont">
				<div class="container-fluid">

					<div class="row justify-content-center">
						<div class="col-lg-6">
						
							<!-- Success Card -->
							<div class="card success-card">
								<div class="card-body">
									<div class="success-cont">
										<i class="fas fa-check"></i>
										<h3>Appointment booked Successfully!</h3>
										<p>Appointment booked with <strong>{{this.$route.params.doctor_name}}</strong><br></p>
										<p>Please check your Email. <strong>You can login to your dashboard Now</strong><br></p>
										<router-link to="/login" class="btn btn-primary view-inv-btn">Login</router-link>
									</div>
								</div>
							</div>
							<!-- /Success Card -->
							
						</div>
					</div>
					
				</div>
			</div>		
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>