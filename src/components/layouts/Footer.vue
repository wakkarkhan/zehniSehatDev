<template>
	<!-- Footer -->
			<footer class="footer">
				<div class="container">
					<div class="footer-top">
						<!-- <img src="@/assets/img/logo-white.png" alt="Logo" class="img-fluid"> -->
						<router-link to="/index" class="navbar-brand logo text-white">Zehni Sehat
							<!-- <img src="@/assets/img/logo.png" class="img-fluid" alt="Logo"> -->
						</router-link>
						<div class="social-icons">
							<ul>
								<li>
									<a href="#">
										<i class="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-google-plus-g"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-twitter"></i>
									</a>
								</li>
							</ul>
						</div>

						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="Your Email">
							<div class="input-group-append">
							  <button class="btn btn-primary" type="button">Subscribe</button>
							</div>
						</div>

						<ul class="footer-nav">
							<li>
								<router-link to="/doctor/search">Book Analysts</router-link>
							</li>
							<!-- <li>
								<router-link to="/doctor/patients">Patients</router-link>
							</li> -->
							<li>
								<router-link to="/doctor/blog-list">Blogs</router-link>
							</li>
							<li>
								<router-link to="/login">Login</router-link>
							</li>
							<li>
								<router-link to="/term-condition">Terms & Conditions</router-link>
							</li>
							<li>
								<router-link to="/privacy-policy">Privacy Policy</router-link>
							</li>							
						</ul>
					</div>

					<div class="footer-bottom">
						<p>© 2021 Zehni Sehat | All Rights Reserved | Developed by Codematics.</p>
					</div>
				</div>
			</footer>
			<!-- /Footer -->
</template>