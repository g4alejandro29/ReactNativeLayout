import RaphaelVml from'../vendors/redraphael/source/raphael.vml';import RaphaelExport from'./redraphael.export.vml';export default{extension:function(a){let b=a.getDep('redraphael','plugin');RaphaelVml(b),RaphaelExport(b)},name:'redraphaelVml',type:'plugin',requiresFusionCharts:!0};