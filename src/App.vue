<script>
import getMergeSortAnimations from './components/mergesortalgo.js';
import getanimationbubble from './components/bubblesortalgo.js';
export default {
  name: 'App',
    data() {
        return {
            arr: [],
            speed:9,
            isDisabled:false,
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
        disable(){
           this.isDisabled=!this.isDisabled;
           console.log("disable");
          const ab=  document.getElementsByClassName("reset-arr");
          if(this.isDisabled){
          for(var o=0;o<ab.length;o++){
              ab[o].classList.add("disabled");
          }
          }
            else{
                for(var o=0;o<ab.length;o++){
                ab[o].classList.remove("disabled");
            }
            }
        },
        bubblesort(dis){
            const animations = getanimationbubble(this.arr.slice());
            const arrayBars = document.getElementsByClassName("arr-bar");
            for (let i = 0; i < animations.length; i++) {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1);
                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i % 4 === 0 ? 'red' : 'turquoise';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * 2300/this.speed);
                } 
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * 2300/this.speed);
                }
            }
          //  dis();
        },

        mergesort(dis){
            const animations = getMergeSortAnimations(this.arr.slice());
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
            <button @click="inarr" class="reset-arr" :class="{disabled: isDisabled}">
                reset
            </button>
            <button @click="mergesort(disable);disable()" class="reset-arr" :class="{disabled: isDisabled}"
                :disabled="isDisabled">
                merge sort
            </button>
            <button @click="bubblesort(disable);disable()" class="reset-arr" :class="{disabled: isDisabled}"
                :disabled="isDisabled">
                bubble sort
            </button>
            <button @click="blank" class="reset-arr" :class="{disabled: isDisabled}" :disabled="isDisabled">
                selection sort
            </button>
            <button @click="blank" class="reset-arr" :class="{disabled: isDisabled}" :disabled="isDisabled">
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
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Source+Code+Pro&display=swap');
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
    width:170px;
    height:50px;
    background-color: turquoise;
    color:white;
    border-radius:10px;
    font-size:1.2rem;
    text-align:center;
    font-family: 'Source Code Pro', monospace;
    transition:all 0.2s;
}
.reset-arr:hover{
   background-color:black;
   color:turquoise;
}
.disabled{
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
}
.disabled:hover{
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
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
    border-radius:10px;
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
    font-family: 'Source Code Pro', monospace;

}
/*Chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
        overflow: hidden;
        -webkit-appearance: none;
        background-color: #000000;
    }

    input[type='range']::-webkit-slider-runnable-track {
        height: 10px;
        -webkit-appearance: none;
        color: #13bba4;
        margin-top: -1px;
    }

    input[type='range']::-webkit-slider-thumb {
        width: 15px;
        border-radius:10px;
        height:10px;
        -webkit-appearance: none;
        height: 10px;
        cursor: ew-resize;
        background-color:white;
    }

}
</style>