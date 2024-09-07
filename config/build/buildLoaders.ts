import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';


export const BuildLoaders = ({ isDev }: BuildOptions) => {

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const scssLoader = buildScssLoader(isDev);

	const babelLoader = {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		}
	};

	return [
		babelLoader,
		tsLoader,
		scssLoader,
	];
};
