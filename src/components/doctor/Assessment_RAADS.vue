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
                <input class="form-check-input" type="radio"
                     :value="answer.value"
                     @click="calculateResult()"
                     :name="index"
                     v-model="responses[index]">
                {{answer.text}}
              </label>
            </div>
            
            <!-- <div class="mt-5">
              <button 
                 class="btn btn-primary" 
                 v-if="questionIndex > 0" 
                 @click="prev">
                  prev
              </button>
              <button class="btn btn-secondary" @click="next">
                  next
              </button>  
            </div> -->
          </div>
        </div></div>
        
        <!-- <div v-show="questionIndex === quiz.questions.length"> -->
        <!-- <div>
          <h3>Your Results</h3>
          <p>
            You are: {{ responses }}
          </p>
          
          <button class="btn btn-success" @click="playAgain">
            Play Again!
          </button>
        </div> -->
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
            <layout-footer></layout-footer>
    </div>
</template>
<script>

export default {
    data() {
        return {

            quiz : {
            title: "Ritvo Autism & Asperger Diagnostic Scale (RAADS-14)",
            questions: [
                {
                text: 'It is difficult for me to understand how other people are feeling when we are talking.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'Some ordinary textures that do not bother others feel very offensive when they touch my skin.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'It is very difficult for me to work and function in groups.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'It is difficult to figure out what other people expect of me.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'I often don’t know how to act in social situations.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'I can chat and make small talk with people.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'When I feel overwhelmed by my senses, I have to isolate myself to shut them down.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'How to make friends and socialize is a mystery to me.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'When talking to someone, I have a hard time telling when it is my turn to talk or to listen.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'Sometimes I have to cover my ears to block out painful noises (like vacuum cleaners or people talking too much or too loudly).',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: ' It can be very hard to read someone’s face, hand, and body movements when we are talking.	',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'I focus on details rather than the overall idea.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'I take things too literally, so I often miss what people are trying to say.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                },
                {
                text: 'I get extremely upset when the way I like to do things is suddenly changed.',
                answers: [
                    {
                    text: 'True Now & When Young',
                    value: 2.79
                    },
                    {
                    text: 'True Only Now',
                    value: 1.93
                    },
                    {
                    text: 'True When I Was Young',
                    value: 1.1
                    },
                    {
                    text: 'Never True',
                    value: 0.22
                    },
                ]
                }
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


