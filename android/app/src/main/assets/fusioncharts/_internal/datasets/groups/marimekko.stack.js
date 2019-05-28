import CartesianStackgroup from'./cartesian.stack';import{pluck,BLANKSTRING,visibleStr,parseTooltext}from'../../lib/lib';var createGroup=function(a,b,c){var d=c.getFromEnv('animationManager');return d.setAnimation({el:'group',attr:{name:a},container:b,component:c,label:'group'})};class MarimekkoStackgroup extends CartesianStackgroup{getType(){return'group'}getName(){return'marimekkoStackgroup'}getstackConf(){return this.config.stackConf}_setStackPosition(){super._setStackPosition();var a,b,c,d,e,f,g=this,h=g.config,i=h.stackConf||(h.stackConf=[]),j=h.stackValues,l=g.getFromEnv('categories')[0].category,m=g.getFromEnv('number-formatter'),n=0,o=0,p=0,q=g.getFromEnv('xAxis'),r=q.getVisibleConfig(),s=r.minValue,t=r.maxValue,u=t-s,v=s;for(d=0,e=j.length;d<e;d++)o+=j[d]&&j[d].positive||0;for(h.totalSumValue=o,d=0;d<l.length;d++)b=l[d],b.widthpercent&&(n+=m.getCleanValue(b.widthpercent));for(100===n&&(h.setUserWidth=1),a=g.getStackSumPercent(),(d=0,e=j.length);d<e;d++)(c=i[d])||(c=i[d]={}),p+=a[d]/100,f=a[d]/100*u/2+v,v=p*u+s,c.x=f,q.updateTicksValues(d,{x:f})}getStackSumPercent(){var a,b=this,c=b.config,d=c.stackValues,e=c.totalSumValue,f=b.getFromEnv('number-formatter'),g=b.getFromEnv('categories')[0].category,h=c.setUserWidth,j=[];for(a=0;a<d.length;a++)j[a]=h?f.getCleanValue(g[a].widthpercent):100*((d[a]&&d[a].positive||0)/e);return j}draw(){super.draw(),this.drawLabel()}createContainer(){super.createContainer();var a=this,b=a.getLinkedParent();a.getContainer('commonLabelContainer')||a.addContainer('commonLabelContainer',createGroup('manager-commonLabelContainer',b.getChildContainer('vcanvasLabelGroup'),a))}drawLabel(){var a,b,c,d,e,f,g,h,k,l,m,n,o,p,q,r,s=this,t=s.config,u=s.getFromEnv('smartLabel'),v=s.getFromEnv('animationManager'),w=s.getStackSumPercent(),x=s.getFromEnv('chart-attrib'),y=s.getChildren('dataset'),z=t.stackConf,A=s.getContainer('commonLabelContainer'),B=s.getFromEnv('number-formatter'),C=0,D=s.getFromEnv('chartConfig'),E=D.canvasBottom,F=s.getFromEnv('xAxis'),G=s.getFromEnv('style'),H=D.dataLabelStyle,I=w.length,J=t.stackValues,K=D.showXAxisPercentValues,L=s.getGraphicalElement('commonLabels')||[],M=L.length;if(u.setStyle(H),K){for(o=pluck(H.backgroundColor,'#ffffff'),n=pluck(H.borderColor===BLANKSTRING?'#'+G.inCancolor:H.borderColor,'#000000'),p=pluck(H.borderThickness,1),f=0;f<I-1;f++)if(J[f]){if(C+=w[f],g=B.percentValue(C),d=F.getPixel(z[f].x)+z[f].columnWidth/2,e=E,m=L[f],J[f].positive===J[f].negative){g='',m&&m.hide();continue}h={text:g,fill:H.color,"text-bound":[o,n,p,H.borderPadding,H.borderRadius,H.borderDash],"line-height":H.lineHeight,visibility:visibleStr},k=u.getOriSize(g),e=e-k.height/2-p,h.x=d,h.y=e,m&&m.show(),l=v.setAnimation({el:m||'text',container:A,attr:h,label:'text',component:s}),m||s.addGraphicalElement('commonLabels',l,!0)}for(let a=f;a<M;a++)L[a].hide()}for(q=0;q<y.length;q++)for(b=y[q],c=b.components.data,a=b.config.JSONData,r=0;r<c.length;r++)c[r].config.finalTooltext=parseTooltext(c[r].config.finalTooltext,[111],{xAxisPercentValue:w[r]&&w[r].toPrecision(4)+'%'},c,x,a)}_getXpos(a){var b=this,c=b.getFromEnv('xAxis');return c.getPixel(b.config.stackConf[a].x)}_setStackDimensions(){var a,b,c,d,e,f,g=this,h=g.config,i=h.stackValues,j=g.getFromEnv('categories')[0].category,l=0,m=g.getFromEnv('number-formatter'),n=g.getStackSumPercent(),o=g.getFromEnv('canvasConfig').canvasWidth,p=h.stackConf||(h.stackConf=[]);for(a=0;a<j.length;a++)b=j[a],b.widthpercent&&(l+=m.getCleanValue(b.widthpercent));for(100===l&&(c=h.setUserWidth=1),a=0,d=i.length;a<d;a++)b=j[a],(e=p[a])||(e=p[a]={}),f=c?m.getCleanValue(b.widthpercent)/100:n[a]/100,e.columnWidth=f*o}}export default MarimekkoStackgroup;