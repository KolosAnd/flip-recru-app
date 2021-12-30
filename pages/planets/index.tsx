import type { NextPage } from 'next';
import Link from 'next/link'
import axios from "axios";
import https from "https";
import { useEffect, useState } from 'react';
import {getPageCount} from "../../utils/pages";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";

const Planets: NextPage = ({data}: any) => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const totalCount = data.count;
  const totalPages = getPageCount(totalCount, limit);

  const changePage = (page:number) => {
      setPage(page);
  }

  return (
     <div className="App">
        <Header/>
        <CardList cards={data.results}/>
        <Pagination
          page={page}
          totalPages={totalPages}
        />
      </div>
    )
}

export default Planets;

export async function getStaticProps({ query }: any) {
  const { page = 1 } = query || {};

  const agent = new https.Agent({
    rejectUnauthorized: false,
   });
  const result: any = await axios.get("https://swapi.dev/api/planets", {httpsAgent: agent,
    params: {
        page
    }});

  if (!result) {
    return {
      notFound: true,
    }
  }
  const { data } = result;

  return {
    props: { data }, // will be passed to the page component as props
  }
}
