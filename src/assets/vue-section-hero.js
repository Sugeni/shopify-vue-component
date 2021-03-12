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