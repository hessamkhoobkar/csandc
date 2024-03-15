import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-slate-100 px-6 py-3">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/logo.svg"
          alt="Threads logo"
          width={28}
          height={28}
        />
        <p className="text-head text-2xl max-sm:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="Logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}
