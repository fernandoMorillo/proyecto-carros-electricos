export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} XYZ. Todos los derechos reservados.
        </p>
        <div className="mt-2">
          <a href="https://facebook.com" className="text-white mx-2">
            Facebook
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
            Twitter
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
