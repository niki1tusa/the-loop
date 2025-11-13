import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	// путь к Next-приложению
	dir: './',
});

// Кастомный конфиг Jest
const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',

	// если у тебя в tsconfig есть paths типа "@/..."
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},

	// сюда можно подключать jest-dom и прочие штуки
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// ОБЯЗАТЕЛЬНО export default через createJestConfig
export default createJestConfig(config);
