var Chart=function(e){function t(e,t,a){return e=o((e-t.graphMin)/(t.steps*t.stepValue),1,0),a*t.steps*e}function a(e,t,a,l){function n(){r+=i;var c=e.animation?o(s(r),null,0):1;l.clearRect(0,0,h,d),e.scaleOverlay?(a(c),t()):(t(),a(c)),1>=r?m(n):"function"==typeof e.onAnimationComplete&&e.onAnimationComplete()}var i=e.animation?1/o(e.animationSteps,Number.MAX_VALUE,1):1,s=c[e.animationEasing],r=e.animation?0:1;"function"!=typeof t&&(t=function(){}),m(n)}function l(e,t,a,l,o,i){var s;for(e=Math.floor(Math.log(l-o)/Math.LN10),o=Math.floor(o/(1*Math.pow(10,e)))*Math.pow(10,e),l=Math.ceil(l/(1*Math.pow(10,e)))*Math.pow(10,e)-o,e=Math.pow(10,e),s=Math.round(l/e);s<a||s>t;)e=s<a?e/2:2*e,s=Math.round(l/e);return t=[],n(i,t,s,o,e),{steps:s,stepValue:e,graphMin:o,labels:t}}function n(e,t,a,l,n){if(e)for(var o=1;o<a+1;o++)t.push(s(e,{value:(l+n*o).toFixed(0!=n%1?n.toString().split(".")[1].length:0)}))}function o(e,t,a){return!isNaN(parseFloat(t))&&isFinite(t)&&e>t?t:!isNaN(parseFloat(a))&&isFinite(a)&&e<a?a:e}function i(e,t){var a,l={};for(a in e)l[a]=e[a];for(a in t)l[a]=t[a];return l}function s(e,t){var a=/\W/.test(e)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):M[e]=M[e]||s(document.getElementById(e).innerHTML);return t?a(t):a}var r=this,c={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return-1*e*(e-2)},easeInOutQuad:function(e){return 1>(e/=.5)?.5*e*e:-.5*(--e*(e-2)-1)},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1*((e=e/1-1)*e*e+1)},easeInOutCubic:function(e){return 1>(e/=.5)?.5*e*e*e:.5*((e-=2)*e*e+2)},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return-1*((e=e/1-1)*e*e*e-1)},easeInOutQuart:function(e){return 1>(e/=.5)?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},easeInQuint:function(e){return 1*(e/=1)*e*e*e*e},easeOutQuint:function(e){return 1*((e=e/1-1)*e*e*e*e+1)},easeInOutQuint:function(e){return 1>(e/=.5)?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},easeInSine:function(e){return-1*Math.cos(e/1*(Math.PI/2))+1},easeOutSine:function(e){return 1*Math.sin(e/1*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e/1)-1)},easeInExpo:function(e){return 0==e?1:1*Math.pow(2,10*(e/1-1))},easeOutExpo:function(e){return 1==e?1:1*(-Math.pow(2,-10*e/1)+1)},easeInOutExpo:function(e){return 0==e?0:1==e?1:1>(e/=.5)?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2)},easeInCirc:function(e){return 1<=e?e:-1*(Math.sqrt(1-(e/=1)*e)-1)},easeOutCirc:function(e){return 1*Math.sqrt(1-(e=e/1-1)*e)},easeInOutCirc:function(e){return 1>(e/=.5)?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeInElastic:function(e){var t=1.70158,a=0,l=1;return 0==e?0:1==(e/=1)?1:(a||(a=.3),l<Math.abs(1)?(l=1,t=a/4):t=a/(2*Math.PI)*Math.asin(1/l),-(l*Math.pow(2,10*(e-=1))*Math.sin(2*(1*e-t)*Math.PI/a)))},easeOutElastic:function(e){var t=1.70158,a=0,l=1;return 0==e?0:1==(e/=1)?1:(a||(a=.3),l<Math.abs(1)?(l=1,t=a/4):t=a/(2*Math.PI)*Math.asin(1/l),l*Math.pow(2,-10*e)*Math.sin(2*(1*e-t)*Math.PI/a)+1)},easeInOutElastic:function(e){var t=1.70158,a=0,l=1;return 0==e?0:2==(e/=.5)?1:(a||(a=.3*1.5),l<Math.abs(1)?(l=1,t=a/4):t=a/(2*Math.PI)*Math.asin(1/l),1>e?-.5*l*Math.pow(2,10*(e-=1))*Math.sin(2*(1*e-t)*Math.PI/a):.5*l*Math.pow(2,-10*(e-=1))*Math.sin(2*(1*e-t)*Math.PI/a)+1)},easeInBack:function(e){return 1*(e/=1)*e*(2.70158*e-1.70158)},easeOutBack:function(e){return 1*((e=e/1-1)*e*(2.70158*e+1.70158)+1)},easeInOutBack:function(e){var t=1.70158;return 1>(e/=.5)?.5*e*e*(((t*=1.525)+1)*e-t):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:function(e){return 1-c.easeOutBounce(1-e)},easeOutBounce:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?1*(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?1*(7.5625*(e-=2.25/2.75)*e+.9375):1*(7.5625*(e-=2.625/2.75)*e+.984375)},easeInOutBounce:function(e){return.5>e?.5*c.easeInBounce(2*e):.5*c.easeOutBounce(2*e-1)+.5}},h=e.canvas.width,d=e.canvas.height;window.devicePixelRatio&&(e.canvas.style.width=h+"px",e.canvas.style.height=d+"px",e.canvas.height=d*window.devicePixelRatio,e.canvas.width=h*window.devicePixelRatio,e.scale(window.devicePixelRatio,window.devicePixelRatio)),this.PolarArea=function(t,a){r.PolarArea.defaults={scaleOverlay:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var l=a?i(r.PolarArea.defaults,a):r.PolarArea.defaults;return new u(t,l,e)},this.Radar=function(t,a){r.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var l=a?i(r.Radar.defaults,a):r.Radar.defaults;return new S(t,l,e)},this.Pie=function(t,a){r.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var l=a?i(r.Pie.defaults,a):r.Pie.defaults;return new f(t,l,e)},this.Doughnut=function(t,a){r.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var l=a?i(r.Doughnut.defaults,a):r.Doughnut.defaults;return new p(t,l,e)},this.Line=function(t,a){r.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var l=a?i(r.Line.defaults,a):r.Line.defaults;return new g(t,l,e)},this.Bar=function(t,a){r.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var l=a?i(r.Bar.defaults,a):r.Bar.defaults;return new b(t,l,e)};var u=function(e,o,i){var s,r,c,u,S,f,p,g,b;for(S=Math.min.apply(Math,[h,d])/2,S-=Math.max.apply(Math,[.5*o.scaleFontSize,.5*o.scaleLineWidth]),u=2*o.scaleFontSize,o.scaleShowLabelBackdrop&&(u+=2*o.scaleBackdropPaddingY,S-=1.5*o.scaleBackdropPaddingY),g=S,u=u?u:5,s=Number.MIN_VALUE,r=Number.MAX_VALUE,c=0;c<e.length;c++)e[c].value>s&&(s=e[c].value),e[c].value<r&&(r=e[c].value);c=Math.floor(g/(.66*u)),u=Math.floor(.5*(g/u)),b=o.scaleShowLabels?o.scaleLabel:null,o.scaleOverride?(p={steps:o.scaleSteps,stepValue:o.scaleStepWidth,graphMin:o.scaleStartValue,labels:[]},n(b,p.labels,p.steps,o.scaleStartValue,o.scaleStepWidth)):p=l(g,c,u,s,r,b),f=S/p.steps,a(o,function(){for(var e=0;e<p.steps;e++)if(o.scaleShowLine&&(i.beginPath(),i.arc(h/2,d/2,f*(e+1),0,2*Math.PI,!0),i.strokeStyle=o.scaleLineColor,i.lineWidth=o.scaleLineWidth,i.stroke()),o.scaleShowLabels){i.textAlign="center",i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily;var t=p.labels[e];if(o.scaleShowLabelBackdrop){var a=i.measureText(t).width;i.fillStyle=o.scaleBackdropColor,i.beginPath(),i.rect(Math.round(h/2-a/2-o.scaleBackdropPaddingX),Math.round(d/2-f*(e+1)-.5*o.scaleFontSize-o.scaleBackdropPaddingY),Math.round(a+2*o.scaleBackdropPaddingX),Math.round(o.scaleFontSize+2*o.scaleBackdropPaddingY)),i.fill()}i.textBaseline="middle",i.fillStyle=o.scaleFontColor,i.fillText(t,h/2,d/2-f*(e+1))}},function(a){var l=-Math.PI/2,n=2*Math.PI/e.length,s=1,r=1;for(o.animation&&(o.animateScale&&(s=a),o.animateRotate&&(r=a)),a=0;a<e.length;a++)i.beginPath(),i.arc(h/2,d/2,s*t(e[a].value,p,f),l,l+r*n,!1),i.lineTo(h/2,d/2),i.closePath(),i.fillStyle=e[a].color,i.fill(),o.segmentShowStroke&&(i.strokeStyle=o.segmentStrokeColor,i.lineWidth=o.segmentStrokeWidth,i.stroke()),l+=r*n},i)},S=function(e,i,s){var r,c,u,S,f,p,g,b,m;for(e.labels||(e.labels=[]),f=Math.min.apply(Math,[h,d])/2,S=2*i.scaleFontSize,r=b=0;r<e.labels.length;r++)s.font=i.pointLabelFontStyle+" "+i.pointLabelFontSize+"px "+i.pointLabelFontFamily,c=s.measureText(e.labels[r]).width,c>b&&(b=c);for(f-=Math.max.apply(Math,[b,1.5*(i.pointLabelFontSize/2)]),f-=i.pointLabelFontSize,b=f=o(f,null,0),S=S?S:5,r=Number.MIN_VALUE,c=Number.MAX_VALUE,u=0;u<e.datasets.length;u++)for(m=0;m<e.datasets[u].data.length;m++)e.datasets[u].data[m]>r&&(r=e.datasets[u].data[m]),e.datasets[u].data[m]<c&&(c=e.datasets[u].data[m]);u=Math.floor(b/(.66*S)),S=Math.floor(.5*(b/S)),m=i.scaleShowLabels?i.scaleLabel:null,i.scaleOverride?(g={steps:i.scaleSteps,stepValue:i.scaleStepWidth,graphMin:i.scaleStartValue,labels:[]},n(m,g.labels,g.steps,i.scaleStartValue,i.scaleStepWidth)):g=l(b,u,S,r,c,m),p=f/g.steps,a(i,function(){var t=2*Math.PI/e.datasets[0].data.length;if(s.save(),s.translate(h/2,d/2),i.angleShowLineOut){s.strokeStyle=i.angleLineColor,s.lineWidth=i.angleLineWidth;for(var a=0;a<e.datasets[0].data.length;a++)s.rotate(t),s.beginPath(),s.moveTo(0,0),s.lineTo(0,-f),s.stroke()}for(a=0;a<g.steps;a++){if(s.beginPath(),i.scaleShowLine){s.strokeStyle=i.scaleLineColor,s.lineWidth=i.scaleLineWidth,s.moveTo(0,-p*(a+1));for(var l=0;l<e.datasets[0].data.length;l++)s.rotate(t),s.lineTo(0,-p*(a+1));s.closePath(),s.stroke()}i.scaleShowLabels&&(s.textAlign="center",s.font=i.scaleFontStyle+" "+i.scaleFontSize+"px "+i.scaleFontFamily,s.textBaseline="middle",i.scaleShowLabelBackdrop&&(l=s.measureText(g.labels[a]).width,s.fillStyle=i.scaleBackdropColor,s.beginPath(),s.rect(Math.round(-l/2-i.scaleBackdropPaddingX),Math.round(-p*(a+1)-.5*i.scaleFontSize-i.scaleBackdropPaddingY),Math.round(l+2*i.scaleBackdropPaddingX),Math.round(i.scaleFontSize+2*i.scaleBackdropPaddingY)),s.fill()),s.fillStyle=i.scaleFontColor,s.fillText(g.labels[a],0,-p*(a+1)))}for(a=0;a<e.labels.length;a++){s.font=i.pointLabelFontStyle+" "+i.pointLabelFontSize+"px "+i.pointLabelFontFamily,s.fillStyle=i.pointLabelFontColor;var l=Math.sin(t*a)*(f+i.pointLabelFontSize),n=Math.cos(t*a)*(f+i.pointLabelFontSize);s.textAlign=t*a==Math.PI||0==t*a?"center":t*a>Math.PI?"right":"left",s.textBaseline="middle",s.fillText(e.labels[a],l,-n)}s.restore()},function(a){var l=2*Math.PI/e.datasets[0].data.length;s.save(),s.translate(h/2,d/2);for(var n=0;n<e.datasets.length;n++){s.beginPath(),s.moveTo(0,a*-1*t(e.datasets[n].data[0],g,p));for(var o=1;o<e.datasets[n].data.length;o++)s.rotate(l),s.lineTo(0,a*-1*t(e.datasets[n].data[o],g,p));if(s.closePath(),s.fillStyle=e.datasets[n].fillColor,s.strokeStyle=e.datasets[n].strokeColor,s.lineWidth=i.datasetStrokeWidth,s.fill(),s.stroke(),i.pointDot)for(s.fillStyle=e.datasets[n].pointColor,s.strokeStyle=e.datasets[n].pointStrokeColor,s.lineWidth=i.pointDotStrokeWidth,o=0;o<e.datasets[n].data.length;o++)s.rotate(l),s.beginPath(),s.arc(0,a*-1*t(e.datasets[n].data[o],g,p),i.pointDotRadius,2*Math.PI,!1),s.fill(),s.stroke();s.rotate(l)}s.restore()},s)},f=function(e,t,l){for(var n=0,o=Math.min.apply(Math,[d/2,h/2])-5,i=0;i<e.length;i++)n+=e[i].value;a(t,null,function(a){var i=-Math.PI/2,s=1,r=1;for(t.animation&&(t.animateScale&&(s=a),t.animateRotate&&(r=a)),a=0;a<e.length;a++){var c=r*e[a].value/n*2*Math.PI;l.beginPath(),l.arc(h/2,d/2,s*o,i,i+c),l.lineTo(h/2,d/2),l.closePath(),l.fillStyle=e[a].color,l.fill(),t.segmentShowStroke&&(l.lineWidth=t.segmentStrokeWidth,l.strokeStyle=t.segmentStrokeColor,l.stroke()),i+=c}},l)},p=function(e,t,l){for(var n=0,o=Math.min.apply(Math,[d/2,h/2])-5,i=o*(t.percentageInnerCutout/100),s=0;s<e.length;s++)n+=e[s].value;a(t,null,function(a){var s=-Math.PI/2,r=1,c=1;for(t.animation&&(t.animateScale&&(r=a),t.animateRotate&&(c=a)),a=0;a<e.length;a++){var u=c*e[a].value/n*2*Math.PI;l.beginPath(),l.arc(h/2,d/2,r*o,s,s+u,!1),l.arc(h/2,d/2,r*i,s+u,s,!0),l.closePath(),l.fillStyle=e[a].color,l.fill(),t.segmentShowStroke&&(l.lineWidth=t.segmentStrokeWidth,l.strokeStyle=t.segmentStrokeColor,l.stroke()),s+=u}},l)},g=function(e,o,i){var s,r,c,u,S,f,p,g,b,m,M,v,k,L=0;for(S=d,i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily,m=1,u=0;u<e.labels.length;u++)s=i.measureText(e.labels[u]).width,m=s>m?s:m;for(h/e.labels.length<m?(L=45,h/e.labels.length<Math.cos(L)*m?(L=90,S-=m):S-=Math.sin(L)*m):S-=o.scaleFontSize,u=o.scaleFontSize,S=S-5-u,s=Number.MIN_VALUE,r=Number.MAX_VALUE,c=0;c<e.datasets.length;c++)for(g=0;g<e.datasets[c].data.length;g++)e.datasets[c].data[g]>s&&(s=e.datasets[c].data[g]),e.datasets[c].data[g]<r&&(r=e.datasets[c].data[g]);if(c=Math.floor(S/(.66*u)),u=Math.floor(.5*(S/u)),g=o.scaleShowLabels?o.scaleLabel:"",o.scaleOverride?(p={steps:o.scaleSteps,stepValue:o.scaleStepWidth,graphMin:o.scaleStartValue,labels:[]},n(g,p.labels,p.steps,o.scaleStartValue,o.scaleStepWidth)):p=l(S,c,u,s,r,g),f=Math.floor(S/p.steps),u=1,o.scaleShowLabels){for(i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily,s=0;s<p.labels.length;s++)r=i.measureText(p.labels[s]).width,u=r>u?r:u;u+=10}M=h-u-m,b=Math.floor(M/(e.labels.length-1)),v=h-m/2-M,k=S+o.scaleFontSize/2,a(o,function(){i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(h-m/2+5,k),i.lineTo(h-m/2-M-5,k),i.stroke(),0<L?(i.save(),i.textAlign="right"):i.textAlign="center",i.fillStyle=o.scaleFontColor;for(var t=0;t<e.labels.length;t++)i.save(),0<L?(i.translate(v+t*b,k+o.scaleFontSize),i.rotate(-(L*(Math.PI/180))),i.fillText(e.labels[t],0,0),i.restore()):i.fillText(e.labels[t],v+t*b,k+o.scaleFontSize+3),i.beginPath(),i.moveTo(v+t*b,k+3),o.scaleShowGridLines&&0<t?(i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor,i.lineTo(v+t*b,5)):i.lineTo(v+t*b,k+3),i.stroke();for(i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(v,k+5),i.lineTo(v,5),i.stroke(),i.textAlign="right",i.textBaseline="middle",t=0;t<p.steps;t++)i.beginPath(),i.moveTo(v-3,k-(t+1)*f),o.scaleShowGridLines?(i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor,i.lineTo(v+M+5,k-(t+1)*f)):i.lineTo(v-.5,k-(t+1)*f),i.stroke(),o.scaleShowLabels&&i.fillText(p.labels[t],v-8,k-(t+1)*f)},function(a){function l(l,n){return k-a*t(e.datasets[l].data[n],p,f)}for(var n=0;n<e.datasets.length;n++){i.strokeStyle=e.datasets[n].strokeColor,i.lineWidth=o.datasetStrokeWidth,i.beginPath(),i.moveTo(v,k-a*t(e.datasets[n].data[0],p,f));for(var s=1;s<e.datasets[n].data.length;s++)o.bezierCurve?i.bezierCurveTo(v+b*(s-.5),l(n,s-1),v+b*(s-.5),l(n,s),v+b*s,l(n,s)):i.lineTo(v+b*s,l(n,s));if(i.stroke(),o.datasetFill?(i.lineTo(v+b*(e.datasets[n].data.length-1),k),i.lineTo(v,k),i.closePath(),i.fillStyle=e.datasets[n].fillColor,i.fill()):i.closePath(),o.pointDot)for(i.fillStyle=e.datasets[n].pointColor,i.strokeStyle=e.datasets[n].pointStrokeColor,i.lineWidth=o.pointDotStrokeWidth,s=0;s<e.datasets[n].data.length;s++)i.beginPath(),i.arc(v+b*s,k-a*t(e.datasets[n].data[s],p,f),o.pointDotRadius,0,2*Math.PI,!0),i.fill(),i.stroke()}},i)},b=function(e,o,i){var s,r,c,u,S,f,p,g,b,m,M,v,k,L,F=0;for(S=d,i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily,m=1,u=0;u<e.labels.length;u++)s=i.measureText(e.labels[u]).width,m=s>m?s:m;for(h/e.labels.length<m?(F=45,h/e.labels.length<Math.cos(F)*m?(F=90,S-=m):S-=Math.sin(F)*m):S-=o.scaleFontSize,u=o.scaleFontSize,S=S-5-u,s=Number.MIN_VALUE,r=Number.MAX_VALUE,c=0;c<e.datasets.length;c++)for(g=0;g<e.datasets[c].data.length;g++)e.datasets[c].data[g]>s&&(s=e.datasets[c].data[g]),e.datasets[c].data[g]<r&&(r=e.datasets[c].data[g]);if(c=Math.floor(S/(.66*u)),u=Math.floor(.5*(S/u)),g=o.scaleShowLabels?o.scaleLabel:"",o.scaleOverride?(p={steps:o.scaleSteps,stepValue:o.scaleStepWidth,graphMin:o.scaleStartValue,labels:[]},n(g,p.labels,p.steps,o.scaleStartValue,o.scaleStepWidth)):p=l(S,c,u,s,r,g),f=Math.floor(S/p.steps),u=1,o.scaleShowLabels){for(i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily,s=0;s<p.labels.length;s++)r=i.measureText(p.labels[s]).width,u=r>u?r:u;u+=10}M=h-u-m,b=Math.floor(M/e.labels.length),L=(b-2*o.scaleGridLineWidth-2*o.barValueSpacing-(o.barDatasetSpacing*e.datasets.length-1)-(o.barStrokeWidth/2*e.datasets.length-1))/e.datasets.length,v=h-m/2-M,k=S+o.scaleFontSize/2,a(o,function(){i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(h-m/2+5,k),i.lineTo(h-m/2-M-5,k),i.stroke(),0<F?(i.save(),i.textAlign="right"):i.textAlign="center",i.fillStyle=o.scaleFontColor;for(var t=0;t<e.labels.length;t++)i.save(),0<F?(i.translate(v+t*b,k+o.scaleFontSize),i.rotate(-(F*(Math.PI/180))),i.fillText(e.labels[t],0,0),i.restore()):i.fillText(e.labels[t],v+t*b+b/2,k+o.scaleFontSize+3),i.beginPath(),i.moveTo(v+(t+1)*b,k+3),i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor,i.lineTo(v+(t+1)*b,5),i.stroke();for(i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(v,k+5),i.lineTo(v,5),i.stroke(),i.textAlign="right",i.textBaseline="middle",t=0;t<p.steps;t++)i.beginPath(),i.moveTo(v-3,k-(t+1)*f),o.scaleShowGridLines?(i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor,i.lineTo(v+M+5,k-(t+1)*f)):i.lineTo(v-.5,k-(t+1)*f),i.stroke(),o.scaleShowLabels&&i.fillText(p.labels[t],v-8,k-(t+1)*f)},function(a){i.lineWidth=o.barStrokeWidth;for(var l=0;l<e.datasets.length;l++){i.fillStyle=e.datasets[l].fillColor,i.strokeStyle=e.datasets[l].strokeColor;for(var n=0;n<e.datasets[l].data.length;n++){var s=v+o.barValueSpacing+b*n+L*l+o.barDatasetSpacing*l+o.barStrokeWidth*l;i.beginPath(),i.moveTo(s,k),i.lineTo(s,k-a*t(e.datasets[l].data[n],p,f)+o.barStrokeWidth/2),i.lineTo(s+L,k-a*t(e.datasets[l].data[n],p,f)+o.barStrokeWidth/2),i.lineTo(s+L,k),o.barShowStroke&&i.stroke(),i.closePath(),i.fill()}}},i)},m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},M={}};