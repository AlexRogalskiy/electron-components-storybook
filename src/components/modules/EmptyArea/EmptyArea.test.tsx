import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyArea } from './EmptyArea';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('EmptyArea', () => {
	it('renders without crashing', () => {
		shallow(<EmptyArea />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<EmptyArea {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
