import type { NextPage } from 'next';
import Head from 'next/head';
import {getPageCount} from "../../utils/pages";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import {getPeople} from "../../utils/api";
import {IPeople} from "../../types/People";
import {FC} from "react";
import {NextPageContext} from "next";

interface CardListProps {
    props: IPeople,
}

const People: FC<CardListProps> = ({props}) => {
    // @ts-ignore
    const { results, count } = props.data || {};
    const totalCount = count || 0;
    const totalPages = getPageCount(totalCount);
    const cards = results || [];

    return (
        <div className="App">
            <Head>
                <title>Star wars People list page</title>
                <meta name="description" content="Star wars People list page" />
            </Head>
            <Header/>
            <CardList cards={cards} title={'Star Wars People'}/>
            {cards.length &&
                <Pagination
                    url={'people'}
                    totalPages={totalPages}
                />
            }
        </div>
    )
}

export default People;
// @ts-ignore
People.getInitialProps = async (context: NextPageContext) => {
    const page = context?.query?.page || 1;
    const result: any = await getPeople(+page);
    const { data } = result;

    return {
        props: { data },
        revalidate: 3600 // one hour
    };
}

