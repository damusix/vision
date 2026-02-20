import * as Code from '@hapi/code';
import * as Lab from '@hapi/lab';


const lab = Lab.script();
export { lab };
const { before, describe, it } = lab;
const expect = Code.expect;


describe('import()', () => {

    let Vision;

    before(async () => {

        Vision = await import('../lib/index.js');
    });

    it('exposes all methods and classes as named imports', () => {

        expect(Object.keys(Vision).filter((k) => k !== 'module.exports')).to.equal([
            'plugin'
        ]);
    });
});
