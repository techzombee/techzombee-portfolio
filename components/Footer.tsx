export default function Footer() {
  return (
    <footer className="w-full border-t py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} <strong className="text-gray-600">TechZombee</strong>. Built with ❤️ by HEECHAN.
    </footer>
  );
}