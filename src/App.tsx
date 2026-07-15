import React from 'react';
import './styles/styles.scss';
import Creator from './components/Creator';
import Footer from './components/Footer';

export default function App(): JSX.Element {
	return (
		<main className='App'>
			<Creator />
			<Footer />
		</main>
	);
}
