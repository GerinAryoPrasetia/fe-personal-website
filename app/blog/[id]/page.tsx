interface PageProps {
  params: {
    id: number;
  };
}

interface DataAttributes {
  title: string;
}

interface Repo {
  id: number;
  attributes: DataAttributes;
}

interface ApiResponse {
  data: Repo;
}

async function Page({ params }: PageProps) {
  const res = await fetch(
    `http://localhost:1337/api/articles/${params.id}?populate=*`
  );
  const resJson: ApiResponse = await res.json();
  const data: Repo = resJson.data;
  console.log(data);
  return <div>{data.attributes.title} Hello ID Blog</div>;
}

export default Page;
