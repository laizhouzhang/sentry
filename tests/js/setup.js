import jQuery from 'jquery';
import sinon from 'sinon';
import ConfigStore from 'app/stores/configStore';

jest.mock('app/translations');
jest.mock('app/api');

window.$ = window.jQuery = jQuery;
window.sinon = sinon;

window.TestStubs = {
  // react-router's 'router' context
  router: () => ({
    push: sinon.spy(),
    replace: sinon.spy(),
    go: sinon.spy(),
    goBack: sinon.spy(),
    goForward: sinon.spy(),
    setRouteLeaveHook: sinon.spy(),
    isActive: sinon.spy(),
    createHref: sinon.spy()
  }),
  Team: (...params) => {
    return {
      slug: 'team-slug',
      name: 'Team Name',
      ...params
    };
  },
  Project: (...params) => {
    return {
      slug: 'project-slug',
      name: 'Project Name',
      subjectTemplate: '[$project] ${tag:level}: $title',
      digestsMinDelay: 5,
      digestsMaxDelay: 60,
      ...params
    };
  },
  Organization: (...params) => {
    return {
      slug: 'org-slug',
      name: 'Organization Name',
      ...params
    };
  }
};

// this is very commonly used, so expose it globally
window.MockApiClient = require.requireMock('app/api').Client;

// default configuration
ConfigStore.loadInitialData({
  user: {
    isAuthenticated: true,
    email: 'foo@example.com',
    options: {
      timezone: 'UTC'
    }
  }
});
