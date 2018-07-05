import { expect, test } from '@oclif/test';
import { readFileSync, writeFileSync } from 'fs';

describe('config', () => {
  beforeEach(done => {
    writeFileSync(
      'test/fixtures/config/dev/angular.json',
      readFileSync(
        'test/fixtures/config/dev/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/config/dev/tsconfig.json',
      readFileSync(
        'test/fixtures/config/dev/default-tsconfig.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/config/prod/angular.json',
      readFileSync(
        'test/fixtures/config/prod/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/config/prod/tsconfig.json',
      readFileSync(
        'test/fixtures/config/prod/default-tsconfig.json'
      ).toString()
    );
    done();
  });
  afterEach(done => {
    writeFileSync(
      'test/fixtures/config/dev/angular.json',
      readFileSync(
        'test/fixtures/config/dev/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/config/dev/tsconfig.json',
      readFileSync(
        'test/fixtures/config/dev/default-tsconfig.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/config/prod/angular.json',
      readFileSync(
        'test/fixtures/config/prod/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/config/prod/tsconfig.json',
      readFileSync(
        'test/fixtures/config/prod/default-tsconfig.json'
      ).toString()
    );
    done();
  });
  test
    .command(['config', 'test/fixtures/config/dev', '-m', 'prod'])
    .it('runs config with set folder and prod mode', _ctx => {
      let angularConfig;
      let tsconfigConfig;
      try {
        angularConfig = JSON.parse(readFileSync(
          'test/fixtures/config/dev/angular.json'
        ).toString());
      } catch (error) {
        angularConfig = {};
        console.error(error);
      }
      try {
        tsconfigConfig = JSON.parse(readFileSync(
          'test/fixtures/config/dev/tsconfig.json'
        ).toString());
      } catch (error) {
        tsconfigConfig = {};
        console.error(error);
      }
      expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(true);
      expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('dist/project/core');
    });
  test
    .command(['config', 'test/fixtures/config/prod', '-m', 'dev'])
    .it('runs config with set folder and dev mode', _ctx => {
      const angularConfig = JSON.parse(readFileSync(
        'test/fixtures/config/prod/angular.json'
      ).toString());
      const tsconfigConfig = JSON.parse(readFileSync(
        'test/fixtures/config/prod/tsconfig.json'
      ).toString());
      expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(false);
      expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('libs/project/core/src');
    });

  test
    .command(['config', 'test/fixtures/config/prod', '-m', 'prod'])
    .it('runs config with set folder and prod mode for prod folder', _ctx => {
      const angularConfig = JSON.parse(readFileSync(
        'test/fixtures/config/prod/angular.json'
      ).toString());
      const tsconfigConfig = JSON.parse(readFileSync(
        'test/fixtures/config/prod/tsconfig.json'
      ).toString());
      expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(true);
      expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('dist/project/core');
    });
  test
    .command(['config', 'test/fixtures/config/dev', '-m', 'dev'])
    .it('runs config with set folder and dev mode for dev folder', _ctx => {
      const angularConfig = JSON.parse(readFileSync(
        'test/fixtures/config/dev/angular.json'
      ).toString());
      const tsconfigConfig = JSON.parse(readFileSync(
        'test/fixtures/config/dev/tsconfig.json'
      ).toString());
      expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(false);
      expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('libs/project/core/src');
    });
  test
    .stderr()
    .command(['config', 'test/fixtures/config/not_exists_folder1'])
    .it('error in runs config with set not exists folder', ctx =>
      expect(ctx.stderr).to.contain('Cannot read property \'compilerOptions\'')
    );
  test
    .stderr()
    .command(['config', 'test/fixtures/config/without_angular_json'])
    .it('error in runs config without angular.json', ctx =>
      expect(ctx.stderr).to.contain('Cannot read property \'compilerOptions\'')
    );
  test
    .stderr()
    .command(['config', 'test/fixtures/config/without_tsconfig_json'])
    .it('error in runs config without tsconfig.json', ctx =>
      expect(ctx.stderr).to.contain('Cannot read property \'compilerOptions\'')
    );
  test
    .stderr()
    .command(['config'])
    .it('error in runs config without set folder', ctx =>
      expect(ctx.stderr).to.contain('Cannot read property \'projects\'')
    );
});
