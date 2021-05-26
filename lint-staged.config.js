module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc -p tsconfig.json --noEmit --skipLibCheck',
    'prettier --write',
    'eslint --fix',
  ],
  '*.{js,jsx}': ['prettier --write', 'eslint --fix'],
}
