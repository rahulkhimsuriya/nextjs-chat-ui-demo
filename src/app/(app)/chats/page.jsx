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
  Paperclip,
  Send,
  InfoIcon,
  EllipsisVertical,
  Archive,
  MicOff,
  Trash2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chats = [
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Hi Rahul, how are you doing today?",
    time: "10:00 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "Hey! I'm doing well, thanks for asking. What about you?",
    time: "10:02 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content:
      "I'm doing great! Just working on a new project. What are you up to?",
    time: "10:05 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content:
      "That's awesome! I'm actually working on a new project as well. It's keeping me busy but I'm excited about it.",
    time: "10:07 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Oh cool! What kind of project is it?",
    time: "10:10 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "It's a mobile app for...",
    time: "10:12 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Hi Rahul, how are you doing today?",
    time: "10:00 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "Hey! I'm doing well, thanks for asking. What about you?",
    time: "10:02 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content:
      "I'm doing great! Just working on a new project. What are you up to?",
    time: "10:05 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content:
      "That's awesome! I'm actually working on a new project as well. It's keeping me busy but I'm excited about it.",
    time: "10:07 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Oh cool! What kind of project is it?",
    time: "10:10 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "It's a mobile app for...",
    time: "10:12 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Hi Rahul, how are you doing today?",
    time: "10:00 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "Hey! I'm doing well, thanks for asking. What about you?",
    time: "10:02 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content:
      "I'm doing great! Just working on a new project. What are you up to?",
    time: "10:05 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content:
      "That's awesome! I'm actually working on a new project as well. It's keeping me busy but I'm excited about it.",
    time: "10:07 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Oh cool! What kind of project is it?",
    time: "10:10 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "It's a mobile app for...",
    time: "10:12 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Hi Rahul, how are you doing today?",
    time: "10:00 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "Hey! I'm doing well, thanks for asking. What about you?",
    time: "10:02 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content:
      "I'm doing great! Just working on a new project. What are you up to?",
    time: "10:05 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content:
      "That's awesome! I'm actually working on a new project as well. It's keeping me busy but I'm excited about it.",
    time: "10:07 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Oh cool! What kind of project is it?",
    time: "10:10 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "It's a mobile app for...",
    time: "10:12 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Hi Rahul, how are you doing today?",
    time: "10:00 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "Hey! I'm doing well, thanks for asking. What about you?",
    time: "10:02 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content:
      "I'm doing great! Just working on a new project. What are you up to?",
    time: "10:05 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content:
      "That's awesome! I'm actually working on a new project as well. It's keeping me busy but I'm excited about it.",
    time: "10:07 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100",
      id: "b8f32c1a-3d2c-4423-a987-84ac25e7c12f",
      name: "You",
    },
    content: "Oh cool! What kind of project is it?",
    time: "10:10 AM",
  },
  {
    sender: {
      image:
        "https://images.unsplash.com/photo-1570295994088-f6d5e70dfd4a?q=80&w=100&h=100",
      id: "2e4baf1c-72d3-4f2b-b9d8-a7874521b123",
      name: "Rahul",
    },
    content: "It's a mobile app for...",
    time: "10:12 AM",
  },
];

export default function Chats() {
  return (
    <div className="flex h-screen w-full">
      <aside className="inset-y-0 left-0 z-10 hidden md:w-1/3 lg:w-1/4 max-w-sm flex-col border-r md:flex">
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
        <nav className="flex-1 h-max border-t border-b w-full overflow-auto">
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
        <nav className="mt-auto h-16 w-full flex items-center justify-between gap-4 px-2 sm:py-4">
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

      <div className="flex flex-1 flex-col md:w-2/3 lg:w-3/4 max-w-full">
        <header className="top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 md:static md:h-auto md:border-0 md:bg-transparent md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="md:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col md:max-w-xs p-2">
              <nav className="flex flex-col gap-4 px-2 lg:px-4 sm:py-4">
                <div className="mt-6 flex items-center justify-between">
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
                  </div>
                </div>

                <div className="mt-1">
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

              <nav className="flex-1 h-max w-full overflow-auto">
                <div className="mt-1 flex flex-col h-max space-y-0.5 px-2 py-1">
                  {Array.from({ length: 100 }).map((_, idx) => {
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

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100"
                  width={48}
                  height={48}
                  alt="Avatar"
                  className="overflow-hidden rounded-full w-8 h-8 object-cover object-center cursor-pointer"
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
        </header>
        <main className="inset-y-0 right-0-0 flex-1 w-full max-h-[94vh] md:max-h-screen">
          <div className="flex flex-1 flex-col w-full h-full">
            <div className="h-16">
              <Card className="rounded-none border-l-transparent h-full px-4 py-2">
                <CardContent className="h-full p-0 flex items-center justify-between">
                  <div className="flex items-center">
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
                      <h1 className="text-base leading-tight">
                        Rahul Khimsuriya
                      </h1>
                      <span className="text-xs leading-tight">Online</span>
                    </div>
                  </div>

                  <div>
                    <Button variant="ghost">
                      <InfoIcon className="h-4 w-4" />
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="overflow-hidden rounded-full"
                        >
                          <EllipsisVertical className="h-5 w-5" />
                          <span className="sr-only">More details</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="text-foreground"
                        align="end"
                      >
                        <DropdownMenuItem>
                          <Archive className="h-4 w-4 mr-2" />
                          Archive
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MicOff className="h-4 w-4 mr-2" />
                          Muted
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1 px-4 lg:px-8 space-y-4 py-4 overflow-auto">
              {chats.map((chat, idx) => (
                <div key={idx}>
                  <div className="flex">
                    <div className="flex items-end">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100"
                        width={48}
                        height={48}
                        alt="Avatar"
                        className="overflow-hidden rounded-full w-6 h-6 object-cover object-center"
                      />
                    </div>
                    <div className="ml-2">
                      <Card className="flex items-center">
                        <CardContent className="p-2">
                          {chat.content}
                        </CardContent>
                      </Card>

                      <span className="text-xs text-muted-foreground">
                        {chat.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto h-16">
              <Card className="rounded-none border-l-transparent h-full">
                <CardContent className="h-full p-0 flex items-center">
                  <div className="px-4 space-x-2 w-full flex items-center justify-center">
                    <Button variant="outline">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input className="flex-1" />
                    <Button>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
