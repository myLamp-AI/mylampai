// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import ResourceGrid from "@/components/resources/ResourceGrid";
// import PurAes from "@/public/purple-aesthetic-temp.jpg";

// const ResourcePage: React.FC = () => {
//   return (
//     <div className="bg-white">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row">
//           <div className="w-full lg:w-1/2 pr-8 mb-8 lg:mb-0">
//             <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
//               <span className="text-purple-600">⌂</span>
//               <Link href="/home" className="hover:text-gray-700">
//                 Home
//               </Link>
//               <span>›</span>
//               <span>Resources</span>
//             </div>

//             <h1 className="text-4xl font-bold mb-4">
//               Dorem ipsum dolor sit amet
//             </h1>

//             <div className="flex space-x-4 text-sm text-gray-500 mb-6">
//               <span>Published: 10/10/24</span>
//               <span>Read Time: 5 Minutes</span>
//             </div>

//             <p className="text-gray-700 mb-8">
//               Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//               vulputate libero et velit interdum, ac aliquet odio mattis. Class
//               aptent taciti sociosqu ad litora torquent per conubia nostra, per
//               inceptos himenaeos. Porem ipsum dolor sit amet, consectetur
//               adipiscing elit.
//             </p>

//             <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg">
//               DOWNLOAD FILE ↓
//             </Button>
//           </div>

//           <div className="w-full lg:w-1/2">
//             <div className="bg-gray-200 rounded-lg overflow-hidden h-4/5">
//               <Image
//                 src={PurAes}
//                 alt="Resource image"
//                 width={600}
//                 height={400}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Resource Grid */}
//       <div className="bg-gray-100">
//         <div className="container mx-auto px-4 py-16">
//           <ResourceGrid />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResourcePage;

"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";
import DS from "@/public/resources/death-star.jpeg";

// Fake resource data
const fakeResources = [
  {
    id: 1,
    title: "Ultimate Guide to AI",
    description:
      "Comprehensive overview of artificial intelligence and its applications.",
    category: "AI",
    downloadCount: 1500,
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    description:
      "Introduction to key concepts in machine learning for beginners.",
    category: "Machine Learning",
    downloadCount: 2200,
  },
  {
    id: 3,
    title: "Data Science Toolkit",
    description: "Essential tools and libraries for data science projects.",
    category: "Data Science",
    downloadCount: 1800,
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices",
    description: "Up-to-date guide on protecting your digital assets.",
    category: "Cybersecurity",
    downloadCount: 1300,
  },
  {
    id: 5,
    title: "Cloud Computing Essentials",
    description: "Fundamentals of cloud architectures and services.",
    category: "Cloud Computing",
    downloadCount: 1600,
  },
  {
    id: 6,
    title: "Blockchain Demystified",
    description:
      "Clear explanation of blockchain technology and its potential.",
    category: "Blockchain",
    downloadCount: 1100,
  },
];

const ResourceCard = ({ resource }) => (
  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
    <CardHeader className="p-0">
      <Image
        src={DS}
        alt={resource.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-t-lg"
      />
    </CardHeader>
    <CardContent className="flex-grow p-4">
      <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
      <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
        {resource.category}
      </span>
    </CardContent>
    <CardFooter className="p-4 pt-0 flex justify-between items-center">
      <span className="text-sm text-gray-500">
        {resource.downloadCount} downloads
      </span>
      <Button variant="outline" size="sm">
        Download
      </Button>
    </CardFooter>
  </Card>
);

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = fakeResources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-800">
          Explore Our Resources
        </h1>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No resources found. Try a different search term.
          </p>
        )}

        <div className="text-center mt-12">
          <Link href="/submit-resource" passHref>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Submit Your Own Resource
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
