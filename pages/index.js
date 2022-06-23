import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h4 className={styles.title}>
            <Link href="/tv-shows/avengers">Go to Avengers list</Link>
          </h4>
        </main>
      </Layout>
    </div>
  )
}
