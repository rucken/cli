import { expect, test } from '@oclif/test';
import { readFileSync, writeFileSync } from 'fs';

describe('version-updater', () => {
  beforeEach(done => {
    writeFileSync(
      'test/fixtures/version-updater/folder1/package.json',
      readFileSync(
        'test/fixtures/version-updater/folder1/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/version-updater/folder2_without_peerDependencies/package.json',
      readFileSync(
        'test/fixtures/version-updater/folder2_without_peerDependencies/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/version-updater/folder3_without_dependencies/package.json',
      readFileSync(
        'test/fixtures/version-updater/folder3_without_dependencies/default-package.json'
      ).toString()
    );
    done();
  });
  afterEach(done => {
    writeFileSync(
      'test/fixtures/version-updater/folder1/package.json',
      readFileSync(
        'test/fixtures/version-updater/folder1/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/version-updater/folder2_without_peerDependencies/package.json',
      readFileSync(
        'test/fixtures/version-updater/folder2_without_peerDependencies/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/version-updater/folder3_without_dependencies/package.json',
      readFileSync(
        'test/fixtures/version-updater/folder3_without_dependencies/default-package.json'
      ).toString()
    );
    done();
  });
  test
    .command(['version-updater', 'test/fixtures/version-updater/folder1', '-r', 'test/fixtures/version-updater'])
    .it('runs version-updater with set root folder', _ctx => {
      const rootConfig = JSON.parse(readFileSync(
        'test/fixtures/version-updater/package.json'
      ).toString());
      const folderConfig = JSON.parse(readFileSync(
        'test/fixtures/version-updater/folder1/package.json'
      ).toString());
      expect(rootConfig.version).to.equals(folderConfig.version);
      Object.keys(folderConfig['peerDependencies']).forEach(
        key =>
          expect(folderConfig['peerDependencies'][key]).to.equals(rootConfig['dependencies'][key])
      );
      Object.keys(folderConfig['dependencies']).forEach(
        key =>
          expect(folderConfig['dependencies'][key]).to.equals(rootConfig['dependencies'][key])
      );
    });
  test
    .command(['version-updater', 'test/fixtures/version-updater/folder2_without_peerDependencies', '-r', 'test/fixtures/version-updater'])
    .it('runs version-updater with set root folder and without peerDependencies', _ctx => {
      const rootConfig = JSON.parse(readFileSync(
        'test/fixtures/version-updater/package.json'
      ).toString());
      const folderConfig = JSON.parse(readFileSync(
        'test/fixtures/version-updater/folder2_without_peerDependencies/package.json'
      ).toString());
      expect(rootConfig.version).to.equals(folderConfig.version);
      expect(folderConfig['peerDependencies']).to.equals(undefined);
      Object.keys(folderConfig['dependencies']).forEach(
        key =>
          expect(folderConfig['dependencies'][key]).to.equals(rootConfig['dependencies'][key])
      );
    });
  test
    .command(['version-updater', 'test/fixtures/version-updater/folder3_without_dependencies', '-r', 'test/fixtures/version-updater'])
    .it('runs version-updater with set root folder and without dependencies', _ctx => {
      const rootConfig = JSON.parse(readFileSync(
        'test/fixtures/version-updater/package.json'
      ).toString());
      const folderConfig = JSON.parse(readFileSync(
        'test/fixtures/version-updater/folder3_without_dependencies/package.json'
      ).toString());
      expect(rootConfig.version).to.equals(folderConfig.version);
      expect(folderConfig['dependencies']).to.equals(undefined);
      Object.keys(folderConfig['peerDependencies']).forEach(
        key =>
          expect(folderConfig['peerDependencies'][key]).to.equals(rootConfig['dependencies'][key])
      );
    });
  test
    .stderr()
    .command(['version-updater'])
    .it('error in runs version-updater without arguments', ctx =>
      expect(ctx.stderr).to.contain('Source and destination is equals')
    );
  test
    .stderr()
    .command(['version-updater', 'test/fixtures/version-updater/not_exists_folder1', '-r', 'test/fixtures/version-updater'])
    .it('error in runs version-updater with set not exists root folder', ctx =>
      expect(ctx.stderr).to.contain('Cannot set property \'version\'')
    );
  test
    .stderr()
    .command(['version-updater', 'test/fixtures/version-updater/not_exists_folder1', '-r', 'test/fixtures/not_exists_/version-updater'])
    .it('error in runs version-updater with set not exists folders', ctx =>
      expect(ctx.stderr).to.contain('Cannot read property \'version\'')
    );
  test
    .stderr()
    .command(['version-updater', 'test/fixtures/version-updater/not_exists_folder1'])
    .it('error in runs version-updater with set not exists folders and no set root folder', ctx =>
      expect(ctx.stderr).to.contain('Cannot set property \'version\'')
    );
});
