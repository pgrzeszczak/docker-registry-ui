import * as React from 'react';
import { App } from '../app.component';
import toJson from 'enzyme-to-json';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import 'jest';

Enzyme.configure({ adapter: new Adapter() });

it('Should be rendered', () => {
  const component = Enzyme.shallow(
    <App />
  );
  expect(toJson(component)).toMatchSnapshot();
});
