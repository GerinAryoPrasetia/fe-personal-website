"use client"; // Ensure this is a client component

import { useState, useEffect } from "react";
import BlogList from "./list";

interface DataAttributes {
  title: string;
  description: string;
  publishedAt: string;
}

interface Repo {
  id: number;
  attributes: DataAttributes;
}

interface ApiResponse {
  data: Repo[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export default function Page() {
  const [articles, setArticles] = useState<Repo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_STRAPI_URL}/articles?pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
        );
        const resJson: ApiResponse = await res.json();

        console.log("API Response:", resJson);

        if (!Array.isArray(resJson.data)) {
          console.error("Invalid API response format:", resJson);
          return;
        }

        setArticles(resJson.data);
        setTotalPages(resJson.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="font-light italic text-sm text-center">
        The place where I share all of my thoughts and my learning journey
      </p>
      <div className="mt-4">
        {articles.map((article) => (
          <BlogList
            key={article.id}
            title={article.attributes.title}
            desc={article.attributes.description}
            publishedAt={article.attributes.publishedAt}
            id={article.id}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2  disabled:opacity-50"
        >
          &lt;&lt;
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2disabled:opacity-50"
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}
