import{m,_ as f,o as e,c as o,a as n,t as V,F as h,k as d,q as I,s as v,h as g,v as G,p as k,e as y}from"./index-3019030b.js";import{G as S}from"./get_assets-cf714148.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const Q={name:"FillinBlank",data(){return{InputId:0,ImgSrc:"",WithImage:!1,Value:[],focuslocation:null}},props:{GameData:{type:Object,required:!0},GameConfig:{type:Object,required:!0},id:{type:String,required:!0}},methods:{focusInput(t,l){this.focuslocation=[t,l]},VNInput(t){this.focusInput!=null&&(this.Value[this.focuslocation[0]][this.focuslocation[1]]+=t)},VNDelete(){this.focusInput!=null&&(this.Value[this.focuslocation[0]][this.focuslocation[1]]="")},VNPop(){this.focusInput!=null&&(this.Value[this.focuslocation[0]][this.focuslocation[1]]=this.Value[this.focuslocation[0]][this.focuslocation[1]].slice(0,-1),console.log(this.Value[this.focuslocation[0]][this.focuslocation[1]]))},CheckAnswer(){let t=0,l=!0,s="",r="";for(var i in this.GameData.Question)for(var a in this.GameData.Question[i])this.GameData.Question[i][a]=="$input"&&(this.Value[i][a]!=this.GameData.Answer[t]&&(l=!1,s+="第"+(i+1)+"格:"+this.Value[i][a]+`
`),r+="第"+(i+1)+"格:"+this.Value[i][a]+`
`,t++);l?(console.log("Correct"),this.$emit("play-effect","CorrectSound"),this.$emit("add-record",[r,s,"正確"]),this.$emit("next-question")):(console.log("Wrong"),this.$emit("play-effect","WrongSound"),this.$emit("add-record",[r,s,"錯誤"]))}},created(){for(var t in this.GameData.Question){let s=[];for(var l in this.GameData.Question[t])s.push("");this.Value.push(s)}},mounted(){this.GameConfig.WithImage&&(this.WithImage=!0,this.ImgSrc=S(this.id,this.GameData.Img),/undefined/.test(this.ImgSrc)&&(this.WithImage=!1))},components:{Numpad:m(()=>f(()=>import("./VirtualNumPadInput-9fce373e.js"),["assets/VirtualNumPadInput-9fce373e.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-3019030b.js","assets/index-b23d1a2f.css","assets/VirtualNumPadInput-9b5e14c8.css"])),Calculator:m(()=>f(()=>import("./calculator-432c9bb7.js"),["assets/calculator-432c9bb7.js","assets/vuedraggable.umd-0f3dd5b1.js","assets/index-3019030b.js","assets/index-b23d1a2f.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/calculator-7fea39aa.css"])),Clock:m(()=>f(()=>import("./clock-c1b8872e.js"),["assets/clock-c1b8872e.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-3019030b.js","assets/index-b23d1a2f.css","assets/clock-56a21981.css"]))}},A=t=>(k("data-v-577144ec"),t=t(),y(),t),N={class:"Container container"},b={class:"index"},w={class:"MainQuestion"},F={class:"SlotArea"},P={class:"QuestionArea card"},B={class:"SubQuestion"},E=A(()=>n("hr",null,null,-1)),R={class:"Question"},T=["onFocus","onUpdate:modelValue"],W={key:1,class:"gap"},O={key:2},L={class:"functionbar"},q={class:"Slot"};function x(t,l,s,r,i,a){return e(),o("div",N,[n("div",b,[n("p",w,V(this.GameData.Question_Text),1),n("div",F,[(e(!0),o(h,null,d(s.GameData.SlotComponents,u=>(e(),I(v(u.Name),{class:"SlotItem",ID:this.id,Data:u.Data},null,8,["ID","Data"]))),256))]),n("div",P,[n("p",B,V(this.GameData.SubQuestionTitle),1),E,(e(!0),o(h,null,d(s.GameData.Question,(u,c)=>(e(),o("div",{key:c,class:"QuestionRow"},[(e(!0),o(h,null,d(s.GameData.Question[c],(p,_)=>(e(),o("div",R,[p=="$input"?g((e(),o("input",{key:0,type:"text",class:"input form-control",onFocus:D=>a.focusInput(c,_),"onUpdate:modelValue":D=>i.Value[c][_]=D},null,40,T)),[[G,i.Value[c][_]]]):p=="$gap"?(e(),o("div",W)):(e(),o("p",O,V(p),1))]))),256))]))),128))]),n("div",L,[n("button",{class:"btn btn-primary",onClick:l[0]||(l[0]=(...u)=>a.CheckAnswer&&a.CheckAnswer(...u))},"確認答案")])]),n("div",q,[(e(!0),o(h,null,d(s.GameData.AssistiveComponent,u=>(e(),o("div",null,[(e(),I(v(u),{onVirtualpadinputInput:a.VNInput,onVirtualpadinputDelete:a.VNDelete,onVirtualpadinputPop:a.VNPop},null,40,["onVirtualpadinputInput","onVirtualpadinputDelete","onVirtualpadinputPop"]))]))),256))])])}const j=C(Q,[["render",x],["__scopeId","data-v-577144ec"]]);export{j as default};
