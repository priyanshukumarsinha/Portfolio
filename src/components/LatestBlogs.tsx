// import React from 'react'
import BlogDiv from './BlogDiv';
import HeadingDiv from './HeadingDiv'
import SectionContainer from './SectionContainer';

interface BlogProps {
    title: string;
    description: string;
    link: string;
}

const blogs: BlogProps[] = [
    {
        title: "Understanding Asynchronous JavaScript: Promises, Async/Await, and Callbacks",
        description: "Dive deep into the world of asynchronous programming in JavaScript. This blog post explores the concepts of Promises, Async/Await, and Callbacks, providing practical examples and best practices for managing asynchronous code effectively.",
        link: "0x.pks.com"
    },
    {
        title: "A Comprehensive Guide to Modern Web Development with React and Tailwind CSS",
        description: "Explore the latest trends in web development with this comprehensive guide to building responsive and dynamic web applications using React and Tailwind CSS. Learn how to leverage these powerful tools to create stunning user interfaces and seamless user experiences.",
        link: "0x.pks.com"
    },
    {
        title: "Mastering Node.js: Building Scalable and Efficient Backend Applications",
        description: "Unlock the full potential of Node.js with this in-depth guide to building scalable and efficient backend applications. From setting up your development environment to deploying your application, this blog post covers everything you need to know to become a proficient Node.js developer.",
        link: "0x.pks.com"
    },
    {
        title: "Exploring the Power of TypeScript: Enhancing JavaScript with Static Typing",
        description: "Discover the benefits of using TypeScript to enhance your JavaScript development workflow. This blog post delves into the features of TypeScript, including static typing, interfaces, and advanced type manipulation, helping you write more robust and maintainable code.",
        link: "0x.pks.com"
    }
]

const LatestBlogs = () => {
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
                    blog ? <BlogDiv key={idx} blog={blog} /> : null
                )
            }
        </div>
    </SectionContainer>
  )
}

export default LatestBlogs