import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reactDOM from 'react-dom';

const attachTo = global.document.createElement('div');

class ReactAdapterWithMountTracking extends Adapter {
  createRenderer(options) {
    // Provide a default option on each render for attachTo, being a global div that we can unmount later
    Object.assign(options, { attachTo: options.attachTo || attachTo });
    return Adapter.prototype.createRenderer.call(this, options);
  }
}

afterEach(() => {
  // Unmount react component after each test
  reactDOM.unmountComponentAtNode(attachTo);
});

configure({ adapter: new ReactAdapterWithMountTracking() });
