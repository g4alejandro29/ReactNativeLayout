import MSArea from'../msarea';import CartesianStackGroup from'../../dataset/groups/cartesian-stack';import{HUNDREDSTRING}from'../../../../fc-core/src/lib';class StackedArea2D extends MSArea{static getName(){return'StackedArea2D'}constructor(){super(),this.showsum=0}getName(){return'StackedArea2D'}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.friendlyName='Stacked Area Chart',a.plotfillalpha=HUNDREDSTRING,a.isstacked=1}getDSGroupdef(){return CartesianStackGroup}}export default StackedArea2D;