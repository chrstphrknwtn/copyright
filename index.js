module.exports = (...args) => {
	const year = new Date().getFullYear();

	if (args.length === 0) {
		return `Copyright © ${year}`;
	}

	if (args.length === 1 && typeof args[0] === 'string') {
		const name = args[0];

		return `Copyright © ${year} ${name}`;
	}

	if (args.length === 1 && typeof args[0] === 'object') {
		const {name, startYear, endYear, htmlEntities} = args[0];

		const symbol = htmlEntities ? '&copy;' : '©';
		const startYearString = startYear ? `${startYear}-` : '';
		const endYearString = endYear ? endYear : year;
		const nameString = name ? ` ${name}` : '';

		return `Copyright ${symbol} ${startYearString}${endYearString}${nameString}`;
	}
};
