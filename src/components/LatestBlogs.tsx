// import React from 'react'
import { useEffect, useState } from 'react';
import BlogDiv from './BlogDiv';
import HeadingDiv from './HeadingDiv'
import SectionContainer from './SectionContainer';
import { motion } from 'motion/react';

interface BlogProps {
    title: string;
    description: string;
    link: string;
}

const getBlogs = async (): Promise<BlogProps[]> => {
  try {
    const response = await fetch('https://dev.to/api/articles?username=priyanshukumarsinha');
    const data = await response.json();

    return data.slice(0, 3).map((blog: any) => ({
      title: blog.title,
      description: blog.description || (blog.body_markdown ? blog.body_markdown.slice(0, 80) + '...' : ''),
      link: blog.url,
    }));
  } catch (error) {
    return [];
  }
};

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading || blogs.length === 0) return null;

  return (
    <SectionContainer>
      <HeadingDiv
        heading="Latest Articles"
        moreTitle="View all"
        moreLink="https://dev.to/priyanshukumarsinha"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, idx) => (
          <motion.a
            key={idx}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
          >
            <BlogDiv blog={blog} />
          </motion.a>
        ))}
      </div>
    </SectionContainer>
  )
}

export default LatestBlogs