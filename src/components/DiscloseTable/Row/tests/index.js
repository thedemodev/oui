import React from 'react';
import DiscloseRow from '../index';
import Table from '../../../Table';
import { shallow, mount } from 'enzyme';

describe('components/DiscloseTable/DiscloseRow', () => {

  it('should render rowContents prop correctly', () => {
    const component = mount(<DiscloseRow rowContents={ [ <Table.TD key={ 'foo' }></Table.TD> ] }></DiscloseRow>);
    expect(component.find(Table.TR).containsMatchingElement(<Table.TD></Table.TD>)).toBe(true);
  });

  it('should render the arrow inside first `Table.TD `', () => {
    const component = mount(<DiscloseRow rowContents={ [ ] }></DiscloseRow>);
    expect(component.find(Table.TR).find(Table.TD)
      .containsMatchingElement(<span className="oui-disclose__symbol push-half--right"></span>)).toBe(true);
  });

  it('should render children', () => {
    const rowComponents = [ <Table.TD key={ 'foo' }>Experiment Name</Table.TD> ];
    const component = mount(<DiscloseRow rowContents={ rowComponents }><p></p></DiscloseRow>);

    component.find(Table.TR).simulate('click');
    expect(component.find(Table.TR).containsMatchingElement(<p></p>)).toBe(true);
    expect(component.find(Table.TR).last().find(Table.TD).prop('colSpan')).toBe(rowComponents.length + 1);
  });

  describe('when in collapsed state', () => {
    it('should render a single `Table.TR` row', () => {
      const component = shallow(<DiscloseRow rowContents={ [ ] }><p></p></DiscloseRow>);
      expect(component.children()).toHaveLength(1);
    });

    it('should have valid CSS classes applied', () => {
      const component = mount(<DiscloseRow rowContents={ [ ] }></DiscloseRow>);

      expect(component.find(Table.TR).hasClass('soft-half--ends')).toBe(true);
      expect(component.find(Table.TR).hasClass('soft--sides')).toBe(true);
      expect(component.find(Table.TR).hasClass('oui-disclose')).toBe(true);
      expect(component.find(Table.TR).hasClass('link--dark')).toBe(true);

      expect(component.find(Table.TR).hasClass('is-active')).toBe(false);
      expect(component.find(Table.TR).hasClass('border--top')).toBe(false);
      expect(component.find(Table.TR).hasClass('border--side')).toBe(false);
    });

    it('should have valid props applied', () => {
      const component = mount(<DiscloseRow rowContents={ [ ] }></DiscloseRow>);
      expect(component.find(Table.TR).prop('borderStyle')).toBe('none');
      expect(component.find(Table.TR).prop('backgroundColor')).toBe(null);
    });
  });

  describe('when in expanded state', () => {
    it('should render two `Table.TR` rows', () => {
      const component = mount(<DiscloseRow rowContents={ [ ] }><p></p></DiscloseRow>);
      expect(component.find(Table.TR).length).toBe(1);
      component.find(Table.TR).simulate('click');
      expect(component.find(Table.TR).length).toBe(2);
    });

    it('should have valid CSS classes applied', () => {
      const component = mount(<DiscloseRow rowContents={ [ ] }></DiscloseRow>);
      component.find(Table.TR).simulate('click');

      expect(component.find(Table.TR).first().hasClass('soft-half--ends')).toBe(true);
      expect(component.find(Table.TR).first().hasClass('soft--sides')).toBe(true);
      expect(component.find(Table.TR).first().hasClass('oui-disclose')).toBe(true);
      expect(component.find(Table.TR).first().hasClass('link--dark')).toBe(true);
      expect(component.find(Table.TR).first().hasClass('is-active')).toBe(true);
      expect(component.find(Table.TR).first().hasClass('border--top')).toBe(true);
      expect(component.find(Table.TR).first().hasClass('border--sides')).toBe(true);

      expect(component.find(Table.TR).last().hasClass('border--sides')).toBe(true);
      expect(component.find(Table.TR).last().hasClass('border--bottom')).toBe(true);
    });

    it('should have valid props applied', () => {
      const component = mount(<DiscloseRow rowContents={ [ ] }></DiscloseRow>);
      component.find(Table.TR).simulate('click');
      expect(component.find(Table.TR).first().prop('borderStyle')).toBe('ends');
      expect(component.find(Table.TR).first().prop('backgroundColor')).toEqual('faint');
    });
  });
});
