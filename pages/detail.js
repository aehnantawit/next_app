import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Detail() {

    const router = useRouter()
    const { id } = router.query

    return (
        <main>
            <Head>
                <title>Detail page</title>
            </Head>

            <h1>Detail page of id {id}</h1>

            <section>
                This is detail page
            </section>
            <p>
                <Link href='/'><a>back..</a></Link>
            </p>
        </main>
    )
}

// export async function getServerSideProps(ctx) {
//     return {
//         props: { id: ctx.query.id }, // will be passed to the page component as props
//     }
// }

export default Detail