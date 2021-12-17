import Head from 'next/head'
import Link from "next/link";
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from "../components/alert.js";
import { getSortedPostsData } from "../lib/post.js";

// 只在服务端运行
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm ChenPeng</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://www.nextjs.cn/learn" className="font-medium text-blue-500">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>
                    <Alert type="indigo">Blog</Alert>
                </h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a className="text-blue-500 font-semibold">{title}</a>
                            </Link>
                            <p className="text-black-500">{id}</p>
                            <small>{date}</small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
