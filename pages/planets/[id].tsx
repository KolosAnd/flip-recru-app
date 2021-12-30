import type { NextPage } from 'next'
import {useRouter } from 'next/router';
import Link from 'next/link'
import axios from "axios";
import https from "https";
import Header from "../../components/Header/Header";
import OneCardInfo from "../../components/OneCardInfo/OneCardInfo";

const Planet: NextPage = ({data}: any) => {
  const router = useRouter();
  const { id } = router.query;
  return (<>
     <>
            <Header/>
            <section className="one_planet_page">
                <div className="container">
                    <div className="one_planet_wrap">
                        <h1 className="one_planet_title">Information about planet - {data.name}</h1>
                      
                        {/* {isCardLoading &&
                            <div className="loader"><Loader/></div>
                        } */}
                        <OneCardInfo cardInfo={data}/>
                    </div>
                </div>
            </section>
        </>
  </>)
}

export default Planet;

export async function getStaticProps({params}: any) {
  const agent = new https.Agent({
    rejectUnauthorized: false,
   });
   console.log("params", params);
  const result: any = await axios.get(`https://swapi.dev/api/planets/${params?.id}`, {httpsAgent: agent});

  if (!result) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: result.data }, // will be passed to the page component as props
  }
}

export async function getStaticPaths({params}: any) {
  const agent = new https.Agent({
    rejectUnauthorized: false,
   });
  const result: any = await axios.get("https://swapi.dev/api/planets", {httpsAgent: agent});
  if (!result) {
    return {
      notFound: true,
    }
  }
  // console.log("test", result.data);
  const paths = result.data.results?.map((item: any, index: number) => ({
    params: {
      id: index.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }

}