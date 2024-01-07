import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function BlogCard() {
  let location= useLocation();
  return (
    <div className={`${location.pathname === '/blogs' ? 'blogs-list':'col-3'}`}>
        <div className="blog-card">
             <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
             </div>
             <div className="blog-content">
                <p className='date'>1 Dec ,2023</p>
                <h5 className="title">A beautiful Sunday Morning </h5>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magnam mollitia aut necessitatibus fuga vero?</p>
                <Link className='button px-3 py-2' to="/blog/:id" onClick={()=>{window.scrollTo(0,0)}}>Read More</Link>
             </div>
        </div>
    </div>
  )
}

export default BlogCard
