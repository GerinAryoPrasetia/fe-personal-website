import { remark } from "remark";
import html from "remark-html";
import breaks from "remark-breaks";
import "../style.css";

interface BlogProps {
  params: {
    id: string;
  };
}

async function fetchBlogPost(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_STRAPI_URL}/articles/${id}?populate=*`
  );
  const data = await res.json();
  return data;
}

export default async function BlogPage({ params }: BlogProps) {
  const { id } = params;
  const article = await fetchBlogPost(id);

  if (!article) {
    return <div>Blog post not found.</div>;
  }

  const attributes = article.data.attributes;
  const blocks = article.data.attributes.blocks;

  // Convert Markdown to HTML with line breaks
  const markdownToHtml = async (markdown: string) => {
    const result = await remark().use(html).use(breaks).process(markdown);
    return result.toString();
  };

  const markdownContent = blocks[0].body;
  const source = markdownContent.replace(/\n/gi, "\n &nbsp;");
  const contentHtml = await markdownToHtml(markdownContent);

  return (
    <div>
      <h1>{attributes.title}</h1>
      <p>{attributes.description}</p>
      <p>Published on: {attributes.publishedAt}</p>
      {/* Render the HTML converted from Markdown */}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="foo" />
    </div>
  );
}
