import Fs from 'node:fs';
import Util from 'node:util';


const internals = {};


const _stat = Util.promisify(Fs.stat);

const _readFile = Util.promisify(Fs.readFile);

const utils = {
    stat: _stat,
    readFile: _readFile
};

export default utils;
