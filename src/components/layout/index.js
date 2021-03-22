import Head from 'next/head';

export default function Layout({
  children,
  title = 'Desafio Tech Frontend - 01',
  pageDescription = 'Página inicial',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={pageDescription}></meta>
      </Head>
      {children}
    </div>
  );
}
