import{SmartRenderer}from'../../../../../fc-core/src/component-interface';import{TRACKER_FILL}from'../../../../../fc-core/src/lib';class Cover extends SmartRenderer{constructor(a){super(a),this.addEventListener('click',function(){this.getLinkedParent().setData({},!0)})}__setDefaultConfig(){super.__setDefaultConfig(),this.config.visibility='hidden'}configureAttributes(a={}){let b=this,c=b.config;Object.keys(a).forEach(b=>c[b]=a[b])}draw(){let a=this,b=+a.getFromEnv('chartHeight'),c=+a.getFromEnv('chartWidth'),d=a.config.visibility;a.addGraphicalElement({el:'html',attr:{x:0,y:0,width:c,height:b,fill:TRACKER_FILL,visibility:d,type:'div'},component:a,id:'cover',label:'cover'})}}export default Cover;