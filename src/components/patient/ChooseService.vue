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
						
						<div class="col-md-7 col-lg-8 col-xl-9 choose-service">
              <p class="choose-text">CHOOSE THE SERVICE</p>
							<div class="card">
								<div class="card-body service pt-0">
										<div class="service-col pt-3 pb-3">
                      <div class="row">
                        <div class="col-md-3">
                          <button class="service-btn">SERVICE 1</button>
                          <div class="card pb-5">
                            <div class="service-content-one pt-3 pb-4">
                              <p>Providers available 24/7 by secure video or phone for adults</p>
                            </div>
                            <div class="service-content-two pt-3">
                              <p><span>$75</span>Per Visit</p>
                              <p>Your cost today</p>
                            </div>
                            <div class="service-content-three pt-3 pb-5">
                              <p class="use">Use it for:</p>
                              <p>Allergies,Cold,Cough,</p>
                              <p>Flu Exposure and</p>
                              <p>Symptoms, Sore Throat</p>
                              <p>Minor Injuries, Pink Eye,</p>
                              <p>Sinus Infection, Skin</p>
                              <p>Infections,UTI and more</p>
                            </div>
                            <div class="service-content-four">
                              <p class="learn-more">Learn more  <span><i class="fas fa-arrow-right"></i></span></p>
                            </div>
                            <div class="service-content-five pb-3">
                              <button class="see-btn">SEE A DOCTOR NOW</button>
                            </div>
                            <div class="service-content-six mt-2">
                              <button class="schedule-btn">SCHEDULE A VISIT</button>
                            </div>
                          </div>                          
                        </div>

                        <div class="col-md-3">
                          <button class="service-btn">SERVICE 2</button>
                          <div class="card pb-5">
                            <div class="service-content-one pt-3 pb-4">
                              <p>Private secure and confidential therapy sessions. By appointment only.</p>
                            </div>
                            <div class="service-content-two pt-3">
                              <p><span>$99</span>Per Session</p>
                              <p>Your cost today</p>
                            </div>
                            <div class="service-content-three pt-3 pb-5">
                              <p class="use">Use it for:</p>
                              <p>Anxiety</p>
                              <p>Grief and Loss</p>
                              <p>Relationship Issues</p>
                              <p>Sadness & Stress</p>
                              <p>Sexuality</p>
                              <p>and more...</p>
                            </div>
                            <div class="service-content-four">
                              <p class="learn-more">Learn more  <span><i class="fas fa-arrow-right"></i></span></p>
                            </div>
                            <div class="service-content-five pb-3">
                              <button class="see-btn">SCHEDULE A VISIT</button>
                            </div>
                          </div>                          
                        </div>

                        <div class="col-md-3">
                          <button class="service-btn">SERVICE 3</button>
                          <div class="card pb-5">
                            <div class="service-content-one pt-3 pb-4">
                              <p>Psychiatrists typically don't provide therapy, but can prescribe medications when appropriate</p>
                            </div>
                            <div class="service-content-two pt-3">
                              <p><span>$259</span>First Visit</p>
                              <p>Follow ups: <span class="less">$99</span> or less </p>
                              <p>Your cost today</p>
                            </div>
                            <div class="service-content-three pt-3 pb-5">
                              <p class="use">Use it for:</p>
                              <p>Anxiety</p>
                              <p>Bipolar Disorder</p>
                              <p>Depression</p>
                              <p>Insomnia</p>
                              <p>Trauma and PTSD</p>
                              <p>and more...</p>
                            </div>
                            <div class="service-content-four">
                              <p class="learn-more">Learn more  <span><i class="fas fa-arrow-right"></i></span></p>
                            </div>
                            <div class="service-content-five pb-3">
                              <button class="see-btn">SCHEDULE A VISIT</button>
                            </div>
                          </div>                          
                        </div>

                        <div class="col-md-3">
                          <button class="service-btn">SERVICE 4</button>
                          <div class="card pb-5">
                            <div class="service-content-one pt-3 pb-4">
                              <p>Our Board-certified dermatalogists can help with over 3,000 skin, nail and hair conditions</p>
                            </div>
                            <div class="service-content-two pt-3">
                              <p><span>$69</span>Per Visit</p>
                              <p>Your cost today</p>
                            </div>
                            <div class="service-content-three pt-3 pb-5">
                              <p class="use">Use it for:</p>
                              <p>Acne</p>
                              <p>Dandruff</p>
                              <p>Rashes</p>
                              <p>Skin Irritations</p>
                              <p>Warts & Moles</p>
                              <p>and more...</p>
                            </div>
                            <div class="service-content-four">
                              <p class="learn-more">Learn more  <span><i class="fas fa-arrow-right"></i></span></p>
                            </div>
                            <div class="service-content-five pb-3">
                              <button class="see-btn">SCHEDULE A VISIT</button>
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