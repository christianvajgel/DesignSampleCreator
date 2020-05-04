<template>
    <div style="margin-bottom: 100px;" id="designDiv">
        <div style="text-align: left; margin: 25px;">
            <h1 class="text-muted">Design Sample Creator</h1>
            <h5>powered by Vue</h5>
            <h6>© Garden Hub Corp <sup>LGPL-3.0</sup></h6>
            <div>
                <a :href="`https://github.com/christianvajgel/`" target="_blank">
                    <font-awesome-icon id="github" :icon="github" class="iconSocialNetwork" style="--colorIcon: #24292e;"/>
                </a>
                <a :href="`https://www.linkedin.com/in/christianvajgel/`" target="_blank">
                    <font-awesome-icon id="linkedIn" :icon="linkedIn" class="iconSocialNetwork" style="--colorIcon: #0275b4;"/>
                </a>
                <b-tooltip target="github" triggers="hover">
                    GitHub
                </b-tooltip>
                <b-tooltip target="linkedIn" triggers="hover">
                    LinkedIn
                </b-tooltip>
            </div>
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
                    <td><h5 class="text-muted" style="margin: 0 auto;">Normal</h5></td>
                    <td><b-button class="personalizedButton" id="button1Normal" style="--colorBorder: #86af49; --colorText: #86af49; --colorBackground: #86af49;">Primary</b-button></td>
                    <td><b-button class="personalizedButton" id="button2Normal" style="--colorBorder: #ffcc33; --colorText: #ffcc33; --colorBackground: #ffcc33;">Warning</b-button></td>
                    <td><b-button class="personalizedButton" id="button3Normal" style="--colorBorder: #dc5539; --colorText: #dc5539; --colorBackground: #dc5539;">Danger</b-button></td>
                    <td><b-button class="personalizedButton" id="button4Normal" style="--colorBorder: #904c2a; --colorText: #904c2a; --colorBackground: #904c2a;">Info</b-button></td>
                </tr>
                <tr class="trDivButtonsShadow">
                    <td><h5 class="text-muted" style="margin: 0 auto;">Hover</h5></td>
                    <td><b-button class="personalizedButton" id="button1Hover" style="--colorBorder: #86af49; --colorText: #86af49; --colorBackground: #86af49;">Primary</b-button></td>
                    <td><b-button class="personalizedButton" id="button2Hover" style="--colorBorder: #ffcc33; --colorText: #ffcc33; --colorBackground: #ffcc33;">Warning</b-button></td>
                    <td><b-button class="personalizedButton" id="button3Hover" style="--colorBorder: #dc5539; --colorText: #dc5539; --colorBackground: #dc5539;">Danger</b-button></td>
                    <td><b-button class="personalizedButton" id="button4Hover" style="--colorBorder: #904c2a; --colorText: #904c2a; --colorBackground: #904c2a;">Info</b-button></td>
                </tr>
                <tr class="trDivButtonsShadow">
                    <td><h5 class="text-muted" style="margin: 0 auto;">Active</h5></td>
                    <td><b-button class="personalizedButton" id="button1Active" style="--colorBorder: #86af49; --colorText: #86af49; --colorBackground: #86af49;">Primary</b-button></td>
                    <td><b-button class="personalizedButton" id="button2Active" style="--colorBorder: #ffcc33; --colorText: #ffcc33; --colorBackground: #ffcc33;">Warning</b-button></td>
                    <td><b-button class="personalizedButton" id="button3Active" style="--colorBorder: #dc5539; --colorText: #dc5539; --colorBackground: #dc5539;">Danger</b-button></td>
                    <td><b-button class="personalizedButton" id="button4Active" style="--colorBorder: #904c2a; --colorText: #904c2a; --colorBackground: #904c2a;">Info</b-button></td>
                </tr>
                <tr class="trDivButtonsShadow">
                    <td><h5 class="text-muted" style="margin: 0 auto;">Disabled</h5></td>
                    <td><b-button disabled class="personalizedButton" id="button1Disabled" style="--colorBorder: #86af49; --colorText: #86af49; --colorBackground: #86af49;">Primary</b-button></td>
                    <td><b-button disabled class="personalizedButton" id="button2Disabled" style="--colorBorder: #ffcc33; --colorText: #ffcc33; --colorBackground: #ffcc33;">Warning</b-button></td>
                    <td><b-button disabled class="personalizedButton" id="button3Disabled" style="--colorBorder: #dc5539; --colorText: #dc5539; --colorBackground: #dc5539;">Danger</b-button></td>
                    <td><b-button disabled class="personalizedButton" id="button4Disabled" style="--colorBorder: #904c2a; --colorText: #904c2a; --colorBackground: #904c2a;">Info</b-button></td>
                </tr>
                <br>
                <tr>
                    <td></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bPrimary"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bWarning"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bDanger"></verte></td>
                    <td><verte menuPosition="bottom" :draggable="true" model="hex" v-model="bInfo"></verte></td>
                </tr>
                <tr>
                    <td></td>
                    <td><p>{{ bPrimary.toUpperCase() }}</p></td>
                    <td><p>{{ bWarning.toUpperCase() }}</p></td>
                    <td><p>{{ bDanger.toUpperCase() }}</p></td>
                    <td><p>{{ bInfo.toUpperCase() }}</p></td>
                </tr>
            </table>
        </div>
        <br>
        <div>
            <b-button class="returnDefaultButton" @click="returnDefault">Default colors</b-button>
            <b-button class="saveDesignButton" @click="saveDesign">Save Design</b-button>
            <b-button class="changeColorsButton" @click="changeStyle">Change colors</b-button>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
    import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
    import htmlToImage from 'html-to-image';
    export default {
        name: "DesignSamples",
        data() {
            return {
                github:faGithub,
                linkedIn:faLinkedinIn,
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

                let button1Normal = document.getElementById("button1Normal");
                button1Normal.style.setProperty('border-color',this.bPrimary,'important');
                button1Normal.style.setProperty('color',this.bPrimary,'important');

                let button1Hover = document.getElementById("button1Hover");
                button1Hover.style.setProperty('border-color',this.bPrimary,'important');
                button1Hover.style.setProperty('background-color',this.bPrimary,'important');

                let button1Active = document.getElementById("button1Active");
                button1Active.style.setProperty('border-color',this.bPrimary,'important');
                button1Active.style.setProperty('background-color',this.bPrimary,'important');

                let button1Disabled = document.getElementById("button1Disabled");
                button1Disabled.style.setProperty('border-color',this.bPrimary,'important');
                button1Disabled.style.setProperty('background-color',this.bPrimary,'important');


                let button2Normal = document.getElementById("button2Normal");
                button2Normal.style.setProperty('border-color',this.bWarning,'important');
                button2Normal.style.setProperty('color',this.bWarning,'important');

                let button2Hover = document.getElementById("button2Hover");
                button2Hover.style.setProperty('border-color',this.bWarning,'important');
                button2Hover.style.setProperty('background-color',this.bWarning,'important');

                let button2Active = document.getElementById("button2Active");
                button2Active.style.setProperty('border-color',this.bWarning,'important');
                button2Active.style.setProperty('background-color',this.bWarning,'important');

                let button2Disabled = document.getElementById("button2Disabled");
                button2Disabled.style.setProperty('border-color',this.bWarning,'important');
                button2Disabled.style.setProperty('background-color',this.bWarning,'important');


                let button3Normal = document.getElementById("button3Normal");
                button3Normal.style.setProperty('border-color',this.bDanger,'important');
                button3Normal.style.setProperty('color',this.bDanger,'important');

                let button3Hover = document.getElementById("button3Hover");
                button3Hover.style.setProperty('border-color',this.bDanger,'important');
                button3Hover.style.setProperty('background-color',this.bDanger,'important');

                let button3Active = document.getElementById("button3Active");
                button3Active.style.setProperty('border-color',this.bDanger,'important');
                button3Active.style.setProperty('background-color',this.bDanger,'important');

                let button3Disabled = document.getElementById("button3Disabled");
                button3Disabled.style.setProperty('border-color',this.bDanger,'important');
                button3Disabled.style.setProperty('background-color',this.bDanger,'important');


                let button4Normal = document.getElementById("button4Normal");
                button4Normal.style.setProperty('border-color',this.bInfo,'important');
                button4Normal.style.setProperty('color',this.bInfo,'important');

                let button4Hover = document.getElementById("button4Hover");
                button4Hover.style.setProperty('border-color',this.bInfo,'important');
                button4Hover.style.setProperty('background-color',this.bInfo,'important');

                let button4Active = document.getElementById("button4Active");
                button4Active.style.setProperty('border-color',this.bInfo,'important');
                button4Active.style.setProperty('background-color',this.bInfo,'important');

                let button4Disabled = document.getElementById("button4Disabled");
                button4Disabled.style.setProperty('border-color',this.bInfo,'important');
                button4Disabled.style.setProperty('background-color',this.bInfo,'important');
            },
            saveDesign(){
                htmlToImage.toJpeg(document.getElementById('designDiv'),
                    { quality: 1,backgroundColor:'#f7f7f6' })
                    .then(function (dataUrl) {
                        let link = document.createElement('a');
                        link.download = 'design_created_on_GardenHubPlatform.jpeg';
                        link.href = dataUrl;
                        link.click();
                    });
            },
            returnDefault() {
                location.reload();
            }
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

    .personalizedButton {
        /*background-color: transparent !important;*/
        /*border-color: var(--colorBorder) !important;*/
        /*color: var(--colorText);*/
    }

    .personalizedButton:hover {
        /*background-color: var(--colorBackground) !important;*/
        /*border-color: var(--colorBorder) !important;*/
        /*color: white !important;*/
    }

    #button1Normal {
        background-color: transparent;
        border-color: #86af49;
        color: #86af49;
    }

    #button1Hover {
        background-color: #86af49;
        border-color: #86af49;
        color: white !important;
    }

    #button1Active {
        background-color: #86af49;
        border-color: #86af49;
        color: white !important;
    }

    #button1Disabled {
        background-color: #86af49;
        border-color: #86af49;
        color: white !important;
    }

    #button2Normal {
        background-color: transparent;
        border-color: #ffcc33;
        color: #ffcc33;
    }

    #button2Hover {
        background-color: #ffcc33;
        border-color: #ffcc33;
        color: white !important;
    }

    #button2Active {
        background-color: #ffcc33;
        border-color: #ffcc33;
        color: white !important;
    }

    #button2Disabled {
        background-color: #ffcc33;
        border-color: #ffcc33;
        color: white !important;
    }

    #button3Normal {
        background-color: transparent;
        border-color: #dc5539;
        color: #dc5539;
    }

    #button3Hover {
        background-color: #dc5539;
        border-color: #dc5539;
        color: white !important;
    }

    #button3Active {
        background-color: #dc5539;
        border-color: #dc5539;
        color: white !important;
    }

    #button3Disabled {
        background-color: #dc5539;
        border-color: #dc5539;
        color: white !important;
    }

    #button4Normal {
        background-color: transparent;
        border-color: #904c2a;
        color: #904c2a;
    }

    #button4Hover {
        background-color: #904c2a;
        border-color: #904c2a;
        color: white !important;
    }

    #button4Active {
        background-color: #904c2a;
        border-color: #904c2a;
        color: white !important;
    }

    #button4Disabled {
        background-color: #904c2a;
        border-color: #904c2a;
        color: white !important;
    }

    .changeColorsButton {
        margin: 5px;
        background-color: transparent !important;
        border-color: #86af49 !important;
        color: #86af49 !important;
    }

    .changeColorsButton:hover {
        background-color: #86af49 !important;
        border-color: #86af49 !important;
        color: white !important;
    }

    .saveDesignButton {
        margin: 5px;
        background-color: transparent !important;
        border-color: #904c2a !important;
        color: #904c2a !important;
    }

    .saveDesignButton:hover {
        background-color: #904c2a !important;
        border-color: #904c2a !important;
        color: white !important;
    }

    .returnDefaultButton {
        margin: 5px;
        background-color: transparent !important;
        border-color: #dc5539 !important;
        color: #dc5539 !important;
    }

    .returnDefaultButton:hover {
        background-color: #dc5539 !important;
        border-color: #dc5539 !important;
        color: white !important;
    }

    .iconSocialNetwork {
        font-size: 2rem;
        margin: 5px;
        color: #6c757d
    }

    .iconSocialNetwork:hover {
        color: var(--colorIcon) !important;
    }

</style>