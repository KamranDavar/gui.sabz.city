/* For license and copyright information please see LEGAL file in repository */

import { LitElement, css, html } from '../lit-element/lit-element.js'
import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

export class PageGroups extends LitElement {
    // constructor() {
    //     super()
    // 
    // }
    static get properties() {
        return {
            allGroups: Array,
            joinedGroups: Array,
            activeName: String,
            activeDescription: String,
            activeIcon: String,
            activeTime: String,
            activeCoordinate: String,
            activeType: String,
        }
    }
    static get styles() {
        return [
            Application.DesignLanguageStyles,
            css`
                #container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 5vh;
                }

                .page-title {
                    color: var(--fifth-text-color);
                    font-weight: 500;
                }

                .card {
                    align-items: center;
                    width: 40%;
                    margin-bottom: 10vh;
                }

                .card .card-title {
                    font-size: var(--h3-text-size);
                    font-weight: 300;
                }

                .card .search-box {
                    direction: ltr;
                    text-align: right;
                    margin-top: 10px;
                    margin-bottom: 15px;
                }

                .group-list {
                    width: 80%;
                }

                .group-list .item {
                    border-bottom: var(--heavy-light-border);
                }

                .card-description {
                    margin-top: 3em;
                    width: 70%;
                    font-size: var(--medium-text-size);
                    color: var(--light-text-color);
                    font-weight: 300;
                    text-align: center;
                }

                #dialog {
                    width: 40%;
                    min-width: 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .dialog-title-container {
                    display: flex;
                    align-items: center;
                }

                .dialog-description {
                    text-align: center;
                    width: 80%;
                    line-height: 2;
                }

                .dialog-title {
                    color: var(--fifth-text-color);
                    align-self: flex-start;
                }

                .dialog-subtitle {
                    font-weight: 300;
                    border-bottom: var(--light-border);
                    margin-bottom: 0;
                    padding-bottom: 15px;
                }

                .join-switch-container {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .join-switch-container span {
                    margin: 10px;
                }
            `
        ]
    }
    render() {
        return html`
            <header class="app-bar">
                <span class="left">
                    <widget-hamburger-menu></widget-hamburger-menu>
                    <a href="/"><img alt="SabzCity logo" src="/images/app-icon-48x48.png" /></a>
                </span>
            
                <span class="center"></span>
            
                <span class="right">
                    <widget-user-menu></widget-user-menu>
                    <widget-service-menu></widget-service-menu>
                </span>
            </header>
            
            <main id="container">
                <h1 class="page-title">عضو یک گروه بشید</h1>
            
                <paper-dialog id="dialog">
                    <h2 class="dialog-title">[[activeName]]</h2>
                    <p class="dialog-description">[[activeDescription]]</p>
                    <h3 class="dialog-subtitle">کنترل دسترسی</h3>
                    <mat-list class="dialog-accessess-list">
                        <mat-item label="زمان">
                            <span>[[activeTime]]</span>
                        </mat-item>
                        <mat-item label="مکان">
                            <span>[[activeCoordinate]]</span>
                        </mat-item>
                        <mat-item label="نوع">
                            <span>[[activeType]]</span>
                        </mat-item>
                    </mat-list>
                    <h3 class="dialog-subtitle">قوانین عضویت</h3>
                    <div class="join-switch-container">
                        <span>فقط توسط مدیر </span>
                        <paper-toggle-button disabled checked></paper-toggle-button>
                        <span>توسط همه</span>
                    </div>
                    <h3 class="dialog-subtitle">قوانین اعلان ها</h3>
                    <h3>تعریف نشده</h3>
                </paper-dialog>
            
                <div class="card">
                    <h3 class="card-title">گروه مورد نظرتون رو با استفاده از اسم یا شناسه ای که مدیر گروه به شما می دهد پیدا کنید</h3>
                    <paper-search-panel placeholder="جستجو" class="search-box"></paper-search-panel>
            
                    <mat-list class="group-list">
            
                        <template is="dom-repeat" items="{{allGroups}}">
                            <mat-item class="item" label="[[item.name]]" on-click="handleGroupPress" data-description$="[[item.description]]"
                                data-time$="[[item.time]]" data-coordinate$="[[item.coordinate]]" data-type$="[[item.type]]"
                                data-icon$="[[item.icon]]">
                                <mat-avatar slot="primary" icon="[[item.icon]]"></mat-avatar>
                                <span>[[item.description]]</span>
                            </mat-item>
                        </template>
                    </mat-list>
            
                    <p class="card-description">با عضو شدن توی گروه ها میتونید دوستای جدید پیدا کنید و سوال های خودتون رو بپرسید.</p>
                </div>
            
                <h1 class="page-title">گروه های عضو شده</h1>
            
                <div class="card">
                    <mat-list class="group-list">
                        <template is="dom-repeat" items="{{joinedGroups}}">
                            <mat-item class="item" label="[[item.name]]" on-click="handleGroupPress" data-description$="[[item.description]]"
                                data-time$="[[item.time]]" data-coordinate$="[[item.coordinate]]" data-type$="[[item.type]]"
                                data-icon$="[[item.icon]]">
                                <mat-avatar slot="primary" icon="[[item.icon]]"></mat-avatar>
                                <span>[[item.description]]</span>
                            </mat-item>
                        </template>
                    </mat-list>
                </div>
            </main>
        `
    }
    connectedCallback() {
        super.connectedCallback();
        const getGroupsJSON = (callback) => {
            const xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open('GET', '', true);
            xhr.responseType = 'text';
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == "200") {
                    callback(xhr.responseText);
                }
            };
            xhr.send();
        };
        getGroupsJSON(data => {
            const toObject = JSON.parse(data);
            this.allGroups = toObject.allGroups;
            this.joinedGroups = toObject.joinedGroups;
        })
    }
    handleGroupPress(e) {
        let item = e.target;
        // check for child
        if (!item.dataset.icon) {
            item = e.target.parentElement;
        }
        const title = item.getAttribute('label');
        const { icon, description, time, coordinate, type } = item.dataset;
        const dialog = this.$.dialog;

        this.activeIcon = icon;
        this.activeDescription = description;
        this.activeName = title;
        this.activeType = type;
        this.activeCoordinate = coordinate;
        this.activeTime = time;
        dialog.open();
    }
}
customElements.define('page-groups', PageGroups)

let localeText = {
    "en": [
        "",
    ],
    "fa": [
        "",
    ],
}
localeText = localeText[Application.UserPreferences.ContentPreferences.Language.iso639_1]
