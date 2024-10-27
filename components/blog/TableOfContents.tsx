// // components/blog/TableOfContents.tsx
// import Link from "next/link";

// interface Section {
//   id: string;
//   subheading: string;
// }

// interface TableOfContentsProps {
//   activeSection: string;
//   setActiveSection: (section: string) => void;
//   sections: Section[];
// }

// export default function TableOfContents({
//   activeSection,
//   setActiveSection,
//   sections,
// }: TableOfContentsProps) {
//   const handleClick = (sectionId: string) => {
//     setActiveSection(sectionId);
//   };

//   return (
//     <div>
//       <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
//       <ul className="space-y-2">
//         {sections.map((section) => (
//           <li key={section.id}>
//             <Link
//               href={`#${section.subheading.toLowerCase().replace(/\s+/g, "-")}`}
//               className={`${
//                 activeSection ===
//                 section.subheading.toLowerCase().replace(/\s+/g, "-")
//                   ? "text-red-600"
//                   : "text-gray-600"
//               } hover:text-red-400`}
//               onClick={() =>
//                 handleClick(
//                   section.subheading.toLowerCase().replace(/\s+/g, "-")
//                 )
//               }
//             >
//               {section.subheading}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import Link from "next/link";

interface Section {
  id: string;
  subheading: string;
}

interface TableOfContentsProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  sections: { subheading: string }[];
}

export default function TableOfContents({
  activeSection,
  setActiveSection,
  sections,
}: TableOfContentsProps) {
  return (
    <nav className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {sections?.map((section, index) => {
          const sectionId = section.subheading
            .toLowerCase()
            .replace(/\s+/g, "-");
          return (
            <li key={index}>
              <a
                href={`#${sectionId}`}
                className={`block py-1 px-2 rounded ${
                  activeSection === sectionId ? "bg-gray-200" : ""
                }`}
                onClick={() => setActiveSection(sectionId)}
              >
                {section.subheading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
