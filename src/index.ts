interface options {
  name?: string;
  startYear?: number;
  endYear?: number;
  htmlEntities?: boolean;
  short?: boolean;
}

export default (arg?: string | options): string => {
  const year = new Date().getFullYear();

  let returnString: string = '';

  if (!arg || Object.keys(arg).length === 0) {
    returnString = `Copyright © ${year}`;
  }

  if (typeof arg === 'string') {
    returnString = `Copyright © ${year} ${arg}`;
  }

  if (typeof arg === 'object') {
    const { name, startYear, endYear, htmlEntities, short } = arg;

    const symbol = htmlEntities ? '&copy;' : '©';
    const startYearString = startYear ? `${startYear}-` : '';
    const endYearString = endYear ? endYear : year;
    const nameString = name ? ` ${name}` : '';

    returnString = `${
      short ? '' : 'Copyright '
    }${symbol} ${startYearString}${endYearString}${nameString}`;
  }

  return returnString;
};
