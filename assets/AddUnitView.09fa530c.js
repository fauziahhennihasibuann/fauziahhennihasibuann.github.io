import{M as x,N as V,c as g,w as t,_ as $,a as i,b as e,d as v,K as u,z as S,u as o,j as _,e as d,t as m,k as c,f as C,i as y,O as L}from"./index.98607a94.js";import{_ as f,a as p}from"./FormControl.ed1e14bc.js";import{a as w,_ as h}from"./BaseButtons.2b711a00.js";import{u as B}from"./satuan.7e625d93.js";import"./sweetalert2.all.e9d3950e.js";const N=d("h1",{class:"text-center text-2xl"},"Tambah Data Satuan",-1),R={key:0},A={class:"text-red-400 text-sm p-2"},D={key:0},K={class:"text-red-400 text-sm p-2"},G={__name:"AddUnitView",setup(U){const s=B(),a=x({satuan:"",keterangan:"-"}),k=()=>{a.satuan="",a.keterangan="-"};return V(()=>s.errors,l=>{l.unit&&alert(l.unit[0]),l.desc&&alert(l.desc[0])}),(l,n)=>{const b=y("RouterLink");return i(),g($,null,{default:t(()=>[e(C,null,{default:t(()=>[e(v,{"is-form":"",onSubmit:n[2]||(n[2]=u(r=>o(s).handleAddData(a),["prevent"]))},{footer:t(()=>[e(w,null,{default:t(()=>[e(h,{type:"submit",color:"info",label:"Submit"}),e(h,{type:"reset",color:"danger",outline:"",label:"Reset",onClick:u(k,["prevent"])},null,8,["onClick"])]),_:1})]),default:t(()=>[e(b,{to:{name:"data-satuan"},class:"hover:text-indigo-600"},{default:t(()=>[e(S,{path:o(L),size:"34",w:"",h:"h-16"},null,8,["path"])]),_:1}),N,e(f,{label:"Satuan"},{default:t(()=>[e(p,{modelValue:a.satuan,"onUpdate:modelValue":n[0]||(n[0]=r=>a.satuan=r),placeholder:"Kg / L / Gr dsb..."},{default:t(()=>[o(s).errors.unit?(i(),_("div",R,[d("span",A,m(o(s).errors.unit[0]),1)])):c("",!0)]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"Keterangan"},{default:t(()=>[e(p,{modelValue:a.keterangan,"onUpdate:modelValue":n[1]||(n[1]=r=>a.keterangan=r),placeholder:"Liter dsb..."},{default:t(()=>[o(s).errors.description?(i(),_("div",D,[d("span",K,m(o(s).errors.desc[0]),1)])):c("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{G as default};
