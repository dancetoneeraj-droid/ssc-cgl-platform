export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-black">
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

<h1 className="text-2xl font-bold text-blue-600">
  SSC CGL Platform
</h1>

<div className="flex gap-6 text-lg font-medium">

  <a href="/" className="hover:text-blue-600">
    Home
  </a>

  <a href="#courses" className="hover:text-blue-600">
    Courses
  </a>

  <a
    href="https://wa.me/7976395900"
    target="_blank"
    className="hover:text-green-600"
  >
    WhatsApp
  </a>

  <a href="#" className="hover:text-blue-600">
    Contact
  </a>

</div>

</nav>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          SSC CGL Platform
        </h1>

        <p className="text-xl mb-6">
          Learn SSC, CGL & Government Exam Preparation
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
          Join Now
        </button>
      </section>
      <section className="py-16 px-6 bg-white">
  <h2 className="text-4xl font-bold text-center mb-10">
    GK Sections
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

  <a
  href="/polity"
  className="bg-white p-6 rounded-3xl shadow-lg block hover:scale-105 transition duration-300 border"
>

  <div className="text-5xl mb-4">
    🏛️
  </div>

  <h3 className="text-3xl font-bold mb-3 text-blue-600">
    Polity
  </h3>

  <p className="text-gray-600">
    Constitution, Parliament, Judiciary, Fundamental Rights and complete Indian Polity preparation.
  </p>

</a>

    <div className="bg-gray-100 p-6 rounded-2xl shadow">
      <h3 className="text-2xl font-bold mb-3">
        History
      </h3>

      <p>
        Ancient, Medieval and Modern Indian History.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow">
      <h3 className="text-2xl font-bold mb-3">
        Geography
      </h3>

      <p>
        Physical, Indian and World Geography lectures.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow">
      <h3 className="text-2xl font-bold mb-3">
        Economics
      </h3>

      <p>
        Indian Economy, Budget, Banking and Finance.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow">
      <h3 className="text-2xl font-bold mb-3">
        Science
      </h3>

      <p>
        Physics, Chemistry and Biology for SSC exams.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow">
      <h3 className="text-2xl font-bold mb-3">
        Static GK
      </h3>

      <p>
        Important static facts, books, awards and symbols.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow">
      <h3 className="text-2xl font-bold mb-3">
        Current Affairs
      </h3>

      <p>
        Daily and monthly current affairs updates.
      </p>
    </div>

  </div>
</section>
     <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Quantitative Aptitude
            </h3>

            <p>
              Complete maths preparation for SSC exams.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Reasoning
            </h3>

            <p>
              Master logical and verbal reasoning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              English
            </h3>

            <p>
              Grammar, vocabulary and comprehension classes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}