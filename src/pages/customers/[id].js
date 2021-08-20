import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PageTwo() {
    const router = useRouter();
    console.log(router);
    const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Page id is {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">
        <img
          className="m-auto my-4 w-24 sm:w-auto"
          alt="Ihatetomatoes"
          src="/assets/img_logo.svg"
        />
        <h1 className="mx-auto text-4xl font-bold">
          Welcome to customer [{id}]
        </h1>

        {/* <Link href="/"> */}
          <a>Go to Home</a>
        {/* </Link> */}
      </main>

    </div>
  )
}