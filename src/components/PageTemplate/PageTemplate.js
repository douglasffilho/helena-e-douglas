import { Footer, Header, Icon, Logo } from 'components';
import Head from 'next/head';

export const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Head>
        <title>Template NextJS</title>
      </Head>
      <Header>
        <Logo text="Template" />
        <div className="remove-843" />
        <div className="Icons container small">
          <Icon title="Página Inicial" link="/" icon="home" />

          <Icon
            title="Fale Comigo"
            link="https://wa.me/5581986778644?text=Olá"
            openInNewTab="true"
            icon="chat"
          />

          <Icon
            title="Me acompanhe no LinkedIn"
            link="https://www.linkedin.com/in/douglas-fernandes-4175a585/"
            openInNewTab="true"
            icon="explore"
          />

          <Icon
            title="Me acompanhe no Github"
            link="https://github.com/douglasffilho"
            openInNewTab="true"
            icon="like"
          />
        </div>
      </Header>
      <main>{children}</main>
      <Footer>
        <p>Developed by Douglas Filho</p>
      </Footer>
      <style jsx="true">{`
        .PageTemplate {
          padding: 0.5rem 1rem 0rem 1rem;
          max-width: 45rem;
          margin: auto;
        }

        .PageTemplate .Icons {
          grid-template-columns: repeat(auto-fit, 8.5%);
          height: 1rem;
        }

        .PageTemplate .Icons .icon-text {
          font-size: 0.6rem;
        }
      `}</style>
    </div>
  );
};
