import  {ResearchCard } from "@/src/components/ResearchCard";



export default function AboutPage() {
  return (
    
   <main className="w-full py-16 bg-gray-100">
      <section className="max-w-7xl mx-auto px-6 ">
        <ResearchCard
  title="Artificial Intelligence Research"
  description="Research in machine learning, deep learning and intelligent systems."
  imageSrc="/img/IT.jpeg"
  imageAlt="AI Research"
/>

<ResearchCard
  title="Data Science Research"
  description="Research in big data analytics and predictive modelling."
  imageSrc="/img/IT1.jpeg"
  imageAlt="Data Science"
/>

       </section>
       </main>
       
       
     
  );
}
