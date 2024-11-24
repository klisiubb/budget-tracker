import { Separator } from "@/components/ui/separator";
import { Wallet } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 border border-primary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center text-primary">
              <Wallet className="w-9 h-9 mr-2  rounded-lg" />

              <h3 className="text-2xl">Budgetify</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link
                href="https://github.com/klisiubb"
                className="opacity-60 hover:opacity-100"
              >
                Github
              </Link>
            </div>

            <div>
              <Link
                href="https://x.com/home"
                className="opacity-60 hover:opacity-100"
              >
                Twitter
              </Link>
            </div>

            <div>
              <Link
                href="https://www.instagram.com/"
                className="opacity-60 hover:opacity-100"
              >
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link
                href="https://www.apple.com/pl/app-store/"
                className="opacity-60 hover:opacity-100"
              >
                iOS
              </Link>
            </div>

            <div>
              <Link
                href="https://play.google.com/store/"
                className="opacity-60 hover:opacity-100"
              >
                Android
              </Link>
            </div>

            <div>
              <Link href="/dashboard" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link
                href="mailto://example@example.com"
                className="opacity-60 hover:opacity-100"
              >
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link
                href="mailto://example@example.com"
                className="opacity-60 hover:opacity-100"
              >
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link
                href="https://www.facebook.com/"
                className="opacity-60 hover:opacity-100"
              >
                Facebook
              </Link>
            </div>

            <div>
              <Link
                href="https://discord.com/"
                className="opacity-60 hover:opacity-100"
              >
                Discord
              </Link>
            </div>

            <div>
              <Link
                href="https://www.linkedin.com/in/klisiubb/"
                className="opacity-60 hover:opacity-100"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; {new Date().getFullYear()} Budgetify by
            <Link
              target="_blank"
              href="https://github.com/klisiubb"
              className="text-primary transition-all hover:border-secondary hover:border-b-2 hover:text-secondary hover:font-bold ml-1"
            >
              Mateusz Kliś
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
