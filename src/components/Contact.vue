<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <!-- <breadcrumb30></breadcrumb30> -->
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12">
							<!--  -->
                            	<section class="news-events">
                                <div class="container">
                                    <h3 class="top-title text-center"> Should you require further assistance</h3>
                                    <h2 class="section-title text-center"> Please use the contact us</h2>

                                    <div class="row mt-5">
                                      <div class="col-md-12 col-lg-12">
                                            <div class="card">
                                                <div class="card-body">
                                                
                                                    <!-- Checkout Form -->
                                                    <form @submit.prevent="bookAppointment">
                                                    
                                                        <!-- Personal Information -->
                                                        <div class="info-widget">
                                                            <h4 class="card-title">Leave a massege and We will reach out to you soon</h4>
                                                            <div class="row">
                                                                
                                                                <div class="col-md-6 col-sm-12">
                                                                    <div class="form-group card-label">
                                                                        <label>Full Name</label>
                                                                        <input class="form-control" type="text" required>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class="col-md-6 col-sm-12">
                                                                    <div class="form-group card-label">
                                                                        <label>Email</label>
                                                                        <input class="form-control" type="email" required>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col-sm-12">
                                                                    <div class="form-group card-label">
                                                                        <label>Massege</label>
                                                                        <textarea class="form-control" type="text" required></textarea>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                            <!-- <div class="exist-customer">Existing Customer? <a href="#">Click here to login</a></div> -->
                                                        </div>
                                                        <!-- /Personal Information -->
                                                        
                                                        <div class="payment-widget">
                                                            <!-- <h4 class="card-title">Payment Method</h4> -->
                                                            
                                         
                                                           
                                                          
                                                            
                                                            <!-- Submit Section -->
                                                            <div class="submit-section mt-4">
                                                                <button type="submit" class="btn btn-primary submit-btn">Done </button>
                                                            </div>
                                                            <!-- /Submit Section -->
                                                            
                                                        </div>
                                                    </form>
                                                    <!-- /Checkout Form -->
                                                    
                                                </div>
                                            </div>
                                            
                                        </div> 
                                    </div>
                                        
                                    </div>
                                </section>
                            <!--  -->
						</div>
					</div>
				</div>
			</div>		
		<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>















<script>

export default {
	data(){
		return{
			
		}
	},
	created(){
		
	},
	methods:{
		
	}

}
</script>