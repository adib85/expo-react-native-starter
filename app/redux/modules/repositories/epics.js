/* eslint-disable no-unused-vars */

/**
 * Gets the repositories of the user from Github
 */

import { Observable } from 'rxjs';
import { LOAD_REPOS } from './constants';
import { reposLoaded, repoLoadingError } from './actions';
import { makeSelectUsername } from '../username/selectors';
import indirect from '../../../utils/indirect';

/**
 * Select the username from the store
 */
const selectUsername = store => makeSelectUsername()(store.getState());

/**
 * The API endpoint for epic
 */
export const api = {
  fetchGithub: id =>
    Observable.ajax.getJSON(
      `https://api.github.com/users/${id}/repos?type=all&sort=updated`
    ),
};

const getReposEpic = (action$, store, call = indirect.call) =>
  action$
    .ofType(LOAD_REPOS)
    .mergeMap(() =>
      call(api.fetchGithub, selectUsername(store))
        .map(repos => reposLoaded(repos, selectUsername(store)))
        .catch(err => Observable.of(repoLoadingError(err)))
    );

export default getReposEpic;
