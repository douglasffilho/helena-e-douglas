import { PageTemplate } from 'components';
import Head from 'next/head';

const seo = {
  author: 'Douglas Filho',
  title: 'Template NextJS',
  canonical: 'https://douglasffilho.heroku.app',
  description: 'Template NextJS.',
  keywords: 'Template, NextJS',
  type: 'website',
  image: 'https://avatars.githubusercontent.com/u/23297944?v=4',
  twitter: {
    type: 'summary_large_image',
    domain: 'douglasffilho.heroku.app',
    author: '@douglasffilho',
  },
};

const Home = () => {
  return (
    <PageTemplate>
      <Head>
        <title>{seo.title}</title>
        <link rel="canonical" href={seo.canonical} />

        <meta name="author" content={seo.author} />
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="keywords" content={seo.keywords} />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content={seo.type} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:image" content={seo.image} />

        <meta name="twitter:card" content={seo.twitter.type} />
        <meta property="twitter:domain" content={seo.twitter.domain} />
        <meta property="twitter:url" content={seo.canonical} />
        <meta name="twitter:site" content={seo.twitter.author} />
        <meta name="twitter:creator" content={seo.twitter.author} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Head>
      <h1>{seo.description}</h1>
    </PageTemplate>
  );
};

export default Home;
