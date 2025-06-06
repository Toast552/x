"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["957"],{6500:function(e,o,n){n.d(o,{Z:()=>r});var t=n(209);let r=(0,t.aZ)({name:"ChevronRight",render:()=>(0,t.h)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))})},1862:function(e,o,n){n.d(o,{S:()=>t});function t(e){return o=>{o?e.value=o.$el:e.value=null}}},1211:function(e,o,n){n.d(o,{Z:()=>V});var t=n(772),r=n(9226),i=n(1367),l=n(7291),d=n(209),a=n(1321),s=n(4124),u=n(6169),p=n(1844),c=n(2249),h=n(1862),v=n(3898),f=n(3337),w=n(4440),b=n(1579);let m=(0,b.U)("n-dropdown-menu"),x=(0,b.U)("n-dropdown"),g=(0,b.U)("n-dropdown-option");var y=n(2121),S=n(3827),k=n(1699),N=n(521),C=n(8361);let P=(0,d.aZ)({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return(0,d.h)("div",{class:`${this.clsPrefix}-dropdown-divider`})}});var F=n(7475),$=n(3772);let A=(0,d.aZ)({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:o}=(0,d.f3)(m),{renderLabelRef:n,labelFieldRef:t,nodePropsRef:r,renderOptionRef:i}=(0,d.f3)(x);return{labelField:t,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:r,renderOption:i}},render(){var e;let{clsPrefix:o,hasSubmenu:n,showIcon:t,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:a}=this.tmNode,s=(0,d.h)("div",Object.assign({class:`${o}-dropdown-option`},null==r?void 0:r(a)),(0,d.h)("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},(0,d.h)("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,t&&`${o}-dropdown-option-body__prefix--show-icon`]},(0,$.s)(a.icon)),(0,d.h)("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):(0,$.s)(null!==(e=a.title)&&void 0!==e?e:a[this.labelField])),(0,d.h)("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:s,option:a}):s}});var Z=n(5259),z=n(6946),B=n(195),O=n(1738),R=n(6500),I=n(4584);function _(e,o){return"submenu"===e.type||void 0===e.type&&void 0!==e[o]}function M(e){return"divider"===e.type}let T=(0,d.aZ)({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){let o=(0,d.f3)(x),{hoverKeyRef:n,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:l,activeKeyPathRef:a,animatedRef:s,mergedShowRef:u,renderLabelRef:p,renderIconRef:c,labelFieldRef:h,childrenFieldRef:v,renderOptionRef:f,nodePropsRef:w,menuPropsRef:b}=o,y=(0,d.f3)(g,null),S=(0,d.f3)(m),k=(0,d.f3)(N.c),C=(0,d.Fl)(()=>e.tmNode.rawNode),P=(0,d.Fl)(()=>{let{value:o}=v;return _(e.tmNode.rawNode,o)}),F=(0,d.Fl)(()=>{let{disabled:o}=e.tmNode;return o}),$=function(e,o,n){let t=(0,d.iH)(e.value),r=null;return(0,d.YP)(e,e=>{null!==r&&window.clearTimeout(r),!0===e?n&&!n.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},300):t.value=!1}),t}((0,d.Fl)(()=>{if(!P.value)return!1;let{key:o,disabled:i}=e.tmNode;if(i)return!1;let{value:d}=n,{value:a}=t,{value:s}=r,{value:u}=l;return null!==d?u.includes(o):null!==a?u.includes(o)&&u[u.length-1]!==o:null!==s&&u.includes(o)}),300,(0,d.Fl)(()=>null===t.value&&!s.value)),A=(0,d.Fl)(()=>!!(null==y?void 0:y.enteringSubmenuRef.value)),z=(0,d.iH)(!1);function B(){let{parentKey:o,tmNode:i}=e;!i.disabled&&u.value&&(r.value=o,t.value=null,n.value=i.key)}return(0,d.JJ)(g,{enteringSubmenuRef:z}),{labelField:h,renderLabel:p,renderIcon:c,siblingHasIcon:S.showIconRef,siblingHasSubmenu:S.hasSubmenuRef,menuProps:b,popoverBody:k,animated:s,mergedShowSubmenu:(0,d.Fl)(()=>$.value&&!A.value),rawNode:C,hasSubmenu:P,pending:(0,i.Z)(()=>{let{value:o}=l,{key:n}=e.tmNode;return o.includes(n)}),childActive:(0,i.Z)(()=>{let{value:o}=a,{key:n}=e.tmNode,t=o.findIndex(e=>n===e);return -1!==t&&t<o.length-1}),active:(0,i.Z)(()=>{let{value:o}=a,{key:n}=e.tmNode,t=o.findIndex(e=>n===e);return -1!==t&&t===o.length-1}),mergedDisabled:F,renderOption:f,nodeProps:w,handleClick:function(){let{value:n}=P,{tmNode:t}=e;!u.value||n||t.disabled||(o.doSelect(t.key,t.rawNode),o.doUpdateShow(!1))},handleMouseMove:function(){let{tmNode:o}=e;!o.disabled&&u.value&&n.value!==o.key&&B()},handleMouseEnter:B,handleMouseLeave:function(o){if(e.tmNode.disabled||!u.value)return;let{relatedTarget:t}=o;!t||(0,Z.B)({target:t},"dropdownOption")||(0,Z.B)({target:t},"scrollbarRail")||(n.value=null)},handleSubmenuBeforeEnter:function(){z.value=!0},handleSubmenuAfterEnter:function(){z.value=!1}}},render(){var e,o;let{animated:n,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:s,renderIcon:u,renderOption:p,nodeProps:c,props:h,scrollable:v}=this,f=null;if(r){let o=null===(e=this.menuProps)||void 0===e?void 0:e.call(this,t,t.children);f=(0,d.h)(j,Object.assign({},o,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let w={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=null==c?void 0:c(t),m=(0,d.h)("div",Object.assign({class:[`${i}-dropdown-option`,null==b?void 0:b.class],"data-dropdown-option":!0},b),(0,d.h)("div",(0,d.dG)(w,h),[(0,d.h)("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(t):(0,$.s)(t.icon)]),(0,d.h)("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(t):(0,$.s)(null!==(o=t[this.labelField])&&void 0!==o?o:t.title)),(0,d.h)("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?(0,d.h)(I.g,null,{default:()=>(0,d.h)(R.Z,null)}):null)]),this.hasSubmenu?(0,d.h)(z.Z,null,{default:()=>[(0,d.h)(B.Z,null,{default:()=>(0,d.h)("div",{class:`${i}-dropdown-offset-container`},(0,d.h)(O.Z,{show:this.mergedShowSubmenu,placement:this.placement,to:v&&this.popoverBody||void 0,teleportDisabled:!v},{default:()=>(0,d.h)("div",{class:`${i}-dropdown-menu-wrapper`},n?(0,d.h)(d.uT,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>f}):f)}))})]}):null);return p?p({node:m,option:t}):m}}),H=(0,d.aZ)({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:t}=e;return(0,d.h)(d.HY,null,(0,d.h)(A,{clsPrefix:n,tmNode:e,key:e.key}),null==t?void 0:t.map(e=>{let{rawNode:t}=e;return!1===t.show?null:M(t)?(0,d.h)(P,{clsPrefix:n,key:e.key}):e.isGroup?((0,F.ZK)("dropdown","`group` node is not allowed to be put in `group` node."),null):(0,d.h)(T,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key})}))}}),E=(0,d.aZ)({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:o}}=this.tmNode;return(0,d.h)("div",o,[null==e?void 0:e()])}}),j=(0,d.aZ)({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:o,childrenFieldRef:n}=(0,d.f3)(x);(0,d.JJ)(m,{showIconRef:(0,d.Fl)(()=>{let n=o.value;return e.tmNodes.some(e=>{var o;if(e.isGroup)return null===(o=e.children)||void 0===o?void 0:o.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:(0,d.Fl)(()=>{let{value:o}=n;return e.tmNodes.some(e=>{var n;if(e.isGroup)return null===(n=e.children)||void 0===n?void 0:n.some(({rawNode:e})=>_(e,o));let{rawNode:t}=e;return _(t,o)})})});let t=(0,d.iH)(null);return(0,d.JJ)(k.ZJ,null),(0,d.JJ)(S.H,null),(0,d.JJ)(N.c,t),{bodyRef:t}},render(){let{parentKey:e,clsPrefix:o,scrollable:n}=this,t=this.tmNodes.map(t=>{let{rawNode:r}=t;return!1===r.show?null:"render"===r.type?(0,d.h)(E,{tmNode:t,key:t.key}):M(r)?(0,d.h)(P,{clsPrefix:o,key:t.key}):"group"===r.type?(0,d.h)(H,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):(0,d.h)(T,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:r.props,scrollable:n})});return(0,d.h)("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?(0,d.h)(y.u,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?(0,C.qA)({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}});var L=n(8608);let D=(0,c.cB)("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[(0,L.h)(),(0,c.cB)("dropdown-option",`
 position: relative;
 `,[(0,c.c)("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[(0,c.c)("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),(0,c.cB)("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[(0,c.c)("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),(0,c.u4)("disabled",[(0,c.cM)("pending",`
 color: var(--n-option-text-color-hover);
 `,[(0,c.cE)("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),(0,c.c)("&::before","background-color: var(--n-option-color-hover);")]),(0,c.cM)("active",`
 color: var(--n-option-text-color-active);
 `,[(0,c.cE)("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),(0,c.c)("&::before","background-color: var(--n-option-color-active);")]),(0,c.cM)("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[(0,c.cE)("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),(0,c.cM)("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),(0,c.cM)("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[(0,c.cE)("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[(0,c.cM)("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),(0,c.cE)("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[(0,c.cM)("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),(0,c.cB)("icon",`
 font-size: var(--n-option-icon-size);
 `)]),(0,c.cE)("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),(0,c.cE)("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[(0,c.cM)("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),(0,c.cB)("icon",`
 font-size: var(--n-option-icon-size);
 `)]),(0,c.cB)("dropdown-menu","pointer-events: all;")]),(0,c.cB)("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),(0,c.cB)("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),(0,c.cB)("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),(0,c.c)(">",[(0,c.cB)("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),(0,c.u4)("scrollable",`
 padding: var(--n-padding);
 `),(0,c.cM)("scrollable",[(0,c.cE)("content",`
 padding: var(--n-padding);
 `)])]),J=Object.keys(f.Kd),K=Object.assign(Object.assign(Object.assign({},f.Kd),{animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]}),a.Z.props),V=(0,d.aZ)({name:"Dropdown",inheritAttrs:!1,props:K,setup(e){let o=(0,d.iH)(!1),n=(0,r.Z)((0,d.Vh)(e,"show"),o),h=(0,d.Fl)(()=>{let{keyField:o,childrenField:n}=e;return(0,t.J)(e.options,{getKey:e=>e[o],getDisabled:e=>!0===e.disabled,getIgnored:e=>"divider"===e.type||"render"===e.type,getChildren:e=>e[n]})}),v=(0,d.Fl)(()=>h.value.treeNodes),f=(0,d.iH)(null),b=(0,d.iH)(null),m=(0,d.iH)(null),g=(0,d.Fl)(()=>{var e,o,n;return null!==(n=null!==(o=null!==(e=f.value)&&void 0!==e?e:b.value)&&void 0!==o?o:m.value)&&void 0!==n?n:null}),y=(0,d.Fl)(()=>h.value.getPath(g.value).keyPath),S=(0,d.Fl)(()=>h.value.getPath(e.value).keyPath),k=(0,i.Z)(()=>e.keyboard&&n.value);(0,l.Z)({keydown:{ArrowUp:{prevent:!0,handler:function(){z("up")}},ArrowRight:{prevent:!0,handler:function(){z("right")}},ArrowDown:{prevent:!0,handler:function(){z("down")}},ArrowLeft:{prevent:!0,handler:function(){z("left")}},Enter:{prevent:!0,handler:function(){let e=Z();(null==e?void 0:e.isLeaf)&&n.value&&(F(e.key,e.rawNode),$(!1))}},Escape:function(){$(!1)}}},k);let{mergedClsPrefixRef:N,inlineThemeDisabled:C}=(0,s.ZP)(e),P=(0,a.Z)("Dropdown","-dropdown",D,w.Z,e,N);function F(o,n){let{onSelect:t}=e;t&&(0,p.R)(t,o,n)}function $(n){let{"onUpdate:show":t,onUpdateShow:r}=e;t&&(0,p.R)(t,n),r&&(0,p.R)(r,n),o.value=n}function A(){f.value=null,b.value=null,m.value=null}function Z(){var e;let{value:o}=h,{value:n}=g;return o&&null!==n&&null!==(e=o.getNode(n))&&void 0!==e?e:null}function z(e){let{value:o}=g,{value:{getFirstAvailableNode:n}}=h,t=null;if(null===o){let e=n();null!==e&&(t=e.key)}else{let o=Z();if(o){let n;switch(e){case"down":n=o.getNext();break;case"up":n=o.getPrev();break;case"right":n=o.getChild();break;case"left":n=o.getParent()}n&&(t=n.key)}}null!==t&&(f.value=null,b.value=t)}(0,d.JJ)(x,{labelFieldRef:(0,d.Vh)(e,"labelField"),childrenFieldRef:(0,d.Vh)(e,"childrenField"),renderLabelRef:(0,d.Vh)(e,"renderLabel"),renderIconRef:(0,d.Vh)(e,"renderIcon"),hoverKeyRef:f,keyboardKeyRef:b,lastToggledSubmenuKeyRef:m,pendingKeyPathRef:y,activeKeyPathRef:S,animatedRef:(0,d.Vh)(e,"animated"),mergedShowRef:n,nodePropsRef:(0,d.Vh)(e,"nodeProps"),renderOptionRef:(0,d.Vh)(e,"renderOption"),menuPropsRef:(0,d.Vh)(e,"menuProps"),doSelect:F,doUpdateShow:$}),(0,d.YP)(n,o=>{e.animated||o||A()});let B=(0,d.Fl)(()=>{let{size:o,inverted:n}=e,{common:{cubicBezierEaseInOut:t},self:r}=P.value,{padding:i,dividerColor:l,borderRadius:d,optionOpacityDisabled:a,[(0,c.Tl)("optionIconSuffixWidth",o)]:s,[(0,c.Tl)("optionSuffixWidth",o)]:u,[(0,c.Tl)("optionIconPrefixWidth",o)]:p,[(0,c.Tl)("optionPrefixWidth",o)]:h,[(0,c.Tl)("fontSize",o)]:v,[(0,c.Tl)("optionHeight",o)]:f,[(0,c.Tl)("optionIconSize",o)]:w}=r,b={"--n-bezier":t,"--n-font-size":v,"--n-padding":i,"--n-border-radius":d,"--n-option-height":f,"--n-option-prefix-width":h,"--n-option-icon-prefix-width":p,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":s,"--n-option-icon-size":w,"--n-divider-color":l,"--n-option-opacity-disabled":a};return n?(b["--n-color"]=r.colorInverted,b["--n-option-color-hover"]=r.optionColorHoverInverted,b["--n-option-color-active"]=r.optionColorActiveInverted,b["--n-option-text-color"]=r.optionTextColorInverted,b["--n-option-text-color-hover"]=r.optionTextColorHoverInverted,b["--n-option-text-color-active"]=r.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=r.optionTextColorChildActiveInverted,b["--n-prefix-color"]=r.prefixColorInverted,b["--n-suffix-color"]=r.suffixColorInverted,b["--n-group-header-text-color"]=r.groupHeaderTextColorInverted):(b["--n-color"]=r.color,b["--n-option-color-hover"]=r.optionColorHover,b["--n-option-color-active"]=r.optionColorActive,b["--n-option-text-color"]=r.optionTextColor,b["--n-option-text-color-hover"]=r.optionTextColorHover,b["--n-option-text-color-active"]=r.optionTextColorActive,b["--n-option-text-color-child-active"]=r.optionTextColorChildActive,b["--n-prefix-color"]=r.prefixColor,b["--n-suffix-color"]=r.suffixColor,b["--n-group-header-text-color"]=r.groupHeaderTextColor),b}),O=C?(0,u.F)("dropdown",(0,d.Fl)(()=>`${e.size[0]}${e.inverted?"i":""}`),B,e):void 0;return{mergedClsPrefix:N,mergedTheme:P,tmNodes:v,mergedShow:n,handleAfterLeave:()=>{e.animated&&A()},doUpdateShow:$,cssVars:C?void 0:B,themeClass:null==O?void 0:O.themeClass,onRender:null==O?void 0:O.onRender}},render(){let{mergedTheme:e}=this,o={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:(e,o,n,t,r)=>{var i;let{mergedClsPrefix:l,menuProps:a}=this;null===(i=this.onRender)||void 0===i||i.call(this);let s=(null==a?void 0:a(void 0,this.tmNodes.map(e=>e.rawNode)))||{},u={ref:(0,h.S)(o),class:[e,`${l}-dropdown`,this.themeClass],clsPrefix:l,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:t,onMouseleave:r};return(0,d.h)(j,(0,d.dG)(this.$attrs,u,s))},onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return(0,d.h)(f.ZP,Object.assign({},(0,v.C)(this.$props,J),o),{trigger:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)}})}})}}]);