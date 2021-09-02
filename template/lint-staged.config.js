module.exports = {
    '*.{ts,tsx}': [
        () => 'tsc -p tsconfig.json --noEmit --skipLibCheck',
        'npm run test',
        'npm run lint-fix',
        'npm run prettier',
    ],
    '*.{js,jsx}': ['prettier --write', 'eslint --fix'],
};
