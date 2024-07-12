import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  ShoppingCart,
  Users2,
  Home,
  Plus,
  Settings,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function Chats() {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <aside className="fixed inset-y-0 left-0 z-10 hidden md:w-[280px] lg:w-[380px] flex-col border-r md:flex">
        <nav className="flex flex-col gap-4 px-2 lg:px-4 sm:py-4">
          <div className="mt-4 flex items-center justify-between">
            <div>
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
            </div>

            <div>
              <Plus className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="mt-2">
            <Separator />
          </div>

          <div className="mt-2 relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8"
            />
          </div>
        </nav>
        <nav className="flex-1 h-max whitespace-nowrap rounded-md border w-full overflow-auto">
          <div className="mt-2 flex flex-col h-max space-y-0.5 px-4 py-1">
            {Array.from({ length: 10 }).map((_, idx) => {
              const isActiveChat = parseInt(idx) <= 1;
              return (
                <div
                  className={cn(
                    "w-full flex px-4 py-2 rounded",
                    isActiveChat && "bg-secondary"
                  )}
                  key={idx}
                >
                  <div className="w-full flex">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100"
                        width={48}
                        height={48}
                        alt="Avatar"
                        className="overflow-hidden rounded-full w-10 h-10 object-cover object-center"
                      />
                    </div>
                    <div className={cn("ml-2 overflow-hidden")}>
                      <p className="block text-sm truncate">Rahul Khimsuriya</p>
                      <span
                        className={cn(
                          "truncate text-primary/50 block w-full text-xs"
                        )}
                      >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
        <nav className="mt-auto w-full flex justify-between gap-4 px-2 sm:py-4">
          <div className="flex flex-1">
            <div className="flex">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100"
                width={48}
                height={48}
                alt="Avatar"
                className="overflow-hidden rounded-full w-12 h-12 object-cover object-center"
              />
            </div>

            <div className="ml-2">
              <p className="p-0 text-base truncate text-primary/85">
                Rahul Khimsuriya
              </p>
              <span className="inline-block text-primary/50 text-sm font-semibold">
                @rahulkhimsuriya
              </span>
            </div>
          </div>
          <div className="w-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
                {/* <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </aside>

      <div className="flex flex-col md:gap-4 md:py-4 md:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 md:static md:h-auto md:border-0 md:bg-transparent md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="md:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col md:max-w-xs">
              <nav className="flex flex-col gap-4 px-2 lg:px-4 sm:py-4">
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <Link
                      href="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div>
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Image
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100"
                            width={48}
                            height={48}
                            alt="Avatar"
                            className="overflow-hidden rounded-full w-12 h-12 object-cover object-center cursor-pointer"
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Settings</DropdownMenuItem>
                          <DropdownMenuItem>Support</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <Separator />
                </div>

                <div className="mt-2 relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8"
                  />
                </div>
              </nav>

              <nav className="flex-1 h-max whitespace-nowrap rounded-md border w-full overflow-auto">
                <div className="mt-2 flex flex-col h-max space-y-0.5 px-4 py-1">
                  {Array.from({ length: 10 }).map((_, idx) => {
                    const isActiveChat = parseInt(idx) <= 1;
                    return (
                      <div
                        className={cn(
                          "w-full flex px-4 py-2 rounded",
                          isActiveChat && "bg-secondary"
                        )}
                        key={idx}
                      >
                        <div className="w-full flex">
                          <div className="flex-shrink-0">
                            <Image
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100"
                              width={48}
                              height={48}
                              alt="Avatar"
                              className="overflow-hidden rounded-full w-10 h-10 object-cover object-center"
                            />
                          </div>
                          <div className={cn("ml-2 overflow-hidden")}>
                            <p className="block text-sm truncate">
                              Rahul Khimsuriya
                            </p>
                            <span
                              className={cn(
                                "truncate text-primary/50 block w-full text-xs"
                              )}
                            >
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"></main>
      </div>
    </div>
  );
}
