import type {NextPage, NextPageContext} from 'next';
import Head from 'next/head';
import {getPageCount} from "../../utils/pages";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import {getPlanets} from "../../utils/api";
import { IPlanetList} from "../../types/Planet";
import {FC} from "react";
import {AxiosResponse} from "axios";

interface CardListProps {
    props: IPlanetList,
}

const Planets: FC<CardListProps> = ({props}) => {
    // @ts-ignore
  const { count, results  } = props.data || {};
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
        <CardList cards={cards} title={'Star Wars Planets'}/>
         { cards.length &&
             <Pagination
                 url={'planets'}
                 totalPages={totalPages}
             />
         }

      </div>
    )
}

export default Planets;

// @ts-ignore
Planets.getInitialProps = async (context: NextPageContext) => {
  const page:number | string | string[] = context?.query?.page || 1;
  const result: AxiosResponse<CardListProps> = await getPlanets(+page);
  const { data } = result;

  return { 
      props: { data },
      revalidate: 3600 // one hour
  };
}

