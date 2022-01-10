<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb1></breadcrumb1>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar1></sidebar1>
						</div>
							<div class="col-md-7 col-lg-8 col-xl-9">

					<!-- Doctor Widget -->
					<div class="card">
						<div class="card-body">
							<div class="doctor-widget">
								<div class="doc-info-left">
									<div class="doctor-img">
										<img src="@/assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
									</div>
									<div class="doc-info-cont">
										<h4 class="doc-name">Dr. Mary Nielson</h4>
										<!-- <p class="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p> -->
										<p class="doc-department"><img src="@/assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality">D.N.B. (Psychiatry)</p>
										<div class="rating">
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(0)</span>
										</div>
										<div class="clinic-details">
											<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA </p>											
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<!-- /Doctor Widget -->
					
					<!-- Doctor Details Tab -->
					<div class="card">
						<div class="card-body pt-0">
						
							<!-- Tab Menu -->
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<a class="nav-link active" href="#doc_overview" data-toggle="tab">Overview</a>
									</li>								
									<li class="nav-item">
										<a class="nav-link" href="#doc_reviews" data-toggle="tab">Reviews</a>
									</li>
								</ul>
							</nav>
							<!-- /Tab Menu -->
							
							<!-- Tab Content -->
							<div class="tab-content pt-0">
							
								<!-- Overview Content -->
								<div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
									<div class="row">
										<div class="col-md-12 col-lg-9">
										
											<!-- About Details -->
											<div class="widget about-widget">
												<h4 class="widget-title">About Me</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
											</div>
											<!-- /About Details -->
										
											<!-- Education Details -->
											<div class="widget education-widget">
												<h4 class="widget-title">Education</h4>
												<div class="experience-box">
													<ul class="experience-list">
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<a href="#/" class="name">American Psychiatry Medical University</a>
																	<div>D.N.B. (Psychiatry)</div>
																	<span class="time">1998 - 2003</span>
																</div>
															</div>
														</li>
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<a href="#/" class="name">American Psychiatry Medical University</a>
																	<div>M.D. (Psychiatry)</div>
																	<span class="time">2003 - 2005</span>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<!-- /Education Details -->
									
											<!-- Experience Details -->
											<div class="widget experience-widget">
												<h4 class="widget-title">Work & Experience</h4>
												<div class="experience-box">
													<ul class="experience-list">
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<a href="#/" class="name">American Psychiatry Study Medical Clinic</a>
																	<span class="time">2010 - Present (5 years)</span>
																</div>
															</div>
														</li>
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<a href="#/" class="name">Comfort Care Psychiatry Clinic</a>
																	<span class="time">2007 - 2010 (3 years)</span>
																</div>
															</div>
														</li>
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<a href="#/" class="name">Dream Care Psychiatry Practice</a>
																	<span class="time">2005 - 2007 (2 years)</span>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<!-- /Experience Details -->
								
											<!-- Awards Details -->
											<div class="widget awards-widget">
												<h4 class="widget-title">Awards</h4>
												<div class="experience-box">
													<ul class="experience-list">
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<p class="exp-year">July 2019</p>
																	<h4 class="exp-title">Humanitarian Award</h4>
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																</div>
															</div>
														</li>
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<p class="exp-year">March 2011</p>
																	<h4 class="exp-title">Certificate for International Volunteer Service</h4>
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																</div>
															</div>
														</li>
														<li>
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<p class="exp-year">May 2008</p>
																	<h4 class="exp-title">The Accupuncture Professional of The Year Award</h4>
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<!-- /Awards Details -->
											
											<!-- Services List -->
											<div class="service-list">
												<h4>Services</h4>
												<ul class="clearfix">
													<li>Tooth cleaning </li>
													<li>Root Canal Therapy</li>
													<li>Implants</li>
													<li>Composite Bonding</li>
													<li>Fissure Sealants</li>
													<li>Surgical Extractions</li>
												</ul>
											</div>
											<!-- /Services List -->
											
											<!-- Specializations List -->
											<div class="service-list">
												<h4>Specializations</h4>
												<ul class="clearfix">
													<li>Children Care</li>
													<li>Accupuncture Care</li>	
													<li>Oral and Maxillofacial Surgery </li>	
													<li>Orthodontist</li>	
													<li>Periodontist</li>	
													<li>Prosthodontics</li>	
												</ul>
											</div>
											<!-- /Specializations List -->

										</div>
									</div>
								</div>
								<!-- /Overview Content -->
								
								
								
								<!-- Reviews Content -->
								<div role="tabpanel" id="doc_reviews" class="tab-pane fade">
								
									<!-- Review Listing -->
									<div class="widget review-listing">
										<ul class="comments-list">
										
											<!-- Comment List -->
											<li>
												<div class="comment">
													<img class="avatar avatar-sm rounded-circle" alt="User Image" src="@/assets/img/patients/patient.jpg">
													<div class="comment-body">
														<div class="meta-data">
															<span class="comment-author">Avrill Gabriel</span>
															<span class="comment-date">Reviewed 2 Days ago</span>
															<div class="review-count rating">
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star"></i>
															</div>
														</div>
														<p class="recommended"><i class="far fa-thumbs-up"></i> I recommend the doctor</p>
														<p class="comment-content">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit,
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
															Ut enim ad minim veniam, quis nostrud exercitation.
															Curabitur non nulla sit amet nisl tempus
														</p>
														<div class="comment-reply">
															<a class="comment-btn" href="#">
																<i class="fas fa-reply"></i> Reply
															</a>
														   <p class="recommend-btn">
															<span>Recommend?</span>
															<a href="#" class="like-btn">
																<i class="far fa-thumbs-up"></i> Yes
															</a>
															<a href="#" class="dislike-btn">
																<i class="far fa-thumbs-down"></i> No
															</a>
														</p>
														</div>
													</div>
												</div>
												
												<!-- Comment Reply -->
												<ul class="comments-reply">
													<li>
														<div class="comment">
															<img class="avatar avatar-sm rounded-circle" alt="User Image" src="@/assets/img/patients/patient1.jpg">
															<div class="comment-body">
																<div class="meta-data">
																	<span class="comment-author">Panola Brink</span>
																	<span class="comment-date">Reviewed 3 Days ago</span>
																	<div class="review-count rating">
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star"></i>
																	</div>
																</div>
																<p class="comment-content">
																	Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																	Ut enim ad minim veniam.
																	Curabitur non nulla sit amet nisl tempus
																</p>
																<div class="comment-reply">
																	<a class="comment-btn" href="#">
																		<i class="fas fa-reply"></i> Reply
																	</a>
																	<p class="recommend-btn">
																		<span>Recommend?</span>
																		<a href="#" class="like-btn">
																			<i class="far fa-thumbs-up"></i> Yes
																		</a>
																		<a href="#" class="dislike-btn">
																			<i class="far fa-thumbs-down"></i> No
																		</a>
																	</p>
																</div>
															</div>
														</div>
													</li>
												</ul>
												<!-- /Comment Reply -->
												
											</li>
											<!-- /Comment List -->
											
											<!-- Comment List -->
											<li>
												<div class="comment">
													<img class="avatar avatar-sm rounded-circle" alt="User Image" src="@/assets/img/patients/patient2.jpg">
													<div class="comment-body">
														<div class="meta-data">
															<span class="comment-author">Denney Rhea</span>
															<span class="comment-date">Reviewed 4 Days ago</span>
															<div class="review-count rating">
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star"></i>
															</div>
														</div>
														<p class="comment-content">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit,
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
															Ut enim ad minim veniam, quis nostrud exercitation.
															Curabitur non nulla sit amet nisl tempus
														</p>
														<div class="comment-reply">
															<a class="comment-btn" href="#">
																<i class="fas fa-reply"></i> Reply
															</a>
															<p class="recommend-btn">
																<span>Recommend?</span>
																<a href="#" class="like-btn">
																	<i class="far fa-thumbs-up"></i> Yes
																</a>
																<a href="#" class="dislike-btn">
																	<i class="far fa-thumbs-down"></i> No
																</a>
															</p>
														</div>
													</div>
												</div>
											</li>
											<!-- /Comment List -->
											
										</ul>
										
										<!-- Show All -->
										<div class="all-feedback text-center">
											<a href="#" class="btn btn-primary btn-sm">
												Show all feedback <strong>(167)</strong>
											</a>
										</div>
										<!-- /Show All -->
										
									</div>
									<!-- /Review Listing -->
								
									<!-- Write Review -->
									<div class="write-review">
										<h4>Write a review for <strong>Dr. Oscar Dill</strong></h4>
										
										<!-- Write Review Form -->
										<form>
											<div class="form-group">
												<label>Review</label>
												<div class="star-rating">
													<input id="star-5" type="radio" name="rating" value="star-5">
													<label for="star-5" title="5 stars">
														<i class="active fa fa-star"></i>
													</label>
													<input id="star-4" type="radio" name="rating" value="star-4">
													<label for="star-4" title="4 stars">
														<i class="active fa fa-star"></i>
													</label>
													<input id="star-3" type="radio" name="rating" value="star-3">
													<label for="star-3" title="3 stars">
														<i class="active fa fa-star"></i>
													</label>
													<input id="star-2" type="radio" name="rating" value="star-2">
													<label for="star-2" title="2 stars">
														<i class="active fa fa-star"></i>
													</label>
													<input id="star-1" type="radio" name="rating" value="star-1">
													<label for="star-1" title="1 star">
														<i class="active fa fa-star"></i>
													</label>
												</div>
											</div>
											<div class="form-group">
												<label>Title of your review</label>
												<input class="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?">
											</div>
											<div class="form-group">
												<label>Your review</label>
												<textarea id="review_desc" maxlength="100" class="form-control"></textarea>
											  
											  <div class="d-flex justify-content-between mt-3"><small class="text-muted"><span id="chars">100</span> characters remaining</small></div>
											</div>
											<hr>
											<div class="form-group">
												<div class="terms-accept">
													<div class="custom-checkbox">
													   <input type="checkbox" id="terms_accept">
													   <label for="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
													</div>
												</div>
											</div>
											<div class="submit-section">
												<button type="submit" class="btn btn-primary submit-btn">Add Review</button>
											</div>
										</form>
										<!-- /Write Review Form -->
										
									</div>
									<!-- /Write Review -->
						
								</div>
								<!-- /Reviews Content -->
								
							
								
							</div>
						</div>
					</div>
					<!-- /Doctor Details Tab -->
</div>
					</div>
				</div>
			</div>		
        <!-- /Page Content -->
		<layout-footer></layout-footer>
    </div>
</template>

<script>
import appointments from '../../assets/json/doctor/appointments.json'
const images = require.context('@/assets/img/patients', false, /\.jpg$/)
export default {
    data() {
        return {
            appointments: appointments
        }
    },
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
}
</script>