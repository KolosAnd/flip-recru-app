import type { NextPage } from 'next'
import Head from 'next/head';
import Header from "../../components/Header/Header";
import OneCardInfo from "../../components/OneCardInfo/OneCardInfo";
import {getPeople, getPersonByID} from "../../utils/api"


const Person: NextPage = ({data}: any) => {
    return (<>
        <Head>
            <title>{data.name}</title>
            <meta name="description" content={`Star Wars Person ${data.name} information`} />
        </Head>
        <Header/>
        <section className="one_planet_page">
            <div className="container">
                <div className="one_planet_wrap">
                    <h1 className="one_planet_title">Information about person - {data.name}</h1>
                    <OneCardInfo cardInfo={data}/>
                </div>
            </div>
        </section>
    </>)
}

export default Person;

export async function getStaticPaths() {
    const result: any = await getPeople();
    if (!result) {
        return {
            notFound: true,
        }
    }
    const { count } = result.data;
    const paths = []
    for (let i = 1; i <= count; i++) {
        const dynamicPageParams = {
            params: {
                id: i.toString()
            }
        };
        paths.push(dynamicPageParams);
    }
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: any) {
    const { id } = params;
    const result: any = await getPersonByID(id);
    if (!result) {
        return {
            notFound: true,
        }
    }
    const { data } = result;
    return {
        props: { data },
        revalidate: 3600 // one hour
    }
}
