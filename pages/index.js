import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'


export default function Home() {
  return (
    <>
      <Head >
        <title>OpenAuto</title>
        <meta name='keywords' content='smart auto care' />
      </Head>
      <Layout />
    </>
  )
}
