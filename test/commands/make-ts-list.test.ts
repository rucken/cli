import { expect, test } from '@oclif/test';
import { access, constants, readFile, unlink } from 'fs';
import { resolve as resolvePath } from 'path';

describe('make-ts-list', () => {
  beforeEach(done =>
    unlink(resolvePath('index-custom.txt'), _err =>
      unlink(resolvePath('test/fixtures/make-ts-list/index.ts'), __err =>
        unlink(resolvePath('test/fixtures/make-ts-list/index-custom.txt'), ___err =>
          done()
        )
      )
    )
  );
  afterEach(done =>
    unlink(resolvePath('index-custom.txt'), _err =>
      unlink(resolvePath('test/fixtures/make-ts-list/index.ts'), __err =>
        unlink(resolvePath('test/fixtures/make-ts-list/index-custom.txt'), ___err =>
          done()
        )
      )
    )
  );
  test
    .command(['make-ts-list', '-i', 'index-custom.txt'])
    .it('runs make-ts-list without set folder and custom index file name', _ctx =>
      access(resolvePath('index-custom.txt'), constants.F_OK, err => {
        if (err) {
          expect(false).to.equal(true);
        } else {
          expect(true).to.equal(true);
        }
      })
    );
  test
    .command(['make-ts-list', 'test/fixtures/make-ts-list', '-i', 'index-custom.txt'])
    .it('runs make-ts-list with set folder and custom index file name', _ctx =>
      readFile(resolvePath('test/fixtures/make-ts-list/index-custom.txt'), 'utf8', (_err, body) =>
        expect(body).to.contain(`export * from './class1';
export * from './folder1/class2';
`)
      )
    );
  test
    .command(['make-ts-list', 'test/fixtures/make-ts-list'])
    .it('runs make-ts-list with set folder', _ctx =>
      readFile(resolvePath('test/fixtures/make-ts-list/index.ts'), 'utf8', (_err, body) =>
        expect(body).to.contain(`export * from './class1';
export * from './folder1/class2';
`)
      )
    );
  test
    .command(['make-ts-list', 'test/fixtures/make-ts-list', '-e', '["folder1","node_modules"]', '-i', 'index-custom.txt'])
    .it('runs make-ts-list with set folder, excludes and custom index file name ', _ctx =>
      readFile(resolvePath('test/fixtures/make-ts-list/index-custom.txt'), 'utf8', (_err, body) =>
        expect(body).to.contain(`export * from './class1';
`)
      )
    );
  test
    .stdout()
    .stderr()
    .command(['make-ts-list', '-i', 'not-exists-folder/index.ts'])
    .it('error in runs make-ts-list with set not exists folder for index.ts', ctx =>
      expect(ctx.stderr).to.contain('ENOENT')
    );
  test
    .stdout()
    .stderr()
    .command(['make-ts-list', 'test/fixtures/not-exists-folder'])
    .it('error in runs make-ts-list with set not exists folder', ctx =>
      expect(ctx.stderr).to.contain('ENOENT')
    );
});
