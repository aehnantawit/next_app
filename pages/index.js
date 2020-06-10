import Head from 'next/head'
import Link from 'next/link'

export default function Index({ title, detail, posts }) {
  return (
    <main>
      <Head>
        <title>Index page</title>
      </Head>

      <h1>{title}</h1>

      <section>
        {detail}
      </section>
      <div>
        <ul>
          {posts.map(item => (
            <li key={'li-' + item} style={{ paddingBottom: '10px'}}>
              <Link href={`/detail?id=${item}`} as={`/detail/${item}`}><a>post {item}</a></Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export async function getStaticProps() {

  const posts = [1, 2, 3, 4, 5]

  return {
    props: {
      title: 'Index page',
      detail: 'This is index page.',
      posts: posts
    },
  }
}