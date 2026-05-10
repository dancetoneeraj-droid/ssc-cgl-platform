export default function PolityPage() {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
  
        <h1 className="text-5xl font-bold text-center mb-12">
          Polity Lectures
        </h1>
  
        <div className="max-w-5xl mx-auto grid gap-10">
  
          {/* Video 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
  
            <h2 className="text-3xl font-bold mb-4">
              Lecture 1 - Introduction to Indian Constitution
            </h2>
  
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Polity Lecture"
                allowFullScreen
              ></iframe>
            </div>
  
          </div>
  
          {/* Video 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
  
            <h2 className="text-3xl font-bold mb-4">
              Lecture 2 - Fundamental Rights
            </h2>
  
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Polity Lecture"
                allowFullScreen
              ></iframe>
            </div>
  
          </div>
  
        </div>
  
      </main>
    );
  }