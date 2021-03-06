/**
 @license
 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
 found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
 part of the polymer project is also subject to an additional IP rights grant
 found at http://polymer.github.io/PATENTS.txt
 */
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icons/iron-icons.js';

import '@polymer/paper-icon-button/paper-icon-button.js';

import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@polymer/paper-input/paper-input.js';

import '@polymer/app-layout/demo/sample-content.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
    _template: html`
    <style>

      a {
        text-decoration: none;
        font-size: inherit;
        color: inherit;
      }

      .toolbar {
        @apply --layout-horizontal;
        @apply --layout-end-justified;
        background-color: rgba(255, 255, 255, 0.95);
      }
      





.custom-parent {
      /*font-size: 12px;*/
    }
    paper-input.custom:hover {
      /*border: 1px solid #29B6F6;*/
    }
    paper-input.custom {
      /*margin-bottom: 14px;*/
      --primary-text-color: #01579B;
      --paper-input-container-color: pink;
      --paper-input-container-focus-color: pink;
      --paper-input-container-invalid-color: pink;
      /*border: 1px solid #fff;*/
      border-radius: 5px;
      width: 385px;
      text-align: center;
      /*padding: 8px 15px;*/
      margin: 0 auto;

      /* Reset some defaults */
      /*--paper-input-container: { padding: 0;};*/
      /*--paper-input-container-underline: { display: none; height: 0;};*/
      /*--paper-input-container-underline-focus: { display: none; };*/
      /*text-align: center;*/

      /* New custom styles */
      --paper-input-container-input: {
        box-sizing: border-box;
        font-size: inherit;
        padding: 4px;
      };
      --paper-input-container-input-focus: {
        color: white;
      };
      --paper-input-container-input-invalid: {
        background: rgba(255, 0, 0, 0.3);
      };
      --paper-input-container-label: {
        /*top: -8px;*/
        /*left: 4px;*/
        /*background: white;*/
        /*padding: 2px;*/
        /*font-weight: bold;*/
        font-family: 'Merienda', cursive;
        color: white;
        text-align: center;
        display: block;
        position: inherit !important;
        width: 100%;
        /*background: red;*/
      };
      --paper-input-container-label-floating: {
        width: auto;
        /*background: aqua;*/
      };
    }
    
      
      .tabs {
        height: 100%;
        @apply --layout-horizontal;
      }

      .tabs > a {
        @apply --layout-vertical;
        @apply --layout-center-center;
        margin: 12px 16px 12px;
        border-bottom: 1px solid #222;
      }

      header {
        @apply --layout-vertical;
        @apply --layout-center-center;
        height: calc(100vh - 64px);
        padding: 0 16px;
       // background-image: url('//app-layout-assets.appspot.com/assets/landing-page/glass_explorer_food_2.png');
        background-repeat: no-repeat;
        background-size: cover;
            color: white;
        text-align: center;
        border-radius: 20px;

        /*background-image: url("./assets/pineapplecut.png");*/
        background :linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);*/
        
      }

      header > h2 {
        font-size: 56px;
        font-weight: 300;
        margin: 0;
        
        /*background :linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);*/
        /*  -webkit-background-clip: text;*/
        /*  -webkit-text-fill-color: transparent;*/

      }

      header > p {
        font-size: 32px;
        cursor: s-resize;
        /*background :linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);*/
        /*  -webkit-background-clip: text;*/
        /*  -webkit-text-fill-color: transparent;*/
      }

      section {
        padding: 88px 16px;
      }

      .container {
        @apply --layout-horizontal;
        max-width: 800px;
        margin: 0 auto;
      }

      .container > * {
        @apply --layout-flex;
      }

      .container img {
        max-width: 100%;
        max-height: 100%;
      }

      .container h3 {
        font-size: 32px;
        font-weight: 300;
        margin: 24px 0;
      }

      .container p {
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .container {
          @apply --layout-vertical;
        }
      }

    </style>

    <app-header-layout>

      <app-header reveals effects="waterfall" slot="header">

        <app-toolbar class="toolbar">
          <div class="tabs">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </app-toolbar>

      </app-header>

      <header>
        <h2>I am a title</h2>
        <p>Made with App Layout Elements</p>

        <paper-input class="custom" always-float-label label="By entering your email entering you will be informed by the start" type="email"></paper-input>
      </header>

      <section id="about">
        <div class="container">
          <div>
            <img src="//app-layout-assets.appspot.com/assets/landing-page/berries.jpg">
          </div>
          <div>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.</p>
            <p>Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no. Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="container">
          <div>
            <img src="//app-layout-assets.appspot.com/assets/landing-page/tomato.jpg">
          </div>
          <div>
            <h3>Services</h3>
            <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.</p>
            <p>Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no. Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <div>
            <img src="//app-layout-assets.appspot.com/assets/landing-page/red-onion.jpg">
          </div>
          <div>
            <h3>Contact</h3>
            <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.</p>
            <p>Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no. Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.</p>
          </div>
        </div>
      </section>

    </app-header-layout>
`,

    is: 'landing-page'
});
