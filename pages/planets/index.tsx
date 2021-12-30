import type { NextPage } from 'next';
import Link from 'next/link'
import axios from "axios";
import https from "https";

const Planets: NextPage = ({items}: any) => {

 

  return <div>
    <h1>Planets list page</h1>
    {!!items?.length &&
    <ul>
      {items.map((item: any) => (<li key={item.name}>
          <Link href={`/planets/${getPlanetId(item)}`} >
            <a>{item.name}</a>
          </Link>
        </li>))}
    </ul>
    }
  </div>
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
    props: { items: data.results }, // will be passed to the page component as props
  }
}
