import './vue-section-hero.scss';
import Vue from 'vue';
import Hero from './hero.vue';
  
export class HeroApp {
    constructor(id, data) {
        this._sectionId = id;
        this._appType = 'vue-hero';
        this._appInstance = null;
        this._appData = data;
        this._mountingNode = null;
    }

    getSettingAlign(align){
        if(align === 'center'){
            this._appData['settings']['styleApp'] = "vue-hero-app" ;
            this._appData['settings']['styleWrapper'] = "hero-wrapper center" ;
        } else {
            this._appData['settings']['styleApp'] = "vue-hero-app " + align ;
            this._appData['settings']['styleWrapper'] = "hero-wrapper side" ; 
        }   
    }
    
    getSectionId() {
        return this._sectionId;
    }
    setMountingNode() {
        this._mountingNode = document.querySelector(`div[data-app-id="${this._sectionId}"][data-app-type="${this._appType}"]`);
    }
    // required
    kill() {
        this._appInstance.kill();
    }
    // required
    init() {
        this.setMountingNode();
        this.getSettingAlign(this._appData['settings'].text_alignment);
        this._appInstance = new Vue({
            el: this._mountingNode,
            render: h => h(Hero, {
                props: {
                    ...this._appData
                }
            }),
            methods: {
                kill() {
                    this.$destroy();
                }
            }
        });
    }
};