
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
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold mt-2 mb-6">
            Daily <span className="gradient-text">Motivation</span>
            <br />& Success Stories
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get daily inspiration, workout tips, and see real <span className="font-semibold text-coral-600">transformation stories</span> on Instagram
          </p>
          
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
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

        {/* Instagram CTA */}
        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 text-center animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Join 50K+ Followers Getting Daily Fitness Tips
            </h3>
            <p className="text-gray-600 mb-6">
              Behind-the-scenes content, exclusive workout videos, nutrition tips, and real-time transformation updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/abhiramnair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Follow on Instagram
              </a>
              <button 
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
