const Footer = () => {
  return (
    <footer className="w-full h-96 text-gray-100 bg-red-200 text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Ravikumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
