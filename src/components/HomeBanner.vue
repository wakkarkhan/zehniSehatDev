<template>
	<!-- Home Banner -->
	<section class="section home-banner">
		<div class="container-fluid">
			<div class="row banner-wrapper">
				<div class="col-md-12">
					<div class="banner-header">
						<h3>Be Hear Healthy</h3>
						<h1 class="color-yellow">The correct assistance 
							at the perfect time</h1>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indstandard dummy text ever</p>
						<a class="btn btn-primary mt-5" @click="searchPath">Self Assessment</a>
						<a class="btn btn-secondary mt-5" @click="contactPath">Contact Us</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Home Banner -->
</template>

<script>
import TestService from '@/api-services/test.service';
export default {

	computed: {
		currentpath() {
			return this.$route.name;
		}
	},
	 methods: {
		searchPath() {
			this.$router.push('/assesments')
		},
		contactPath() {
			this.$router.push('/contact-us')
		},
		callApi(){
			 TestService.getAll().then((response) => {
				console.log(response.data);
				}).catch((error) => {
				console.log(error.response.data);
			});

		}
    },
}
</script>
<style>
.color-yellow{
	color: #E1AD01 !important;
}
</style>