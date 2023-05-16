import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { Listing } from '@/components/Listing'

const inter = Inter({ subsets: ['latin'] })

const restaurantData = [
  {name: "Johnny Gio's Pizza", ratings: 4.7, thumbnailUrl: "https://tb-static.uber.com/prod/image-proc/processed_images/e2fd3f2e6de3ed69ee749ee80bdf10d4/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg", duration: '20 - 30 min'},
  {name: "Camy's Chargrill Chicken", ratings: 4.8, thumbnailUrl: "https://tb-static.uber.com/prod/image-proc/processed_images/53da6d71917184da822daf724c1fc6d6/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg", duration: '20 - 30 min'},
  {name: "Northeastern Family Chinese", ratings: 4.7, thumbnailUrl: "https://tb-static.uber.com/prod/image-proc/processed_images/f51a1108421a6451d1f055c910e67e71/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg", duration: '20 - 30 min'},
  {name: "P'Nut Street Noodles", ratings: 4.7, thumbnailUrl: "https://tb-static.uber.com/prod/image-proc/processed_images/9d58f77bdc4ffb827b2cf2f48bcaab97/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg", duration: '20 - 30 min'}
]

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-6'>
      <Head>
        <title>Foodie app</title>
        <meta name="description" content="Food delivery app, clone of UberEats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header/>
      </header>
      <main>
        <Listing title="Daily offers" listings={restaurantData}/>
        {/* <Listing title="Sweeten your meal" listings={restaurantData}/>
        <Listing title="Today’s offers" listings={restaurantData}/>
        <Listing title="Healthy eating" listings={restaurantData}/>
        <Listing title="Buy 1, get 1 free" listings={restaurantData}/> */}
      </main>
    </div>
  )
}
