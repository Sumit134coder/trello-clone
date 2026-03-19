import Link from "next/link";
import { Github , Linkedin , Twitter } from "lucide-react";
import { routes } from "@/constants";

const siteLinks = {
  Navigation: [
    {
      title: "Home",
      href: routes.home,
    },
    {
      title: "Boards",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ],
  Resources: [
    {
      title: "Documentation",
      href: "/",
    },
    {
      title: "Help Center",
      href: "#",
    },
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-white">TaskFlow</h2>
            <p className="mt-4 text-sm">
              Organize your tasks efficiently with our simple and powerful task
              management platform.
            </p>
          </div>
          <nav>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {siteLinks["Navigation"].map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="link link_dark">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {siteLinks["Resources"].map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="link link_dark">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">Delhi, India</p>
            <p className="text-sm">support@taskflow.com</p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="link link_dark">
                <Github />
              </Link>
              <Link href="#" className="link link_dark">
                <Linkedin />
              </Link>
              <Link href="#" className="link link_dark">
                <Twitter />
              </Link>
            </div>
          </address>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
