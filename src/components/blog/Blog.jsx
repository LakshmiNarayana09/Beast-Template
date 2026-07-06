import React from 'react'
import { Element } from "react-scroll";
import BlogCard from './BlogCard';
import blogs from '../data/blogs.js'


function Blog() {
  return (
    <Element name="blog">
      <section className="px-5 py-12 sm:px-8 md:px-12 lg:px-[112px] lg:py-20">
        <div className="text-center">
          <h2
            className="text-[30px] text-[#FA2A20] lg:text-[36px]"
            style={{ fontFamily: "Oswald", fontWeight: 500 }}
          >
            BLOG
          </h2>

          <p
            className="mt-4 text-[14px] text-[#4C4C4C] lg:mt-[15px] lg:text-[15px]"
            style={{ fontFamily: "Raleway", fontWeight: 600 }}
          >
            READ TO STAY IN SHAPE
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              {...blog}
            />
          ))}
        </div>
      </section>
    </Element>
  )
}

export default Blog
