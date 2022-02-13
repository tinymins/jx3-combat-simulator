// Reactor is available out of the box.
// This sample is modelled after https://preactjs.com/guide/v10/components#class-components

// Note: components are elements

export class JCSTargetComponent extends Element {
  constructor() {
    super();
    this.time = Date.now();
  }

  // Lifecycle: Called whenever our component gets attached to real DOM element
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.componentUpdate({ time: Date.now() });
    }, 1000);
  }

  // Lifecycle: Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.time).toLocaleTimeString();
    return <span>{time}</span>;
  }
}

globalThis.JCSTargetComponent = JCSTargetComponent;
