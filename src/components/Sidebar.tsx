import { quickLinks } from "@/src/data/quickLinks";

export default function Sidebar() {
  return (
    <div className="bg-[#1B3058] shadow-md rounded-sm overflow-hidden">
      
      {/* Header */}
      <h2 className="bg-yellow-500 text-white text-lg font-bold px-4 py-3">
        Quick Menu
      </h2>

      {/* List */}
     <ul className="divide-y divide-[#163050]">
  {quickLinks.map((item, index) => (
    <li key={index}>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 hover:bg-[#163050] transition text-white text-sm"
      >
        {item.title}
      </a>
    </li>
  ))}
</ul>


    </div>
  );
}