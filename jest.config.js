export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)'],
	moduleNameMapper: {
		'\\.(scss)$': 'identity-obj-proxy',
	},
}
