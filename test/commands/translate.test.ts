import { expect, test } from '@oclif/test';
import { access, constants, readFile, unlink } from 'fs';
import { resolve as resolvePath } from 'path';

describe('translate', () => {
  beforeEach(done =>
    unlink(resolvePath('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), __err =>
      unlink(resolvePath('test/fixtures/translate/folder1/i18n/en.i18n.ts'), ___err =>
        unlink(resolvePath('test/fixtures/translate/i18n/ru.i18n.ts'), ____err =>
          unlink(resolvePath('test/fixtures/translate/i18n/en.i18n.ts'), _____err =>
            unlink(resolvePath('test/fixtures/translate/i18n/template.pot'), ______err =>
              unlink(resolvePath('test/fixtures/translate/folder1/i18n/template.pot'), _______err =>
                unlink(resolvePath('test/fixtures/translate/i18n/custom-template.pot'), ________err =>
                  done()
                )
              )
            )
          )
        )
      )
    )
  );
  afterEach(done =>
    unlink(resolvePath('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), __err =>
      unlink(resolvePath('test/fixtures/translate/folder1/i18n/en.i18n.ts'), ___err =>
        unlink(resolvePath('test/fixtures/translate/i18n/ru.i18n.ts'), ____err =>
          unlink(resolvePath('test/fixtures/translate/i18n/en.i18n.ts'), _____err =>
            unlink(resolvePath('test/fixtures/translate/i18n/template.pot'), ______err =>
              unlink(resolvePath('test/fixtures/translate/folder1/i18n/template.pot'), _______err =>
                unlink(resolvePath('test/fixtures/translate/i18n/custom-template.pot'), ________err =>
                  done()
                )
              )
            )
          )
        )
      )
    )
  );
  test
    .command(['translate', 'test/fixtures/translate', '-f', 'po'])
    .it('runs translate with set folder and format po', _ctx =>
      access(resolvePath('test/fixtures/translate/i18n/template.pot'), constants.F_OK, err => {
        if (err) {
          expect(false).to.equal(true);
        } else {
          expect(true).to.equal(true);
        }
      })
    );
  test
    .command(['translate', 'test/fixtures/translate', '-f', 'po', '-t', 'custom-template'])
    .it('runs translate with set folder and format po, custom template', _ctx =>
      access(resolvePath('test/fixtures/translate/i18n/custom-template.pot'), constants.F_OK, err => {
        if (err) {
          expect(false).to.equal(true);
        } else {
          expect(true).to.equal(true);
        }
      })
    );
  test
    .command(['translate', 'test/fixtures/translate/folder1', '-f', 'po', '-c'])
    .it('runs translate with set folder and format po', _ctx =>
      access(resolvePath('test/fixtures/translate/folder1/i18n/template.pot'), constants.F_OK, err => {
        if (err) {
          expect(false).to.equal(true);
        } else {
          expect(true).to.equal(true);
        }
      })
    );
  test
    .command(['translate', 'test/fixtures/translate/folder1', '-f', 'json', '-c', '-p', 'Core'])
    .it('runs translate with set folder and format json, clean, prefix ', _ctx =>
      readFile(resolvePath('test/fixtures/translate/folder1/i18n/en.i18n.ts'), 'utf8', (_err, body) =>
        expect(body).to.contain(`export const CoreEnI18n = {
  Id: '',
  dd1: 'dd',
  dd2: 'dd',
  dd3: 'dd'
};
`)
      )
    );
  test
    .command(['translate', 'test/fixtures/translate/folder1', '-f', 'po', '-c', '-p', 'Core'])
    .it('runs translate with set folder and format po, clean, prefix', _ctx =>
      readFile(resolvePath('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), 'utf8', (_err, body) =>
        expect(body).to.contain(`export const CoreRuI18n = {
  Id: 'Ид'
};
`)
      )
    );
  test
    .command(['translate', 'test/fixtures/translate/folder1', '-f', 'json', '-c'])
    .it('runs translate with set folder and format json + clean', _ctx => {
      access(resolvePath('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), constants.F_OK, _err =>
        access(resolvePath('test/fixtures/translate/folder1/i18n/en.i18n.ts'), constants.F_OK, __err => {
          if (_err || __err) {
            expect(false).to.equal(true);
          } else {
            expect(true).to.equal(true);
          }
        })
      );
    });
  test
    .command(['translate', 'test/fixtures/translate', '-f', 'po', '-e', 'folder1'])
    .it('runs translate with set folder and format po and excludes', _ctx =>
      access(resolvePath('test/fixtures/translate/i18n/template.pot'), constants.F_OK, err => {
        if (err) {
          expect(false).to.equal(true);
        } else {
          expect(true).to.equal(true);
        }
      })
    );
  test
    .command(['translate', 'test/fixtures/translate', '-f', 'json', '-e', 'folder1'])
    .it('runs translate with set folder and format json and excludes', _ctx =>
      access(resolvePath('test/fixtures/translate/i18n/ru.i18n.ts'), constants.F_OK, _err =>
        access(resolvePath('test/fixtures/translate/i18n/en.i18n.ts'), constants.F_OK, __err => {
          if (_err || __err) {
            expect(false).to.equal(true);
          } else {
            expect(true).to.equal(true);
          }
        })
      )
    );
  test
    .command(['translate', 'test/fixtures/translate', '-f', 'po'])
    .it('runs translate with set folder and format po', _ctx =>
      access(resolvePath('test/fixtures/translate/i18n/template.pot'), constants.F_OK, err => {
        if (err) {
          expect(false).to.equal(true);
        } else {
          expect(true).to.equal(true);
        }
      })
    );
  test
    .command(['translate', 'test/fixtures/translate', '-f', 'json'])
    .it('runs translate with set folder and format json', _ctx =>
      access(resolvePath('test/fixtures/translate/i18n/ru.i18n.ts'), constants.F_OK, _err =>
        access(resolvePath('test/fixtures/translate/i18n/en.i18n.ts'), constants.F_OK, __err => {
          if (_err || __err) {
            expect(false, _err + ', ' + __err).to.equal(true);
          } else {
            expect(true).to.equal(true);
          }
        })
      )
    );
  test
    .stderr()
    .command(['translate', 'test/fixtures/not-exists-folder'])
    .it('error in runs translate with set not exists folder', ctx =>
      expect(ctx.stderr).to.contain('The path you supplied was not found')
    );
  test
    .stderr()
    .command(['translate', 'test/fixtures/not-exists-folder', '-f', 'po'])
    .it('error in runs translate with set not exists folder and format po', ctx =>
      expect(ctx.stderr).to.contain('The path you supplied was not found')
    );
  test
    .stderr()
    .command(['translate', 'test/fixtures/not-exists-folder', '-f', 'json'])
    .it('error in runs translate with set not exists folder and format json', ctx =>
      expect(ctx.stderr).to.contain('The path you supplied was not found')
    );
});
