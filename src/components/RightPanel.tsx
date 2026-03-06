export default function RightPanel() {
  return (
    <div className="bg-[#1B3058] text-white shadow-md rounded-sm w-full flex flex-col">
      
      {/* Header */}
      <h2 className="text-sm font-bold uppercase px-4 py-3 border-t-4 border-yellow-500">
        An Autonomous Institution
      </h2>

      {/* Divider */}
      <div className="border-t border-[#a42b2f] mx-4"></div>

      {/* Content */}
      <div className="px-4 py-4 text-sm space-y-4 leading-relaxed">
        <p>
          Approved by All India Council for Technical Education (AICTE).
          Affiliated to Maulana Abul Kalam Azad University of Technology, West Bengal.
        </p>

        <p>
          NAAC Accredited Technical Institute with “A” Grade 
          (CGPA 3.31 out of 4).
        </p>

        <p>
          B.Tech Programs accredited by National Board of Accreditation (NBA).
        </p>

       

        <p>
          NAAC Accredited Technical Institute with “A” Grade 
          (CGPA 3.31 out of 4).
        </p>

        <p>
          B.Tech Programs accredited by National Board of Accreditation (NBA).
        </p>
      </div>

    </div>
  );
}