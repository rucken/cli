import { expect, test } from '@oclif/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const rimraf = require('rimraf');

describe('new:angular', () => {
  beforeEach(done =>
    rimraf(resolve('test/fixtures/angular-new'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  afterEach(done =>
    rimraf(resolve('test/fixtures/angular-new'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  test
    .command(['new:angular', 'test/fixtures/angular-new', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo'])
    .it('run new generator', _ctx => {
      let angularConfig;
      try {
        angularConfig = JSON.parse(readFileSync(
          'test/fixtures/angular-new/angular.json'
        ).toString());
      } catch (error) {
        angularConfig = {};
        console.error(error);
      }
      expect(angularConfig.projects.demo.architect.build.builder).to.equals('@angular-devkit/build-angular:browser');
    });
});
