import{SmartRenderer}from'../../../../../fc-core/src/component-interface';import CustomRangeSelectorTool from'./selector-tool';class CustomRangeSelector extends SmartRenderer{configureAttributes(a={}){let b,c=this,d=c.config;for(b in a)d[b]=a[b]}updateOnLimitChange(){this.setData({domain:this.getFromEnv('chart').getFocusLimit()},!0)}getToolInfo(){let a=Object.assign({},this.config.style);return a['title:hoverout']=a.title,{"selector-0":{type:'tool',def:CustomRangeSelectorTool,configuration:{domain:this.config.domain,hAlign:'right',scale:1,marginTop:2,marginBottom:2,marginLeft:2,marginRight:2,extStyle:a}}}}}export default CustomRangeSelector;