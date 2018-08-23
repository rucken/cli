import { expect, test } from '@oclif/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const rimraf = require('rimraf');

describe('new:nestjs', () => {
  beforeEach(done =>
    rimraf(resolve('test/fixtures/nestjs-new'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  afterEach(done =>
    rimraf(resolve('test/fixtures/nestjs-new'), {}, () =>
      setTimeout(
        () =>
          done(), 1000
      )
    )
  );
  test
    .command(['new:nestjs', 'test/fixtures/nestjs-new', '-n', 'demo', '-u', 'demo', '-e', 'demo@demo.demo'])
    .it('run new generator', _ctx => {
      let nestjsConfig;
      try {
        nestjsConfig = JSON.parse(readFileSync(
          'test/fixtures/nestjs-new/.nestcli.json'
        ).toString());
      } catch (error) {
        nestjsConfig = {};
        console.error(error);
      }
      expect(nestjsConfig.projects.demo.root).to.equals('src/apps/demo/');
    });
});
