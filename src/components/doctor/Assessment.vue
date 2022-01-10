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
        <div class="col-lg-6 col-md-6"  v-for="(question, index) in quiz.questions" :key="question.id">
          <!-- <div v-show="index === questionIndex"> -->
          <div >
           
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
            
          </div>
        </div></div>
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
                No anxiety disorder.
                
              </p>
              <p class="color-white font-18">
                Functionally, the patient does not report limitations due to their symptoms.
              </p>
              
            </div>
            <div class="resultsInner" v-show="moderate">
              
              <h3 class="color-white">{{totalRequest}} points</h3>
              <p class="color-white font-18">
                Mild anxiety disorder.
                
              </p>
              <p class="color-white font-18">
                Some studies that applied GAD-7 to Panic Disorder, Social Phobia, and PTSD would use a cutoff of 8, such that this would be Moderate Anxiety. See Next Steps section for more information.
              </p>
              <p class="color-white font-18">
                Functionally, the patient does not report limitations due to their symptoms.
              </p>
            </div>
            <div class="resultsInner" v-show="high">
              
              <h3 class="color-white">{{totalRequest}} points</h3>
              <p class="color-white font-18">
                Moderate anxiety disorder.
                
              </p>
              <p class="color-white font-18">
                Functionally, the patient does not report limitations due to their symptoms.
              </p>
            
              
            </div>
            <div class="resultsInner" v-show="ultraHigh">
              
              <h3 class="color-white">{{totalRequest}} points</h3>
              <p class="color-white font-18">
                Severe anxiety disorder.
                
              </p>
              <p class="color-white font-18">
                Functionally, the patient does not report limitations due to their symptoms.
              </p>
            
              <a href="https://zehnisehat.com/#/doctor/search" class="btn btn-secondary mt-5 color-white">Consult Therapist</a>
            </div>
            <div class="resultsInner" v-show="danger">
              
              <h3 class="color-white">{{totalRequest}} points</h3>
              <p class="color-white font-18">
                Severe anxiety disorder.
                
              </p>
              <p class="color-white font-18">
                Functionally, the patient finds it is “extremely difficult” to perform life tasks due to their symptoms.
              </p>
              
              <a href="https://zehnisehat.com/#/doctor/search" class="btn btn-secondary mt-5 color-white">Consult Therapist</a>
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
            title: "General Anxiety Disorder-7",
            questions: [
                {
                text: 'Feeling nervous, anxious or on edge',
                answers: [
                    {
                    text: 'Not at all',
                    value: 0
                    },
                    {
                    text: 'Several days',
                    value: 1
                    },
                    {
                    text: 'More than half the days',
                    value: 2
                    },
                    {
                    text: 'Nearly every day',
                    value: 3
                    },
                ]
                },
                {
                text: 'Not being able to stop or control worrying',
                answers: [
                    {
                    text: 'Not at all',
                    value: 0
                    },
                    {
                    text: 'Several days',
                    value: 1
                    },
                    {
                    text: 'More than half the days',
                    value: 2
                    },
                    {
                    text: 'Nearly every day',
                    value: 3
                    },
                ]
                },
                {
                text: 'Worrying too much about different things',
                answers: [
                    {
                    text: 'Not at all',
                    value: 0
                    },
                    {
                    text: 'Several days',
                    value: 1
                    },
                    {
                    text: 'More than half the days',
                    value: 2
                    },
                    {
                    text: 'Nearly every day',
                    value: 3
                    },
                ]
                },
                {
                text: 'Trouble relaxing',
                answers: [
                    {
                    text: 'Not at all',
                    value: 0
                    },
                    {
                    text: 'Several days',
                    value: 1
                    },
                    {
                    text: 'More than half the days',
                    value: 2
                    },
                    {
                    text: 'Nearly every day',
                    value: 3
                    },
                ]
                },
                {
                text: 'Being so restless that it is hard to sit still',
                answers: [
                    {
                    text: 'Not at all',
                    value: 0
                    },
                    {
                    text: 'Several days',
                    value: 1
                    },
                    {
                    text: 'More than half the days',
                    value: 2
                    },
                    {
                    text: 'Nearly every day',
                    value: 3
                    },
                ]
                },
                {
                text: 'Becoming easily annoyed or irritable',
                answers: [
                    {
                    text: 'Not at all',
                    value: 0
                    },
                    {
                    text: 'Several days',
                    value: 1
                    },
                    {
                    text: 'More than half the days',
                    value: 2
                    },
                    {
                    text: 'Nearly every day',
                    value: 3
                    },
                ]
                },
                {
                text: 'Feeling afraid as if something awful might happen',
                answers: [
                    {
                    text: 'Not at all',
                    value: 0
                    },
                    {
                    text: 'Several days',
                    value: 1
                    },
                    {
                    text: 'More than half the days',
                    value: 2
                    },
                    {
                    text: 'Nearly every day',
                    value: 3
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


