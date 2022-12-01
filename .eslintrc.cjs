/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	// *추가적인 규칙들을 적용*
	// *사용자 편의 규칙 추가*
	rules: {
		'prettier/prettier': [
			'error',
			// *아래 규칙들은 개인 선호에 따라 prettier 문법 적용*
			// *https://prettier.io/docs/en/options.html*
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
				semi: true,
				spaceBeforeFunctionParen: 'never',
			},
		],
	},
};
