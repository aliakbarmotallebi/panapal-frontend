import { GetStaticProps } from "next";
import Link from "next/link";
import { getArticles } from "lib/api";

export default function Blog({ articles }: { articles: any[] }) {
  return (
    <main>
      <h1>مقالات</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticles();
  return { props: { articles }, revalidate: 10 };
};
