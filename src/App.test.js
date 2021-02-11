import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';

import App from './App';

const mockStore = configureMockStore([thunk])

describe('App', () => {

  it('renders fine', () => {
    const store = mockStore({ data: {} })
    const wrapper = shallow(<Provider store={store}><App /></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
