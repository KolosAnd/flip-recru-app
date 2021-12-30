import type { NextPage } from 'next'
import {useRouter } from 'next/router';

const Planet: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Planet info page {id}</h1>
}

export default Planet;