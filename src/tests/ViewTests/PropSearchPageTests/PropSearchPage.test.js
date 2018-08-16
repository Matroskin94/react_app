import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../components/PropSearch/Header.jsx';

describe('PropSearch page testing', () => {
	it('Header test', () => {
		const wrapper = shallow(<Header />);

    	expect(wrapper).toMatchSnapshot();
	});
});