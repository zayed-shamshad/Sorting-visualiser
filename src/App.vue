<script>
import getMergeSortAnimations from './components/mergesortalgo.js';
export default {
  name: 'App',
    data() {
        return {
            arr: [],
            speed:9,
        }
    },
  mounted() {
    this.inarr();
    },
    watch: {
        speed() {
            this.inarr();
        }
    },
    methods:{
        mergesort(){
            const animations = getMergeSortAnimations(this.arr);
            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName("arr-bar");
                const isColorChange = i % 3 !== 2;
                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i % 3 === 0 ? 'red' : 'turquoise';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * 2300/this.speed);
                } else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        arrayBars[barOneIdx].style.height = `${newHeight}px`;
                    }, i * 2300/ this.speed);
                }
            }

        },
        randomnumber(a,b){
            return Math.floor((Math.random()+1) * 200-b+a);
        },
        inarr(){
        this.arr=[];
        for(var i=0;i<this.speed;i++){
           this.arr.push(this.randomnumber(i,i+3));
        }
        }
        ,
       
    },
}
</script>

<template>
    <navbar class="navbar">
        <div class="buttons">
            <button @click="inarr" class="reset-arr">
                reset
            </button>
            <button @click="mergesort" class="reset-arr">
                merge sort
            </button>
            <button @click="mergesort" class="reset-arr">
                bubble sort
            </button>
            <button @click="mergesort" class="reset-arr">
                selection sort
            </button>
            <button @click="mergesort" class="reset-arr">
                heap sort
            </button>
        </div>
        <div class="slider">
            <input slider type="range" min="9" max="230" v-model="speed" />
        </div>
    </navbar>
    <div class="arr-container">
        <div v-for="(item,index) in arr" :key="index"
            :style='{"height":`${item}px`,"background-color":"rgb(5, 169, 205)"}' class="arr-bar">
        </div>
    </div>
    <footer>
        <p>
            Made with <span style="color:turquoise">&#10084;</span> by Zaid
        </p>
    </footer>
</template>

<style>

*{
    margin: 0;
    padding: 0;
}
.buttons{
    display: flex;
    justify-content:space-evenly;
    flex-direction: row;
    width: 50vw;
}
.arr-container{
    width:90vw;
    padding:5vw;
    background-color: rgb(255, 255, 255);
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:baseline;
}
.arr-bar{
    
    background-color: turquoise;
    width:5px;
}
.reset-arr{
    top:0;
    left:0;
    width:100px;
    height:50px;
    background-color: turquoise;
    color:white;
    border-radius:10px;
    font-size:1.2rem;
    text-align:center;
}
.navbar{
    width:100vw;
    height:100px;
    background-color: rgb(0, 0, 0);
    display:flex;
    justify-content: space-evenly;
    align-items:center;
}
.slider{
    width:20vw;
    height:5vw;
    background-color: turquoise;
    color:rgb(255, 255, 255);
    font-size:2vw;
    text-align:center;
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    min-width:150px;
    min-height: 50px;
}
footer{
    width:100vw;
   
    background-color: rgb(0, 0, 0);
    display:flex;
    bottom:0;
    height:50px;
    position:absolute;
    justify-content: center;
    align-items:center;
    color:white;
    font-size:1.2rem;

}
</style>