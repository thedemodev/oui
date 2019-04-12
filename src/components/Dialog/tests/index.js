import React from 'react';
import { mount } from 'enzyme';
import { DialogNew } from '../index';
import Button from '../../Button';

describe('Dialog Component ', () => {
  it('renders a default dialog', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const component = mount(<DialogNew
      title='This is a Dialog'
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Dialogs can contain simple text in the body.</p>
    </DialogNew>);
    expect(component.find('.oui-close-button').length).toBe(1);
  });

  it('renders any children passed in', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const bodyString = 'Dialogs can contain simple text in the body.';

    const component = mount(<DialogNew
      title='This is a Dialog'
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>{bodyString}</p>
    </DialogNew>);
    expect(component.find('.oui-dialog__body').containsMatchingElement(<p>{bodyString}</p>)).toBe(true);
  });

  it('calls the onClose prop function when close button is clicked', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const component = mount(<DialogNew
      title='This is a Dialog'
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Dialogs can contain simple text in the body.</p>
    </DialogNew>);
    component.find('.oui-close-button').simulate('click');
    expect(onCloseSpy).toHaveBeenCalled();
  });

  it('renders a subtitle when passed in', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const subtitleString = 'This is a subtitle';

    const component = mount(<DialogNew
      title='This is a Dialog'
      subtitle={ subtitleString }
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Dialogs can contain simple text in the body.</p>
    </DialogNew>);
    expect(component.find('.oui-dialog__header').containsMatchingElement(<p>{subtitleString}</p>)).toBe(true);
  });

  it('renders the footer buttons', () => {
    const onClickSpy = jest.fn();
    const onCloseSpy = jest.fn();

    const button1Label = 'No Thanks';
    const button2Label = 'Continue';


    const component = mount(<DialogNew
      title='This is a Dialog'
      onClose={ onCloseSpy }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          { button1Label }
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          { button2Label }
        </Button>,
      ] }>
      <p>Dialogs can contain simple text in the body.</p>
    </DialogNew>);
    expect(component.find('.oui-button-row').containsMatchingElement(<button>{button1Label}</button>)).toBe(true);
    expect(component.find('.oui-button-row').containsMatchingElement(<button>{button2Label}</button>)).toBe(true);
  });

  it('does not render a close button when hasCloseButton is false', () => {
    const onClickSpy = jest.fn();

    const component = mount(<DialogNew
      title='This is a Dialog'
      hasCloseButton={ false }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>,
      ] }>
      <p>Dialogs can contain simple text in the body.</p>
    </DialogNew>);
    expect(component.find('.oui-close-button').length).toBe(0);
  });
});
