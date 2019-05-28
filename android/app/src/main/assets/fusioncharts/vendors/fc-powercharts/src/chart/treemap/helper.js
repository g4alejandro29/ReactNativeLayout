import{pluckNumber,stubFN,convertColor,getLightColor,BLANKSTRING,parseTooltext}from'../../../../fc-core/src/lib';import{priorityList}from'../../../../fc-core/src/schedular';let DRILLUP='drillup',id=1,afAPICreator=function(e,t){function i(e,t){let i=e.range;return!i||!!(i.min<=t&&t<=i.max)}function a(e){h=e}function o(){return h}function r(i,o,r,l){function n(e){var t,i,a={};for(t in m)i=m[t],a[i]=e[t];return a}var h,s,g,c=o.getFromEnv('chart'),d=o.getFromEnv('toolbarBtns'),p=o.conf,f=i.drawTree,v=l.disposeChild,b=e.context,u=arguments,m={colorValue:'svalue',label:'name',value:'value',rect:'metrics'};return s=b.getInstance('ClickedState'),c._intSR={},c._intSR.backToParent=h=function(t){var a=this,n=a,s=n&&a.getParent(),d=e.context,b=d.getInstance('ClickedState'),m=b.get('VisibileRoot')||{};c.config.trackerConfig.length=0,c.triggerKDTreePartioning(),t?c.fireChartInstanceEvent('beforedrillup',{node:a,withoutHead:!p.showParent},void 0,function(){s&&(m.state=DRILLUP,m.node=[{virginNode:e.getVisibleRoot()},s],v(n),f.apply(s,u)),c.fireChartInstanceEvent(DRILLUP,{node:a,withoutHead:!p.showParent,drillUp:h,drillUpToTop:g}),a=a&&a.getParent()},function(){c.fireChartInstanceEvent('drillupcancelled',{node:a,withoutHead:!p.showParent})}):(s&&(m.state=DRILLUP,m.node=[{virginNode:e.getVisibleRoot()},s],v(n),f.apply(s,[i,o,r,l])),a=a&&a.getParent())},c._intSR.resetTree=g=function(t){var i,a=this,o=a&&a.getParent(),r=e.context,l=r.getInstance('ClickedState'),n=l.get('VisibileRoot')||{};for(c.config.trackerConfig.length=0,c.triggerKDTreePartioning();o;)i=o,o=o.getParent();t?c.fireChartInstanceEvent('beforedrillup',{node:a,withoutHead:!p.showParent},void 0,function(){i&&(n.state=DRILLUP,n.node=[{virginNode:e.getVisibleRoot()},i],v(i),f.apply(i,u),c.fireChartInstanceEvent(DRILLUP,{node:a,sender:c.fusionCharts,withoutHead:!p.showParent,drillUp:h,drillUpToTop:g}))},function(){c.fireChartInstanceEvent('drillupcancelled',{node:a,withoutHead:!p.showParent})}):i&&(n.state=DRILLUP,n.node=[{virginNode:e.getVisibleRoot()},i],v(i),f.apply(i,u))},{click:function(e,i){var o,r,f,b=e.virginNode,u=c.getFromEnv('animationManager');if(c.state='click',c.fireChartInstanceEvent('dataplotclick',n(e.virginNode)),r=b.getParent(),!!r){if(b===i)f=r,c.flushKDTree(),o=DRILLUP;else if(b.next)f=b,c.flushKDTree(),o='drilldown';else{if(f=r,i===f)return void(o=void 0);o='drilldown'}o&&c.fireChartInstanceEvent('before'+o,{node:f,withoutHead:!p.showParent},void 0,function(){c.config.trackerConfig.length=0,s.set('VisibileRoot',{node:e,state:o}),v.call(l,f),a(f),u.setAnimationState('drill'),c.setState('drill',!0),t.draw(),u.onAnimationComplete(()=>{c.setState('drill',!1)}),c.fireChartInstanceEvent(o,{node:f,withoutHead:!p.showParent,drillUp:h,drillUpToTop:g})},function(){c.fireChartInstanceEvent(o+'cancelled',{node:f,withoutHead:!p.showParent})}),c.addJob('attachEventToBtns',function(){c._lastAttached.backToParent&&d.back&&d.back.removeEventListener('fc-click',c._lastAttached.backToParent),c._lastAttached.resetTree&&d.home&&d.home.removeEventListener('fc-click',c._lastAttached.resetTree),c._lastAttached.backToParent=h.bind(f),c._lastAttached.resetTree=g.bind(f),d.back&&d.back.addEventListener('fc-click',c._lastAttached.backToParent),d.home&&d.home.addEventListener('fc-click',c._lastAttached.resetTree)},priorityList.kdTree),c.resetSingleTracker()}},mouseover:function(e){var t=n(e.virginNode);c.fireChartInstanceEvent('dataplotrollover',t,void 0,void 0,function(){c.fireChartInstanceEvent('dataplotrollovercancelled',t)})},mouseout:function(e){var t=n(e.virginNode);c.fireChartInstanceEvent('dataplotrollout',n(e.virginNode),void 0,void 0,function(){c.fireChartInstanceEvent('dataplotrolloutcancelled',t)})}}}var l,n,h,s,g;return l=function(e,t){var i,a,o={},r=t&&t.exception;class l{constructor(e){this.iterAPI=e}initWith(e){return this.iterAPI(e)}}return o.df=function(e){var t,i,a=e,o=[],l=!1;return o.push(a),t=function(e){var t,i,a;if(!l)return(i=o.shift(),r&&i===r&&(i=o.shift(),!i))?void(l=!0):(t=void 0===e?i.getChildren():i.getDepth()>=e?[]:i.getChildren(),a=t&&t.length||0,a&&[].unshift.apply(o,t),0===o.length&&(l=!0),i)},i=function(){l=!1,a=e,o.length=0,o.push(a)},{next:t,reset:i}},o.bf=function(e){var t,i,a,o=e,r=[],l=[],n=!1;return r.push(o),l.push(o),t=function(){var e,t,i;if(!n)return t=r.shift(),e=t.getChildren(),i=e&&e.length||0,i&&[].push.apply(r,e),0===r.length&&(n=!0),t},i=function(){var e,t,i;if(!n)return t=l.shift(),e=t.getChildren(),i=e&&e.length||0,i&&[].push.apply(l,e),0===r.length&&(n=!0),e},a=function(){n=!1,o=e,r.length=0,r.push(o)},{next:t,nextBatch:i,reset:a}},i=new l(o.df).initWith(e),a=new l(o.bf).initWith(e),{df:i,bf:a}},g=function(){function e(){this.con={}}var t,i={};return e.prototype.constructor=e,e.prototype.get=function(e){return this.con[e]},e.prototype.set=function(e,t){this.con[e]=t},e.prototype['delete']=function(e){return delete this.con[e]},{getInstance:function(a){var o;return i[a]?(o=i[a],t=o,t):(t=o=i[a]=new e,t)}}}(),s=function(){var e,t=[],i=!1,a={visibility:'visible',opacity:1};return{controlPreAnimVisibility:function(a,o){var r,n,h,s,g,c;if(a){for(n=a;n=n.getParent(),!!n;)r=n;for(h=l(r,{exception:a}),s=h.df;g=s.next(),!!g;)c=g.overAttr||(g.overAttr={}),c.visibility='hidden',t.push(g);return e=o||a.getParent(),i=!1,t}},displayAll:function(a){var o,r,n,h;if(a){for(o=l(a.getParent()||a),n=o.df;h=n.next(),!!h;)r=h.overAttr||(h.overAttr={}),r.visibility='visible';e=void 0,t.length=0,i=!1}},controlPostAnimVisibility:function(){var o,r,h,s,g;if(!i&&(i=!0,!!e)){for(h=l(e),s=h.df;g=s.next(n),!!g;)g.dirtyNode&&(r=g.dirtyNode,r&&r.plotItem.attr(a),o=r&&r.textItem,o&&o.label&&o.label.attr(a),o&&o.label&&o.highlightMask.attr(a));e=void 0,t.length=0}}}}(),e.AbstractTreeMaker=class{constructor(e,t,i){this.node=e,this.bucket=t?new Bucket:void 0,this.cleansingFn=i}get(){var e=this.order,t=this.bucket,i=this.cleansingFn;return function a(o,r){var l,n,h,s,g,c,d=['label','value','data','svalue'];if(o)for(c in l=new TreeNode(o.label,i(o.value),i(o.svalue)),h=o.data||[],0===h.length&&t&&t.addInBucket(l),l.setDepth(r),o)-1===d.indexOf(c)&&l.setMeta(c,o[c]);for(e&&(h=e(h)),n=0;n<h.length;n++)s=h[n],g=a(s,r+1),l.addChild(g);return l}(this.node,0)}getBucket(){return this.bucket}static getMaxDepth(){return n}},e.iterator=l,e.initConfigurationForlabel=function(e,t,i){var a=e.x,o=e.y,r=t/2,l=i.showParent?0:1,h=i.showChildLabels;return function(e,s,g){var c,d,p,f=!1,v={x:void 0,y:void 0,width:void 0,height:void 0},b={},u=0,m={},y={};if(p=e.meta,!!e)return e.isLeaf(n)||(f=!0),b.label=e.getLabel(),v.width=s.width-2*a,v.x=s.x+s.width/2,d=s.height-2*o,!f&&d<t&&(v.height=-1),!g&&f?(v.height=h?v.height?v.height:s.height-2*o:-1,v.y=s.y+s.height/2):l?(v.y=-1,o=0,t=0,c='hidden'):(v.height=v.height?v.height:t,v.y=s.y+o+r),u+=2*o,u+=t,b.rectShiftY=u,b.textRect=v,i.labelGlow?(y['stroke-width']=i.labelGlowRadius,y.opacity=i.labelGlowIntensity,y.stroke=i.labelGlowColor,y.visibility='hidden'===c?'hidden':'visible'):y.visibility='hidden',m={fontSize:i.labelFontSize||i.baseFontSize,fontFamily:i.labelFont||i.baseFont,fill:p&&p.fontcolor&&normalizeColorCode(p.fontcolor)||i.labelFontColor||i.baseFontColor,fontWeight:i.labelFontBold&&'bold',fontStyle:i.labelFontItalic&&'italic',visibility:c},{conf:b,attr:m,highlight:y}}},e.context=g,e.mapColorManager=function(e,t,a){var o=normalizeColorCode(a?e.defaultNavigationBarBGColor:e.defaultParentBGColor);return function(a,r,l){var h,s,g,c={},d=a.cssConf,p=a.meta,f=p.fillcolor?normalizeColorCode(p.fillcolor):void 0,v=a.getParent(),b=a.getColorValue();return e.isLegendEnabled=!0,a.presentColor=e.isLegendEnabled&&b?t&&t.getColorByValue(b)?i(l,b)?'#'+t.getColorByValue(b):normalizeColorCode(l.rangeOutBgColor):normalizeColorCode(t&&t.rangeOutsideColor):void 0,f&&(a.presentColor=f),g=e.isLegendEnabled&&b?t&&t.getColorByValue(b)&&'#'+t.getColorByValue(b)||normalizeColorCode(t&&t.rangeOutsideColor):void 0,a.isLeaf(n)?c.fill=f||g||o:(s=(v||a).cssConf,h=s&&s.fill,g=g||h,c.fill=f||g),c.stroke=r?e.navigationBarBorderColor:e.plotBorderColor,c.strokeWidth=r?e.navigationBarBorderThickness:e.plotBorderThickness,c['stroke-dasharray']='none',!r&&d&&'--'===d['stroke-dasharray']&&(c['stroke-dasharray']=d['stroke-dasharray'],c.strokeWidth=d.strokeWidth),c}},e.abstractEventRegisterer=r,e.setMaxDepth=function(e){return n=e},e.getVisibleRoot=o,e.setVisibleRoot=a,e.visibilityController=s,e},algorithmFactoryCreator=function(e,t){function a(e){let t,o=e.getChildren(),r=0;for(let l=0;l<(o&&o.length);l++)t=o[l],a(t),r+=t.getValue()||0;isNaN(e.value)&&(e.value=r)}function i(t,i,a){return s=t,d=i,p=e.setMaxDepth(a),h[s]}function o(e,t){var i,a,o=h[s];return a=o.applyShadeFiltering(g.getBucket(),e,t),function(e){i=Array.prototype.slice.call(arguments,0),i.unshift(e),a.apply(g.getBucket(),i)}}function r(t,i,a){var o;return g=new b(t,d,i),o=g.get(),!1!==a&&(c=o),e.setVisibleRoot(o),o}function l(){var i,a=h[s];t.realTimeUpdate=n.apply(this,arguments),i=Array.prototype.slice.call(arguments,0),i.unshift(a),a.drawTree.apply(e.getVisibleRoot(),i)}function n(){var e,t,i=h[s];return t=Array.prototype.slice.call(arguments,0),t.unshift(i),e=t.slice(-1)[0],function(){var a=Array.prototype.slice.call(arguments,0),o=a.shift(),r=a.shift(),l=treeOpt(c,function(e){i.drawTree.apply(e||c,t)},e,o);l[r].apply(this,a)}}var h,s,g,c,d,p,f,v=e.AbstractTreeMaker;h={sliceanddice:{areaBaseCalculator:function(e,t){var i=e,a=t;return function(e,t,o){var r,l,n,h,s,g,c={},d=0,p=0;if(e)return o&&(d=o.textMargin||d),p=d,r=e.getParent(),l=e.getSibling('left'),r?(n=r.getValue(),g=r.rect,h=g.height-2*a-p,s=g.width-2*i,c.effectiveRect={height:h,width:s,x:g.x+i,y:g.y+a+p},c.effectiveArea=h*s,c.ratio=e.getValue()/n,l?t.call(e,c,l,r):(c.lastIsParent=!0,t.call(e,c,r))):null}},applyShadeFiltering:function(e,t,i){return e.setRangeOutEffect(t,i),this.applyShadeFiltering.reset=function(){e.resetPointers()},function(t){e.moveLowerShadePointer(t.start),e.moveHigherShadePointer(t.end)}},alternateModeManager:function(){return function(e,t){var i,a,o,r,l,n=this,h=e.effectiveArea,s=e.ratio,g=h*s,c=e.effectiveRect,d=t.rect,p=e.lastIsParent;return p?(r=c.x,l=c.y,i=c.height,a=c.width,o=n.isDirectionVertical=!0):(i=c.height+c.y-(d.height+d.y),a=c.width+c.x-(d.width+d.x),o=n.isDirectionVertical=!t.isDirectionVertical),o?(a=g/i,r=void 0===r?d.x:r,l=void 0===l?d.y+d.height:l):(i=g/a,r=void 0===r?d.x+d.width:r,l=void 0===l?d.y:l),{height:i,width:a,x:r,y:l}}},horizontalVerticalManager:function(e){return function(t,i){var a,o,r,l,n,h=this,s=t.effectiveArea,g=t.ratio,c=s*g,d=t.effectiveRect,p=i.rect,f=t.lastIsParent;return f?(l=d.x,n=d.y,a=d.height,o=d.width,r=h.isDirectionVertical=!i.isDirectionVertical):(a=d.height+d.y-(p.height+p.y),o=d.width+d.x-(p.width+p.x),r=h.isDirectionVertical=!arguments[2].isDirectionVertical),r='vertical'===e?r:!r,r?(0===a&&(a=d.height,l=void 0===l?p.x+p.width:l,n=void 0===n?p.y:n),o=c/a,l=void 0===l?p.x:l,n=void 0===n?p.y+p.height:n):(0===o&&(o=d.width,l=void 0===l?p.x:l,n=void 0===n?p.y+p.height:n),a=c/o,l=void 0===l?p.x+p.width:l,n=void 0===n?p.y:n),{height:a,width:o,x:l,y:n}}},drawTree:function(t,i,o,r){var l,n,h,s,g,c,d,v,b,u=this,m=i.getFromEnv('chart'),y=m.config||(m.config={}),x=y.trackerConfig||(y.trackerConfig=[]),w=i.getFromEnv('number-formatter'),k=i.getFromEnv('toolbarBtns'),C=r.drawRect,P=r.drawText,_=r.drawHot,T=o.horizontalPadding,I=o.verticalPadding,A=i.getFromEnv('smartLabel'),V={x:5,y:5},S=e.iterator,E=S(u),R=E.df,F=t.areaBaseCalculator(T,I),B=i.conf,H=B.highlightParentsOnHover,N=e.context,L=e.visibilityController,M=i.conf.colorRange,D=e.mapColorManager(B,M),O=e.abstractEventRegisterer(t,i,o,r),z=O.click,W=O.mouseover,Y=O.mouseout,U=B.slicingMode,G='alternate'===U?'alternateModeManager':'horizontalVerticalManager',X=t[G](U),K=m._intSR;for(d=N.getInstance('ClickedState'),v=d.get('VisibileRoot')||{},b=v.node,v.node&&v.state&&(v.state.toLowerCase()===DRILLUP?b instanceof Array?L.controlPreAnimVisibility(b[0].virginNode,b[1]):L.controlPreAnimVisibility(b.virginNode):L.displayAll(v.node.virginNode)),l=B.parentLabelLineHeight,h=e.initConfigurationForlabel(V,l,B),n=R.next(f=e.setMaxDepth(u.getDepth()+p)),s=n;s.getParent();)s=s.getParent();y.valuesset||a(s),y.valuesset=!0,B.showNavigationBar?(k.home.hide(),k.back.hide()):s==n?(k.home.hide(),k.back.hide()):(k.home.show(),k.back.show()),A.useEllipsesOnOverflow(m.config.useEllipsesWhenOverflow),A.setStyle(B._setStyle={fontSize:(B.labelFontSize||B.baseFontSize)+'px',fontFamily:B.labelFont||B.baseFont,lineHeight:1.2*(B.labelFontSize||B.baseFontSize)+'px'}),c=K.backToParent,g=K.resetTree,m.addJob('attachEventToBtns',function(){m._lastAttached.backToParent&&k.back&&k.back.removeEventListener('fc-click',m._lastAttached.backToParent),m._lastAttached.resetTree&&k.home&&k.home.removeEventListener('fc-click',m._lastAttached.resetTree),m._lastAttached.backToParent=c.bind(n),m._lastAttached.resetTree=g.bind(n),k.back&&k.back.addEventListener('fc-click',m._lastAttached.backToParent),k.home&&k.home.addEventListener('fc-click',m._lastAttached.resetTree)},priorityList.kdTree),function e(t,a){var o,l,s,g,c,d,p,v,b,u,m,y,k,T,I,V,S={},E={},L={},M={},O='';t&&t.value&&(I=w.yAxis(t.getValue()),V=w.sYAxis(t.getColorValue()),t.setPath(),l=t.rect||{},s=t.textRect||{},b=t.rect={},u=t.textRect={},b.width=a.width,b.height=a.height,b.x=a.x,b.y=a.y,M=D(t,void 0,i.conf),T=t.plotItem,T&&r.graphicPool(!0,'plotItem',T,l),t.__props||(t.__props={}),t.__props.curr=Object.assign({},b),t.__props.node=Object.assign({},t),T=t.plotItem=C(b,Object.assign({},M,t.getColorValue()&&{fill:t.presentColor}||{}),l,t.overAttr,t),t.__props.prev=Object.assign({},b),t.cssConf=M,m=h(t,b),y=m.conf,S.textMargin=y.rectShiftY,u=t.textRect=y.textRect,k=A.getSmartText(y.label,u.width,u.height).text,t.plotItem=T,c=t.labelItem,c?(d=t.highlightItem,r.graphicPool(!0,'labelItem',c,l),r.graphicPool(!0,'highlightItem',d,l)):s=s||{},p=P(k,u,{textAttrs:m.attr,highlightAttrs:m.highlight},s,t.overAttr,t),t.labelItem=p.label,t.highlightItem=p.highlightMask,E.virginNode=t,E.plotItem=T,E.textItem=p,E.virginNode.dirtyNode=E,t.getColorValue()&&(O=B.tooltipSeparationCharacter+V),E.toolText=B.showTooltip?parseTooltext(B.plotToolText,[1,2,3,119,122],{label:t.getLabel(),formattedValue:I,formattedsValue:V},{value:t.getValue(),svalue:t.getColorValue()})||t.getLabel()+B.tooltipSeparationCharacter+I+O:BLANKSTRING,E.rect=b,L.hover=[function(e){var t,i,a,o,r,l,n=this;o=N.getInstance('hover'),a=n.virginNode,H&&!a.next?(t=a.getParent(),i=t||a):i=n.virginNode,o.set('element',i),r=i.cssConf,l=convertColor(getLightColor(r.fill,80),60),e.attr({fill:l}),W(this)}.bind(E),function(){var e,t,i,a;e=N.getInstance('hover'),t=e.get('element'),i=t.cssConf,a=convertColor(i.fill||'#fff',0),t.plotItem.tracker.attr({fill:a}),Y(this)}.bind(E)],L.tooltip=[E.toolText],L.click=[function(){z(this,n)}.bind(E)],g=t.hotItem,g&&r.graphicPool(!0,'hotItem',g,l),x.push({node:t,key:'hotItem',plotDetails:E,evtFns:L,callback:_}),o=R.next(f),v=F(o,X,S),e(o,v))}(n,o)}},squarified:{orderNodes:function(){return this.sort(function(e,t){return parseFloat(e.value,10)<parseFloat(t.value,10)?1:-1})},areaBaseCalculator:function(e,t){var i=e,a=t;return function(e,t,o){var r,l,n,h,s,g={},c=0,d=0;if(e&&0!==e.length)return o&&(c=o.textMargin||c),d=c,h=e[0],r=h.getParent(),r?(s=r.rect,l=s.height-2*a-d,n=s.width-2*i,g.effectiveRect={height:l,width:n,x:s.x+i,y:s.y+a+d},g.effectiveArea=l*n,t.call(h,g,r)):null}},layoutManager:function(){return{RowLayout:class{constructor(e,t){this.totalValue=t,this._rHeight=e.height,this._rWidth=e.width,this._rx=e.x,this._ry=e.y,this._rTotalArea=e.height*e.width,this.nodes=[],this._prevAR=void 0,this._rHeight<this._rWidth&&(this._hSegmented=!0)}addNode(e){var t,a,o,r,l,n,h,s,g,c,d,p,f,v,b,u,m,y,x,w,k,C=this._rTotalArea,P=this._hSegmented,_=this._rx,T=this._ry,I=0;for(this.nodes.push(e),l=0,h=this.nodes.length;l<h;l++)I+=parseFloat(this.nodes[l].getValue(),10);for(a=I/this.totalValue,t=C*a,P?(r=this._rHeight,o=t/r,f=_+o,v=T,u=this._rHeight,m=this._rWidth-o):(o=this._rWidth,r=t/o,f=_,v=T+r,u=this._rHeight-r,m=this._rWidth),(l=0,n=this.nodes.length);l<n;l++)e=this.nodes[l],s=e.getValue(),g=s/I*t,e.hRect=e.rect||{},e._hRect=e._rect||{},p=e.rect={},P?(p.width=d=o,p.height=c=g/d,p.x=_,p.y=T,T+=c):(p.height=c=r,p.width=d=g/c,p.x=_,p.y=T,_+=d),y=Math.max(p.height,p.width),x=Math.min(p.height,p.width),w=y/x,isFinite(w)||(w=0),e.aspectRatio=w;if(!(1<this.nodes.length))e&&(b=e._rect={},k=e.rect,b.width=k.width,b.height=k.height,b.x=k.x,b.y=k.y,e.firstPassed=!0);else if(this.prevAR<e.aspectRatio){for(this.nodes.pop().rect={},l=0,h=this.nodes.length;l<h;l++)this.nodes[l].rect=1===h&&this.nodes[l].firstPassed?this.nodes[l]._hRect:this.nodes[l].hRect,b=this.nodes[l]._rect={},k=this.nodes[l].rect,b.width=k.width,b.height=k.height,b.x=k.x,b.y=k.y;return!1}return this.prevAR=e.aspectRatio,this.height=r,this.width=o,this.getNextLogicalDivision=function(){return{height:u,width:m,x:f,y:v}},e}}}}(),applyShadeFiltering:function(e,t,i){return e.setRangeOutEffect(t,i),this.applyShadeFiltering.reset=function(){e.resetPointers()},function(t){e.moveLowerShadePointer(t.start),e.moveHigherShadePointer(t.end)}},drawTree:function(t,i,o,r){var l,n,h,s,g,c,d,v,b,u=this,m=i.getFromEnv('chart'),y=i.getFromEnv('chartConfig'),x=y.trackerConfig||(y.trackerConfig=[]),w=i.getFromEnv('number-formatter'),k=i.getFromEnv('toolbarBtns'),C={x:5,y:5},P=o.horizontalPadding,_=o.verticalPadding,T=t.areaBaseCalculator(P,_),I=t.layoutManager.RowLayout,A=i.getFromEnv('smartLabel'),V=r.drawRect,S=r.drawText,E=r.drawHot,R=e.iterator,F=R(u),B=F.bf,H=i.conf,N=H.highlightParentsOnHover,L=e.context,M=i.conf.colorRange,D=e.mapColorManager(H,M),O=e.abstractEventRegisterer(t,i,o,r),z=O.click,W=O.mouseover,Y=O.mouseout,U=m._intSR,G=e.visibilityController;for(d=L.getInstance('ClickedState'),v=d.get('VisibileRoot')||{},b=v.node,v.node&&v.state&&(v.state.toLowerCase()===DRILLUP?b instanceof Array?G.controlPreAnimVisibility(b[0].virginNode,b[1]):G.controlPreAnimVisibility(b.virginNode):G.displayAll(v.node.virginNode)),l=H.parentLabelLineHeight,h=e.initConfigurationForlabel(C,l,H),n=B.next(f=e.setMaxDepth(u.getDepth()+p)),s=n;s.getParent();)s=s.getParent();y.valuesset||a(s),y.valuesset=!0,H.showNavigationBar?(k.home.hide(),k.back.hide()):s===n?(k.home.hide(),k.back.hide()):(k.home.show(),k.back.show()),A.useEllipsesOnOverflow(m.config.useEllipsesWhenOverflow),A.setStyle(H._setStyle={fontSize:(H.labelFontSize||H.baseFontSize)+'px',fontFamily:H.labelFont||H.baseFont,lineHeight:1.2*(H.labelFontSize||H.baseFontSize)+'px'}),g=U.backToParent,c=U.resetTree,m.addJob('attachEventToBtns',function(){m._lastAttached.backToParent&&k.back&&k.back.removeEventListener('fc-click',m._lastAttached.backToParent),m._lastAttached.resetTree&&k.home&&k.home.removeEventListener('fc-click',m._lastAttached.resetTree),m._lastAttached.backToParent=g.bind(n),m._lastAttached.resetTree=c.bind(n),k.back&&k.back.addEventListener('fc-click',m._lastAttached.backToParent),k.home&&k.home.addEventListener('fc-click',m._lastAttached.resetTree)},priorityList.kdTree),function e(t,a){var o,l,s,g,c,d,p,v,b,u,m,y,k,C,P,_,R,F,B={},M=0,O={},U={},G={},X={},K='';if(t&&t.value&&(R=w.yAxis(t.getValue()),F=w.sYAxis(t.getColorValue()),t.setPath(),o=t.__initRect,o&&(B.x=o.x,B.y=o.y,B.width=o.width,B.height=o.height),c=t.textRect||{},o=t.rect=t.__initRect={},d=t.textRect={},o.width=a.width,o.height=a.height,o.x=a.x,o.y=a.y,X=D(t,void 0,i.conf),k=t.plotItem,k&&r.graphicPool(!0,'plotItem',k,B),t.__props||(t.__props={}),t.__props.curr=Object.assign({},o),t.__props.node=Object.assign({},t),k=t.plotItem=V(o,Object.assign({},X,t.getColorValue()&&{fill:t.presentColor}||{}),B,t.overAttr,t),t.__props.prev=Object.assign({},o),t.cssConf=X,_=h(t,o),C=_.conf,O.textMargin=C.rectShiftY,d=t.textRect=C.textRect,P=A.getSmartText(C.label,d.width,d.height).text,g=t.labelItem,g?(l=t.highlightItem,r.graphicPool(!0,'labelItem',g,B),r.graphicPool(!0,'highlightItem',l,B)):c=c||{},v=S(P,d,{textAttrs:_.attr,highlightAttrs:_.highlight},c,t.overAttr,t),t.labelItem=v.label,t.highlightItem=v.highlightMask,t.plotItem=k,U.virginNode=t,U.plotItem=k,U.textItem=v,U.virginNode.dirtyNode=U,t.getColorValue()&&(K=H.tooltipSeparationCharacter+F),U.toolText=H.showTooltip?parseTooltext(H.plotToolText,[1,2,3,119,122],{label:t.getLabel(),formattedValue:R,formattedsValue:F},{value:t.getValue(),svalue:t.getColorValue()})||t.getLabel()+H.tooltipSeparationCharacter+R+K:BLANKSTRING,U.rect=o,G.hover=[function(e){var t,i,a,o,r,l,n=this;o=L.getInstance('hover'),a=n.virginNode,N&&!a.next?(t=a.getParent(),i=t||a):i=n.virginNode,o.set('element',i),r=i.cssConf,l=convertColor(r.fill&&getLightColor(r.fill,80),60),e.attr({fill:l}),W(this)}.bind(U),function(e){var t,i,a,o;t=L.getInstance('hover'),i=t.get('element'),a=i.cssConf,o=convertColor(a.fill||'#fff',0),e.attr({fill:o}),Y(this)}.bind(U)],G.tooltip=[U.toolText],G.click=[function(){z(this,n)}.bind(U)],s=t.hotItem,s&&r.graphicPool(!0,'hotItem',s,B),x.push({node:t,key:'hotItem',plotDetails:U,evtFns:G,callback:E}),p=void 0===f?t.getChildren():t.getDepth()>=f?void 0:t.getChildren(),!!p))for(m=T(p,function(e,t){var i,a,o,r,l,n=0,h=[];for(i=new I({width:e.effectiveRect.width,height:e.effectiveRect.height,x:e.effectiveRect.x,y:e.effectiveRect.y},t.getValue()),a=p.length;n++!==a;)o=p[n-1],r=i.addNode(o),!1===r?(l=i.getNextLogicalDivision(),i=new I(l,t.getValue()-M),n--):(M+=parseFloat(o.getValue(),10),h.push(o));return h},O),b=0,u=m.length;b<u;b++)y=m[b],e(y,y.rect)}(n,o)}}};class b extends v{static getName(){return'TreeMaker'}order(e){var t=h[s],i=t.orderNodes;return i?i.apply(e,[t]):e}}return t.init=i,t.plotOnCanvas=function(e,t){return c=r(e,t),l},t.applyShadeFiltering=o,t.setTreeBase=function(e){return e&&(c=e)},t.realTimeUpdate=n,t.makeTree=r,t},treeOpt=function(e,t,i,a){function o(t){var i,a=0,o=e;if(!t.length)return e;for(;o;){if(i=r.call(o,t[a]),a==t.length-1&&i)return l=i.getValue(),i;o=i,a+=1}}function r(e){var t,i,a,o=this,r=o.getChildren()||[],l=r.length,n=function(e){return e.toLowerCase().trim()};for(t=0;t<l;t+=1)if(a=r[t],n(a.label)===n(e)){i=a;break}return i}var l;return{deleteData:function(e,a){var r,n=o(e),h=r.iterator(n),s=h.df,g=n&&n.getParent(),c=n&&n.getSiblingCount('left'),d=g&&g.getChildren(),p=r.getVisibleRoot();if(n&&g){for(d.splice(c,1),n===p&&(p=n.getParent()||p);n;)i.disposeItems(n),n=s.next();for(;g;)g.setValue(-l,!0),g=g.getParent();a&&t(p)}},addData:function(e,i,r,l){for(var n,h,s,g,c,d,p=0,f=!0,v=n.getVisibleRoot();e.length;)if(s=e.pop(),g=h.makeTree(s,a,!1),p=g.getValue(),c=o(i||[]),!!c)for(c.getChildren()||(d=c.getValue(),f=!1),c.addChildren(g,l);c;)c.setValue(p,f),d&&(p-=d,d=void 0,f=!0),c=c.getParent();r&&t(v)}}},containerManagerCreator=function(e,t){function i(){var e,t=['navigationBar','treeMap','stackedNavigation'],i=Array.prototype.slice.call(arguments,0);for(s=i[0],c=i[1],d=s.conf,p=i[2],g=i[4],f.get().length>=t.length&&f.set();t.length;)e=t.shift(),f.set({type:e,drawFn:u(e),drawingArea:w(e)})}function a(){return e.getVisibleRoot()}function o(t){var i=d.plotBorderThickness;!1,g.apply(e.getVisibleRoot(),[s,{width:t.effectiveWidth,height:t.effectiveHeight,x:t.startX,y:t.startY,horizontalPadding:d.horizontalPadding,verticalPadding:d.verticalPadding},p]),d.plotBorderThickness=i}function r(e,t,i){var a=e.x,o=e.y,r=e.width,l=e.height,n=d.seperatorAngle/2,h=pluckNumber(n?l/2*(1-Math.tan(n)):i,15),s=['M',e._x,o],g=function(e){return{both:['h',e,'v',l/2,'v',l/2,'h',-e,'v',-l/2,'v',-l/2],right:['h',e,'v',l/2,'v',l/2,'h',-e,'l',h,-l/2,'l',-h,-l/2],no:['h',e,'l',h,l/2,'l',-h,l/2,'h',-e,'l',h,-l/2,'l',-h,-l/2],left:['h',e,'l',h,l/2,'l',-h,l/2,'h',-e,'v',-l/2,'v',-l/2]}};return{path:['M',a,o].concat(g(r)[t]),_path:s.concat(g(e._width).both),offset:h}}function l(){var e=Array.prototype.splice.call(arguments,0);e.push(!0),u('navigationBar').apply(this,e)}function n(){var t=e.getVisibleRoot();t&&p.disposeChild(t)}function h(a){var o,r,l,n=e.getVisibleRoot();for(p.disposeSelectedChildren(n,a?a[1]:n),a&&(n=a[1]),n.getParent()?d.showNavigationBar&&t.heightProportion.set(!0):t.heightProportion.set(!1),r=f.get(),o=0;o<r.length;o+=1)l=r[o],l.setDrawingArea(w(l.conf.name)),a&&e.setVisibleRoot(a[o]),l.draw();p.hideNodes()}var s,g,c,d,p,f,v=Math.max,b=function(o,l){var n,h,g,f,b,u,y,w,k,C,P,_,T=d.colorRange,I=e.mapColorManager(d,T,!0),A=function(e){var t=a();n=e?t.getChildren():d.navigationBarNodes=t.getPath()||[].concat(t),n.pop(),h=n.length},V=function(){var e;return{get:function(t,i,a){var o={y:t.startY,height:t.effectiveHeight},r=n[i],l=r.getParent();return e?(o._x=t.startX+t.effectiveWidth,o._width=0):(o._x=t.startX,o._width=t.effectiveWidth),o.x=e||(e=t.startX),e+=a?o.width=t.effectiveWidth*(r.getValue()/l.getValue()):o.width=t.effectiveWidth/h,o},resetAllocation:function(){e=void 0}}}(),S=function(e,t){var i;return i=1===t?'both':0===e?'left':e<t-1?'no':'right',i},E=d.parentLabelLineHeight,R=e.initConfigurationForlabel({x:5,y:5},E,d),F=p.drawPolyPath,B=p.drawText,H=p.drawHot,N={navigationHistory:{path:'polyPathItem',label:'pathlabelItem',highlightItem:'pathhighlightItem',hotItem:'pathhotItem'}},L=s.getFromEnv('chart'),M=L.config.trackerConfig,D=s.getFromEnv('smartLabel'),O=function(i){return function(){var a=e.context,o=L.getFromEnv('animationManager'),r=a.getInstance('ClickedState'),l=r.get('VisibileRoot')||{};M.length=0,l.state=DRILLUP,l.node=[{virginNode:e.getVisibleRoot()},i],p.disposeChild(i),o.setAnimationState('drill'),L.setState('drill',!0),t.draw([i,i,i]),o.onAnimationComplete(()=>{L.setState('drill',!1)}),L.resetSingleTracker()}},z=function(){return function(){}},W=function(){return function(){}},Y=function(e){return d.showTooltip?e.getLabel():BLANKSTRING},U=d._setStyle,G=m.get().navigationBar,X=2*x('navigationBar'),K=G*c.effectiveHeight,J=Math.min(K-(X+6),U.fontSize.replace(/\D+/g,'')),q=J+'px';for(N.stacked={path:'stacked'+N.navigationHistory.path,label:'stacked'+N.navigationHistory.label,highlightItem:'stacked'+N.navigationHistory.highlightItem,hotItem:'stacked'+N.navigationHistory.hotItem},V.resetAllocation(),A(l),D.setStyle({fontSize:q,lineHeight:q}),g=0;g<h;g+=1)u=n[g],y=V.get(o,g,l),f=(b=r(y,l?'both':S(g,h),void 0,u)).offset,u[N[l?'stacked':'navigationHistory'].path]=F(b,I(u,!0,d),u),w=R(u,y,!0),C=w.conf,_=C.textRect,_.width-=2*f,_.y=y.y+y.height/2,k=D.getSmartText(C.label,_.width,v(J,_.height)).text,P=B(k,_,{textAttrs:w.attr,highlightAttrs:w.highlight},{y:y.height/10,"font-size":d._setStyle.fontSize,"font-family":d._setStyle.fontFamily},(l?'stacked':'')+'path',u),u[N[l?'stacked':'navigationHistory'].label]=P.label,u[N[l?'stacked':'navigationHistory'].highlightItem]=P.highlightMask,M.push({node:u,key:N[l?'stacked':'navigationHistory'].hotItem,plotDetails:{rect:y},evtFns:{click:[O(u,l)],hover:[z(u),W()],tooltip:[Y(u)]},callback:H})},u=function(e){return{treeMap:o,navigationBar:b,stackedNavigation:l}[e]},m=function(){var e={treeMap:1,navigationBar:0,stackedNavigation:0};return{set:function(t){var i,a=pluckNumber(d.navigationBarHeightRatio,d.navigationBarHeight/c.effectiveHeight,.15),o=d.labelFontSize?v(d.labelFontSize,d.baseFontSize):d.baseFontSize,r=2*x('navigationBar');i=(6+o+r)/c.effectiveHeight,a=v(i,a),.1>a?a=.1:.15<a&&(a=.15),d.navigationBarHeightRatio=a,e=t?{treeMap:1-a,navigationBar:a,stackedNavigation:0}:{treeMap:1,navigationBar:0,stackedNavigation:0}},get:function(){return e}}}(),y=0,x=function(e){var t=d.verticalPadding,i=d.plotBorderThickness,a=d.navigationBarBorderThickness;return t+('navigationBar'===e?a:i)},w=function(e){var t=Math.round,i=c.effectiveWidth,a=c.effectiveHeight,o=x(e),r=m.get(),l=r[e];return 1<=y&&(y=0),y+=l,{effectiveHeight:t(100*(l*a))/100-o,effectiveWidth:i,startX:c.startX,startY:c.startY+o+t(100*((y-l)*a))/100}};class k{init(e,t){var i=this,a=i.conf||(i.conf={});a.name=e.name,i.setDrawingArea(e.drawingAreaMeasurement),i.draw=i.draw(t)}setDrawingArea(e){var t=this.conf;t.drawingAreaMeasurement=e}draw(e){return function(){var t=this.conf,i=t.drawingAreaMeasurement;0<i.effectiveHeight&&e(t.drawingAreaMeasurement)}}eventCallback(){}}return f=function(){var e=[];return{get:function(){return e},set:function(t){var i;return t?(i=new k,i.init({name:t.type,drawingAreaMeasurement:t.drawingArea},t.drawFn),e.push(i)):e.length=0,e}}}(),t.init=i,t.draw=h,t.heightProportion=m,t.remove=n,t},normalizeColorCode=function(e){return e?e.replace(/^#*/,'#'):'#'+MOTHER_OF_ALL_COLOR},MOTHER_OF_ALL_COLOR='E5E5E5',ref=function(){var e={},t={};return{afAPI:afAPICreator(e,t),algorithmFactory:algorithmFactoryCreator(e,{},t),containerManager:containerManagerCreator(e,t),treeOpt:treeOpt}};class Bucket{constructor(){this._b=[],this._css=void 0,this.rangeOurEffectApplyFn=stubFN,this.statePointerLow={value:void 0,index:void 0},this.statePointerHigh={value:void 0,index:void 0}}resetPointers(){this.statePointerLow={value:void 0,index:void 0},this.statePointerHigh={value:void 0,index:void 0}}setRangeOutEffect(e,t){this._css=e,this.rangeOurEffectApplyFn=t}addInBucket(e){var t,i=this._b,a=e.getColorValue(),o=0,r=i.length-1;a&&(t=function(){for(var e,l,n;o<=r;)if(t=e=0|(o+r)/2,l=i[e],n=l.getColorValue(),n<a)o=e+1;else if(n>a)r=e-1;else return e;return~r}(),i.splice(Math.abs(t),0,e))}moveLowerShadePointer(e){var t,i,a,o=this._b,r=this.statePointerLow,l=r.index,n=r.value,h=!1;if(t=l=void 0===l?0:l,n=void 0===n?Number.NEGATIVE_INFINITY:n,e!==n){if(n<=e){for(;i=o[t++],a=i?i.getColorValue():0,!(e<a)&&i;)h=!0,i.rangeOutEffect=this._css,this.rangeOurEffectApplyFn.call(i,this._css);t=h?t-2:t-1}else{for(;i=o[t--],a=i?i.getColorValue():0,!(e>=a)&&i;)i.cssConf=i.cssConf||{},h=!0,delete i.rangeOutEffect,i.cssConf.opacity=1,this.rangeOurEffectApplyFn.call(i,i.cssConf);t=h?t+2:t+1}r.index=t,r.value=e}}moveHigherShadePointer(e){var t,i,a,o=this._b,r=o.length,l=this.statePointerHigh,n=l.index,h=l.value,s=!1;if(t=n=void 0===n?r-1:n,h=void 0===h?Number.POSITIVE_INFINITY:h,e!==h){if(h>e){for(;i=o[t--],a=i?i.getColorValue():0,!(e>=a)&&i;)s=!0,i.rangeOutEffect=this._css,this.rangeOurEffectApplyFn.call(i,this._css);t=s?t+2:t+1}else{for(;i=o[t++],a=i?i.getColorValue():0,!(e<a)&&i;)i.cssConf=i.cssConf||{},s=!0,delete i.rangeOutEffect,i.cssConf.opacity=1,this.rangeOurEffectApplyFn.call(i,i.cssConf);t=s?t-2:t-1}l.index=t,l.value=e}}}class TreeNode{constructor(e,t,i){this.label=e,this.id=id++,this.value=parseFloat(t,10),this.colorValue=parseFloat(i,10),this.next=void 0,this.prev=void 0,this.meta={}}getCSSconf(){return this.cssConf}getPath(){return this.path}setPath(){var e=this,t=e.getParent();e.path=(t?t.getPath():[]).concat(e)}addChild(e){return e instanceof TreeNode&&(this.next=this.next||[],[].push.call(this.next,e),e.setParent(this)),this.next}getChildren(){return this.next}addChildren(e,t){var i=this,a=i.getChildren()||(i.next=[]),o=a.length;t||(t=o-1),t=t>o-1?o-1:0>t?0:t,a.splice(t,0,e),e.setParent(this)}getDepth(){return this.meta.depth}isLeaf(e){var t=this;return(!e||t.getDepth()<e)&&t.next}setParent(e){return e instanceof TreeNode&&(this.prev=e),this}getSiblingCount(e){var t,i=0,a=this,o=a;if(this instanceof TreeNode){if(t=a.getParent(),e){for(;o;)o=o.getSibling(e),o&&(i+=1);return i}return t?t.getChildren().length:void 0}}getParent(){return this.prev}getLabel(){return this.label}getValue(){return this.value}setValue(e,t){var i=this;t?i.value+=e:i.value=e}getColorValue(){return this.colorValue}getSibling(e){var t,i,a,o,r=e.toLowerCase(),l=this.getParent(),n=this.getLabel();if(l)for(t=l.getChildren(),i=0;i<t.length;i++)if(o=t[i],a=o.getLabel(),a===n)switch(r){case'left':return t[i-1];case'right':return t[i+1];}}setMeta(e,t){this.meta[e]=t}setDepth(e){this.meta.depth=e}getMeta(e){return e?this.meta[e]:this.meta}}export default ref;