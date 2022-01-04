import type { NextPage } from 'next';
import Head from 'next/head';
import axios from "axios";
import https from "https";
import {getPageCount} from "../../utils/pages";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";

const Planets: NextPage = ({props}: any) => {
  const { results, count } = props.data || {};
  const totalCount = count || 0;
  const totalPages = getPageCount(totalCount);
  const cards = results || [];

  return (
     <div className="App">
        <Head>
          <title>Star wars Planets list page</title>
          <meta name="description" content="Star wars Planets list page" />
        </Head>
        <Header/>
        <CardList cards={cards}/>
        <Pagination
          totalPages={totalPages}
        />
      </div>
    )
}

export default Planets;

Planets.getInitialProps = async (context) => {
  const { page } = context.query || 1;
  const agent = new https.Agent({
    rejectUnauthorized: false,
   });
  const result: any = await axios.get("https://swapi.dev/api/planets", {httpsAgent: agent,
    params: {
        page
    }});
  const { data } = result;

  return { 
      props: { data },
      revalidate: 86400 // one day
  };
}

