import { compileScript, parse } from '@vue/compiler-sfc';
import type { Plugin } from 'vite';
import MagicString from 'magic-string';

const disableAttrInherit = function (code: string, id: string) {
	let s: MagicString | undefined;
	const str = () => s || (s = new MagicString(code));
	const { descriptor } = parse(code);

	if (descriptor.script || !descriptor.scriptSetup) {
		return null;
	}

	const result = compileScript(descriptor, { id });
	const inheritAttrs = result.attrs['inherit-attrs'];
	const lang = result.attrs.lang;

	if (inheritAttrs === 'false') {
		str().appendLeft(
			0,
			`<script ${lang ? `lang="${lang}"` : ''}>
export default {
  inheritAttrs: false
}
</script>\n`
		);
	}
	return {
		map: str().generateMap(),
		code: str().toString()
	};
};

export default (): Plugin => {
	return {
		name: 'vite-plugin-vue-setup-inherit-attrs',
		enforce: 'pre',
		async transform(code, id) {
			if (!/\.vue$/.test(id)) {
				return null;
			}

			return disableAttrInherit(code, id);
		}
	};
};
