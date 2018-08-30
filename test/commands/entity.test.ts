import { expect, test } from '@oclif/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const rimraf = require('rimraf');

describe('entity', () => {
  beforeEach(done =>
    rimraf(resolve('test/fixtures/entity'), {}, () =>
      rimraf(resolve('test/fixtures/new-with-entity'), {}, () =>
        setTimeout(
          () =>
            done(), 1000
        )
      )
    )
  );
  afterEach(done =>
    rimraf(resolve('test/fixtures/entity'), {}, () =>
      rimraf(resolve('test/fixtures/new-with-entity'), {}, () =>
        setTimeout(
          () =>
            done(), 1000
        )
      )
    )
  );
  test
    .stderr()
    .command(['entity', 'test/fixtures/entity', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo', '-f', '[name,title]'])
    .it('run entity generator', ctx => {
      const errorMessage = 'Before create entity, you must create project: rucken new -n demo -u demo -e demo@demo.demo';
      expect(ctx.stderr).to.contain(errorMessage);
    });
  test
    .stderr()
    .command([
      'new', 'test/fixtures/new-with-entity', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo'
    ])
    .command([
      'entity', 'test/fixtures/new-with-entity', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo', '-f', '[name,title]'
    ])
    .it('run entity generator', _ctx => {
      let nestjsConfig;
      let modelContent;
      let angularConfig;
      let ruckenConfig;

      try {
        ruckenConfig = JSON.parse(readFileSync(
          'test/fixtures/new-with-entity/rucken.json'
        ).toString());
      } catch (error) {
        ruckenConfig = {};
        console.error(error);
      }
      expect(ruckenConfig.backend).to.equals('nestjs');
      expect(ruckenConfig.frontend).to.equals('angular');

      try {
        nestjsConfig = JSON.parse(readFileSync(
          'test/fixtures/new-with-entity/.nestcli.json'
        ).toString());
      } catch (error) {
        nestjsConfig = {};
        console.error(error);
      }
      try {
        modelContent = readFileSync(
          'test/fixtures/new-with-entity/src/apps/demo/entities/demo.entity.ts'
        ).toString();
      } catch (error) {
        modelContent = '';
        console.error(error);
      }
      expect(nestjsConfig.projects.demo.root).to.equals('src/apps/demo/');
      expect(modelContent).to.contain(`name: string`);
      expect(modelContent).to.contain(`title: string`);

      try {
        angularConfig = JSON.parse(readFileSync(
          'test/fixtures/new-with-entity/frontend/angular.json'
        ).toString());
      } catch (error) {
        angularConfig = {};
        console.error(error);
      }
      try {
        modelContent = readFileSync(
          'test/fixtures/new-with-entity/frontend/libs/demo/core/src/lib/shared/models/demo.ts'
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
