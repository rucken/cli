import { expect, test } from '@oclif/test';
import { readFileSync, unlink, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';

describe('prepare', () => {
  beforeEach(done => {
    writeFileSync(
      'test/fixtures/prepare/dev/angular.json',
      readFileSync(
        'test/fixtures/prepare/dev/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/dev/libs/project/core/package.json',
      readFileSync(
        'test/fixtures/prepare/dev/libs/project/core/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/dev/tsconfig.json',
      readFileSync(
        'test/fixtures/prepare/dev/default-tsconfig.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/prod/angular.json',
      readFileSync(
        'test/fixtures/prepare/prod/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/prod/libs/project/core/package.json',
      readFileSync(
        'test/fixtures/prepare/prod/libs/project/core/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/prod/tsconfig.json',
      readFileSync(
        'test/fixtures/prepare/prod/default-tsconfig.json'
      ).toString()
    );
    unlink(resolvePath('test/fixtures/prepare/dev/apps/demo/src/app/i18n/ru.i18n.ts'), _err1 =>
      unlink(resolvePath('test/fixtures/prepare/dev/apps/demo/src/app/i18n/template.pot'), _err2 =>
        unlink(resolvePath('test/fixtures/prepare/dev/apps/demo/src/app/index.ts'), _err3 =>
          unlink(resolvePath('test/fixtures/prepare/dev/libs/project/core/src/i18n/ru.i18n.ts'), _err4 =>
            unlink(resolvePath('test/fixtures/prepare/dev/libs/project/core/src/i18n/template.pot'), _err5 =>
              unlink(resolvePath('test/fixtures/prepare/dev/libs/project/core/src/index.ts'), _err6 =>
                unlink(resolvePath('test/fixtures/prepare/prod/apps/demo/src/app/i18n/ru.i18n.ts'), _err11 =>
                  unlink(resolvePath('test/fixtures/prepare/prod/apps/demo/src/app/i18n/template.pot'), _err12 =>
                    unlink(resolvePath('test/fixtures/prepare/prod/apps/demo/src/app/index.ts'), _err13 =>
                      unlink(resolvePath('test/fixtures/prepare/prod/libs/project/core/src/i18n/ru.i18n.ts'), _err14 =>
                        unlink(resolvePath('test/fixtures/prepare/prod/libs/project/core/src/i18n/template.pot'), _err15 =>
                          unlink(resolvePath('test/fixtures/prepare/prod/libs/project/core/src/index.ts'), _err16 =>
                            done()
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  });
  afterEach(done => {
    writeFileSync(
      'test/fixtures/prepare/dev/angular.json',
      readFileSync(
        'test/fixtures/prepare/dev/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/dev/libs/project/core/package.json',
      readFileSync(
        'test/fixtures/prepare/dev/libs/project/core/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/dev/tsconfig.json',
      readFileSync(
        'test/fixtures/prepare/dev/default-tsconfig.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/prod/angular.json',
      readFileSync(
        'test/fixtures/prepare/prod/default-angular.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/prod/libs/project/core/package.json',
      readFileSync(
        'test/fixtures/prepare/prod/libs/project/core/default-package.json'
      ).toString()
    );
    writeFileSync(
      'test/fixtures/prepare/prod/tsconfig.json',
      readFileSync(
        'test/fixtures/prepare/prod/default-tsconfig.json'
      ).toString()
    );
    unlink(resolvePath('test/fixtures/prepare/dev/apps/demo/src/app/i18n/ru.i18n.ts'), _err1 =>
      unlink(resolvePath('test/fixtures/prepare/dev/apps/demo/src/app/i18n/template.pot'), _err2 =>
        unlink(resolvePath('test/fixtures/prepare/dev/apps/demo/src/app/index.ts'), _err3 =>
          unlink(resolvePath('test/fixtures/prepare/dev/libs/project/core/src/i18n/ru.i18n.ts'), _err4 =>
            unlink(resolvePath('test/fixtures/prepare/dev/libs/project/core/src/i18n/template.pot'), _err5 =>
              unlink(resolvePath('test/fixtures/prepare/dev/libs/project/core/src/index.ts'), _err6 =>
                unlink(resolvePath('test/fixtures/prepare/prod/apps/demo/src/app/i18n/ru.i18n.ts'), _err11 =>
                  unlink(resolvePath('test/fixtures/prepare/prod/apps/demo/src/app/i18n/template.pot'), _err12 =>
                    unlink(resolvePath('test/fixtures/prepare/prod/apps/demo/src/app/index.ts'), _err13 =>
                      unlink(resolvePath('test/fixtures/prepare/prod/libs/project/core/src/i18n/ru.i18n.ts'), _err14 =>
                        unlink(resolvePath('test/fixtures/prepare/prod/libs/project/core/src/i18n/template.pot'), _err15 =>
                          unlink(resolvePath('test/fixtures/prepare/prod/libs/project/core/src/index.ts'), _err16 =>
                            done()
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  });
  test
    .command(['prepare', 'test/fixtures/prepare/dev', '-m', 'prod'])
    .it('runs prepare with set folder and prod mode', _ctx => {
      const angularConfig = JSON.parse(readFileSync(
        'test/fixtures/prepare/dev/angular.json'
      ).toString());
      const tsconfigConfig = JSON.parse(readFileSync(
        'test/fixtures/prepare/dev/tsconfig.json'
      ).toString());
      expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(true);
      expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('dist/project/core');
    });
  test
    .command(['prepare', 'test/fixtures/prepare/prod', '-m', 'dev'])
    .it('runs prepare with set folder and dev mode', _ctx => {
      const angularConfig = JSON.parse(readFileSync(
        'test/fixtures/prepare/prod/angular.json'
      ).toString());
      const tsconfigConfig = JSON.parse(readFileSync(
        'test/fixtures/prepare/prod/tsconfig.json'
      ).toString());
      expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(false);
      expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('libs/project/core/src');
    });
  test
    .stderr()
    .command(['prepare', 'test/fixtures/prepare/without-projects'])
    .it('error in runs prepare without projects', ctx =>
      expect(ctx.stderr).to.contain('Projects not founded!')
    );
  test
    .stderr()
    .command(['prepare', 'test/fixtures/prepare/noexists-apps-libs'])
    .it('error in runs prepare with set not exists apps and libs', ctx =>
      expect(ctx.stderr).to.contain('no such file or directory')
    );
  test
    .stderr()
    .command(['prepare', 'test/fixtures/prepare/not-exists-folder1'])
    .it('error in runs prepare with set not exists folder', ctx =>
      expect(ctx.stderr).to.contain('no such file or directory')
    );
  test
    .stderr()
    .command(['prepare'])
    .it('error in runs prepare without set folder', ctx =>
      expect(ctx.stderr).to.contain('no such file or directory')
    );
});
