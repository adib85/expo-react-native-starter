import { Observable } from 'rxjs';
import { fromJS } from 'immutable';
import expectEpicGetRepos from '../../../../../internals/testing/test-bundler';

import * as constants from '../constants';
import { getReposEpic, api } from '../epics';

describe('api', () => {
  it('should ajax request github repo url with username', () => {
    const username = 'mxstbr';
    Observable.ajax.getJSON = jest.fn();

    api.fetchGithub(username);

    expect(Observable.ajax.getJSON).toBeCalledWith(
      'https://api.github.com/users/mxstbr/repos?type=all&sort=updated'
    );
  });
});

describe('getRepos Epic', () => {
  it('should dispatch a reposLoaded action if successful', () => {
    const response = { hello: 'world' };
    const username = 'mxstbr';

    expectEpicGetRepos(getReposEpic, {
      expected: [
        '-a|',
        {
          a: { type: constants.LOAD_REPOS_SUCCESS, repos: response, username },
        },
      ],
      action: [
        '(a|)',
        {
          a: { type: constants.LOAD_REPOS },
        },
      ],
      response: [
        '-a|',
        {
          a: response,
        },
      ],
      callArgs: [api.fetchGithub, username],
      store: {
        getState: () =>
          fromJS({
            home: {
              username,
            },
          }),
      },
    });
  });
  it('should dispatch a repoLoadingError if there is a problem', () => {
    const response = { hello: 'world' };
    const username = 'mxstbr';

    expectEpicGetRepos(getReposEpic, {
      expected: [
        '-(a|)',
        {
          a: { type: constants.LOAD_REPOS_ERROR, error: response },
        },
      ],
      action: [
        '(a|)',
        {
          a: { type: constants.LOAD_REPOS },
        },
      ],
      response: ['-#|', null, response],
      callArgs: [api.fetchGithub, username],
      store: {
        getState: () =>
          fromJS({
            home: {
              username,
            },
          }),
      },
    });
  });
});
