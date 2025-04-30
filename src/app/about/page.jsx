export default function About() {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Venus In Leo</h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
            <p className="text-lg">
              Formed in the heart of Copenhagen in 2024, Venus In Leo burst onto the music scene with
              a blend of rock and Metal that has captivated audiences worldwide. From their gritty guitar
              riffs to the soulful vocals, each performance is a testament to their passion for music.
            </p>
            <p className="text-lg mt-4">
              Over the years, the band has undergone several lineup changes but has always remained true
              to its roots. Their debut album, "Echoes of the Free," catapulted them to stardom, earning
              them a spot at major music festivals around the globe.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Behind The Music</h2>
            <p className="text-lg">
              Each member of Venus In Leo brings their unique style and influence, creating a
              dynamic musical experience. The drummer's jazz-influenced beats, combined with the lead
              guitarist’s classic rock melodies, create the band's signature sound that resonates with
              a diverse fan base.
            </p>
            <p className="text-lg mt-4">
              The band's commitment to their craft is evident in their meticulous attention to detail in
              the studio and their explosive energy on stage. They continue to write, produce, and
              perform, promising more years of raw, powerful rock music.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold">Join Our Journey</h2>
          <p className="mt-4 text-lg">
            Follow us on social media to get the latest updates on tours, albums, and exclusive behind-the-scenes content.
          </p>
        </div>
      </div>
    </div>
  );
}
