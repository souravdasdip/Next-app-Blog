import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Blogs</span>
      </h1>

      <p className="desc text-center">
        AIPedia is one open-source AI bloging tool for modern world to discover,
        create and share creative blogs.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
