export default function Music() {
    return (
      <div className="min-h-screen p-8"
           style={{ 
             backgroundImage: `url('https://images.mypandit.com/myPandit_web/images/Content/venus-in-leo.webp')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Music</h1>
          <div className="flex flex-col items-center space-y-8">
            <a href="https://open.spotify.com/artist/6p9Kfwl2J5Paojnvw6veAr" className="text-2xl text-indigo-500 hover:text-indigo-300">Listen on Spotify</a>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">Watch Our Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe src="https://www.youtube.com/embed/1jZM6zREaVQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe src="https://www.youtube.com/embed/Z9zVQN-n-bQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  