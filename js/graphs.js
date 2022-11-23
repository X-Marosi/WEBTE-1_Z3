
let gradeListA = []
let gradeListB = []
let gradeListC = []
let gradeListD = []
let gradeListE = []
let gradeListFX = []
let gradeListFN = []

fetch("z03.xml")
    .then(res => res.text())
    .then(data => {

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "text/xml");
        const A = xml.getElementsByTagName("A");
        const B = xml.getElementsByTagName("B");
        const C = xml.getElementsByTagName("C");
        const D = xml.getElementsByTagName("D");
        const E = xml.getElementsByTagName("E");
        const FX = xml.getElementsByTagName("FX");
        const FN = xml.getElementsByTagName("FN");
        let sumA = 0;
        let sumB = 0;
        let sumC = 0;
        let sumD = 0;
        let sumE = 0;
        let sumFX = 0;
        let sumFN = 0;

        for (const aKey in A) { gradeListA.push(A[aKey].innerHTML); }
        for (const aKey in B) { gradeListB.push(B[aKey].innerHTML); }
        for (const aKey in C) { gradeListC.push(C[aKey].innerHTML); }
        for (const aKey in D) { gradeListD.push(D[aKey].innerHTML); }
        for (const aKey in E) { gradeListE.push(E[aKey].innerHTML); }
        for (const aKey in FX) { gradeListFX.push(FX[aKey].innerHTML); }
        for (const aKey in FN) { gradeListFN.push(FN[aKey].innerHTML); }
        for (let i = 0; i < 6; i++) {
            sumA += parseInt(gradeListA[i]);
            sumB += parseInt(gradeListB[i]);
            sumC += parseInt(gradeListC[i]);
            sumD += parseInt(gradeListD[i]);
            sumE += parseInt(gradeListE[i]);
            sumFX += parseInt(gradeListFX[i]);
            sumFN += parseInt(gradeListFN[i]);
        }

        let dataBarVertical = [
            {
                x: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                y: gradeListA,
                type: 'bar',
                name: 'A',
                marker:{
                    color: 'rgb(38,70,83)'

                }
            },
            {
                x: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                y: gradeListB,
                type: 'bar',
                name: 'B',
                marker:{
                    color: 'rgb(42,157,143)'
                }
            },
            {
                x: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                y: gradeListC,
                type: 'bar',
                name: 'C',
                marker:{
                    color: 'rgb(233,196,106)'
                }
            },
            {
                x: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                y: gradeListD,
                type: 'bar',
                name: 'D',
                marker:{
                    color: 'rgb(244,162,97)'
                }
            },
            {
                x: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                y: gradeListE,
                type: 'bar',
                name: 'E',
                marker:{
                    color: 'rgb(244,162,97)'
                }
            },
            {
                x: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                y: gradeListFX,
                type: 'bar',
                name: 'FX',
                marker:{
                    color: 'rgb(238,137,89)'
                }
            },
            {
                x: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                y: gradeListFN,
                type: 'bar',
                name: 'FN',
                marker:{
                    color: 'rgb(231,111,81)'
                }
            }];

        let dataBarHorizontal = [
            {
                y: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                x: gradeListA,
                type: 'bar',
                name: 'A',
                orientation: 'h',
                marker:{
                    color: 'rgb(38,70,83)'

                }
            },
            {
                y: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                x: gradeListB,
                type: 'bar',
                name: 'B',
                orientation: 'h',
                marker:{
                    color: 'rgb(42,157,143)'
                }
            },
            {
                y: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                x: gradeListC,
                type: 'bar',
                name: 'C',
                orientation: 'h',
                marker:{
                    color: 'rgb(233,196,106)'
                }
            },
            {
                y: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                x: gradeListD,
                type: 'bar',
                name: 'D',
                orientation: 'h',
                marker:{
                    color: 'rgb(244,162,97)'
                }
            },
            {
                y: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                x: gradeListE,
                type: 'bar',
                name: 'E',
                orientation: 'h',
                marker:{
                    color: 'rgb(244,162,97)'
                }
            },
            {
                y: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                x: gradeListFX,
                type: 'bar',
                name: 'FX',
                orientation: 'h',
                marker:{
                    color: 'rgb(238,137,89)'
                }
            },
            {
                y: ["2021/22","2020/21","2019/20","2018/11","2017/18","2016/17"],
                x: gradeListFN,
                type: 'bar',
                name: 'FN',
                orientation: 'h',
                marker:{
                    color: 'rgb(231,111,81)'
                }
            }];

        let dataPie1 = [{
            values: [gradeListA[0], gradeListB[0], gradeListC[0], gradeListD[0], gradeListE[0], gradeListFX[0], gradeListFN[0]],
            labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
            type: 'pie',
            textinfo: "label+percent",
            marker:{
                colors: ['rgb(204,238,222)',
                    'rgb(179,232,220)',
                    'rgb(153,225,217)',
                    'rgb(90,190,194)',
                    'rgb(59,172,182)',
                    'rgb(27,154,170)',
                    'rgb(47,143,157)']
            }
        }];

        let dataPie2 = [{
            values: [gradeListA[1], gradeListB[1], gradeListC[1], gradeListD[1], gradeListE[1], gradeListFX[1], gradeListFN[1]],
            labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
            type: 'pie',
            textinfo: "label+percent",
            marker:{
                colors: ['rgb(239,116,92)',
                    'rgb(208,98,87)',
                    'rgb(177,80,82)',
                    'rgb(146,62,77)',
                    'rgb(114,43,71)',
                    'rgb(83,25,66)',
                    'rgb(52,7,61)']
            }
        }];

        let dataPie3 = [{
            values: [gradeListA[2], gradeListB[2], gradeListC[2], gradeListD[2], gradeListE[2], gradeListFX[2], gradeListFN[2]],
            labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
            type: 'pie',
            textinfo: "label+percent",
            marker:{
                colors: ['rgb(168,116,210)',
                    'rgb(236,224,245)',
                    'rgb(216,193,235)',
                    'rgb(197,163,225)',
                    'rgb(149,86,200)',
                    'rgb(129,60,185)',
                    'rgb(101,47,144)']
            }
        }];

        let dataPie4 = [{
            values: [gradeListA[3], gradeListB[3], gradeListC[3], gradeListD[3], gradeListE[3], gradeListFX[3], gradeListFN[3]],
            labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
            type: 'pie',
            textinfo: "label+percent",
            marker: {
                colors: ['rgb(255,215,138)',
                    'rgb(253,199,123)',
                    'rgb(251,183,107)',
                    'rgb(248,150,76)',
                    'rgb(244,118,45)',
                    'rgb(250,167,92)',
                    'rgb(246,134,61)',]
            }
        }];

        let dataPie5 = [{
            values: [gradeListA[4], gradeListB[4], gradeListC[4], gradeListD[4], gradeListE[4], gradeListFX[4], gradeListFN[4]],
            labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
            type: 'pie',
            textinfo: "label+percent",
            marker:{
                colors: ['rgb(166,224,72)',
                    'rgb(150,222,90)',
                    'rgb(193,236,65)',
                    'rgb(241,236,77)',
                    'rgb(246,222,46)',
                    'rgb(239,202,64)',
                    'rgb(239,173,75)']
            }
        }];

        let dataPie6 = [{
            values: [gradeListA[5], gradeListB[5], gradeListC[5], gradeListD[5], gradeListE[5], gradeListFX[5], gradeListFN[5]],
            labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
            type: 'pie',
            textinfo: "label+percent",
            marker:{
                colors: ['rgb(42,104,88)',
                    'rgb(78,164,135)',
                    'rgb(63,138,114)',
                    'rgb(53,121,101)',
                    'rgb(21,69,62)',
                    'rgb(31,86,75)',
                    'rgb(10,52,49)']
            }
        }];

        let dataPie7 = [{
            values: [sumA, sumB, sumC, sumD, sumE, sumFX, sumFN],
            labels: ['A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
            domain: {column: 0},
            name: '',
            hoverinfo: 'label+percent+name',
            textinfo: "label+percent",
            hole: .4,
            type: 'pie',
            marker:{
                colors: ['rgb(56,102,65)',
                    'rgb(106,153,78)',
                    'rgb(167,201,87)',
                    'rgb(242,232,207)',
                    'rgb(188,71,73)',
                    'rgb(219,80,74)',
                    'rgb(255,111,89)']
            }
        }];


        Plotly.newPlot('barGraph', dataBarVertical,{},{responsive:true, height: 500});
        Plotly.newPlot('pieOne', dataPie1, {showlegend: false, title: {text: "2021/22"}},{responsive:true});
        Plotly.newPlot('pieTwo', dataPie2, {showlegend: false, title: {text: "2020/21"}},{responsive:true});
        Plotly.newPlot('pieThree', dataPie3, {showlegend: false, title: {text: "2019/20"}},{responsive:true});
        Plotly.newPlot('pieFour', dataPie4, {showlegend: false, title: {text: "2018/19"}},{responsive:true});
        Plotly.newPlot('pieFive', dataPie5, {showlegend: false, title: {text: "2017/18"}},{responsive:true});
        Plotly.newPlot('pieSix', dataPie6, {showlegend: false, title: {text: "2016/17"}},{responsive:true});
        Plotly.newPlot('donutGraph', dataPie7, {showlegend: false, title: {text: "All Years"}},{responsive:true});


        window.addEventListener("resize", () => {
            if (window.innerWidth < 600) {
                Plotly.react('barGraph', dataBarHorizontal, {legend: {"orientation": "h"}, height: 1000,  yaxis: {tickangle: 0}});

            } else {
                Plotly.react('barGraph', dataBarVertical, {height: 500});
            }
        });
    })