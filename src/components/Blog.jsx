// import React, { useState } from "react";
// import {
//   FaArrowRight,
//   FaCalendarAlt,
//   FaClock,
// } from "react-icons/fa";

// import blogPosts, {
//   blogCategories,
// } from "../data/blog";

// const Blog = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredPosts =
//     activeCategory === "All"
//       ? blogPosts
//       : blogPosts.filter(
//           (post) => post.category === activeCategory
//         );

//   return (
//     <section id="blog" className="blog-section">
//       <div className="container">
//         {/* Section Heading */}
//         <div className="section-heading">
//           <span className="section-label">My Blog</span>

//           <h2>
//             Thoughts, tutorials &
//             <span> ideas.</span>
//           </h2>

//           <p>
//             Notes about development, technologies, projects and things I'm
//             learning along the way.
//           </p>
//         </div>

//         {/* Blog Category Filter */}
//         <div className="blog-filter">
//           {blogCategories.map((category) => (
//             <button
//               type="button"
//               key={category}
//               className={
//                 activeCategory === category
//                   ? "blog-filter-btn active"
//                   : "blog-filter-btn"
//               }
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Blog Grid */}
//         <div className="blog-grid">
//           {filteredPosts.map((post) => (
//             <article
//               className="blog-card"
//               key={post.id}
//             >
//               {/* Blog Image */}
//               <div className="blog-image-wrapper">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="blog-image"
//                   loading="lazy"
//                 />

//                 <span className="blog-category">
//                   {post.category}
//                 </span>
//               </div>

//               {/* Blog Content */}
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span>
//                     <FaCalendarAlt />
//                     {new Date(post.date).toLocaleDateString(
//                       "en-IN",
//                       {
//                         day: "2-digit",
//                         month: "short",
//                         year: "numeric",
//                       }
//                     )}
//                   </span>

//                   <span>
//                     <FaClock />
//                     {post.readTime}
//                   </span>
//                 </div>

//                 <h3>{post.title}</h3>

//                 <p>{post.excerpt}</p>

//                 {/* Tags */}
//                 <div className="blog-tags">
//                   {post.tags.slice(0, 3).map((tag) => (
//                     <span key={tag}>{tag}</span>
//                   ))}
//                 </div>

//                 {/* Read More */}
//                 <a
//                   href={post.link}
//                   className="blog-read-more"
//                 >
//                   Read Article
//                   <FaArrowRight />
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredPosts.length === 0 && (
//           <div className="blog-empty">
//             <h3>No articles found</h3>

//             <p>
//               There are currently no articles in this category.
//             </p>
//           </div>
//         )}

//         {/* Bottom */}
//         <div className="blog-bottom">
//           <span>
//             More articles coming soon...
//           </span>

//           <div className="blog-line"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
