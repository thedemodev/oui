import React from 'react';
import { mount } from 'enzyme';

import IconLink from '../index';

const getTestSection = (component, testSection) => component.find(`[data-test-section="${testSection}"]`);

describe('components/NavBar/IconLink', () => {
  let component;
  let handlerObj;

  describe('#isActive prop', function() {
    afterEach(function() {
      component.unmount();
    });

    it('should default isActive to false when not passed', function() {
      component = mount(
        <IconLink
          iconName="projects"
          testSection="navbar-icon-link"
          linkLabel="Projects"
        />
      );
      expect(component.props().isActive).toBe(false);
    });

    it('should have "is-active" class if isActive true', function() {
      component = mount(
        <IconLink
          iconName="projects"
          testSection="navbar-icon-link"
          linkLabel="Projects"
          isActive={ true }
        />
      );
      expect(component.find('.is-active').length).toBe(1);
    });
  });

  describe('when isOpen is not passed as props', function() {
    beforeEach(function() {
      component = mount(
        <IconLink
          iconName="projects"
          testSection="navbar-icon-link"
          linkLabel="Projects"
          isActive={ true }
        />
      );
    });

    it('should default isOpen to true if not passed as props', function() {
      expect(component.props().isOpen).toBe(true);
    });
  });

  describe('when the navbar is collapsed', function() {
    beforeEach(function() {
      component = mount(
        <IconLink
          iconName="projects"
          testSection="navbar-icon-link"
          linkLabel="Projects"
          isActive={ true }
          isOpen={ false }
        />
      );
    });

    it('should render a Poptip inside with a disabled=false prop', function() {
      expect(component.find('Poptip').length).toBe(1);
      expect(component.find('Poptip').props().disable).toBe(false);
    });
  });

  describe('when the navbar is open', function() {
    beforeEach(function() {
      component = mount(
        <IconLink
          iconName="projects"
          testSection="navbar-icon-link"
          linkLabel="Projects"
          isActive={ true }
          isOpen={ true }
        />
      );
    });

    it('should not render a Poptip inside with a disabled=true prop', function() {
      expect(component.find('Poptip').length).toBe(1);
      expect(component.find('Poptip').props().disable).toBe(true);
    });
  });

  describe('linkAction types', function() {
    describe('when type is link', function() {
      beforeEach(function() {
        component = mount(
          <IconLink
            iconName="projects"
            testSection="navbar-icon-link"
            linkLabel="Projects"
            isActive={ true }
            isOpen={ true }
            type="link"
            href="google.com"
          />
        );
      });

      it('should render a Link with correct data-test-section', function() {
        expect(getTestSection(component, 'navbar-icon-link-external-link').length).toBe(1);
      });

      it('should render an OUI Link inside with href prop', function() {
        expect(component.find('Link').length).toBe(1);
        expect(component.find('Link').props().href).toBe('google.com');
      });
    });

    describe('when type is button', function() {
      beforeEach(function() {
        handlerObj = {
          onClickHandler: () => {},
        };
        spyOn(handlerObj, 'onClickHandler');
        component = mount(
          <IconLink
            iconName="projects"
            testSection="navbar-icon-link"
            linkLabel="Projects"
            isActive={ true }
            isOpen={ true }
            type="button"
            onClick={ handlerObj.onClickHandler }
          />
        );
      });

      it('should render a Link with correct data-test-section', function() {
        expect(getTestSection(component, 'navbar-icon-link-button').length).toBe(1);
      });

      it('should render an OUI Link inside with onClick prop', function() {
        expect(component.find('Link').length).toBe(1);
        expect(component.find('Link').props().onClick).toBe(handlerObj.onClickHandler);
      });

      it('should call onClickHandler callback function when clicked', function() {
        expect(component.find('Link').length).toBe(1);
        component.find('Link').simulate('click');
        expect(handlerObj.onClickHandler).toBeCalled();
      });
    });

    describe('when type is pushstate', function() {
      beforeEach(function() {
        handlerObj = {
          onClickHandler: () => {},
        };
        spyOn(handlerObj, 'onClickHandler');
        component = mount(
          <IconLink
            iconName="projects"
            testSection="navbar-icon-link"
            linkLabel="Projects"
            isActive={ true }
            isOpen={ true }
            type="pushstate"
            href="google.com"
            onClick={ handlerObj.onClickHandler }
          />
        );
      });

      it('should render a Link with correct data-test-section', function() {
        expect(getTestSection(component, 'navbar-icon-link-internal-link').length).toBe(1);
      });

      it('should render an OUI Link inside with href prop', function() {
        expect(component.find('Link').length).toBe(1);
        expect(component.find('Link').props().href).toBe('google.com');
      });

      it('should call onClickHandler callback function when clicked', function() {
        expect(component.find('Link').length).toBe(1);
        component.find('Link').simulate('click');
        expect(handlerObj.onClickHandler).toBeCalled();
      });
    });
  });
});
