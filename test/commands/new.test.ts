import { expect, test } from '@oclif/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const rimraf = require('rimraf');

describe('new', () => {
  beforeEach(done =>
    rimraf(resolve('test/fixtures/new'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  afterEach(done =>
    rimraf(resolve('test/fixtures/new'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  test
    .command(['new', 'test/fixtures/new', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo'])
    .it('run new generator', _ctx => {
      let angularConfig;
      try {
        angularConfig = JSON.parse(readFileSync(
          'test/fixtures/new/angular.json'
        ).toString());
      } catch (error) {
        angularConfig = {};
        console.error(error);
      }
      expect(angularConfig.projects.demo.architect.build.builder).to.equals('@angular-devkit/build-angular:browser');
    });
});
