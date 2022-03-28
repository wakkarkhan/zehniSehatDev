<template>
        <div class="main-wrapper">
            <header-admin></header-admin>
            <sidebar-admin></sidebar-admin>
           	<!-- Page Wrapper -->
               <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-7 col-auto">
								<h3 class="page-title">Specialities</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Specialities</li>
								</ul>
							</div>
							<div class="col-sm-5 col">
								<a href="#Add_Specialities_details" data-toggle="modal" class="btn btn-primary float-right mt-2">Add New</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<table class="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>#</th>
													<th>Specialities</th>
													<th class="text-right">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in specialities" :key="item.id">
													<td>{{item.id}}</td>
													
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile" class="avatar avatar-sm mr-2">
																<img class="avatar-img" :src="loadImg()" alt="Speciality">
															</router-link>
															<router-link to="/admin/profile">{{item.title}}</router-link>
														</h2>
													</td>
												
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light" data-toggle="modal" @click.prevent="editSpeciality(item)" href="#edit_specialities_details">
																<i class="fa fa-edit"></i> Edit
															</a>
															<a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
																<i class="fa fa-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>			
					</div>
				</div>			
			</div>
			<!-- /Page Wrapper -->
			
			
			<!-- Add Modal -->
			<div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Add Specialities</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form @submit="addNewSpeciality">
								<div class="row form-row">
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Speciality Name</label>
											<input v-model="add_new_speciality" type="text" class="form-control">
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Image</label>
											<input type="file"  class="form-control">
										</div>
									</div>
									<div class="col-12 col-sm-12">
										<div class="form-group">
											<label>Speciality Description</label>
											<textarea v-model="add_new_speciality_description" type="text" class="form-control"></textarea>
										</div>
									</div>
									
								</div>
								<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /ADD Modal -->
			
			<!-- Edit Details Modal -->
			<div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Edit Specialities</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form @submit.prevent="changeSpeciality()">
								<div class="row form-row">
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Name</label>
											<input type="text" v-model="name_for_speciality_to_edit" class="form-control" value="Cardiology">
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Image</label>
											<input type="file"  class="form-control">
										</div>
									</div>
									
								</div>
								<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /Edit Details Modal -->
			
			<!-- Delete Modal -->
			<div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-body">
							<div class="form-content p-2">
								<h4 class="modal-title">Delete</h4>
								<p class="mb-4">Are you sure want to delete?</p>
								<button type="button" class="btn btn-primary">Save </button>
								<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Delete Modal -->
            </div>
</template>
<script>
import AdminService from '@/api-services/admin.service';

    // import specialities from '../../assets/json/admin/speciality/specialities.json'
    const images = require.context('@/assets/admin_img/specialities', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			specialities: {},
			id_for_speciality_to_edit:'',
			name_for_speciality_to_edit:'',
			add_new_speciality:'',
			add_new_speciality_description:'',
			all_speciality_data:[{}],
			new_speciality_data:[{}],
		}
	},
	created(){
		if(window.localStorage.getItem('role') =='admin') {
			this.getAllSpecialities();
        }
        else{
            this.$router.push('/admin/login');
        }
	},
	methods:{
		addNewSpeciality(){
			let token = window.localStorage.getItem('token');
			//this.new_speciality_data[0]['speciality_name'] = this.add_new_speciality;
            AdminService.AddNewSpecialityService(token, this.add_new_speciality, this.add_new_speciality_description).then((response) => {
                if(response.status==200){
					if(response.data.status){

						//alert('true')
						location.reload();
                        //this.$router.push('/admin/specialities');
                    }
                    else{
                        alert('Something Went wrong')
                    }
                    //this.specialities = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		changeSpeciality(){
			//alert(this.name_for_speciality_to_edit);
			this.all_speciality_data[0]['speciality_id'] = this.id_for_speciality_to_edit;
			this.all_speciality_data[0]['speciality_name'] = this.name_for_speciality_to_edit;
			console.log(this.all_speciality_data);
			
			let token = window.localStorage.getItem('token');
            AdminService.ChangeSpecialityService(token, this.all_speciality_data).then((response) => {
                if(response.status==200){
					if(response.data.status){

						//alert('true')
						location.reload();
                        //this.$router.push({ path: '/admin/specialities' });
                    }
                    else{
                        alert('Something Went wrong');
                    }
                    //this.specialities = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		editSpeciality(speciality){
			//alert(speciality);
			this.id_for_speciality_to_edit = speciality.id;
			this.name_for_speciality_to_edit = speciality.title;
			//alert(this.id_for_speciality_to_edit);

		},
		getAllSpecialities(){
			let token = window.localStorage.getItem('token');
            AdminService.AllSpecialitiesService(token).then((response) => {
                if(response.status==200){
                    this.specialities = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
        loadImg() {
			// if(value == 2) {
			// 	return images('./' + imgPath)
			// } else {
			 	return images('./'  + 'specialities-01.png')
			// }
        },
    },
    mounted() {
		 // Datatable

	// 	 if ($('.datatable').length > 0) {
    //     $('.datatable').DataTable({
    //       "bFilter": false,
    //     });
    //   }
        $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		// setTimeout(function(){ 
		// 	mA.redraw();
		// 	mL.redraw();
		// }, 300);
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
    });
},

    }
</script>