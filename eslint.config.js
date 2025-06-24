import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'better-tailwindcss': betterTailwindcss,
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      // TailwindCSS 관련 룰 예시
      'better-tailwindcss/classnames-order': 'warn',
      'better-tailwindcss/no-custom-classname': 'warn',
      // 기타 프로젝트 맞춤 룰 추가
    },
    settings: {
      react: { version: 'detect' },
      'better-tailwindcss': {
        tailwindConfig: 'tailwind.config.js',
        entryPoint: 'src/index.css', // TailwindCSS 엔트리 파일 경로
      },
    },
  },
  prettier,
];
