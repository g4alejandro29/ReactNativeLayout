import TimeInterval from'./time-interval.js';class MillisecondInterval extends TimeInterval{every(a){var b=Math.floor;const c=b(a);return this.count&&Number.isFinite(c)&&0<c?1<c?new TimeInterval('millisecond',a=>a.setTime(b(a/c)*c),(a,b)=>a.setTime(+a+b*c),(a,b)=>(b-a)/c):this:null}}export default MillisecondInterval;