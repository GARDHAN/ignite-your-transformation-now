
const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      caption: "Monday motivation with client transformation! 💪 #TransformationMonday",
      likes: 234,
      comments: 15
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583468982228-19f19164aad2?auto=format&fit=crop&w=400&q=80",
      caption: "Proper form is everything! Here's how to nail your deadlift 🎯",
      likes: 189,
      comments: 23
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80",
      caption: "Meal prep Sunday done right! 🥗 Nutrition is 70% of the game",
      likes: 156,
      comments: 8
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=400&q=80",
      caption: "Another amazing transformation story! So proud of my clients 🔥",
      likes: 298,
      comments: 31
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      caption: "Consistency beats perfection every single time 💯",
      likes: 267,
      comments: 19
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1583468982228-19f19164aad2?auto=format&fit=crop&w=400&q=80",
      caption: "Weekend workout vibes! Who's joining me? 🏋️‍♂️",
      likes: 178,
      comments: 12
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-wide">Follow the Journey</span>
          <h2 className="text-3xl lg:text-5xl font-dm-sans font-bold mt-2 mb-6">
            Daily <span className="gradient-text">Motivation</span>
            <br />& Success Stories
          </h2>
          
          <a 
            href="https://www.instagram.com/abhiramnair" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>📸</span>
            Follow @AbhiramNair
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
