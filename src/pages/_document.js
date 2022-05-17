import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Mohammad Babaei Angular React Next.js Vue.js Nuxt.js"
          />
          <meta
            name="description"
            content="Fron-End Developer"
          />
          <meta name="author" content="Mohammad babaei" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />

<script>(function (w,d,s,v,odl){(w[v]=w[v]||{})['odl']=odl;w[v]['ENV']='dev';
var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;
j.src='https://Intakerdev.azureedge.net/widget/chat.min.js';
f.parentNode.insertBefore(j,f);
})(window, document, 'script','Intaker', 'textme');
</script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
