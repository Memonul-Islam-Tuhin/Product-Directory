const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-4 border-black px-4 sm:px-8 py-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="font-display font-black text-2xl uppercase">
          Product
          <span className="bg-black text-white px-1.5 py-0.5 ml-1">Hub</span>
        </h2>
        <p className="text-neo-muted font-sans font-bold text-sm text-center">
          Built with React, Tailwind CSS and Strapi CMS.
        </p>
        <span className="text-xs text-neo-muted font-sans font-bold">
          &copy; {new Date().getFullYear()} ProductHub. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
