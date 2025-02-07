// Import necessary Lit elements
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

// Define a new component class
export class MyComponent extends LitElement {
  // Define a reactive property using @property() decorator
  @property({ type: String }) name = 'World';

  // Define styles for the component. This is scoped to the component.
  static styles = css`
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
  `;

  // Define the render method to display HTML
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button class="button" @click="${this.changeName}">Click me!</button>
    `;
  }

  // Lifecycle method called when the component is updated
  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    // Log when the name property changes
    if (changedProperties.has('name')) {
      console.log(`Name changed to: ${this.name}`);
    }
  }

  // Event handler to change the name when button is clicked
  changeName() {
    this.name = this.name === 'World' ? 'Lit' : 'World';
  }
}

// Register the component with the browser
customElements.define('my-component', MyComponent);
