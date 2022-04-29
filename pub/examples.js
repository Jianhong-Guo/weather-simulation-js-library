"use strict"; 
const watermove = new WaterMove();

const state={
    amount:1,
    speed: 4,
    time: 10,
    direction: 'left',
    radius:30,
    height_diff: 5,
    image_amount: 1,
    images:[1,1,1,1,1],
    speeds:[1,1,1,1,1],

}

const listenAmount = document.querySelector("#amount");
    listenAmount.addEventListener('change', (event)=>{
        const i = parseInt(document.getElementById('amount').value);
        if(0<=i && i<=10){
            state.amount =i
        }else{
            state.amount =1
        }
});

const listenSpeed = document.querySelector("#speed");
    listenSpeed.addEventListener('change', (event)=>{
        const i = parseInt(document.getElementById('speed').value);
        if(0<=i && i<=9){
            state.speed =i
        }else{
            state.speed =4
        }
});

const listenTime = document.querySelector("#time");
    listenTime.addEventListener('change', (event)=>{
        const i = parseInt(document.getElementById('time').value);
        state.time =i
});

const listenDirection = document.querySelector("#direction");
    listenDirection.addEventListener('change', (event)=>{
        const i = document.getElementById('direction').value;
        if(i==='right' || i==="left"){
            state.direction=i
    }
});

const listenRadius = document.querySelector("#radius");
    listenRadius.addEventListener('change', (event)=>{
        const i = parseInt(document.getElementById('radius').value);
        if(i>=0){
            state.radius =i
        }
});

const listenDiff = document.querySelector("#diff");
    listenDiff.addEventListener('change', (event)=>{
        const i = parseInt(document.getElementById('diff').value);
        if(0<=i){
            state.height_diff =i
        }
});

const listenImages = document.querySelector("#images");
    listenImages.addEventListener('change', (event)=>{
        const elements = (document.getElementById('images').value).split(',');
        const array = [];
        if(elements.length<=5){
            for(let i=0; i<elements.length;i++){
                if(0<parseInt(elements[i])<5){
                    state.images[i]=parseInt(elements[i])
                }
             }
        state.image_amount = elements.length       
         }
        
});

const listenSpeeds = document.querySelector("#speeds");
    listenSpeeds.addEventListener('change', (event)=>{
        const elements = (document.getElementById('speeds').value).split(',');
        const array = [];
        if(elements.length<=5){
            for(let i=0; i<elements.length;i++){
                if(0<parseInt(elements[i])<20){
                    state.speeds[i]=parseInt(elements[i])
                }
             }
        state.image_amount = elements.length       
         }
        
});

function instruction(){
    alert("The inputs should satisfy the following requirements."+
    " If not, then the app will run the functions with the pre-defined values.\n"+
    "Inputs:\n1. amount: Integer 1 to 10, 1 means least amount.\n"+
    "2. speed: Integer from 1 to 9, 1 means fastest speed\n"+
    "3. time: times in second for run a function, non-negative integer\n"+
    "4. direction: direction of the sun, cloud and fog. Value should be left and right\n"+
    "5. radius: radius(px) of the sun, should be positive\n"+
    "6. diff: the difference(vh) between the highest and lowest position of sun, should be non-negative\n"+
    "7. images: images of the cloud and fog. Value should be integers from 1-5. Can add at most five images with only ',' between images, and repetition is allowed\n"+
    "8. speeds: Each speed corresponding to each image. Value should be positive integers. 1 means fastest speed.\n"+
    "Functions:\n"+
    "1. rain/snow/hail: the inputs amount, speed, time can be used for those function\n"+
    "2. sun: the inputs amount, speed, time, direction, radius and diff can be used for this function\n"+
    "3. cloud/fog: the inputs images and speeds can be used for those functions\n"+
    "4. precipitation info: display the precipitation information\n"+
    "5. clear all: go back to the default")
}

function getAll() {
    alert(watermove.getRainTime()+watermove.getSnowTime()+watermove.getHailTime())
}

function rainTime() {
    setTimeout(getAll(), 1000);
}



function displaySun() {
    watermove.makeSun(state.amount, state.direction, state.speed, state.radius, state.height_diff);
    if(state.amount!==0){
    setTimeout(()=>{watermove.makeSun(0,'left', 2, 10, 5)}, state.time*1000)
}}

function displayRain() {
    watermove.makeRain(state.amount, state.speed);
    if(state.amount!==0){
    setTimeout(()=>{watermove.makeRain(0, 1)}, state.time*1000)
}}

function displayCloud(){
    watermove.makeCloud(state.image_amount, amount.direction,
        state.images[0],state.speeds[0], state.images[1],state.speeds[1], state.images[2],state.speeds[2], state.images[3],state.speeds[3], state.images[4],state.speeds[4]);
    if(state.image_amount!==0){
    setTimeout(()=>{watermove.makeCloud(0,1,1,1,1,1,1,1,1,1,1)}, state.time*1000)
}}

function displaySnow(){
    watermove.makeSnow(state.amount, state.speed);
    if(state.amount!==0){
    setTimeout(()=>{watermove.makeSnow(0, 1)}, state.time*1000)
}}

function displayHail(){
    watermove.makeHail(state.amount, state.speed);
    if(state.amount!==0){
    setTimeout(()=>{watermove.makeHail(0, 1)}, state.time*1000)
}}

function displayFog(){
    watermove.makeFog(state.image_amount, amount.direction,
        state.images[0],state.speeds[0], state.images[1],state.speeds[1], state.images[2],state.speeds[2], state.images[3],state.speeds[3], state.images[4],state.speeds[4]);
    if(state.image_amount!==0){
    setTimeout(()=>{watermove.makeFog(0,1,1,1,1,1,1,1,1,1,1)}, state.time*1000)
}}

function clearAll(){
    console.log("clear")
    watermove.makeSun(0,'left', 2, 10, 5);
    watermove.makeCloud(0,1,1,1,1,1,1,1,1,1,1);
    watermove.makeFog(0,1,1,1,1,1,1,1,1,1,1);
    watermove.makeRain(0, 1);
    watermove.makeSnow(0, 1);
    watermove.makeHail(0, 1);
    watermove.clearInfo();
}

