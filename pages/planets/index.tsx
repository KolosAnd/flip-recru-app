import type { NextPage } from 'next';
import Head from 'next/head';
import {getPageCount} from "../../utils/pages";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import {getPlanets} from "../../utils/api";

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
  const page = context?.query?.page || 1;
  const result: any = await getPlanets(+page);
  const { data } = result;

  return { 
      props: { data },
      revalidate: 3600 // one hour
  };
}

