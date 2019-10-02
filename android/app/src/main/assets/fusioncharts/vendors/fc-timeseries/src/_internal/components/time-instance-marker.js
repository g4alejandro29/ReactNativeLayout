import{SmartRenderer}from'../../../../fc-core/src/component-interface';import{utcMillisecond,utcSecond,utcMinute,utcHour,utcDay,utcWeek,utcMonth,utcYear}from'../../../../fc-utils/src/time-intervals/utc';import{timeMillisecond,timeSecond,timeMinute,timeHour,timeDay,timeWeek,timeMonth,timeYear}from'../../../../fc-utils/src/time-intervals';import{pluckNumber,pluck,BLANKSTRING,extend2,parseUnsafeString}from'../../../../fc-core/src/lib';import TimeConverter from'../../../../fc-utils/src/time-converter';const GUTTER_5=5,GUTTER_8=8,GUTTER_14=14,M='M',v='v';function getLightDarkColor(a,c,d,e){var f,h,i,j,k,l=!1;return'#'===a[0]&&(a=a.substring(1),l=!0),f=parseInt(a,16),h=(f>>16)+c,255<h?h=255:0>h&&(h=0),j=(255&f>>8)+d,255<j?j=255:0>j&&(j=0),i=(255&f)+e,255<i?i=255:0>i&&(i=0),k=(i|j<<8|h<<16).toString(16),0===h&&(k='00'+k),0===j&&0!==i&&(k=k.substring(0,2)+'00'+k.substring(2)),(l?'#':'')+k}function isValidUnit(a){return!('year'!==a&&'quarter'!==a&&'month'!==a&&'week'!==a&&'day'!==a&&'hour'!==a&&'minute'!==a&&'second'!==a&&'millisecond'!==a)}function getInterVal(a,b){return'year'===a?b?utcYear:timeYear:'quarter'===a?b?utcMonth:timeMonth:'month'===a?b?utcMonth:timeMonth:'week'===a?b?utcWeek:timeWeek:'day'===a?b?utcDay:timeDay:'hour'===a?b?utcHour:timeHour:'minute'===a?b?utcMinute:timeMinute:'second'===a?b?utcSecond:timeSecond:'millisecond'===a?b?utcMillisecond:timeMillisecond:void 0}function isWithinMarker(a,b,c,d){let e,f,g,h,j=!1,k=d.markerDim;for(g=0,h=k.length;g<h;g++)if(b>=k[g].x&&b<=k[g].x+k[g].width&&c>=k[g].y&&c<=k[g].y+k[g].height){j=!0,a.config.previouslyHoveredIndex=d.index,e=k[g];break}return f={pointIndex:d.index,hovered:j,pointObj:{hoveredMarkerDim:e,index:j&&g},previouslyHoveredIndex:a.config.previouslyHoveredIndex,component:a},f}class TimeInstanceMarker extends SmartRenderer{__setDefaultConfig(){super.__setDefaultConfig(),this.config.defaultStyle={text:{fill:'#808080',"font-size":'11px',"font-weight":'normal',"font-style":'normal',"vertical-align":'middle',"text-anchor":'middle'},marker:{fill:'#f8b8b7',opacity:1,stroke:'#666666',"border-radius":2,"stroke-width":'1'}},this.config.toolTipOpacity=.9,this.config.hoveredMarkerIndex=void 0,this.config.hoveredDomainIndex=void 0,this.config.previouslyHoveredIndex=void 0,this.config.hoveredFromOutside=!1,this.config.hoveredLabelFill='#ffffff',this.config.hoveredMarkerRadius='1.5',this.config.valueArr=[],this.config.textArr=[],this.config.styleArr=[],this.config.domainArr=[],this.config.repeatationArr=[],this.config.markerDetails=[],this.config.type='minimal'}getHoveredMarker(a,b){let c,d,e=this,f=e.config,g=e.getLinkedParent(),h=g.getTranslation(),j=f.markerDetails;for(a-=h.x,b-=h.y,d=j.length-1;0<=d&&(c=isWithinMarker(e,a,b,j[d]),!c.hovered);d--);return c}setHoverInEffect(a,b,c){let d=this,e=d.getFromEnv('chart');d.setData({hoveredMarkerIndex:a,hoveredDomainIndex:b,hoveredFromOutside:c},!0),e.fireEvent('timeInstanceMarkerHovered',{senderTimeMarker:d,hoveredMarkerIndex:a,hoveredDomainIndex:b,hoveredFromOutside:!0})}setHoverOutEffect(){let a=this,b=a.getFromEnv('chart');a.setData({hoveredMarkerIndex:void 0,hoveredDomainIndex:void 0},!0),b.fireEvent('timeInstanceMarkerHovered',{senderTimeMarker:a,hoveredMarkerIndex:void 0,hoveredDomainIndex:void 0,hoveredFromOutside:!0})}getToolTextConfiguration(a){var b=Math.max,c=Math.round;let d,e,f,g=this,h=g.config.toolTipOpacity,j=g.getFromEnv('tooltipStyle')||{},k=pluckNumber(j['font-size'],11),l=40,m=46,n=g.getFromEnv('smartLabel'),o={};if(n.setStyle({"font-size":k+c(.1*k),"font-family":j['font-family'],"font-weight":j['font-weight']}),f=n.getOriSize(a[0]),l+=f.width,m+=f.height,o.toolText=`<div style='opacity:${h};'>
                         <div style='margin: 5px;font-size: ${k+c(.1*k)}px;'>${a[0]}</div>`,n.setStyle({"font-size":k,"font-family":j['font-family'],"font-weight":j['font-weight']}),2<a.length)for(o.toolText+=`</br>`,d=1,e=a.length;d<e;d++)a[d]&&(f=n.getOriSize(a[d]),m+=f.height,l=b(l,f.width),o.toolText+=`<div style= 'margin: 5px;'>${d}. ${a[d]}</div>`);else 2===a.length&&a[1]&&(o.toolText+=`</br>`,f=n.getOriSize(a[1]),m+=f.height,l=b(l,f.width),o.toolText+=`<div style= 'margin: 5px;'>${a[1]}</div>`);return o.toolText+=`</div>`,o.dimensions={width:l,height:m},o}reCalculateDimension(a,b){let c=this,d=c.config,e=d.domainArr[a][b],f=13.2,g=c.config.xScale,h=c.getLinkedParent().config,i=h.padding,j=i.left,k=i.right,l=i.top,m=i.bottom,n=g.getRangeValue(e),o=d.markerDetails[a].markerDim[b],p=n-f/2-j+k,q=h.canvasBGTop+h.canvasBGHeight-f/2-l+m,r=2*f/2;o.x=p,o.y=q,o.width=r,o.height=2*f/2,o.thresholdX=p<h.canvasBGLeft?p-h.canvasBGLeft:p+r>h.canvasBGLeft+h.canvasBGWidth?p+r-(h.canvasBGLeft+h.canvasBGWidth):0,o.thresholdY=f/2}getMarkerDimension(a,b){let c=this,d=c.config.xScale,e=c.getLinkedParent().config,f=e.padding,g=f.left,h=f.right,i=f.top,j=f.bottom,k=d.getRangeValue(a),l=k-b/2-g+h,m=e.canvasBGTop+e.canvasBGHeight-b/2-i+j,n=2*b/2;return{x:l,y:m,width:n,height:2*b/2,thresholdX:l<e.canvasBGLeft?l-e.canvasBGLeft:l+n>e.canvasBGLeft+e.canvasBGWidth?l+n-(e.canvasBGLeft+e.canvasBGWidth):0,thresholdY:b/2}}getMarkerAndLabelConfiguration(a,b){let c,d=this,e=d.config,f=d.config.xScale,g=f.getDomain(),h=e.valueArr[a],i=h.repeat,j=b.text['line-height'];e.markerDetails[a].markerDim=[],e.markerDetails[a].index=a,e.domainArr[a]=[],!i&&+h.start>=+g[0]&&+h.start<=+g[1]?(e.domainArr[a].push(h.start),e.markerDetails[a].markerDim.push(d.getMarkerDimension(h.start,j))):i&&(e.domainArr[a]=c=d.getAllValidDomains(h.start,h.repeat),c.length&&c.forEach(b=>{e.markerDetails[a].markerDim.push(d.getMarkerDimension(b,j))}))}getAllValidDomains(a,b){let c=this,d=c.config.xScale,e=d.getDomain(),f=[];if(+a<+e[0]&&0<b.multiplier)for(;+a<+e[0];)a=b.interval.offset(a,b.multiplier);for(;+a<=+e[1];)f.push(a),a=b.interval.offset(a,b.multiplier);return f}configureAttributes(a={}){super.configureAttributes(a);let b,c,d,e,f,g,h,j=this,k=j.config,l=[],m=[],n=j.getFromEnv('isUTC'),o=[],p=j.getFromEnv('getStyleDef'),q=a.timeMarker||[];for(g=0,h=q.length;g<h;g++)q[g].start&&q[g].start!==BLANKSTRING&&(f=pluck(q[g].timeformat,a.defaultFormat),c=n?TimeConverter.utcParser(f):TimeConverter.parser(f),d=c.parse(q[g].start),!!d)&&(b={start:d,startString:q[g].start,timeFormat:f,type:q[g].type||k.type},q[g].repeat&&q[g].repeat.unit&&0!==Math.floor(+q[g].repeat.multiplier)&&isValidUnit(e=q[g].repeat.unit.toLowerCase())&&(b.repeat={interval:getInterVal(e,n),multiplier:('quarter'===e?3:1)*pluckNumber(q[g].repeat.multiplier,1)}),o.push(b),l.push(p(q[g].style)),m.push(pluck(parseUnsafeString(q[g].label),'')));a.xScale&&(k.xScale=a.xScale),k.hoveredMarkerIndex=a.hoveredMarkerIndex,k.hoveredDomainIndex=a.hoveredDomainIndex,k.hoveredFromOutside=a.hoveredFromOutside,a.timeMarker&&(k.valueArr=o,k.styleArr=l,k.textArr=m)}createToolipConfiguration(){let a,b,c,d,e,f,g=this,h=g.config,k=h.markerDetails,l=h.domainArr,m=h.repeatationArr,n=h.valueArr,o=g.getFromEnv('isUTC'),p=[];for(e=0;e<l.length;e++)for(a=l[e],b=n[e].timeFormat,c=o?TimeConverter.utcFormatter(b):TimeConverter.formatter(b),f=0;f<a.length;f++)p=[],d=c.format(a[f]),p=p.concat([d],m[e][f].labels),k[e].markerDim[f].toolTextArr=p}getRepeatationArr(){let a,b,c,d,e,f,g,h=this,k=h.config,l=k.domainArr,m=k.textArr,n=k.markerDetails,o=[];for(f=0;f<l.length;f++)for(d=l[f],o[f]=[],g=0;g<d.length;g++)for(a=f,e=d[g],o[f][g]={domainValue:e,labels:[m[f]],markerDimIndex:g};a+1<l.length;)c=l[a+1].map(a=>+a),-1!==(b=c.indexOf(+e))&&(o[f][g].labels.push(m[a+1]),l[a+1]=l[a+1].filter(a=>+a!=+e),n[a+1].markerDim=n[a+1].markerDim.filter((a,c)=>c!==b)),a++;return o}draw(){let a,b,c,d=this,e=d.config,f=e.valueArr,g=d.getFromEnv('smartLabel'),h=d.getFromEnv('textStyle'),j=e.defaultStyle,k=e.styleArr;for(d.addGraphicalElement({el:'group',container:{id:'thermo',label:'thermo',isParent:!0},component:d,label:'timeMarkerHoverGroup',attr:{name:'time-marker-hover-elem-group'},id:'timeMarker'}),d.addGraphicalElement({el:'group',container:{id:'thermo',label:'thermo',isParent:!0},component:d,label:'timeMarker',attr:{name:'time-marker-group'},id:'timeMarker'}),e.markerDetails=[],(b=0,c=f.length);b<c;b++)e.markerDetails[b]={},a=extend2(extend2(extend2({},{text:h}),j),k[b]),g.setStyle({"font-size":a.text['font-size'],"font-family":a.text['font-family'],"font-weight":a.text['font-weight'],"font-style":a.text['font-style']}),d.getMarkerAndLabelConfiguration(b,a);e.repeatationArr=d.getRepeatationArr(),d.createToolipConfiguration(),d.drawTimeMarkers(),d.drawTimeMarkerLabels()}drawTimeMarkers(){let a,b,c,d,e,f,g,h,k=this,l=k.config,m=l.markerDetails,n=k.getLinkedParent().config,o=n.padding,p=l.styleArr,q=l.repeatationArr,r=k.getFromEnv('textStyle'),s=k.getFromEnv('baseTextStyle'),t=l.defaultStyle;for(g=0;g<m.length;g++)for(a=m[g].markerDim,Object.assign(t.text,s),e=extend2(extend2(extend2({},{label:r}),t),p[g]),d=l.valueArr[g].type,h=0;h<a.length;h++)2>q[g][h].labels.length&&13.2!=+e.text['line-height']&&k.reCalculateDimension(g,h),b=a[h],c=g===l.hoveredMarkerIndex&&h===l.hoveredDomainIndex,f=p[g].marker&&p[g].marker.stroke||e.marker.fill,(c||'full'===d)&&(k.addGraphicalElement({el:'path',attr:{path:[M,b.x+b.width/2,b.y+b.height/2,v,-n.canvasHeight],stroke:c?getLightDarkColor(f,-6,-70,-72):f,"stroke-width":e.marker['stroke-width'],opacity:e.marker.opacity,"stroke-opacity":e.marker['stroke-opacity'],"stroke-dasharray":e.marker['stroke-dasharray']},container:{label:'timeMarkerHoverGroup'},id:'time-instance-marker-path-'+g+h,component:k,label:'path'}),k.addGraphicalElement({el:'circle',attr:{cx:b.x+b.width/2,cy:n.canvasTop+l.hoveredMarkerRadius+o.bottom-o.top,r:l.hoveredMarkerRadius,fill:c?getLightDarkColor(e.marker.fill,-6,-70,-72):e.marker.fill,stroke:c?getLightDarkColor(f,-6,-70,-72):f,"stroke-width":e.marker['stroke-width'],opacity:e.marker.opacity,"fill-opacity":e.marker['fill-opacity'],"stroke-opacity":e.marker['stroke-opacity'],"stroke-dasharray":e.marker['stroke-dasharray']},container:{label:'timeMarkerHoverGroup'},id:'time-instance-marker-circle-'+g+h,component:k,label:'path'})),k.addGraphicalElement({el:'rect',attr:{x:b.x,y:b.y,width:b.width,height:b.height,stroke:e.marker.stroke,"stroke-width":e.marker['stroke-width'],r:e.marker['border-radius'],ry:e.marker['border-radius'],fill:c?getLightDarkColor(e.marker.fill,-6,-70,-72):e.marker.fill,opacity:e.marker.opacity,"fill-opacity":e.marker['fill-opacity'],"stroke-opacity":e.marker['stroke-opacity'],"stroke-dasharray":e.marker['stroke-dasharray']},container:{label:'timeMarker'},id:'time-instance-marker-rect-'+g+h,component:k,label:'rect'})}drawTimeMarkerLabels(){let a,b,c,d,e,f,g,h,k=this,l=k.config,m=l.markerDetails,n=l.repeatationArr,o=l.styleArr,p=k.getFromEnv('textStyle'),q=l.defaultStyle;for(g=0;g<n.length;g++)for(b=n[g],f=extend2(extend2(extend2({},{label:p}),q),o[g]),h=0;h<b.length;h++)d=b[h],c=g===l.hoveredMarkerIndex&&h===l.hoveredDomainIndex,1<(e=d.labels.length)&&(a=m[g].markerDim[d.markerDimIndex],k.addGraphicalElement({el:'text',attr:{x:a.x+a.width/2,y:a.y+a.height/2,fill:c?l.hoveredLabelFill:f.text.fill,"font-size":f.text['font-size'],"font-weight":f.text['font-weight'],"font-style":f.text['font-style'],"font-family":f.text['font-family'],"text-anchor":f.text['text-anchor'],"vertical-align":f.text['vertical-align'],text:e,opacity:f.text.opacity},container:{label:'timeMarker'},id:'time-instance-marker-text-'+g+h,component:k,label:'text'}))}getType(){return'timeMarker'}getName(){return'timeInstanceMarker'}}export default TimeInstanceMarker;