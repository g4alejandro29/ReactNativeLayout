import LineDataset from'./line';import{__firePlotEvent,configurer,_updateImage,_drag}from'./dragarea';import{pluckNumber}from'../lib/lib';import{_restore,_getJSONData}from'./dragcolumn';import{addDep}from'../dependency-manager';import draglineAnimation from'../animation-rules/dragline-animation';addDep({name:'dragLineAnimation',type:'animationRule',extension:draglineAnimation});class DragLineDataset extends LineDataset{_firePlotEvent(){__firePlotEvent.apply(this,arguments)}updateImage(a){_updateImage.call(this,a)}drag(){_drag.apply(this,arguments)}configureAttributes(){configurer.apply(this,arguments)}_plotConfigure(a,b){let c,d,e=this.config,f=this.components.data;super._plotConfigure(a,b),c=f[a],d=c.config,d.allowDrag=pluckNumber(b.allowdrag,e.allowDrag),d.allowNegDrag=pluckNumber(b.allownegativedrag,e.allowNegDrag)}getType(){return'dataset'}getName(){return'dragLine'}restore(){_restore.call(this)}getJSONData(){return _getJSONData.call(this)}}export default DragLineDataset;