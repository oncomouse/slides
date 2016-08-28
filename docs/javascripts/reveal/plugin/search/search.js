var RevealSearch=function(){function e(e,t){var n=document.getElementById(e)||document.body,i=t||"EM",r=new RegExp("^(?:"+i+"|SCRIPT|FORM|SPAN)$"),a=["#ff6","#a0ffff","#9f9","#f99","#f6f"],o=[],l=0,s="",d=[];this.setRegex=function(e){e=e.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),s=new RegExp("("+e+")","i")},this.getRegex=function(){return s.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(e){if(void 0!=e&&e&&s&&!r.test(e.nodeName)){if(e.hasChildNodes())for(var t=0;t<e.childNodes.length;t++)this.hiliteWords(e.childNodes[t]);if(3==e.nodeType&&(nv=e.nodeValue)&&(regs=s.exec(nv))){for(var n=e.parentNode;"SECTION"!=n.nodeName;)n=n.parentNode;for(var c=Reveal.getIndices(n),h=d.length,u=!1,t=0;t<h;t++)d[t].h===c.h&&d[t].v===c.v&&(u=!0);u||d.push(c),o[regs[0].toLowerCase()]||(o[regs[0].toLowerCase()]=a[l++%a.length]);var p=document.createElement(i);p.appendChild(document.createTextNode(regs[0])),p.style.backgroundColor=o[regs[0].toLowerCase()],p.style.fontStyle="inherit",p.style.color="#000";var g=e.splitText(regs.index);g.nodeValue=g.nodeValue.substring(regs[0].length),e.parentNode.insertBefore(p,g)}}},this.remove=function(){for(var e=document.getElementsByTagName(i);e.length&&(el=e[0]);)el.parentNode.replaceChild(el.firstChild,el)},this.apply=function(e){if(void 0!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(n),d}}function t(){var e=document.getElementById("searchinput");e.style.display="inline",e.focus(),e.select()}function n(){if(a){var t=document.getElementById("searchinput").value;o=new e("slidecontent"),i=o.apply(t),r=0}i.length&&i.length<=r&&(r=0),i.length>r&&(Reveal.slide(i[r].h,i[r].v),r++)}var i,r,a,o,l={};if(l.wrapper=document.querySelector(".reveal"),!l.wrapper.querySelector(".searchbox")){var s=document.createElement("div");s.id="searchinputdiv",s.classList.add("searchdiv"),s.style.position="absolute",s.style.top="10px",s.style.left="10px",s.innerHTML='<span><input type="search" id="searchinput" class="searchinput" style="vertical-align: top;"/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJiSURBVHjatFZNaxNBGH5md+Mmu92NVdKDRipSAyqCghgQD4L4cRe86UUtAQ+eFCxoa4/25EXBFi8eBE+eRPoDhB6KgiiixdAPCEkx2pjvTXadd9yNsflwuyUDD/O+u8PzzDPvzOwyx3EwyCZhwG3gAkp7MnpjgbopjsltcD4gjuXZZKeAR348MYLYTm3LzOs/y3j3JTfZxgXWXmTuwPHIc4VmoOmv5IrI53+AO2DdHLjkDWQ3GoEEVFXtXQOvkSnPWcyUceviLhwbDYv8/XIVj97kse7TodLvZXxYxrPUHkQ1ufXs3FEdybEIxucySOesoNvUgWU1cP3MkCBfTFdw9fGaAMVmRELq7LBw2Q3/FaAxxWIRpw+ZIr/7IouPqzUBiqmdHAv7EuhRAwf1er2Vy4x1jW3b2d5Jfvu5IPp7l2LYbcgCFFNb+FoJ7oBqEAqFMPNqFcmEgVMJDfMT+1tvN0pNjERlMS6QA5pFOKxiKVPFhakPeL3It+WGJUDxt2wFR+JhzI7v5ctkd8DXOZAkCYYxhO+lKm4+Xfqz/rIixBuNBl7eOYzkQQNzqX249mRl6zUgEcYkaJrGhUwBinVdh6IouPzwE6/DL5w4oLkH8y981aDf+uq6hlKpJESiUdNfDZi7/ehG9K6KfiA3pml0PLcsq+cSMTj2NL9ukc4UOmz7AZ3+crkC4mHujFvXNaMFB3bEr8xPS6p5O+jXxq4VZtaen7/PwzrntjcLUE0iHPS1Ud1cdiEJl/8WivZk0wXd7zWOMkeF8s0CcAmkNrC2nvXZDbbbN73ccYnZoH9bfgswAFzAe9/h3dbKAAAAAElFTkSuQmCC" id="searchbutton" class="searchicon" style="vertical-align: top; margin-top: -1px;"/></span>',l.wrapper.appendChild(s)}return document.getElementById("searchbutton").addEventListener("click",function(e){n()},!1),document.getElementById("searchinput").addEventListener("keyup",function(e){switch(e.keyCode){case 13:e.preventDefault(),n(),a=!1;break;default:a=!0}},!1),{open:t}}();