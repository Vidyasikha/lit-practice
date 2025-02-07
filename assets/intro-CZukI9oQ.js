import{j as n,c as u}from"./DocsRenderer-CFRXHY34-BPA1re3E.js";import{useMDXComponents as m}from"./index-ChqdqyLC.js";import{f as g,u as f,r as x,i as y,x as b}from"./lit-element-B4HGITLH.js";import"./iframe-YOtAq8xB.js";import"./index-BCI4JQNS.js";import"./index-ogSvIofg.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g},w=(t=j,e,r)=>{const{kind:a,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,t),a==="accessor"){const{name:i}=r;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,l,t)},init(c){return c!==void 0&&this.P(i,void 0,t),c}}}if(a==="setter"){const{name:i}=r;return function(c){const l=this[i];e.call(this,c),this.requestUpdate(i,l,t)}}throw Error("Unsupported decorator location: "+a)};function v(t){return(e,r)=>typeof r=="object"?w(t,e,r):((a,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,i?{...a,wrapped:!0}:a),i?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}var L=Object.defineProperty,k=(t,e,r,a)=>{for(var o=void 0,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=i(e,r,o)||o);return o&&L(e,r,o),o};const h=class h extends x{constructor(){super(...arguments),this.name="World"}render(){return b`
      <h1>Hello, ${this.name}!</h1>
      <button class="button" @click="${this.changeName}">Click me!</button>
    `}updated(e){super.updated(e),e.has("name")&&console.log(`Name changed to: ${this.name}`)}changeName(){this.name=this.name==="World"?"Lit":"World"}};h.styles=y`
    :host {
      display: block;
      padding: 20px;
      background-color: lightblue;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      width: fit-content;
      text-align: center;
    }
    .button {
      padding: 10px 20px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;let d=h;k([v({type:String})],d.prototype,"name");customElements.define("my-component",d);function p(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...m(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(u,{title:"Intro"}),`
`,n.jsx(e.h1,{id:"components-overview",children:"Components Overview"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Lit component"})," is a reusable UI element, much like a custom HTML element, that holds state and reacts to user input. It fires events and updates its UI when its state changes."]}),`
`,n.jsx(e.h2,{id:"core-concepts",children:"Core Concepts"}),`
`,n.jsxs(e.h3,{id:"1-defining-a-component",children:["1. ",n.jsx(e.strong,{children:"Defining a Component"})]}),`
`,n.jsx(e.p,{children:"Lit components are custom elements. You define them using JavaScript/TypeScript and register them with the browser."}),`
`,n.jsxs(e.h3,{id:"2-rendering",children:["2. ",n.jsx(e.strong,{children:"Rendering"})]}),`
`,n.jsxs(e.p,{children:["Each component has a ",n.jsx(e.code,{children:"render"})," method where you define its HTML template. The method gets called to render the component's content."]}),`
`,n.jsxs(e.h3,{id:"3-reactive-properties",children:["3. ",n.jsx(e.strong,{children:"Reactive Properties"})]}),`
`,n.jsx(e.p,{children:"A component has reactive properties which hold its state. When the state changes, the component re-renders automatically."}),`
`,n.jsxs(e.h3,{id:"4-styles",children:["4. ",n.jsx(e.strong,{children:"Styles"})]}),`
`,n.jsx(e.p,{children:"You can define encapsulated styles inside a component to style its appearance without affecting the global styles."}),`
`,n.jsxs(e.h3,{id:"5-lifecycle",children:["5. ",n.jsx(e.strong,{children:"Lifecycle"})]}),`
`,n.jsx(e.p,{children:"Lit provides lifecycle callbacks, such as when the component is added to a page or updated, so you can run custom code at these points."}),`
`,n.jsx(e.h2,{id:"example-component",children:"Example Component"}),`
`,n.jsx(e.h3,{id:"typescript-example",children:"TypeScript example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Import necessary Lit elements
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

// Define a new component class
class MyComponent extends LitElement {
  // Define a reactive property using @property() decorator
  @property({ type: String }) name = 'World';

  // Define styles for the component. This is scoped to the component.
  static styles = css\`
    :host {
      display: block;
      padding: 20px;
      background-color: lightblue;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      width: fit-content;
      text-align: center;
    }
    .button {
      padding: 10px 20px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  \`;

  // Define the render method to display HTML
  render() {
    return html\`
      <h1>Hello, \${this.name}!</h1>
      <button class="button" @click="\${this.changeName}">Click me!</button>
    \`;
  }

  // Lifecycle method called when the component is updated
  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    // Log when the name property changes
    if (changedProperties.has('name')) {
      console.log(\`Name changed to: \${this.name}\`);
    }
  }

  // Event handler to change the name when button is clicked
  changeName() {
    this.name = this.name === 'World' ? 'Lit' : 'World';
  }
}

// Register the component with the browser
customElements.define('my-component', MyComponent);
`})}),`
`,n.jsx(e.h3,{id:"javascript-example",children:"JavaScript example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Import necessary Lit elements
import { LitElement, html, css } from 'lit';

// Define a new component class
class MyComponent extends LitElement {
  // Reactive property
  static properties = {
    name: { type: String }
  };

  // Constructor to initialize the property
  constructor() {
    super();
    this.name = 'World';
  }

  // Define styles for the component. Scoped to this component.
  static styles = css\`
    :host {
      display: block;
      padding: 20px;
      background-color: lightblue;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      width: fit-content;
      text-align: center;
    }
    .button {
      padding: 10px 20px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  \`;

  // Render method to define HTML structure
  render() {
    return html\`
      <h1>Hello, \${this.name}!</h1>
      <button class="button" @click="\${this.changeName}">Click me!</button>
    \`;
  }

  // Lifecycle method called when the component is updated
  updated(changedProperties) {
    super.updated(changedProperties);
    // Log the name property when it changes
    if (changedProperties.has('name')) {
      console.log(\`Name changed to: \${this.name}\`);
    }
  }

  // Event handler to change the name when the button is clicked
  changeName() {
    this.name = this.name === 'World' ? 'Lit' : 'World';
  }
}

// Register the component with the browser
customElements.define('my-component', MyComponent);

`})}),`
`,n.jsx(e.p,{children:"Output:"}),`
`,n.jsx("my-component",{})]})}function S(t={}){const{wrapper:e}={...m(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(p,{...t})}):p(t)}export{S as default};
