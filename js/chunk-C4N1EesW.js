import{a6 as a,r as l,aR as t,W as e,X as o,be as s,u as r,bJ as n,bv as p,Q as i,U as m}from"./chunk-BB7IEB5B.js";import{_ as u}from"./chunk-C6aQ1G2z.js";import{u as b,i as c}from"./chunk-CDoex7Rk.js";import{s as d}from"./chunk-CaxicGpp.js";import{u as k}from"./chunk-DDTO5rcc.js";import"./chunk-DyqAhB7D.js";import"./chunk-BsxoPDUi.js";import"./chunk-Brhz0LsG.js";import"./chunk-B8dymozY.js";import"./chunk-CShO9xrd.js";import"./chunk-D3YcvhA7.js";import"./chunk-goYLvais.js";import"./chunk-DCTqbsaT.js";import"./chunk-C6Zwkpkb.js";import"./chunk-iVZSWji-.js";import"./chunk-BLnK4V6m.js";import"./chunk-Q9bklZT_.js";import"./chunk-6OeFQMrk.js";import"./chunk-D6zm6W2C.js";import"./chunk-Cjrd7Wf_.js";import"./chunk-CZIS8eQd.js";const g={class:"overflow-y-auto"},h={class:"flex items-center justify-start gap-10"},j={class:"flex flex-col"},y={class:"form-control"},f={class:"cursor-pointer label"},v={class:"label-text"},x=a({__name:"PersonAlready",setup(a){const{t:x}=k(),z=b().personConfig,{getAlreadyPersonList:N,getAlreadyPersonDetail:P}=d(z),w=l(!1);function A(a){z.moveAlreadyToNot(a)}const T=[{label:c.global.t("data.number"),props:"uid",sort:!0},{label:c.global.t("data.name"),props:"name"},{label:c.global.t("data.department"),props:"department"},{label:c.global.t("data.identity"),props:"identity"},{label:c.global.t("data.prizeName"),props:"prizeName",sort:!0},{label:c.global.t("data.operation"),actions:[{label:c.global.t("data.removePerson"),type:"btn-info",onClick:a=>{A(a)}}]}],C=[{label:c.global.t("data.number"),props:"uid",sort:!0},{label:c.global.t("data.number"),props:"name"},{label:c.global.t("data.department"),props:"department"},{label:c.global.t("data.identity"),props:"identity"},{label:c.global.t("data.prizeName"),props:"prizeName",sort:!0},{label:c.global.t("data.prizeTime"),props:"prizeTime"},{label:c.global.t("data.operation"),actions:[{label:c.global.t("data.removePerson"),type:"btn-info",onClick:a=>{A(a)}}]}];return(a,l)=>(t(),e("div",g,[o("h2",null,s(r(x)("viewTitle.winnerManagement")),1),o("div",h,[o("div",null,[o("span",null,s(r(x)("table.luckyPeopleNumber"))+"：",1),o("span",null,s(r(N).length),1)]),o("div",j,[o("div",y,[o("label",f,[o("span",v,s(r(x)("table.detail"))+":",1),n(o("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>w.value=a),type:"checkbox",class:"border-solid toggle toggle-primary border-1"},null,512),[[p,w.value]])])])])]),w.value?m("",!0):(t(),i(u,{key:0,"table-columns":T,data:r(N)},null,8,["data"])),w.value?(t(),i(u,{key:1,"table-columns":C,data:r(P)},null,8,["data"])):m("",!0)]))}});export{x as default};
