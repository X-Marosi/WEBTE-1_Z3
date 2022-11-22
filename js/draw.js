let phpNumbers = new EventSource("http://old.iolab.sk/evaluation/sse/sse.php");
let slider = document.getElementById("slider");
let number = document.getElementById("numberInput");
let amplitude = 1;
let stopped = 1;

traceSin={x: [], y: [], type: 'scatter', line: {color: 'rgb(4,231,98)', width: 4}, name : 'Sinus'};
traceCos={x: [], y: [], type: 'scatter', line: {color: 'rgb(247,255,26)', width: 4}, name: 'Cosine'}


phpNumbers.addEventListener("message",(event) => {
    let data = JSON.parse(event.data);
    if(stopped){
        traceSin.y.push(data.y1 * amplitude);
        traceCos.y.push(data.y2 * amplitude);
        traceSin.x.push(data.x);
        traceCos.x.push(data.x);
        Plotly.newPlot(drawGraph, graph,{responsive:true});}
})

slider.oninput = function() {
    slider.update();
    number.value = amplitude;
}

number.oninput = function() {
    slider.shadowRoot.getElementById("slider").value = number.value;
    slider.update();
    amplitude = number.value;
}

function stopPlot(){
    stopped = 0;
    document.getElementById("stop").setAttribute("disabled","true");
}

function hideTrace(){
    traceSin.line = {
        color: 'rgba(0,0,0,0)'
    };
    traceSin.name = '';
    traceCos.line = {
        color: 'rgba(0,0,0,0)'
    };
    traceCos.name = '';

    if(document.getElementById("trace1CheckBox").checked){
        traceSin.line = {
            color: 'rgb(4,231,98)',
            width: 4
        };
        traceSin.name = 'Sinus';
    }
    if(document.getElementById("trace2CheckBox").checked){
        traceCos.line = {
            color: 'rgb(247,255,26)',
            width: 4
        };
        traceCos.name = 'Cosine';
    }
    Plotly.newPlot(drawGraph, graph,{responsive:true});
}

drawGraph = document.getElementById('drawGraph');
graph = [traceSin,traceCos]

Plotly.newPlot(drawGraph, graph,{responsive:true});