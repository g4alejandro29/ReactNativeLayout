import AlertManager from'./alertmanager';import{pluckNumber,componentFactory}from'../../../fc-core/src/lib';let alertFn=function(a){a.sender.apiInstance.getChildren('alertManager')&&a.sender.apiInstance.getChildren('alertManager')[0].processRTData(a.data)};function alertManagerLinker(a){a.addEventListener('instantiated',function(a){'chartAPI'===a.sender.getType()&&a.sender.registerFactory('alertManager',function(a){if(a.getChildren('alertManager'))return void a.getChildren('alertManager')[0].configure();var b=a.getFromEnv('chart');componentFactory(b,AlertManager,'alertManager',1,[{}])})}),a.addEventListener('updateDataReceived',alertFn),a.addEventListener('postConfigure',function(a){if('dataset'===a.sender.getType()){let b,c,d=a.sender,e=d.config,f=e.JSONData,g=d.getFromEnv('chart'),h=g.getChildren('alertManager');if(!h||!f)return;b=pluckNumber(f&&f.checkforalerts,1),h=h[0],c=h.config||(h.config={}),c.datasetMap=c.datasetMap||{},c.datasetMap[e.index]=b}})}export default{extension:alertManagerLinker,name:'alertManagerLinker',type:'extension',requiresFusionCharts:!0};