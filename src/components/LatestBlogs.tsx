// import React from 'react'
import { useEffect, useState } from 'react';
import BlogDiv from './BlogDiv';
import HeadingDiv from './HeadingDiv'
import SectionContainer from './SectionContainer';

interface BlogProps {
    title: string;
    description: string;
    link: string;
}



const getBlogs = async (): Promise<BlogProps[]> => {
  const response = await fetch('https://dev.to/api/articles?username=priyanshukumarsinha');
  const data = await response.json();

  return data.slice(0,4).map((blog: any) => ({
    title: blog.title,
    description: blog.description || (blog.body_markdown ? blog.body_markdown.slice(0, 100) + '...' : ''),
    link: blog.url,
  }));
};

const LatestBlogs = () => {


      const [blogs, setBlogs] = useState<BlogProps[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
        const blogsData = await getBlogs();
        setBlogs(blogsData);
    };
    fetchBlogs();
  }, []);

  return (
    <SectionContainer>
        <HeadingDiv
        heading="Latest Blogs"
            moreTitle="view more blogs"
            moreLink="0xpks.site"
        />

        <div className="flex flex-col justify-center gap-5">
            {
                blogs && blogs.map((blog, idx) =>
                    blog ? <a href={blog.link} key={idx}  target="_blank" rel="noopener noreferrer"><BlogDiv blog={blog} /></a> : null
                )
            }
        </div>
    </SectionContainer>
  )
}

export default LatestBlogs