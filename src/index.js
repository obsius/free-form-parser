import * as readline from 'readline';

const COMMENT_CHAR = '#';
const DECLARATION_CHAR = '@';
const META_CHAR = '%';
const VAR_CHAR = '$';

const BLOCK_START_CHAR = '{';
const BLOCK_END_CHAR = '}';

const DECLARATION_FFP = 'ffp';
const DECLARATION_TYPE = 'type';
const DECLARATION_SECTION = 'section';

const VALID_VAR_CHAR = /[a-zA-Z0-9_]{1}/;
const VALID_VAR_FIRST_CHAR = /[a-zA-Z_]{1}/;

export default class FreeFormParser {
	constructor() {

	}
}