<template>
    <!-- Header -->
    <div class="header">
        
        <!-- Logo -->
        <div class="header-left">
            <router-link to="/admin/index" class="logo">
                <img src="@/assets/admin_img/logo.svg" alt="Logo">
            </router-link>
            <router-link to="/admin/index" class="logo logo-small">
                <img src="@/assets/admin_img/logo.svg" alt="Logo" width="30" height="30">
            </router-link>
        </div>
        <!-- /Logo -->
        
        <a href="javascript:void(0);" id="toggle_btn">
            <align-left-icon size="1x" class="custom-class"></align-left-icon>
        </a>
        
        <div class="top-nav-search">
            <form>
                <input type="text" class="form-control" placeholder="Search here">
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <a class="mobile_btn" id="mobile_btn">
            <i class="fa fa-bars"></i>
        </a>
        <!-- /Mobile Menu Toggle -->
        
        <!-- Header Right Menu -->
        <ul class="nav user-menu">

            
            
            <!-- User Menu -->
            <li class="nav-item dropdown has-arrow">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <span class="user-img"><img class="rounded-circle" src="@/assets/admin_img/profiles/avatar-01.jpg" width="31" alt="Ryan Taylor"></span>
                </a>
                <div class="dropdown-menu">
                    <div class="user-header">
                        <div class="avatar avatar-sm">
                            <img src="@/assets/admin_img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                        </div>
                        <div class="user-text">
                            <h6>{{admin_data_to_show.admin_name}}</h6>
                            <p class="text-muted mb-0">Administrator</p>
                        </div>
                    </div>
                    <router-link class="dropdown-item" to="/admin/profile">My Profile</router-link>
                    <router-link class="dropdown-item" to="/admin/settings">Settings</router-link>
                    <a class="dropdown-item" @click.prevent="logoutAdmin()">Logout</a>
                </div>
            </li>
            <!-- /User Menu -->
            
        </ul>
        <!-- /Header Right Menu -->
        
    </div>
    <!-- /Header -->
</template>
<script>
import AdminService from '@/api-services/admin.service';

import { AlignLeftIcon } from 'vue-feather-icons'
import { BellIcon } from 'vue-feather-icons'
    export default {
        data(){
            return{
                admin_data_to_show:{},
            }
        },
        created(){
        if(window.localStorage.getItem('role') =='admin') {
            this.getDashboadData();
        }
        else{
            this.$router.push('/admin/login');
        }
    },
    methods:{
         logoutAdmin(){
			this.$localStorage.remove('token');
			this.$localStorage.remove('user');
			this.$localStorage.remove('role');
			this.$router.push('/admin/login');
        },
        getDashboadData(){
            let token = window.localStorage.getItem('token');
            AdminService.dashboardService(token).then((response) => {
                if(response.status==200){
                    this.admin_data_to_show = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});

        },
        loadImg(imgPath, value) {
            if(value == 1) {
              return  images('./' + imgPath)
            } else {
              return  patientImages('./' + imgPath)
            }
        },
    },
        components: {
            AlignLeftIcon,
            BellIcon
        },
        mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');

    

      $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    $('#task_window').removeClass('opened');
    return false;
    });
    // $(".sidebar-overlay").on("click", function () {
    // $('html').removeClass('menu-opened');
    // $(this).removeClass('opened');
    // $wrapper.removeClass('slide-nav');
    // $('.sidebar-overlay').removeClass('opened');
    // $('#task_window').removeClass('opened');
    // });


      $(document).on('click', '.top-nav-search .responsive-search', function() {
    $('.top-nav-search').toggleClass('active');
    });
      $('.sidebar-menu ul li:not(.submenu) a').click(function () {
        $("html").removeClass('menu-opened');
        $(".sidebar-overlay").removeClass('opened');
      });
    },
       computed: {
           currentPath() {
               return this.$route.name
           }
       },
      
    }
    </script>