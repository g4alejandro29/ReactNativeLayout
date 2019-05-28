import{appliedCSS}from'../lib/lib';export default function(a){var b,c,d,e=a.eve,f=a._g,g=a.fn,h=a.el,j=/[, ]+/,i=/\B([A-Z]{1})/g;c=function(a){this.styleSheet='',this.rules={},this.ns=a||''},d=c.prototype,d.getSheet=function(){var b=this.node;return this.styleSheet=d.getStyleSheet('fusioncharts-raphael-stylesheet'),this.styleSheet||(b=this.node=f.doc.createElement('style'),b.setAttribute('id',a.format('raphael-stylesheet-{0}',a._oid++)),b.setAttribute('type','text/css'),b.setAttribute('title','fusioncharts-raphael-stylesheet'),(f.doc.head||f.doc.getElementsByTagName('head')[0]).appendChild(this.node),this.styleSheet=d.getStyleSheet('fusioncharts-raphael-stylesheet')),this.styleSheet},d.getStyleSheet=function(a){for(var b,c=f.doc.styleSheets,d=c.length;d--;)if(b=c[d],b.title===a)return b},d.applyCSSRule=function(a,b){var c,d,e=this.styleSheet;if(!e)if(a&&b)e=this.getSheet();else return;c=e.rules||e.cssRules||{},d=c.length||0,e.insertRule?e.insertRule(a+'{'+b+'}',d):e.addRule&&e.addRule(a,b,d)},d.removeCSS=function(a){var b,c=this.styleSheet,d=c.rules||c.cssRules||{},e=d.length||0;for(a=a||this.ns;e--;)b=d[e],new RegExp(a).test(b.selectorText)&&(c.removeRule?c.removeRule(e):c.deleteRule(e))},d.destroy=function(){this.removeCSS(),delete this.node,delete this.styleSheet,delete this.ns,delete this.rules},d.clear=function(){this.removeCSS(),this.rules={}},d.add=function(a,b,c){var d,e='',f=this.rules[a]||(this.rules[a]={}),g=c?'':'\t',h=c?':':': ';for(d in b)(f[d]=b[d])&&(e+=g+d.replace(i,'-$1').toLowerCase()+h+f[d]+';');this.applyCSSRule(a,e)},d.render=function(){this.setCssText()},d.setCssText=function(a){var b,c,d=a?'':'\t',e=a?':':': ',f='',g='';for(b in this.rules){for(c in f='',g=b.replace(/(^|\,)/g,'$1'+this.ns+' '),b=this.rules[b],b)b[c]&&(f+=d+c.replace(i,'-$1').toLowerCase()+e+b[c]+';');this.applyCSSRule(g,f)}},e.on('raphael.new',function(){this._stylesheet=this._stylesheet||new c,this.cssNamespace('')}),e.on('raphael.remove',function(){this._stylesheet&&this._stylesheet.destroy(),delete this._stylesheet}),g.cssNamespace=function(b){return arguments.length&&(this._stylesheet.ns=a.format('{0}#raphael-paper-{1}',b&&b+' '||'',this.id)),this._stylesheet.ns},g.cssAddRule=function(a,b){if(1===arguments.length&&'object'==typeof a){for(var c in a)this.cssAddRule(c,a[c]);return this}return this._stylesheet.add(a,b),this},g.cssRender=function(){return a.svg&&this._stylesheet.render(),this},g.cssClear=function(){return this._stylesheet.clear(),this},a.ca['class']=function(b){var c,d,e,f,g=this,h=g.node,j=g.paper,k='.'+b,l=j._stylesheet&&j._stylesheet.rules,m=g.parent,n=g.attrs,o={};if(a.svg)b=b||'',h.setAttribute('class','group'===g.type&&g._id?'raphael-group-'+g.id+'-'+g._id+' '+b:b);else if(a.vml&&(c=h.className='group'===g.type?b&&g._id+' '+b||g._id:'rvml '+b,h.className=c?c+' fusioncharts-div':'fusioncharts-div',k&&l)){for(f in d=l[k],d)'color'===f&&'text'===g.type&&(f='fill'),n[f]||(o[f]=d[f]);for(;m&&m.attr;){if(e=m.attr('class'))for(f in k='.'+e+' '+k,d=l[k],d)'color'===f&&'text'===g.type&&(f='fill'),n[f]||o[f]||(o[f]=d[f]);m=m.parent}g.css(o)}},h.css=function(c,d,f){var g,h,k,l,m,n,o;if(this.removed)return this;if(this.styles||(this.styles={}),d===b&&a.is(c,'string')){for(g=c.split(j),k={},(n=0,o=g.length);n<o;n++)c=g[n],c in this.styles&&(k[c]=this.styles[c]);return o-1?k:k[g[0]]}if(d===b&&a.is(c,'array')){for(k={},n=0,o=c.length;n<o;n++)k[c[n]]=this.styles(c[n]);return k}for(n in d===b?c&&a.is(c,'object')&&(h=c):(h={},h[c]=d),m={},h){if(l=n.replace(/\B([A-Z]{1})/g,'-$1').toLowerCase(),a._availableAttrs.hasOwnProperty(l)||'color'===l){'color'===l&&'text'===this.type&&(l='fill'),m[l]=h[n],m.dirty=!0;continue}e('raphael.css.'+l+'.'+this.id,this,h[n],l),this.node.style[l]=h[n],this.styles[l]=h[n]}for(n=0,o=this.followers.length;n<o;n++)this.followers[n].el.attr(h);return m.hasOwnProperty('dirty')&&(delete m.dirty,f&&(m['_do-not-tune']=!0),this.attr(m)),this},h.removeCSS=function(b){var c,d,e,f=this;if(b||(b=appliedCSS),this.removed)return this;if(a.is(b,'string')&&(b=b.split(',')),a.is(b,'array'))for(e=b.length,d=0;d<e;d++)c=b[d].replace(/\B([A-Z]{1})/g,'-$1').toLowerCase(),f.node.removeAttribute(c),f.node.style[c]='';return this}}