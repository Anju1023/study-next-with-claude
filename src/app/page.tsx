'use client';

import React from 'react';
import Hello from '../../components/Hello';
import Counter from '../../components/Counter';

export default function Home() {
	return (
		<main className="p-8 bg-gradient-to-br from-pink-100 to-purple-100 min-h-screen">
			<h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
				Next.jsデビュー
			</h1>
			<Hello name="あんじゅ" age={22} />
			<Hello name="くーちゃん" age={25} />

			<Counter />
		</main>
	);
}
