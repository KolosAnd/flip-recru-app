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

  // const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect( () => {
    const totalCount = data.count;
    setTotalPages(getPageCount(totalCount, limit));
  }, [])
 


  useEffect(() => {
      // fetchCards(page,limit)
  }, [page, limit]);


  const changePage = (page:number) => {
      setPage(page);
  }

  return (
     <div className="App">
            <Header/>
            <CardList cards={data.results}/>
            {/* <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            /> */}

        </div>
    )
}

function getPlanetId (card:any) {
  let cardLinkIndex = card.url.slice(30);
  cardLinkIndex = cardLinkIndex.slice(0, -1);
  return cardLinkIndex;
}

export default Planets;

export async function getStaticProps(context: any) {
  const agent = new https.Agent({
    rejectUnauthorized: false,
   });
  const result: any = await axios.get("https://swapi.dev/api/planets", {httpsAgent: agent});

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
