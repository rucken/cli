import { expect, test } from '@oclif/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const rimraf = require('rimraf');

describe('entity:nestjs', () => {
  beforeEach(done =>
    rimraf(resolve('test/fixtures/nestjs-entity'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  afterEach(done =>
    rimraf(resolve('test/fixtures/nestjs-entity'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  test
    .command(['entity:nestjs', 'test/fixtures/nestjs-entity', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo', '-f', '[name,title]'])
    .it('run entity generator', _ctx => {
      let nestjsConfig;
      let modelContent;
      try {
        nestjsConfig = JSON.parse(readFileSync(
          'test/fixtures/nestjs-entity/.nestcli.json'
        ).toString());
      } catch (error) {
        nestjsConfig = {};
        console.error(error);
      }
      try {
        modelContent = readFileSync(
          'test/fixtures/nestjs-entity/src/apps/demo/entities/demo.entity.ts'
        ).toString();
      } catch (error) {
        modelContent = '';
        console.error(error);
      }
      expect(nestjsConfig.projects.demo.root).to.equals('src/apps/demo/');
      expect(modelContent).to.contain(`name: string`);
      expect(modelContent).to.contain(`title: string`);
    });
});
