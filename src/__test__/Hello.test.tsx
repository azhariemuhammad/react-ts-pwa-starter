import * as React from 'react';
import { shallow } from 'enzyme';

import { Hello } from '../app/components/Hello';

let hello: any;

beforeEach(() => {
  hello = shallow(<Hello
      compiler="typescript"
      framework="react"
      bundler="webpack"
    />
  )
})

it('should render without error', () => {
  expect(hello.length).toBe(1)
})