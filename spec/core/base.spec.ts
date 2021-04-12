import sass from 'sass';
import glob from 'glob';

import { render } from '../lib/render';

const filename = 'base.scss'
describe(`src/core/_${filename}`, () => {
	it('compiles to CSS', () => {
		return render(`src/core/_${filename}`);
	})
});