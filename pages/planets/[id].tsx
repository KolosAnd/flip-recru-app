import type { NextPage } from 'next'
import {useRouter } from 'next/router';
import Link from 'next/link'
import axios from "axios";
import https from "https";

const Planet: NextPage = ({data}: any) => {
  const router = useRouter();
  const { id } = router.query;
  return (<>
    <h1>Planet info page {data.name}</h1>
    <Link href="/planets">
      <a>back to the list</a>
    </Link>
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