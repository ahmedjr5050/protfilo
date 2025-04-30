import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    title: "أكاديمية الشروق (SHA)",
    description: "تطبيق شامل لطلاب وموظفي أكاديمية الشروق يوفر خدمات متنوعة مثل تسجيل الحضور عبر QR، تتبع حافلات الطلاب، إدارة الإجازات للموظفين، الوصول للمواد الدراسية، نتائج الامتحانات، الدفع الإلكتروني، وغيرها.",
    technologies: ["Flutter", "Dart", "Firebase Realtime Database", "Huawei Maps", "Azure AD", "QR Code Scanning", "Android", "iOS", "Huawei AppGallery"],
    images: [
      "/images/unnamed.webp",
      "/images/unnamed (1).webp",
      "/images/unnamed (2).webp",
      "/images/unnamed (3).webp",
      "/images/unnamed (4).webp",
      "/images/unnamed (5).webp",
    ],
    links: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=eg.edu.sha.shaApp&hl=ar" },
      { name: "Apple App Store", url: "https://apps.apple.com/us/app/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D9%82-sha/id1661759970" },
      { name: "Huawei AppGallery", url: "https://appgallery.huawei.com/#/app/C107297557" },
    ]
  },
  // Add more projects here in the future
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Ahmed Sabry - Portfolio</h1>
      </header>

      <main className="p-4 md:p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {project.images.length > 0 && (
                  <Carousel className="w-full max-w-xl mx-auto mb-4">
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <img src={image} alt={`${project.title} screenshot ${imgIndex + 1}`} className="w-full h-auto object-contain rounded-md max-h-96" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full" />
                  </Carousel>
                )}
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-200">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 bg-gray-50 dark:bg-gray-700 p-4">
                {project.links.map((link, linkIndex) => (
                  <Button key={linkIndex} variant="outline" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Instructions for adding more projects can be placed here or in a separate section */}
       
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Ahmed Sabry. Website created by Ahmed</p>
      </footer>
    </div>
  );
}

export default App;

