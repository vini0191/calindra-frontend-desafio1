import Layout from '../components/layout';
import Search from '../components/search';
import { Container } from '../styles/container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Search />
        <ToastContainer />
      </Container>
    </Layout>
  );
}
