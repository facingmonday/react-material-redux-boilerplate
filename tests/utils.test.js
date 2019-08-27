import { buildUrl, getCookie, formatFilterAndSortOptions } from '../app/utils';

describe('formatFilterAndSortOptions', () => {
  it('Should return formatted sort options', () => {
    const options = {
      sort: [
        {
          field: 'myField',
          direction: 'ASC',
        },
      ],
    };
    const expectedObject = {
      'sort.myField': 'ASC',
    };
    const formattedOptions = formatFilterAndSortOptions(options);
    expect(formattedOptions).toMatchObject(expectedObject);
  });
  it('Should return formatted filter options', () => {
    const options = {
      filter: [
        {
          field: 'myField',
          direction: 'ASC',
        },
      ],
    };
    const expectedObject = {
      'filter.myField': 'ASC',
    };
    const formattedOptions = formatFilterAndSortOptions(options);
    expect(formattedOptions).toMatchObject(expectedObject);
  });
});
