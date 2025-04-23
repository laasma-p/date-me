const Hero = () => {
  return (
    <section className="min-h-dvh flex flex-col items-center pt-8">
      <div className="max-w-sm aspect-square rounded-full overflow-hidden border-4 border-mulberry dark:border-cotton-candy mt-20">
        <img
          src="https://placehold.co/400"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-nero dark:text-white-smoke text-center">
        <h1 className="text-4xl text-mulberry dark:text-cotton-candy font-bold mt-4">
          Title
        </h1>
        <p className="text-lg sm:text-xl mt-2">Paragraph 1</p>
        <p className="text-lg sm:text-xl mb-4">Paragraph 2</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 text-center">
        <a
          href="#"
          className="px-6 py-2 text-xl font-semibold rounded-full bg-mulberry dark:bg-cotton-candy text-white-smoke dark:text-nero inline-block transition-transform transform hover:scale-105"
        >
          Button 1
        </a>
        <a
          href="#"
          className="px-6 py-2 text-xl font-semibold rounded-full border border-mulberry dark:border-cotton-candy text-mulberry dark:text-cotton-candy inline-block transition-transform transform hover:scale-105"
        >
          Button 2
        </a>
      </div>
    </section>
  );
};

export default Hero;
