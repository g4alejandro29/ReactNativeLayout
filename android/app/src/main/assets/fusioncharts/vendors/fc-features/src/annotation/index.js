import AnnotationExtension from'./ext-annotation';import pickBy from'ramda/src/pickBy';const isChartAPI=a=>'chartAPI'===a.getType(),isRootAttr=(a,b)=>'groups'!==b&&'items'!==b;function FCWrapper(a){a.addEventListener('instantiated',a=>{let b=a.sender;isChartAPI(b)&&b.registerFactory('annotation',a=>{let b=a.getFromEnv('dataSource').annotations,c=a.getChildren().annotation,d=c&&c[0];d&&d.disposeConfiguration(),delete a.getFromEnv('chartInstance').annotations,b&&(!d&&(d=new AnnotationExtension(pickBy(isRootAttr,b)),a.attachChild(d,'annotation'),d.config.drawn=!1),d._JSONData=b,d.configure(b),a.getFromEnv('chartInstance').annotations=d)})})}export default{extension:FCWrapper,name:'Annotation',type:'extension',requiresFusionCharts:!0};