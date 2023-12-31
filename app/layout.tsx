import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Table TanShade',
	description:
		"A harmonious blend of tanstack functionality and shadcn elegance, Table TanShade offers a seamless data table experience that's both powerful and visually captivating.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					<div className='container py-10 mx-auto'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
