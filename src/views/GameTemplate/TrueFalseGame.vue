<template>
    <div class="container">
        <div class="card">
            <p class="h3">{{ this.GameConfig.GlobalTitle }}</p>
            <p class="h5">{{ GameData.Question }}</p>
        </div>
        <div class="Content">
            <div class="QuestionView">
                <component :is="this.SlotComponent" :Data="this.SlotData" :ID="this.id"></component>
            </div>
            <div class="SelectArea">
                <div class="TFArea">
                    <button type="button" class="TF Circle" v-on:click="Select(0)"  :class="{ SelectedTF : TFSelect[0] }"><i class="bi bi-circle"></i></button>
                    <button type="button" class="TF Crosss" v-on:click="Select(1)" :class="{ SelectedTF : TFSelect[1] }"><i class="bi bi-x-lg"></i></button>
                </div>
                <button type="button" class="Submit" :class="{ OnSubmit : (this.Answer!=null) }" v-on:click="CheckAnswer">送出答案</button>
            </div>
        </div>
    </div>
</template>
<script>
import { getGameAssets } from '../../utilitys/get_assets'
import { getComponents } from '@/utilitys/get-components.js';
import Water from '../../components/Water.vue';
import { get } from 'jquery';
export default {
    name: 'TrueFalseGame',
    data(){
        return {
            imageUrl:"",
            SlotComponent: "",
            SlotData: null,
            TFSelect: [false,false],
            Answer: null
        }
    },
    emits: ['play-effect','add-record','next-question'],
    props: {
        GameData: {
            type: Object,
            required: true
        },
        GameConfig:{
            type: Object,
            required: true
        },
        id:{
            type: String,
            required: true
        }
    },
    methods:{
        Select(index){
            if(index == 0){
                this.TFSelect[0] = true;
                this.TFSelect[1] = false;
                this.Answer = true;
            }
            else{
                this.TFSelect[0] = false;
                this.TFSelect[1] = true;
                this.Answer = false;
            }
        },
        CheckAnswer(){
            let answer = this.Answer;
            if(answer == this.GameData.Answer){
                this.$emit('play-effect', 'CorrectSound',)
                this.$emit('add-record',[this.GameData.Answer,answer,"正確"])
                this.$emit('next-question');
                console.log('check answer : True');
            }
            else{
                this.$emit('play-effect', 'WrongSound',)
                this.$emit('add-record',[this.GameData.Answer,answer,"錯誤"])
                console.log('check answer : False');
            }
        },
    },
    created() {
        this.imageUrl=getGameAssets(this.id,this.GameData.img)
        this.SlotComponent = this.GameData.SlotComponents[0].Name;
        this.SlotData = this.GameData.SlotComponents[0].Data;
    },
    components: {
        ImageContainer: getComponents('ImageContainer'),
        Water: getComponents('Water'),
        Clock: getComponents('Clock')
    }
}
</script>
<style scoped>
.card {
    border: solid 3px #a0c4ff; 
    border-radius: 15px;
    padding: 1em;
}
button {
    width: 150px;
}
.Content{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    height: 60vh;
    .QuestionView{
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 3px #aaa; 
        border-radius: 20px;
        width: 60%;
        height: 100%;
        padding: 10px;
        component{
            width: 100%;
            height: 90% ;
        }
    }
    .SelectArea{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .TFArea{
            height: 50%;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .TF{
                width: 40%;
                height: 100%;
                border-radius: 20px;
                i{
                    font-size: 6em;
                }  
                transform: scale(1);
                transition: transform 0.2s;
            } 
            .TF:hover{
                /* Zoom in Effect */
                transform: scale(1.1);
                transition: transform 0.2s;
            }
            .Crosss {background-color: #fff;}
            .Circle {background-color: #fff;}
        }
        .Submit{
            margin-top: 2em;
            width: 90%;
            height: 15%;
            border-radius: 20px;
            font-size: 2em;
            background-color: #BDE0FE;
        }
    }
}
.OnSubmit {
    animation: blink 1s linear infinite;
}

@keyframes blink {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
.SelectedTF{
    background-color: #a2d2ff!important;
    scale: 1.1;
}
</style>