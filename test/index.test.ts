import copyright from '../src';
const year = new Date().getFullYear();

test('Without arguments', () => {
  expect(copyright()).toEqual(`Copyright © ${year}`);
});

test('With name string', () => {
  expect(copyright('Christopher Newton')).toEqual(
    `Copyright © ${year} Christopher Newton`
  );
});

test('With empty options', () => {
  expect(copyright({})).toEqual(`Copyright © ${year}`);
});

test('With all options', () => {
  expect(
    copyright({
      name: 'Christopher Newton',
      startYear: 1981,
      endYear: 2081,
      htmlEntities: true,
      short: true
    })
  ).toEqual('&copy; 1981-2081 Christopher Newton');
});

test('With options', () => {
  expect(copyright({ name: 'Christopher Newton' })).toEqual(
    `Copyright © ${year} Christopher Newton`
  );
  expect(copyright({ htmlEntities: true })).toEqual(`Copyright &copy; ${year}`);
  expect(copyright({ startYear: 1981 })).toEqual(`Copyright © 1981-${year}`);
  expect(copyright({ endYear: 2081 })).toEqual('Copyright © 2081');
  expect(copyright({ short: true })).toEqual(`© ${year}`);
});

test('Overloaded', () => {
  // @ts-ignore
  expect(copyright('Christopher Newton', 'banana')).toEqual(
    `Copyright © ${year} Christopher Newton`
  );
  // @ts-ignore
  expect(copyright({ short: true }, 'banana')).toEqual(`© ${year}`);
});
