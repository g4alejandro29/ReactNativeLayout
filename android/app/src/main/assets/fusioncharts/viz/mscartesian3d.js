import MSCartesian from'./mscartesian';import canvas3dFactory from'../_internal/factories/canvas-3d-axis-ref-cartesian';import datasetFactory from'../_internal/factories/multiseries3d-dataset';class MSCartesian3D extends MSCartesian{constructor(){super(),this.registerFactory('canvas',canvas3dFactory),this.registerFactory('dataset',datasetFactory,['vCanvas'])}static getName(){return'MSCartesian3D'}getName(){return'MSCartesian3D'}parseChartAttr(a){super.parseChartAttr(a),this.config.drawTrendRegion=0}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.is3D=!0,a.showplotborder=0,a.drawcrosslineontop=0,a.showzeroplaneontop=0}}export default MSCartesian3D;