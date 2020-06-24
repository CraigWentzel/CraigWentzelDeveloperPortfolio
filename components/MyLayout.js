
import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';
import { initGA, logPageView } from '../utils/googleAnalytics';

/* Defining my layout style*/

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}


export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <div>
        <Head>
          {/*bootstrap link*/}
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossorigin='anonymous'
          />
          {/*fontawesome link*/}
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.7.2/css/all.css'
            integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
            crossorigin='anonymous'
          />
        </Head>
        <Header />
        {this.props.children} {/*where data goes*/}
      </div>
    );
  }
}
