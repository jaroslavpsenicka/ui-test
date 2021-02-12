import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';

import UploadForm from './UploadForm';
import SubmitButton from './SubmitButton';

const mockStore = configureMockStore([thunk])

describe('UploadForm', () => {

  var store

  beforeEach(() => {
    store = mockStore({})
    const origDispatch = store.dispatch
    store.dispatch = jest.fn(origDispatch)
  });


  it('renders fine', () => {
    const wrapper = shallow(<Provider store={store}><UploadForm /></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has proper filed names', () => {
    const wrapper = mount(<Provider store={store}><UploadForm /></Provider>)
    expect(wrapper.find('input').at(0).prop('name')).toBe('name');
    expect(wrapper.find('input').at(1).prop('name')).toBe('height');
    expect(wrapper.find('input').at(2).prop('name')).toBe('file');
  });

  it('submits on click', () => {
    const wrapper = mount(<Provider store={store}><UploadForm /><SubmitButton /></Provider>)
    wrapper.find('button').simulate('click')
    expect(store.dispatch.mock.calls.find(c => c[0].type === '@@redux-form/SUBMIT')).toBeDefined()
  });

});
