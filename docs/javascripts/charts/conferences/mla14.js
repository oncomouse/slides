function load_charts(){var e={labels:["",2,"",4,"",6,"",8,"",10,"",12,""],datasets:[{fillColor:"rgba(151,187,205,0.5)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointStrokeColor:"#fff",data:[.5,.130434782608696,.162162162162162,.5,.238095238095238,.258064516129032,.239130434782609,.333333333333333,.027777777777778,.34375,.176470588235294,.428571428571429,.421052631578947]}]},o=$("#slide4_figure1").get(0).getContext("2d");new Chart(o).Line(e,{scaleOverride:!0,scaleSteps:6,scaleStepWidth:.1,scaleStartValue:0});var t={labels:["",2,"",4,"",6,"",8,"",10,"",12,""],datasets:[{fillColor:"rgba(151,187,205,0.5)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointStrokeColor:"#fff",data:[8,3,6,7,5,8,11,5,1,22,3,15,8]}]},r=$("#slide4_figure2").get(0).getContext("2d");new Chart(r).Line(t,{scaleOverride:!0,scaleSteps:5,scaleStepWidth:5,scaleStartValue:0});var a=$("#slide5_figure1").get(0).getContext("2d");new Chart(a).Line(e,{scaleOverride:!0,scaleSteps:6,scaleStepWidth:.1,scaleStartValue:0});var l=$("#slide6_figure1").get(0).getContext("2d"),s={labels:["",2,"",4,"",6,"",8,"",10,"",12,""],datasets:[{fillColor:"rgba(151,187,205,0.5)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointStrokeColor:"#fff",data:[1,1,0,1,0,0,4,2,0,3,0,0,1]}]};new Chart(l).Line(s,{scaleOverride:!0,scaleSteps:5,scaleStepWidth:1,scaleStartValue:0});var i=$("#slide7_figure1").get(0).getContext("2d"),f={labels:["",2,"",4,"",6,"",8,"",10,"",12,""],datasets:[{fillColor:"rgba(151,187,205,0.5)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointStrokeColor:"#fff",data:[3,0,0,2,0,2,1,0,0,10,2,12,5]}]};new Chart(i).Line(f,{scaleOverride:!0,scaleSteps:7,scaleStepWidth:2,scaleStartValue:0});var C=$("#slide9_figure1").get(0).getContext("2d"),d={labels:["",2,"",4,"",6,"",8,"",10,"",12,""],datasets:[{fillColor:"rgba(151,187,205,0.5)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointStrokeColor:"#fff",data:[3,0,0,2,0,2,1,0,0,10,2,12,5]},{fillColor:"rgba(104, 68, 50, 0.35)",strokeColor:"rgba(104, 68, 50, 0.85)",pointColor:"rgba(104, 68, 50, 0.85)",pointStrokeColor:"#fff",pointStrokeColor:"#fff",data:[3,0,0,1,0,1,1,0,0,7,2,7,3]}]};new Chart(C).Line(d,{scaleOverride:!0,scaleSteps:7,scaleStepWidth:2,scaleStartValue:0});var n=$("#slide11_figure1").get(0).getContext("2d"),g=[{value:5,color:"#00581a"},{value:7,color:"#aad6e6"},{value:17,color:"#ffb1b3"},{value:12,color:"#a8e3bd"},{value:4,color:"#fde910"},{value:13,color:"#aa4203"},{value:37,color:" #0056a7"},{value:4,color:"#c99415"},{value:3,color:"#317d82"},{value:19,color:"#e6bea5"}];new Chart(n).Pie(g,{segmentShowStroke:!0})}