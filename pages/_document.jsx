import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyles, createStylesServer } from '@mantine/next';

import createEmotionServer from '@emotion/server/create-instance'
import { cache } from '@emotion/css'

export const renderStatic = async (html) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?')
  }
  const { extractCritical } = createEmotionServer(cache)
  const { ids, css } = extractCritical(html)

  return { html, ids, css }
}

const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const page = await ctx.renderPage()
    const { css, ids } = await renderStatic(page.html)
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />        
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
