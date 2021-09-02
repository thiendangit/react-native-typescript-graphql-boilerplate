module.exports = {
    '*.{ts,tsx}': [
        () => 'tsc -p tsconfig.json --noEmit --skipLibCheck',
        'prettier --write',
        'eslint --fix',
        "git add",
    ],
    '*.{js,jsx}': ['prettier --write', 'eslint --fix'],
};
