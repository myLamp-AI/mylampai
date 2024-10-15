// // app/blog/[id]/page.tsx
// "use client";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import BlogHeader from "@/components/blog/BlogHeader";
// import TableOfContents from "@/components/blog/TableOfContents";
// import SocialMediaHandles from "@/components/blog/SocialMediaHandles";
// import FeaturedContent from "@/components/blog/FeaturedContent";
// import RelatedArticles from "@/components/blog/RelatedArticles";
// import TopTutorials from "@/components/blog/TopTutorials";
// import Footer from "@/components/blog/Footer";

// import GPTUses from "@/public/blog/gpt-uses.png";
// import GglUses from "@/public/blog/google-uses.jpg";

// interface BlogPost {
//   id: string;
//   title: string;
//   description: string;
//   authorName: string;
//   position: string;
//   readtime: string;
//   createdAt: string;
//   tags: string[];
//   source: string;
//   sections: {
//     subheading: string;
//     content: string;
//   }[];
// }

// export default function BlogPost() {
//   const [blog, setBlog] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState("");
//   const params = useParams();
//   const id = params.id as string;

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await fetch(`/api/blog/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setBlog(data);
//         } else {
//           console.error("Failed to fetch blog post");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("h2[id]");
//       let currentActiveSection = "";

//       sections.forEach((section) => {
//         if (section instanceof HTMLElement) {
//           const sectionTop = section.offsetTop;
//           const sectionHeight = section.clientHeight;
//           if (
//             window.scrollY >= sectionTop - 100 &&
//             window.scrollY < sectionTop + sectionHeight - 100
//           ) {
//             currentActiveSection = section.id;
//           }
//         }
//       });

//       setActiveSection(currentActiveSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!blog) {
//     return <div>Blog post not found</div>;
//   }

//   return (
//     <div className="font-sans bg-white text-black">
//       <BlogHeader
//         title={blog.title}
//         description={blog.description}
//         authorName={blog.authorName}
//         position={blog.position}
//         createdAt={blog.createdAt}
//         readtime={blog.readtime}
//         tags={blog.tags}
//       />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-12 gap-8 mt-12">
//           <aside className="hidden lg:block lg:col-span-3">
//             <div className="sticky top-20 max-h-[calc(100vh-4rem)] overflow-y-auto">
//               <TableOfContents
//                 activeSection={activeSection}
//                 setActiveSection={setActiveSection}
//                 sections={blog.sections}
//               />
//               <SocialMediaHandles />
//             </div>
//           </aside>

//           <article className="md:col-span-12 lg:col-span-6">
//             {blog.sections.map((section, index) => (
//               <div key={index}>
//                 <h2
//                   id={section.subheading.toLowerCase().replace(/\s+/g, "-")}
//                   className="text-2xl font-bold mt-12 mb-6 border-l-4 border-red-600 pl-4 scroll-mt-24"
//                 >
//                   {section.subheading}
//                 </h2>
//                 <p className="mb-6 text-lg">{section.content}</p>
//               </div>
//             ))}

//             <p className="mb-6 text-lg">Source: {blog.source}</p>
//             <RelatedArticles />
//             <TopTutorials />
//           </article>

//           <aside className="hidden lg:block lg:col-span-3">
//             <div className="sticky top-20 max-h-[calc(100vh-4rem)] overflow-y-auto">
//               <FeaturedContent />
//             </div>
//           </aside>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogHeader from "@/components/blog/BlogHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import SocialMediaHandles from "@/components/blog/SocialMediaHandles";
import FeaturedContent from "@/components/blog/FeaturedContent";
import RelatedArticles from "@/components/blog/RelatedArticles";
import TopTutorials from "@/components/blog/TopTutorials";

interface Section {
  subheading: string;
  content: string;
  imageUrl?: string;
}

interface BlogPost {
  id: string;
  title: string;
  description: string;
  authorName: string;
  position: string;
  readtime: string;
  createdAt: string;
  tags: string[];
  source: string;
  sections: Section[];
}

export default function BlogPost() {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          console.error("Failed to fetch blog post");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h2[id]");
      let currentActiveSection = "";

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - 100 &&
            window.scrollY < sectionTop + sectionHeight - 100
          ) {
            currentActiveSection = section.id;
          }
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="font-sans bg-white text-black">
      <BlogHeader
        title={blog.title}
        description={blog.description}
        authorName={blog.authorName}
        position={blog.position}
        createdAt={blog.createdAt}
        readtime={blog.readtime}
        tags={blog.tags}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mt-12">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <TableOfContents
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                sections={blog.sections}
              />
              <SocialMediaHandles />
            </div>
          </aside>

          <article className="md:col-span-12 lg:col-span-6">
            {blog.sections.map((section, index) => (
              <div key={index}>
                <h2
                  id={section.subheading.toLowerCase().replace(/\s+/g, "-")}
                  className="text-2xl font-bold mt-12 mb-6 border-l-4 border-red-600 pl-4 scroll-mt-24"
                >
                  {section.subheading}
                </h2>
                <p className="mb-6 text-lg">{section.content}</p>
                {section.imageUrl && (
                  <Image
                    src={section.imageUrl}
                    alt={section.subheading}
                    width={800}
                    height={400}
                    className="my-8"
                  />
                )}
              </div>
            ))}

            <p className="mb-6 text-lg">Source: {blog.source}</p>
            <RelatedArticles />
            <TopTutorials />
          </article>

          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <FeaturedContent />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
