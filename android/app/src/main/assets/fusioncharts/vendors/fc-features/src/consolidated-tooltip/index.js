import{hashify,getMouseCoordinate}from'../../../fc-core/src/lib';const BLACK_LIST={treemap:!0,scatter:!0,bubble:!0,errorscatter:!0,errorline:!0,errorbar2d:!0,candlestick:!0,stackedcolumn3d:!0,stackedbar3d:!0,mscolumnline3d:!0,mscombi3d:!0,mscolumn3dlinedy:!0,stackedcolumn3dline:!0,stackedcolumn3dlinedy:!0},isBlackListed=a=>BLACK_LIST[a.getName().toLowerCase()],reduceToolTexts=(a,b)=>`${a}<div style="margin: 0;">${b}</div>`,countHoveredPlots=(a,b)=>b.hovered?a+1:a,extractColor=a=>{let b='#000000';return b=a.anchorProps?a.anchorProps.borderColor:a.originalPlotColor||a.plotColor||a.color,b};function _enableConsolidatedToolTip(a){let b=a.sender.getFromEnv('chart'),c=this,d=b.config.tooltipgrayoutcolor,e=b.config.plotcolorintooltip,f=b.getFromEnv('toolTipController'),g=b.getDatasets().sort((c,a)=>a.getJSONIndex()-c.getJSONIndex()),h=b.getFromEnv('consolidated-tooltip'),i=getMouseCoordinate(a.sender.getFromEnv('chart-container'),a.originalEvent,b),j=i.chartX,k=i.chartY,l=!1,m=g.map(a=>a.getPlotInCategoryAt(j,k)).filter(Boolean),n=m.reduce(countHoveredPlots,0),o=m.map(a=>{let b=a.pointObj.config,c=b.finalTooltext||b.toolText,f=extractColor(b);return 0<n?!l&&a.hovered?(c=`<div style="display: inline-block;">${c}</div>`,l=!0):(f=d,c=`<div style="color: ${hashify(d)}; display: inline-block;">${c}</div>`):c=`<div style="display: inline-block;">${c}</div>`,e?`<div style="color: ${hashify(f)}; display: inline-block;">&#9632&nbsp;</div>${c}`:c}),p=[...o].reverse().reduce(reduceToolTexts,'');return c.isWithinCanvas(j,k)?void(p?h?f.draw(a.originalEvent,p,h):b.addToEnv('consolidated-tooltip',f.draw(a.originalEvent,p)):h&&f.hide(h)):void(h&&f.hide(h))}function _disableConsolidatedToolTip(a){let b=a.sender.getFromEnv('chart'),c=b.getFromEnv('toolTipController'),d=b.getFromEnv('consolidated-tooltip');d&&c.hide(d)}function drawConsolidatedToolTip(a){let b=this.apiInstance,c=b.getDatasets().sort((c,a)=>c.getJSONIndex()-a.getJSONIndex()),d=b.config.plotcolorintooltip,e=b.getFromEnv('toolTipController'),f=b.getFromEnv('consolidated-tooltip'),g=c.map(b=>{let c=b.components.data;return c[a]&&c[a]}).filter(Boolean),h=g[0]&&{x:g[0].config._Px-g[0]._width,y:g[0].config._Py,width:g[0].config._width},i=g.map(a=>{let b=a.config,c=b.finalTooltext||b.toolText,e=extractColor(b);return d?`<div style="color: ${hashify(e)}; display: inline-block;">&#9632&nbsp;</div><div style="display: inline-block;">${c}</div>`:`<div style="display: inline-block;">${c}</div>`}).reduce(reduceToolTexts,'');i&&h?f?e.drawAt(h.x,h.y,i,f):b.addToEnv('consolidated-tooltip',e.drawAt(h.x,h.y,i)):f&&e.hide(f)}function consolidatedTooltipExt(a){a.addEventListener('predraw',function(a){let b;if(a.sender.getType&&'chartAPI'===a.sender.getType()&&!isBlackListed(a.sender)){b=a.sender;const c=b.getChildren('canvas');b.getFromEnv('chartInstance').drawConsolidatedToolTip=drawConsolidatedToolTip,c&&c.forEach(a=>b.config.drawTrendRegion&&b.config.showtooltip?void(!a.getState('consolidatedTooltipEventListenerAttached')&&b.config.showtooltip&&(a.addEventListener('fc-mouseover',_enableConsolidatedToolTip),a.addEventListener('fc-mousemove',_enableConsolidatedToolTip),a.addEventListener('fc-mouseout',_disableConsolidatedToolTip),a.setState('consolidatedTooltipEventListenerAttached',!0))):(a.removeEventListener('fc-mouseover',_enableConsolidatedToolTip),a.removeEventListener('fc-mousemove',_enableConsolidatedToolTip),a.removeEventListener('fc-mouseout',_disableConsolidatedToolTip),void a.setState('consolidatedTooltipEventListenerAttached',!1)))}})}export default{extension:consolidatedTooltipExt,name:'ConsolidatedToolTip',type:'extension',requiresFusionCharts:!0};