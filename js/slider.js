class SampleComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML =
            `<style>
                .sliderHandle{
                   position:absolute;
                   top: 546px;
                   color: rgba(0,0,0,0.7);
                   border:1px solid #797373;
                   min-width:30px;
                   pointer-events: none;
                   background-color: #e7e5e5;
                   border-radius: 5px;
                }

                .handleValue{
                   display: flex;
                   justify-content: center;
                }
            </style>

           <div class="sliderHandle">    
                <span id="sliderValue" class="handleValue"></span>
           </div>
           <input style="width:100%" type="range" id="slider" max=`+this.getAttribute("max")+` min=`+this.getAttribute("min")+` value="1">`

        this.shadowRoot.getElementById('slider').addEventListener("input",event=>this.valueChange(event));
        let thisVal = this;
        window.addEventListener('resize', function() {thisVal.refresh();}, true);
        this.refresh()
    }

    valueChange(event) {
        this.refresh();
        amplitude = event.target.value;
    }

    refresh() {
        let slider = this.shadowRoot.querySelector('#slider');
        let sliderValue = this.shadowRoot.querySelector('#sliderValue');
        let offSet = slider.offsetWidth / (parseInt(slider.max) - parseInt(slider.min));
        let px = ((slider.valueAsNumber - parseInt(slider.min)) * offSet) - (sliderValue.offsetWidth / 2) + 120;
        sliderValue.innerHTML = "<b>"+slider.value+"</b>";
        sliderValue.parentElement.style.left = px + 'px';
    }
}

if (!customElements.get('sample-component')) {
    ( customElements.define('sample-component', SampleComponent));
}