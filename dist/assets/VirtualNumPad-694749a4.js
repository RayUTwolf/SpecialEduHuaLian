import{o as d,c as l,a as t,h as u,v as c}from"./index-4d742f7d.js";import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";const b={name:"VirtualNumPad",data(){return{Num:""}},methods:{input(i){this.Num+=i},delete_num(){this.Num=""},submit(){this.$emit("submit",this.Num),console.log("Virtual NumPad Sent Num"+this.Num+" to parent")}}},a={class:"container"},m={class:"row mt-2"},v={class:"row"},_={class:"col-12 mb-2"},w={class:"row"},p={class:"col-4 mb-2"},k={class:"col-4 mb-2"},y={class:"col-4 mb-2"},h={class:"row"},N={class:"col-4 mb-2"},C={class:"col-4 mb-2"},f={class:"col-4 mb-2"},x={class:"row"},V={class:"col-4 mb-2"},P={class:"col-4 mb-2"},g={class:"col-4 mb-2"},B={class:"row"},$={class:"col-4 mb-2"},I={class:"col-4 mb-2"},D={class:"col-4 mb-2"};function E(i,s,M,S,e,o){return d(),l("div",a,[t("div",m,[t("div",v,[t("div",_,[u(t("input",{type:"text",class:"form-control rtl-input",id:"keyboardInput","onUpdate:modelValue":s[0]||(s[0]=n=>e.Num=n),readonly:""},null,512),[[c,e.Num]])])]),t("div",w,[t("div",p,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num1",onClick:s[1]||(s[1]=n=>o.input("1"))},"1")]),t("div",k,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num2",onClick:s[2]||(s[2]=n=>o.input("2"))},"2")]),t("div",y,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num3",onClick:s[3]||(s[3]=n=>o.input("3"))},"3")])]),t("div",h,[t("div",N,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num4",onClick:s[4]||(s[4]=n=>o.input("4"))},"4")]),t("div",C,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num5",onClick:s[5]||(s[5]=n=>o.input("5"))},"5")]),t("div",f,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num6",onClick:s[6]||(s[6]=n=>o.input("6"))},"6")])]),t("div",x,[t("div",V,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num7",onClick:s[7]||(s[7]=n=>o.input("7"))},"7")]),t("div",P,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num8",onClick:s[8]||(s[8]=n=>o.input("8"))},"8")]),t("div",g,[t("button",{class:"btn btn-secondary w-100 responsive-width",id:"num9",onClick:s[9]||(s[9]=n=>o.input("9"))},"9")])]),t("div",B,[t("div",$,[t("button",{class:"btn btn-danger w-100 responsive-width text-nowrap",id:"backspace",onClick:s[10]||(s[10]=n=>o.delete_num())},"清除")]),t("div",I,[t("button",{class:"btn btn-secondary w-100",id:"num0",onClick:s[11]||(s[11]=n=>o.input("0"))},"0")]),t("div",D,[t("button",{class:"btn btn-success w-100 responsive-width text-nowrap",id:"submit",onClick:s[12]||(s[12]=n=>o.submit())},"送出")])])])])}const j=r(b,[["render",E],["__scopeId","data-v-65001960"]]);export{j as default};
