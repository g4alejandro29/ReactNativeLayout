import{addListener,removeListener}from'../../../fc-core/src/event-api';var UNDEF,logger,DEFAULT_OUTPUT_HELPER='text',DEBUGGER='debugger';logger={outputHelpers:{text:function(b,c){var a=(b.sender.id||b.sender).toString();logger.outputTo('#'+b.eventId+' ['+a+'] fired "'+b.eventType+'" event. '+('error'===b.eventType||'warning'===b.eventType?c.message:''))},event:function(b,c){this.outputTo(b,c)},verbose:function(b,c){logger.outputTo(b.eventId,b.sender.id,b.eventType,c)}},outputHandler:function(b,c){'function'!=typeof logger.outputTo||logger.currentOutputHelper(b,c)},currentOutputHelper:UNDEF,outputTo:UNDEF,enabled:!1},logger.currentOutputHelper=logger.outputHelpers.text;export default{extension:function(a){a['debugger']={outputFormat:function(a){return!!(a&&'function'==typeof a.toLowerCase&&'function'==typeof logger.outputHelpers[a=a.toLowerCase()])&&(logger.currentOutputHelper=logger.outputHelpers[a],!0)},outputTo:function(b){'function'==typeof b?logger.outputTo=b:null===b&&(a[DEBUGGER].enable(!1),delete logger.outputTo)},enable:function(b,c,d){var e;return'object'==typeof b&&1===arguments.length&&(e=b,b=e.state,c=e.outputTo,d=e.outputFormat),'function'==typeof b&&('string'==typeof c&&(2===arguments.length||e)&&(d=c),c=b,b=!0),'boolean'==typeof b&&b!==logger.enabled&&(logger.enabled=b,logger.enabled?addListener('*',logger.outputHandler):removeListener('*',logger.outputHandler)),'function'==typeof c&&(logger.outputTo=c),a[DEBUGGER].outputFormat(d),logger.enabled}}},name:'Debugger',type:'extension',requiresFusionCharts:!0};