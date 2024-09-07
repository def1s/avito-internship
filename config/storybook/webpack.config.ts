import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
	// переопределяю конфиг, чтобы storybook умел работать с абсолютными путями
	const paths: BuildPaths = {
		src: path.resolve(__dirname, '..', '..', 'src'),
		html: '',
		build: '',
		entry: ''
	};

	config?.resolve?.modules?.push(paths.src);
	config?.resolve?.extensions?.push('.ts', '.tsx');

	// для работы с css и scss
	config?.module?.rules?.push(buildScssLoader(true));

	// объявление глобальных переменных
	config?.plugins?.push(new DefinePlugin({
		__IS_DEV__: true,
		__API_URL__: JSON.stringify('http://localhost:8080/api')
	}));

	return config;
};
