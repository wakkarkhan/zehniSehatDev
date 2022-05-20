import Vue from 'vue'
import Router from 'vue-router'

/** For Home Pages **/
import Index from '@/components/Index'
import IndexNew from '@/components/IndexNew'


/** For Doctor **/
import DoctorDashboard from '@/components/doctor/Index'
import Appointments from '@/components/doctor/Appointments'
import MyPatients from '@/components/doctor/MyPatients'
import ScheduleTimings from '@/components/doctor/ScheduleTimings'
import Invoices from '@/components/doctor/Invoices'
import Reviews from '@/components/doctor/Reviews'
import Messages from '@/components/doctor/Messages'
import ProfileSettings from '@/components/doctor/ProfileSettings'
import PatientProfile from '@/components/doctor/PatientProfile'
import SocialMedia from '@/components/doctor/SocialMedia'
import DoctorChangePassword from '@/components/doctor/ChangePassword'
import DoctorRegister from '@/components/doctor/Register'
import DoctorProfile from '@/components/doctor/Profile'
import BlogDetails from '@/components/doctor/BlogDetails'
import Assessment from '@/components/doctor/Assessment'
import Assessment_PHQ from '@/components/doctor/Assessment_PHQ'
import Assessment_RAADS from '@/components/doctor/Assessment_RAADS'
import Assessment_EDINBURGH from '@/components/doctor/Assessment_EDINBURGH'
import Assessment_WHO5 from '@/components/doctor/Assessment_WHO5'
import Assessment_ADHD from '@/components/doctor/Assessment_ADHD'
import Assessment_ACE from '@/components/doctor/Assessment_ACE'
import Assessment_SUCIDE from '@/components/doctor/Assessment_SUCIDE'
import BlogList from '@/components/doctor/BlogList'
import BlogGrid from '@/components/doctor/BlogGrid'
import MapGrid from '@/components/doctor/MapGrid'
import MapList from '@/components/doctor/MapList'
import AddPrescription from '@/components/doctor/AddPrescription'
import EditPrescription from '@/components/doctor/EditPrescription'
import AddBilling from '@/components/doctor/AddBilling'
import EditBilling from '@/components/doctor/EditBilling'


/** For Patient **/
import PatientDashboard from '@/components/patient/Index'
import Booking from '@/components/patient/Booking'
import BookingSuccess from '@/components/patient/BookingSuccess'
import SearchDoctor from '@/components/patient/SearchDoctor'
import Checkout from '@/components/patient/Checkout'
import Favourites from '@/components/patient/Favourites'
import Chat from '@/components/patient/Chat'
import PatientProfileSettings from '@/components/patient/Profile'
import PatientChangePassword from '@/components/patient/ChangePassword'
import Dependent from '@/components/patient/Dependent'
import AddDependent from '@/components/patient/AddDependent'
import VisitType from '@/components/patient/VisitType'
import VisitConfirmed from '@/components/patient/VisitConfirmed'
import VisitQuestion from '@/components/patient/VisitQuestion'
import VisitReason from '@/components/patient/VisitReason'
import HealthProfile from '@/components/patient/HealthProfile'
import ChooseService from '@/components/patient/ChooseService'
import SelectPayment from '@/components/patient/SelectPayment'
import MyAccount from '@/components/patient/MyAccount'
import MyDoctors from '@/components/patient/MyDoctors'
import AppointmentDetail from '@/components/patient/AppointmentDetail'
import PatientDoctorProfile from '@/components/patient/DoctorProfile'
import FindDoctor from '@/components/patient/FindDoctor'


/** For Admin**/
import Admin from '@/components/admin/index.vue'
import Appointmentlist from '@/components/admin/appointmentlist.vue'
import Specialities from '@/components/admin/specialities.vue'
import Doctorlist from '@/components/admin/doctorlist.vue'
import Patientlist from '@/components/admin/patientlist.vue'
import Reviewslist from '@/components/admin/reviews.vue'
import Transaction from '@/components/admin/transactionslist.vue'
import Settingslist from '@/components/admin/settings.vue'
import Invoicereportlist from '@/components/admin/invoicereport.vue'
import Profilelist from '@/components/admin/profile.vue'
import SingleProfile from '@/components/admin/singleProfile.vue'
import AddProfile from '@/components/admin/addprofile.vue'
import loginlist from '@/components/admin/login.vue'
import registerlist from '@/components/admin/register.vue'
import Forgotlist from '@/components/admin/forgotpassword.vue'
import Locklist from '@/components/admin/lockscreen.vue'
import Error from '@/components/admin/error404.vue'
import Errorlist from '@/components/admin/error500.vue'
import blank from '@/components/admin/blankpage.vue'
import Componentslist from '@/components/admin/components.vue'
import formlist from '@/components/admin/formbasicinputs.vue'
import forminput from '@/components/admin/forminputgroups.vue'
import formhorizontalist from '@/components/admin/formhorizontal.vue'
import formverticallist from '@/components/admin/formvertical.vue'
import formmasklist from '@/components/admin/formmask.vue'
import formvalidationlist from '@/components/admin/formvalidation.vue'
import tablesbasiclist from '@/components/admin/tablesbasic.vue'
import datatableslist from '@/components/admin/datatables.vue'
import invoicelist from '@/components/admin/invoice.vue'

import VoiceCall from '@/components/VoiceCall'
import VideoCall from '@/components/VideoCall'
import Calender from '@/components/Calender'
import Components from '@/components/Components'
import InvoiceView from '@/components/InvoiceView'
import Blank from '@/components/Blank'
import Categories from '@/components/Categories'
import Assesments from '@/components/Assesments'
import AboutUs from '@/components/About'
import ContactUs from '@/components/Contact'
import Login from '@/components/Login'
import PatientRegister from '@/components/patient/Register'
import ForgotPassword from '@/components/ForgotPassword'
import TermCondition from '@/components/TermCondition'
import PrivacyPolicy from '@/components/PrivacyPolicy'


Vue.use(Router)
const router = new Router({
  mode: 'hash',
  //mode: 'history',
  //base: 'template-psychiatrist',
  routes: [
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/assesments',
      name: 'assesments',
      component: Assesments
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    // {
    //   path: '/',
    //   name: 'index-page',
    //   component: Index
    // },
    {
      path: '/',
      name: 'index-page',
      component: IndexNew


      // path: '/',
      // name: 'blank',
      // component: Blank
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/doctor/index',
      name: 'doctor-index',
      component: DoctorDashboard
    },
    {
      path: '/doctor/appointments',
      name: 'doctor-appointments',
      component: Appointments
    },
    {
      path: '/doctor/patients',
      name: 'my-patients',
      component: MyPatients
    },
    {
      path: '/doctor/patient-profile',
      name: 'patient-profile',
      component: PatientProfile
    },
    {
      path: '/doctor/schedule-timings',
      name: 'schedule-timings',
      component: ScheduleTimings
    },
    {
      path: '/doctor/invoices',
      name: 'invoices',
      component: Invoices
    },
    {
      path: '/doctor/reviews',
      name: 'doctor-reviews',
      component: Reviews
    },
    {
      path: '/doctor/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/doctor/profile-settings',
      name: 'profile-settings',
      component: ProfileSettings
    },
    {
      path: '/doctor/social-media',
      name: 'social-media',
      component: SocialMedia
    },
    {
      path: '/doctor/change-password',
      name: 'doctor-change-password',
      component: DoctorChangePassword
    },
    {
      path: '/doctor/register',
      name: 'doctor-register',
      component: DoctorRegister
    },
    {
      path: '/doctor/profile/:doctor_id',
      name: 'doctor-profile',
      component: DoctorProfile
    },
    {
      path: '/doctor/map-grid',
      name: 'doctor-mapgrid',
      component: MapGrid
    },
    {
      path: '/doctor/map-list',
      name: 'doctor-maplist',
      component: MapList
    },
    {
      path: '/doctor/add-prescription',
      name: 'add-prescription',
      component: AddPrescription
    },
    {
      path: '/doctor/edit-prescription',
      name: 'edit-prescription',
      component: EditPrescription
    },
    {
      path: '/doctor/add-billing',
      name: 'add-billing',
      component: AddBilling
    },
    {
      path: '/doctor/edit-billing',
      name: 'edit-billing',
      component: EditBilling
    },
    {
      path: '/doctor/search',
      name: 'search-doctor',
      component: SearchDoctor
    },
    {
      path: '/doctor/blog-details/:slug',
      name: 'blog-details',
      component: BlogDetails
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment-phq',
      name: 'assessment-phq',
      component: Assessment_PHQ
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment-raads',
      name: 'assessment-raads',
      component: Assessment_RAADS
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment-edinburgh',
      name: 'assessment-edinburgh',
      component: Assessment_EDINBURGH
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment-who5',
      name: 'assessment-who5',
      component: Assessment_WHO5
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment-adhd',
      name: 'assessment-adhd',
      component: Assessment_ADHD
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment-ace',
      name: 'assessment-ace',
      component: Assessment_ACE
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment-sucide',
      name: 'assessment-sucide',
      component: Assessment_SUCIDE
    },
    {
      // path: '/doctor/assessment/:category',
      path: '/doctor/assessment',
      name: 'assessment',
      component: Assessment
    },
    {
      path: '/doctor/blog-list',
      name: 'blog-list',
      component: BlogList
    },
    {
      path: '/doctor/blog-grid',
      name: 'blog-grid',
      component: BlogGrid
    },
    {
      path: '/patient/index',
      name: 'patient-dashboard',
      component: PatientDashboard
    },
    {
      path: '/patient/booking/:doctor_id/:doctor_name',
      name: 'booking',
      component: Booking
    },
    {
      path: '/patient/booking-success/:doctor_name',
      name: 'booking-success',
      component: BookingSuccess
    },
    {
      path: '/patient/checkout/:doctor_id/:doctor_name',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/patient/favourites',
      name: 'favourites',
      component: Favourites
    },
    {
      path: '/patient/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/patient/profile',
      name: 'patient-profile-settings',
      component: PatientProfileSettings
    },
    {
      path: '/patient/changePassword',
      name: 'patient-changePassword',
      component: PatientChangePassword
    },
    // {
    //   path: '/patient/change-password',
    //   name: 'patient-change-password',
    //   component: ChangePassword
    // },
    {
      path: '/patient/dependent',
      name: 'dependent',
      component: Dependent
    },
    {
      path: '/patient/add-dependent',
      name: 'add-dependent',
      component: AddDependent
    },
    {
      path: '/patient/visit-type',
      name: 'visit-type',
      component: VisitType
    },
    {
      path: '/patient/visit-confirmed',
      name: 'visit-confirmed',
      component: VisitConfirmed
    },
    {
      path: '/patient/visit-question',
      name: 'visit-question',
      component: VisitQuestion
    },
    {
      path: '/patient/visit-reason',
      name: 'visit-reason',
      component: VisitReason
    },
    {
      path: '/patient/health-profile',
      name: 'health-profile',
      component: HealthProfile
    },
    {
      path: '/patient/choose-service',
      name: 'choose-service',
      component: ChooseService
    },
    {
      path: '/patient/select-payment',
      name: 'select-payment',
      component: SelectPayment
    },
    {
      path: '/patient/my-account',
      name: 'my-account',
      component: MyAccount
    },
    {
      path: '/patient/my-doctors',
      name: 'my-doctors',
      component: MyDoctors
    },
    {
      path: '/patient/appointment-detail',
      name: 'appointment-detail',
      component: AppointmentDetail
    },
    {
      path: '/patient/doctor-profile',
      name: 'patient-doctor-profile',
      component: PatientDoctorProfile
    },
    {
      path: '/patient/find-doctor',
      name: 'find-doctor',
      component: FindDoctor
    },
    {
      path: '/admin/index',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/appointmentlist',
      name: 'appointmentlist',
      component: Appointmentlist
    },
    {
      path: '/admin/specialities',
      name: 'specialities',
      component: Specialities
    },
    {
      path: '/admin/doctorlist',
      name: 'doctorlist',
      component: Doctorlist
    },
    {
      path: '/admin/patientlist',
      name: 'patientlist',
      component: Patientlist
    },
    {
      path: '/admin/reviews',
      name: 'reviews',
      component: Reviewslist
    },
    {
      path: '/admin/transactionslist',
      name: 'transactionslist',
      component: Transaction
    },
    {
      path: '/admin/settings',
      name: 'settings',
      component: Settingslist
    },
    {
      path: '/admin/invoicereport',
      name: 'invoicereport',
      component: Invoicereportlist
    },
    {
      path: '/admin/profile',
      name: 'profile',
      component: Profilelist
    },
    {
      path: '/admin/singleProfile/:therapist_id',
      name: 'singleProfile',
      component: SingleProfile
    },
    {
      path: '/admin/addNewProfile',
      name: 'profile',
      component: AddProfile
    },
    {
      path: '/admin/login',
      name: 'login',
      component: loginlist
    },
    {
      path: '/admin/register',
      name: 'register',
      component: registerlist
    },
    {
      path: '/admin/forgotpassword',
      name: 'forgotpassword',
      component: Forgotlist
    },
    {
      path: '/admin/lockscreen',
      name: 'lockscreen',
      component: Locklist
    },
    {
      path: '/admin/error404',
      name: 'error404',
      component: Error
    },
    {
      path: '/admin/error500',
      name: 'error500',
      component: Errorlist
    },
    {
      path: '/admin/blankpage',
      name: 'blankpage',
      component: blank
    },
    {
      path: '/admin/components',
      name: 'components',
      component: Componentslist
    },
    {
      path: '/admin/formbasicinputs',
      name: 'formbasicinputs',
      component: formlist
    },
    {
      path: '/admin/forminputgroups',
      name: 'forminputgroups',
      component: forminput
    },
    {
      path: '/admin/formhorizontal',
      name: 'formhorizontal',
      component: formhorizontalist
    },
    {
      path: '/admin/formvertical',
      name: 'formvertical',
      component: formverticallist
    },
    {
      path: '/admin/formmask',
      name: 'formmask',
      component: formmasklist
    },
    {
      path: '/admin/formvalidation',
      name: 'formvalidation',
      component: formvalidationlist
    },
    {
      path: '/admin/tablesbasic',
      name: 'tablesbasic',
      component: tablesbasiclist
    },
    {
      path: '/admin/datatables',
      name: 'datatables',
      component: datatableslist
    },
    {
      path: '/admin/invoice',
      name: 'invoice',
      component: invoicelist
    },
    {
      path: '/voice-call',
      name: 'voice-call',
      component: VoiceCall
    },
    {
      path: '/video-call',
      name: 'video-call',
      component: VideoCall
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calender
    },
    {
      path: '/components',
      name: 'componentss',
      component: Components
    },
    {
      path: '/invoice-view',
      name: 'invoice-view',
      component: InvoiceView
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank
    },
    {
      path: '/login',
      name: 'logins',
      component: Login
    },
    {
      path: '/patient/register',
      name: 'patient-register',
      component: PatientRegister
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/term-condition',
      name: 'term-condition',
      component: TermCondition
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
  ],
  linkActiveClass: "active",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
export default router
