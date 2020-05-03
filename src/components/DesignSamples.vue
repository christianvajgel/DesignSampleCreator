<template>
    <div style="margin-bottom: 100px;">
        <div style="text-align: left; margin: 25px;">
            <h1 class="text-muted">Design Sample Creator</h1>
            <h6>© Garden Hub Corp <sup>All rights reserved</sup></h6>
        </div>

        <br>

        <div class="divLogoSlogan">
            <table class="tableLogoSlogan" id="tableLogoSloganShadow">
                <tr><h1 id="logoH1">{{ logoInput }}</h1></tr>
                <tr><h5 id="sloganH5">{{ sloganInput }}</h5></tr>
            </table>
        </div>

        <div class="divLogoSlogan">
            <table>
                <tr><b-input size="md" placeholder="Logo text" v-model="logoInput"></b-input></tr>
                <tr><b-input size="md" placeholder="Slogan text" v-model="sloganInput"></b-input></tr>
            </table>
        </div>

        <div>
            <table>
                <tr>
                    <td>Logo</td>
                    <td>Slogan</td>
                    <td>BG Color</td>
                </tr>
                <tr>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="logoColor"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="sloganColor"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bgColor"></verte></td>
                </tr>
                <tr>
                    <td><p>{{ logoColor.toUpperCase() }}</p></td>
                    <td><p>{{ sloganColor.toUpperCase() }}</p></td>
                    <td><p>{{ bgColor.toUpperCase() }}</p></td>
                </tr>
            </table>
        </div>

        <div id="divColorTable">
            <table class="tableDivColors" id="tableDivColorsShadow">
                <tr class="trDivColorsShadow">
                    <td style="background-color: white"><div class="divColors" id="color1"></div></td>
                    <td style="background-color: white"><div class="divColors" id="color2"></div></td>
                    <td style="background-color: white"><div class="divColors" id="color3"></div></td>
                    <td style="background-color: white"><div class="divColors" id="color4"></div></td>
                    <td style="background-color: white"><div class="divColors" id="color5"></div></td>
                </tr>
                <br>
                <tr>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="color1"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="color2"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="color3"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="color4"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="color5"></verte></td>
                </tr>
                <tr>
                    <td><p>{{ color1.toUpperCase() }}</p></td>
                    <td><p>{{ color2.toUpperCase() }}</p></td>
                    <td><p>{{ color3.toUpperCase() }}</p></td>
                    <td><p>{{ color4.toUpperCase() }}</p></td>
                    <td><p>{{ color5.toUpperCase() }}</p></td>
                </tr>
            </table>
        </div>

        <div id="divButtonTable">
            <table class="tableDivButtons" id="tableDivButtonShadow">
                <tr class="trDivButtonsShadow">
                    <td><b-button id="button1">Primary</b-button></td>
                    <td><b-button id="button2">Warning</b-button></td>
                    <td><b-button id="button3">Danger</b-button></td>
                    <td><b-button id="button4">Info</b-button></td>
                </tr>
                <br>
                <tr>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bPrimary"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bWarning"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bDanger"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bInfo"></verte></td>
                </tr>
                <tr>
                    <td><p>{{ bPrimary.toUpperCase() }}</p></td>
                    <td><p>{{ bWarning.toUpperCase() }}</p></td>
                    <td><p>{{ bDanger.toUpperCase() }}</p></td>
                    <td><p>{{ bInfo.toUpperCase() }}</p></td>
                </tr>
            </table>
        </div>
        <br>
        <b-button class="changeColorsButton" @click="changeStyle">Change colors</b-button>
    </div>
</template>

<script>
    export default {
        name: "DesignSamples",
        data() {
            return {
                componentKey:0,
                logoColor:'#86AF49',
                sloganColor:'#6c757d',
                logoInput:'Garden Hub',
                sloganInput:'Grow your online roots',
                bgColor:'#FFFFFF',
                color1:'#86af49',
                color2:'#ffcc33',
                color3:'#cf6024',
                color4:'#dc5539',
                color5:'#904c2a',
                bPrimary:'#86af49',
                bWarning:'#ffcc33',
                bDanger:'#dc5539',
                bInfo:'#904c2a',
            }
        },
        methods: {
            changeStyle(){
                this.componentKey += 1;

                let logo = document.getElementById("logoH1");
                logo.style.color = this.logoColor;
                let slogan = document.getElementById("sloganH5");
                slogan.style.color = this.sloganColor;
                let backgroundColor = document.getElementById("tableLogoSloganShadow");
                backgroundColor.style.backgroundColor = this.bgColor;

                let divColor1 = document.getElementById("color1");
                divColor1.style.backgroundColor = this.color1;
                let divColor2 = document.getElementById("color2");
                divColor2.style.backgroundColor = this.color2;
                let divColor3 = document.getElementById("color3");
                divColor3.style.backgroundColor = this.color3;
                let divColor4 = document.getElementById("color4");
                divColor4.style.backgroundColor = this.color4;
                let divColor5 = document.getElementById("color5");
                divColor5.style.backgroundColor = this.color5;

            },
        }
    }
</script>

<style>

    table {
        margin: 0 auto !important;
    }

    tr,td {
        text-align: center;
        padding: 10px !important;
        margin: 25px !important;

    }

    .divLogoSlogan {
        text-align: center !important;
        margin-bottom: 20px;
    }

    .tableLogoSlogan {
        background-color: white;
    }

    #tableLogoSloganShadow {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    }

    #divColorTable {
        margin-top: 50px;
        margin-bottom: 20px;
        display: inline-flex;
        text-align: center !important;
    }

    .divColors{
        width: 200px;
        height: 200px;
    }

    .tableDivColors {
        /*background-color: white;*/
    }

    #tableDivColorsShadow {
        /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);*/
    }

    .trDivColorsShadow {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    }

    #divButtonTable {
        margin-top: 50px;
    }

    .trDivButtonsShadow {
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    }

    #color1 {
        background-color: #86af49;
    }

    #color2 {
        background-color: #ffcc33;

    }

    #color3 {
        background-color: #cf6024;
    }

    #color4 {
        background-color: #dc5539;
    }

    #color5 {
        background-color: #904c2a;
    }

    #logoH1{
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 60px;
        color: #86af49;
    }

    #sloganH5{
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 30px;
        color: #6c757d;
    }

    #button1 {
        background-color: transparent;
        border-color: #86af49;
        color: #86af49;
    }

    #button1:hover {
        background-color: #86af49;
        border-color: #86af49;
        color: white;
    }

    #button2 {
        background-color: transparent;
        border-color: #ffcc33;
        color: #ffcc33;
    }

    #button2:hover {
        background-color: #ffcc33;
        border-color: #ffcc33;
        color: white;
    }

    #button3 {
        background-color: transparent;
        border-color: #dc5539;
        color: #dc5539;
    }

    #button3:hover {
        background-color: #dc5539;
        border-color: #dc5539;
        color: white;
    }

    #button4 {
        background-color: transparent;
        border-color: #904c2a;
        color: #904c2a;
    }

    #button4:hover {
        background-color: #904c2a;
        border-color: #904c2a;
        color: white;
    }

    .changeColorsButton {
        background-color: transparent !important;
        border-color: #86af49 !important;
        color: #86af49 !important;
    }

    .changeColorsButton:hover {
        background-color: #86af49 !important;
        border-color: #86af49 !important;
        color: white !important;
    }

</style>