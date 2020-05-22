import fetch, { defaultHeader } from '../Fetch';

global.fetch = jest.fn(
  url =>
    new Promise((resolve, reject) =>
      process.nextTick(
        () =>
          url === `success`
            ? resolve({ status: 200, test: 'ok' })
            : reject({ error: 'error' }), // eslint-disable-line prefer-promise-reject-errors
      ),
    ),
);

describe('Fetch', () => {
  describe('Fetcher', () => {
    let fetcher;
    beforeEach(() => {
      fetcher = fetch('http://thisistest.com');
    });

    describe('buildPath', () => {
      it('should return new path when not pass parameters', () => {
        expect(fetcher.buildPath()).toEqual('');
      });

      it('should return new path when pass "test" as a parameter', () => {
        expect(fetcher.buildPath('test')).toEqual('test');
      });

      it('should return new path when pass "/" as a parameter', () => {
        expect(fetcher.buildPath('/')).toEqual('');
      });

      it('should return new path when pass "/test" as a parameter', () => {
        expect(fetcher.buildPath('/test')).toEqual('test');
      });
    });

    describe('buildHeaders', () => {
      it('should return default headers when not pass configuration', () => {
        expect(fetcher.buildHeaders()).toEqual(defaultHeader);
      });

      it('should return empty headers when pass removeDefaultHeader configuration', () => {
        expect(fetcher.buildHeaders({ removeDefaultHeader: true })).toEqual({});
      });
    });

    describe('internalFetch', () => {
      it('should return Promise resolve when call internalFetch successfully', () => {
        expect.assertions(1);
        const promise = fetcher.internalFetch('/success', { config: {} });
        return promise.then(data => {
          expect(data.test).toEqual('ok');
        });
      });

      it('should return Promise reject when call internalFetch was failed', () => {
        expect.assertions(1);
        const promise = fetcher.internalFetch('/fail', { config: {} });
        return promise.catch(data => {
          expect(data.error).toEqual('error');
        });
      });
    });

    describe('handleGeneralResponse', () => {
      it('should return response when status between 200 and 299', () => {
        const fixture = { status: 200 };
        expect(fetcher.handleGeneralResponse(fixture)).toEqual(fixture);
      });

      it('should throw an error when status not between 200 and 299', () => {
        const fixture = { status: 500 };
        expect(() => fetcher.handleGeneralResponse(fixture)).toThrow();
      });
    });

    it('should return Promise when call get method', () => {
      expect.assertions(1);
      return fetcher.get().catch(data => {
        expect(data.error).toEqual('error');
      });
    });

    it('should return Promise when call post method', () => {
      expect.assertions(1);
      return fetcher.post().catch(data => {
        expect(data.error).toEqual('error');
      });
    });

    it('should return Promise when call put method', () => {
      expect.assertions(1);
      return fetcher.put().catch(data => {
        expect(data.error).toEqual('error');
      });
    });

    it('should return Promise when call patch method', () => {
      expect.assertions(1);
      return fetcher.patch().catch(data => {
        expect(data.error).toEqual('error');
      });
    });

    it('should return Promise when call delete method', () => {
      expect.assertions(1);
      return fetcher.delete().catch(data => {
        expect(data.error).toEqual('error');
      });
    });
  });
});
