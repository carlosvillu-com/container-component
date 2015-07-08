import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import ContanierComponent from '../src/cv-contanier-component';

describe('cv-contanier-component component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(ContanierComponent).toNotBe(undefined);
    });
  });

  describe('cv-contanier-component renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(ContanierComponent);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
