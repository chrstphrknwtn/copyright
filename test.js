import test from 'ava';
import copyright from '.';

test('Without arguments.', t => {
	const currentYear = new Date().getFullYear();
	const tmp = copyright();

	t.is(tmp, `Copyright © ${currentYear}`);
});

test('With name argument.', t => {
	const currentYear = new Date().getFullYear();
	const tmp = copyright('Christopher Newton');

	t.is(tmp, `Copyright © ${currentYear} Christopher Newton`);
});

test('With options object.', t => {
	const tmp = copyright({
		name: 'Christopher Newton',
		startYear: 1981,
		endYear: 2081
	});

	t.is(tmp, 'Copyright © 1981-2081 Christopher Newton');
});

test('With only end year option.', t => {
	const tmp = copyright({
		endYear: '2081'
	});

	t.is(tmp, 'Copyright © 2081');
});

test('With HTML entities option only.', t => {
	const currentYear = new Date().getFullYear();
	const tmp = copyright({
		htmlEntities: true
	});

	t.is(tmp, `Copyright &copy; ${currentYear}`);
});
