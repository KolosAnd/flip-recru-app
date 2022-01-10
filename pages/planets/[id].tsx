import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Head from 'next/head';
import Header from "../../components/Header/Header";
import OneCardInfo from "../../components/OneCardInfo/OneCardInfo";
import {getPlanets, getPlanetById} from "../../utils/api"
import {IPlanet, IPlanetList} from "../../types/Planet";
import {FC, useEffect} from "react";
import {AxiosResponse} from "axios";

interface PlanetItem {
  data: IPlanet
}

const Planet : FC<PlanetItem> = ({data}) => {
  return (
      <>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={`Star Wars Planet ${data.name} information`}/>
        </Head>
        <Header/>
        <section className="one_planet_page">
          <div className="container">
            <div className="one_planet_wrap">
              <h1 className="one_planet_title">Information about planet - {data.name}</h1>
              <OneCardInfo cardInfo={data}/>
            </div>
          </div>
        </section>
      </>)
}

export default Planet;

export async function getStaticPaths() {
  const result: AxiosResponse<IPlanetList> = await getPlanets();
  if (!result) {
    return {
      notFound: true,
    }
  }
  const { count } = result.data;
  const paths = []
  for (let i = 1; i <= parseInt(count); i++) {
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

export const getStaticProps:GetStaticProps = async ({params}: any) => {
  const { id } = params;
  const result: AxiosResponse<PlanetItem> = await getPlanetById(id);
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
