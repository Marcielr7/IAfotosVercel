import Image from "next/image";


const testimonials = [
  [
    {    
       content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. .",
      link: "https://www.linkedin.com/in/marcielrr7/",
      author: {
        name: "Marciel",
        role: "Portfolio",
        image: "/g.jpg", 
      },
    },
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      link: "https://www.linkedin.com/in/marcielrr7/",
      author: {
        name: "Marciel ",
        role: "Portfolio",
        image: "/malte.jpg",
      },
    },
  ],
  [
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      link: "https://www.linkedin.com/in/marcielrr7/",
      author: {
        name: "Marciel ",
        role: "Portfolio",
        image: "/fawaz.jpg",
      },
    },
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      link: "https://www.linkedin.com/in/marcielrr7/",
      author: {
        name: "Marciel",
        role: "Portfolio",
        image: "/sergei.jpg",
      },
    },
  ],
  [
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      link: "https://www.linkedin.com/in/marcielrr7/",
      author: {
        name: "Marciel",
        role: "Portfolio",
        image: "/himanil.jpg",
      },
    },
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      link: "https://www.linkedin.com/in/marcielrr7/",
      author: {
        name: "Marciel",
        role: "Portfolio",
        image: "/rod.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            Compartilhe e de sua avaliação para aparecer aqui.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
            I.A.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 
