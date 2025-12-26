import { Separator } from "@/components/ui/separator";

interface Resource {
  sectionTitle: string;
  sectionContent: {
    title: string;
    listType: "ol" | "ul";
    listItems: {
      title: string;
      href: string;
    }[];
  }[];
}

const resources: Resource[] = [
  {
    sectionTitle: "TinyML",
    sectionContent: [
      {
        title: "Courses",
        listType: "ol",
        listItems: [
          {
            title: "Fundamentals of TinyML",
            href: "https://www.edx.org/learn/machine-learning/harvard-university-fundamentals-of-tinyml"
          },
          {
            title: "Applications of TinyML",
            href: "https://www.edx.org/learn/tinyml/harvard-university-applications-of-tinyml"
          },
          {
            title: "Deploying TinyML",
            href: "https://www.edx.org/learn/tinyml/harvard-university-deploying-tinyml"
          }
        ]
      },
      {
        title: "From Harvard Classrooms",
        listType: "ul",
        listItems: [
          {
            title: "TinyML (2020 Fall) Course - Harvard (Google Site)",
            href: "https://sites.google.com/g.harvard.edu/tinyml-fall2020/home"
          },
          {
            title: "TinyML (Fall 2020) Assignments GitHub Link - Harvard",
            href: "https://github.com/Harvard-CS249R-Fall2020/assignments"
          },
          {
            title: "Intro to TinyML Fall 2020 Talks - YouTube Playlist",
            href: "https://youtube.com/playlist?list=PLJ-4lGVfhv34qW0r4dt_qXyY3-HezeGUo&si=FJWmH_S8IhvwpeAE"
          },
          {
            title: "TinyML (2022 Fall) Course - Harvard (Google Site)",
            href: "https://sites.google.com/g.harvard.edu/tinyml/home"
          },
        ]
      },
      {
        title: "Other Cool TinyML Links",
        listType: "ul",
        listItems: [
          {
            title: "TinyMLEdu",
            href: "https://tinyml.seas.harvard.edu"
          },
          {
            title: "TinyML Discourse",
            href: "https://discuss.tinyml.seas.harvard.edu/"
          }
        ]
      }
    ]
  }
]

export default function ResourcesPage() {
  return (
    <>
      <div className="font-light">
        <h2 className="text-4xl font-bold">Resources</h2>
        <p>Here are some cool resources I found while learning Machine Learning.</p>
        <p>I will keep updating these as I find more cool ones.</p>
      </div>

      {resources.map((resource: Resource, index: number) => (
        <section key={index} className="font-light space-y-4">
          <h3 className="text-2xl font-bold">{resource.sectionTitle}</h3>

          <Separator className="-mt-2" />

          {resource.sectionContent.map((sectionContent, index) => (
            <section key={index} className="font-light space-y-2">
              <h4 className="text-xl font-bold">{sectionContent.title}</h4>

              {sectionContent.listType === "ol" ? (
                <ol className="list-decimal list-inside space-y-2 my-1">
                  {sectionContent.listItems.map((listItem, index) => (
                    <li key={index}>
                      <a
                        href={listItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-500 underline-offset-5"
                      >
                        {listItem.title}
                      </a>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="list-disc list-inside space-y-2 my-1">
                  {sectionContent.listItems.map((listItem, index) => (
                    <li key={index}>
                      <a
                        href={listItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-500 underline-offset-5"
                      >
                        {listItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </section>
      ))}

    </>
  );
}