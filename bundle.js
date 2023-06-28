"use strict";var d=require("react/jsx-runtime");require("react");var n=require("prop-types"),f=require("styled-components"),p=Object.defineProperty,v=Object.defineProperties,g=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(r,e,o)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,k=(r,e)=>{for(var o in e||(e={}))i.call(e,o)&&u(r,o,e[o]);if(t)for(var o of t(e))c.call(e,o)&&u(r,o,e[o]);return r},y=(r,e)=>v(r,g(e)),O=(r,e)=>{var o={};for(var l in r)i.call(r,l)&&e.indexOf(l)<0&&(o[l]=r[l]);if(r!=null&&t)for(var l of t(r))e.indexOf(l)<0&&c.call(r,l)&&(o[l]=r[l]);return o};const a=r=>{var e=r,{backgroundColor:o,color:l,label:b}=e,s=O(e,["backgroundColor","color","label"]);return d.jsx(C,y(k({$color:l,$backgroundColor:o},s),{children:b}))},C=f.button`
  background: ${r=>r.$backgroundColor?r.$backgroundColor:"#8F4F74"};
  color: ${r=>r.$color?r.$color:"#FFF"};
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;a.propTypes={backgroundColor:n.string,color:n.string,label:n.string.isRequired,onClick:n.func},a.defaultProps={backgroundColor:null,color:null,onClick:void 0},exports.Button=a;
