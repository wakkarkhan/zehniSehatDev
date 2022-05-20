<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <!-- <breadcrumb13></breadcrumb13> -->
        <!-- Page Content -->
			<div class="content">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12">
							<div class="blog-view">
								<div class="blog blog-single-post">
                                    <div class="jumbotron mt-3">
                                        <h1 class="mb-5">{{ quiz.title }}</h1>
                                        <hr>
                                        <!-- <p v-if="errors[questionIndex]" class="alert alert-danger">
                                            {{ error }}
                                        </p> -->
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6" v-for="(question, index) in quiz.questions" :key="question.id">
                                            <!-- <div v-show="index === questionIndex"> -->
                                            <div>
                                            
                                                <h4 class="mt-5 mb-3">{{ question.text }}</h4> 
                                                
                                                <div v-for="answer in question.answers" class="form-check" :key="answer.id">
                                                <label class="form-check-label">
                                                    <a v-if="answer.text=='Yes'" class="edit-link" data-toggle="modal" href="#add_time_slot"><input class="form-check-input" type="radio"
                                                        :value="answer.value"
                                                        @click="calculateResult()"
                                                        :name="index"
                                                        v-model="responses[index]"></a>
                                                    <a v-else><input class="form-check-input" type="radio"
                                                        :value="answer.value"
                                                        @click="calculateResult()"
                                                        :name="index"
                                                        v-model="responses[index]"></a>
                                                    {{answer.text}}
                                                </label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
								</div>
							</div>
						</div>
                </div>
                 <!--  -->
                <div id="footer" class="resultsUpper">
                    <div class="resultsOpacity">
                    <div class="loader" v-show="myLoader"></div>
                    <div class="resultsInner" v-show="low">
                        
                        <h3 class="color-white">{{totalRequest}} points</h3>
                        <p class="color-white font-18">
                        Scores ≤4 suggest minimal depression which may not require treatment.
                        
                        </p>
                        <p class="color-white font-18">
                        Functionally, the patient does not report limitations due to their symptoms.
                        </p>
                        
                    </div>
                    <div class="resultsInner" v-show="moderate">
                        
                        <h3 class="color-white">{{totalRequest}} points</h3>
                        <p class="color-white font-18">
                        Scores 5-9 suggest mild depression which may require only watchful waiting and repeated GAD-7 at followup.
                        
                        </p>
                        <p class="color-white font-18">
                        Functionally, the patient does not report limitations due to their symptoms.
                        </p>
                        <p class="color-white font-18">
                        WARNING: This patient is having thoughts concerning for suicidal ideation or self-harm, and should be probed further, referred, or transferred for emergency psychiatric evaluation as clinically appropriate and depending on clinician overall risk assessment.
                        </p>
                    </div>
                    <div class="resultsInner" v-show="high">
                        
                        <h3 class="color-white">{{totalRequest}} points</h3>
                        <p class="color-white font-18">
                        Scores 10-14 suggest moderate depression severity; patients should have a treatment plan ranging form counseling, followup, and/or pharmacotherapy.
                        
                        </p>
                        <p class="color-white font-18">
                        Functionally, the patient finds it is “extremely difficult” to perform life tasks due to their symptoms.
                        </p>
                        <p class="color-white font-18">
                        WARNING: This patient is having thoughts concerning for suicidal ideation or self-harm, and should be probed further, referred, or transferred for emergency psychiatric evaluation as clinically appropriate and depending on clinician overall risk assessment.
                        </p>
                        <a href="https://www.zehnisehat.com/#/doctor/search" class="btn btn-secondary mt-5 color-white">Consult Therapist</a>
                    </div>
                    <div class="resultsInner" v-show="ultraHigh">
                        
                        <h3 class="color-white">{{totalRequest}} points</h3>
                        <p class="color-white font-18">
                        Scores 15-19 suggest moderately severe depression; patients typically should have immediate initiation of pharmacotherapy and/or psychotherapy.
                        
                        </p>
                        <p class="color-white font-18">
                        Functionally, the patient finds it is “extremely difficult” to perform life tasks due to their symptoms.
                        </p>
                        <p class="color-white font-18">
                        WARNING: This patient is having thoughts concerning for suicidal ideation or self-harm, and should be probed further, referred, or transferred for emergency psychiatric evaluation as clinically appropriate and depending on clinician overall risk assessment.
                        </p>
                        <a href="https://www.zehnisehat.com/#/doctor/search" class="btn btn-secondary mt-5 color-white">Consult Therapist</a>
                    </div>
                    <div class="resultsInner" v-show="danger">
                        
                        <h3 class="color-white">{{totalRequest}} points</h3>
                        <p class="color-white font-18">
                        Scores 20 and greater suggest severe depression; patients typically should have immediate initiation of pharmacotherapy and expedited referral to mental health specialist.
                        
                        </p>
                        <p class="color-white font-18">
                        Functionally, the patient does not report limitations due to their symptoms.
                        </p>
                        <p class="color-white font-18">
                        WARNING: This patient is having thoughts concerning for suicidal ideation or self-harm, and should be probed further, referred, or transferred for emergency psychiatric evaluation as clinically appropriate and depending on clinician overall risk assessment.
                        </p>
                        <a href="https://www.zehnisehat.com/#/doctor/search" class="btn btn-secondary mt-5 color-white">Consult Therapist</a>
                    </div>
                    </div>
                </div>
                <!--  -->
			</div>
		</div>		
			<!-- /Page Content -->
            <!-- Add Time Slot Modal -->
		<div class="modal fade custom-modal" id="add_time_slot">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Next steps:</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
                        <div class="col-lg-12 col-md-12">
							<!-- <div class="blog-view"> -->
								<!-- <div class="blog blog-single-post"> -->
                                    <div class="jumbotron" style="padding: 1rem !important">
                                        <!-- <h1 class="mb-5">{{ quiz.title }}</h1> -->
                                        <!-- <hr> -->
                                        <!-- <p v-if="errors[questionIndex]" class="alert alert-danger">
                                            {{ error }}
                                        </p> -->
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                            <!-- <div v-show="index === questionIndex"> -->
                                            <div>
                                            
                                                <h4 class="mt-5 mb-3">Are you having thoughts of killing yourself right now?</h4> 
                                                
                                                <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio"
                                                        value="Yes"
                                                        name="index">Yes
                                                </label>
                                                </div>
                                                <div class="form-check">
                                                <label class="form-check-label">
                                                <input class="form-check-input" type="radio"
                                                        value="No"
                                                        name="index2">No
                                                </label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
								<!-- </div> -->
							<!-- </div> -->
						</div>
						
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Time Slot Modal -->
            <layout-footer></layout-footer>
    </div>
</template>
<script>

export default {
    data() {
        return {

            quiz : {
            title: "Suicide Risk Screening Tool",
            questions: [
                {
                text: 'In the past few weeks, have you wished you were dead?',
                answers: [
                    {
                    text: 'No',
                    value: 0
                    },
                    {
                    text: 'Yes',
                    value: 1
                    },
                ]
                },
                {
                text: 'In the past few weeks, have you felt that you or your family would be better off if you were dead?',
                answers: [
                    {
                    text: 'No',
                    value: 0
                    },
                    {
                    text: 'Yes',
                    value: 1
                    },
                ]
                },
                {
                text: 'In the past week, have you been having thoughts about killing yourself?',
                answers: [
                    {
                    text: 'No',
                    value: 0
                    },
                    {
                    text: 'Yes',
                    value: 1
                    },
                ]
                },
                {
                text: 'Have you ever tried to kill yourself?',
                answers: [
                    {
                    text: 'No',
                    value: 0
                    },
                    {
                    text: 'Yes',
                    value: 1
                    },
                ]
                },
                
        ]
    },

            questionIndex: 0,
            responses: [],
            errors: [],
            error: '',
            totalRequest:0,
            low: true,
            moderate: false,
            high: false,
            ultraHigh: false,
            danger: false,
            myLoader: false,
      
        }
    },
    methods: {
    calculateResult(){
        document.getElementById('footer').style.opacity = '0.8';
        this.myLoader = true;
        setTimeout(() => 
        this.delayedCalculation(),
         500);

    },
    delayedCalculation(){
      //alert(this.responses.length); 
      this.totalRequest = 0;
      this.myLoader = false;
      for(let i=0; i<this.responses.length; i++) {
          if(this.responses[i] >= 0){
            this.totalRequest +=this.responses[i];
          } 
      }
      this.totalRequest = Math.round(this.totalRequest);
      if(this.totalRequest <= 4){
        this.low = true;
        this.moderate = false;
        this.high = false;
        this.ultraHigh = false;
        this.danger = false;
      }
      if(this.totalRequest >= 5 && this.totalRequest <=9){
        this.low = false;
        this.moderate = true;
        this.high = false;
        this.ultraHigh = false;
        this.danger = false;
      }
      if(this.totalRequest >=10  && this.totalRequest <=14){
        this.low = false;
        this.moderate = false;
        this.high = true;
        this.ultraHigh = false;
        this.danger = false;
      }
      if(this.totalRequest >=15  && this.totalRequest <=19){
        this.low = false;
        this.moderate = false;
        this.high = false;
        this.ultraHigh = true;
        this.danger = false;
      }
      if(this.totalRequest >=20  ){
        this.low = false;
        this.moderate = false;
        this.high = false;
        this.ultraHigh = false;
        this.danger = true;
      }
      document.getElementById('footer').style.opacity = '1';

    },
    prev: function() {
      this.questionIndex--;
    },
    
    next: function() {
      if (this.responses[this.questionIndex] === undefined) {
        this.errors[this.questionIndex] = 1;
        this.error = 'Please select your answer';
      } 
      else {
        this.errors[this.questionIndex] = 0;
        this.questionIndex++;
      } 
    },
    
    score: function() {
      //return questions.answers;
    },
    
    playAgain: function() {
      this.questionIndex = 0;
    }
  }
    
}
</script>
<style scoped>
.form-check-input:checked{
    background-color: #E1AD01;
}
.form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
    margin-top: 10px;
}
.form-check-input {
    position: absolute;
    margin-left: -1.6rem;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0px !important;
}
.color-white{
  color: #00214B !important;
}
.font-18{
  font-size: 18px !important;
  font-weight: 400 !important;
}
#footer {
    position: sticky;
    padding: 25px 68px;
    color: #fff;
    bottom: 0;
    width: 100%;
    background: #e9ecef;
    line-height: 2;
    font-size: 30px;
    font-family: sans-serif;
    font-weight: bold;
    box-shadow: 0 0 10px #00214B
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #19566D;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>


