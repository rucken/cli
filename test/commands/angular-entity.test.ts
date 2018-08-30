import { expect, test } from '@oclif/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const rimraf = require('rimraf');

describe('entity:angular', () => {
  beforeEach(done =>
    rimraf(resolve('test/fixtures/angular-entity'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  afterEach(done =>
    rimraf(resolve('test/fixtures/angular-entity'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  test
    .command(['entity:angular', 'test/fixtures/angular-entity', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo', '-f', '[name,title]'])
    .it('run entity generator', _ctx => {
      let angularConfig;
      let modelContent;
      try {
        angularConfig = JSON.parse(readFileSync(
          'test/fixtures/angular-entity/angular.json'
        ).toString());
      } catch (error) {
        angularConfig = {};
        console.error(error);
      }
      try {
        modelContent = readFileSync(
          'test/fixtures/angular-entity/libs/demo/core/src/lib/shared/models/demo.ts'
        ).toString();
      } catch (error) {
        modelContent = '';
        console.error(error);
      }
      expect(angularConfig.projects.demo.architect.build.builder).to.equals('@angular-devkit/build-angular:browser');
      expect(modelContent).to.contain(`name: translate('Name')`);
      expect(modelContent).to.contain(`title: translate('Title')`);
    });
});
