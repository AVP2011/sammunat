const features = [
  { title: "Internships", desc: "Hands-on experience with real projects." },
  { title: "Skill Development", desc: "Learn industry-relevant skills." },
  { title: "Mentorship", desc: "Guidance from experienced professionals." },
  { title: "Global Exposure", desc: "Work with teams across the world." },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          What We Offer
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="p-6 border rounded-xl hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
