module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'build', // Para cambios relacionados con el proceso de construcción del proyecto (solo después de correr el comando npm run build)
				'ci', // Para cambios en archivos y scripts de configuración de CI (Continuous Integration)
				'docs', // Para cambios únicamente en la documentación
				'feat', // Para agregar una nueva característica o funcionalidad
				'fix', // Para correcciones de errores o bugs
				'opt', // Para cambios de código que mejoran el rendimiento
				'style', // Para cambios únicamente de estilos
				'test', // Para agregar pruebas faltantes o corregir pruebas existentes
				'merge', // Para fusiones de ramas (branches) en el repositorio remoto
			],
		],
		'scope-empty': [2, 'never'],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-empty': [2, 'never'],
		'subject-case': [2, 'always', 'sentence-case'],
		'header-max-length': [2, 'always', 120],
		'body-max-line-length': [2, 'always', 120],
		'footer-max-line-length': [2, 'always', 60],
		'body-leading-blank': [0, 'always'],
		'footer-leading-blank': [0, 'always'],
	},
}
