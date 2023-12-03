import{a as c,j as k,e as w,t as p,G as C,h as y,H as f,I as _,u as i,c as r,w as a,b as s,d as v,k as h,J as g,K as x,L as B}from"./index.98607a94.js";import{a as S,_ as u}from"./BaseButtons.2b711a00.js";const $={class:"flex items-center justify-between mb-3"},V={class:"text-2xl"},D={__name:"CardBoxComponentTitle",props:{title:{type:String,required:!0}},setup(e){return(l,d)=>(c(),k("div",$,[w("h1",V,p(e.title),1),C(l.$slots,"default")]))}},L={class:"space-y-3"},q={__name:"CardBoxModal",props:{title:{type:String,required:!0},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Done"},hasCancel:Boolean,modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:l}){const d=e,o=y({get:()=>d.modelValue,set:t=>l("update:modelValue",t)}),m=t=>{o.value=!1,l(t)},b=()=>m("confirm"),n=()=>m("cancel");return window.addEventListener("keydown",t=>{t.key==="Escape"&&o.value&&n()}),(t,N)=>f((c(),r(B,{onOverlayClick:n},{default:a(()=>[f(s(v,{class:"shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50","is-modal":""},{footer:a(()=>[s(S,null,{default:a(()=>[s(u,{label:e.buttonLabel,color:e.button,onClick:b},null,8,["label","color"]),e.hasCancel?(c(),r(u,{key:0,label:"Batal",color:e.button,outline:"",onClick:n},null,8,["color"])):h("",!0)]),_:1})]),default:a(()=>[s(D,{title:e.title},{default:a(()=>[e.hasCancel?(c(),r(u,{key:0,icon:i(g),color:"whiteDark",small:"","rounded-full":"",onClick:x(n,["prevent"])},null,8,["icon","onClick"])):h("",!0)]),_:1},8,["title"]),w("div",L,[C(t.$slots,"default")])]),_:3},512),[[_,i(o)]])]),_:3},512)),[[_,i(o)]])}};export{q as _};
