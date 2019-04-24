const fs = require('fs');
const f = 'node_modules/@types/sinon/index.d.ts';

if (fs.existsSync(f)) {
    fs.readFile(f, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(
            'type SinonStubbedMember<T> = T extends Function ? SinonStub : T;',
            'type SinonStubbedMember<T> = T;'
        );
        fs.writeFile(f, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}