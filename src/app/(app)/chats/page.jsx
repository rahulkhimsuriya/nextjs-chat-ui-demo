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

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    username: "alicej",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "See you tomorrow!",
    last_message_datetime: "2024-07-11 05:30 pm",
  },
  {
    id: 2,
    name: "Lucy Smith",
    username: "lcysmith",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "I'll send you the documents.",
    last_message_datetime: "2024-07-11 03:45 pm",
  },
  {
    id: 3,
    name: "Catherine Lee",
    username: "catherinelee",
    image:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Lunch at 1 pm?",
    last_message_datetime: "2024-07-11 11:30 am",
  },
  {
    id: 4,
    name: "Madison Prescott",
    username: "mdprescott",
    image:
      "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Got it, thanks!",
    last_message_datetime: "2024-07-11 09:00 am",
  },
  {
    id: 5,
    name: "Emily Davis",
    username: "emilyd",
    image:
      "https://images.unsplash.com/photo-1477064601209-5ed2b9f3b1fc?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Meeting at 2 pm confirmed.",
    last_message_datetime: "2024-07-10 08:30 pm",
  },
  {
    id: 6,
    name: "Crystal Brown",
    username: "cryskb",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "I'll be there in 5 minutes.",
    last_message_datetime: "2024-07-10 06:45 pm",
  },
  {
    id: 7,
    name: "Grace Wilson",
    username: "gracew",
    image:
      "https://images.unsplash.com/photo-1542596594-b47fea509622?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Can we reschedule?",
    last_message_datetime: "2024-07-10 04:15 pm",
  },
  {
    id: 8,
    name: "Henry Moore",
    username: "henrym",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Yes, let's go ahead.",
    last_message_datetime: "2024-07-10 02:00 pm",
  },
  {
    id: 9,
    name: "Irene Taylor",
    username: "irenet",
    image:
      "https://images.unsplash.com/photo-1515552868968-a119fcb51395?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "I need your feedback.",
    last_message_datetime: "2024-07-10 12:45 pm",
  },
  {
    id: 10,
    name: "Jack Anderson",
    username: "jacka",
    image:
      "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Catch you later.",
    last_message_datetime: "2024-07-10 10:30 am",
  },
  {
    id: 11,
    name: "Karen Thomas",
    username: "karent",
    image:
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Can we talk now?",
    last_message_datetime: "2024-07-09 09:15 pm",
  },
  {
    id: 12,
    name: "Leo Martinez",
    username: "leom",
    image:
      "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "I'm on it.",
    last_message_datetime: "2024-07-09 07:00 pm",
  },
  {
    id: 13,
    name: "Mia White",
    username: "miaw",
    image:
      "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Let's meet at 3 pm.",
    last_message_datetime: "2024-07-09 05:45 pm",
  },
  {
    id: 14,
    name: "Nathan Harris",
    username: "nathanh",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Just sent the email.",
    last_message_datetime: "2024-07-09 03:30 pm",
  },
  {
    id: 15,
    name: "Olivia Clark",
    username: "oliviac",
    image:
      "https://images.unsplash.com/photo-1468488718849-422a2a5efc03?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Got your message.",
    last_message_datetime: "2024-07-09 01:15 pm",
  },
  {
    id: 16,
    name: "Peter Lewis",
    username: "peterl",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Talk to you later.",
    last_message_datetime: "2024-07-09 11:00 am",
  },
  {
    id: 17,
    name: "Quinn Walker",
    username: "quinnw",
    image:
      "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Looking forward to it.",
    last_message_datetime: "2024-07-09 09:45 am",
  },
  {
    id: 18,
    name: "Ryan Young",
    username: "ryany",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Thanks for the update.",
    last_message_datetime: "2024-07-08 08:30 pm",
  },
  {
    id: 19,
    name: "Sophia King",
    username: "sophiak",
    image:
      "https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Sure, see you then.",
    last_message_datetime: "2024-07-08 06:15 pm",
  },
  {
    id: 20,
    name: "Thomas Hill",
    username: "thomash",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    last_message: "Got it. Thanks!",
    last_message_datetime: "2024-07-08 04:00 pm",
  },
];

const chats = [
  { id: 1, from_id: 2, to_id: 1, msg: "Good morning ", datetime: "09:07 am" },
  {
    id: 2,
    from_id: 1,
    to_id: 2,
    msg: "Good morning, How are you? What about our next meeting?",
    datetime: "09:08 am",
  },
  {
    id: 3,
    from_id: 2,
    to_id: 1,
    msg: "Yeah everything is fine. Our next meeting is tomorrow at 10.00 AM. Did you see the project update I sent over?",
    datetime: "09:10 am",
  },
  {
    id: 4,
    from_id: 2,
    to_id: 1,
    msg: "Hey, I'm thinking of going to meet a friend of mine at the department store. I need to buy some presents for my parents . Do you need anything?",
    datetime: "09:12 am",
  },
  {
    id: 5,
    from_id: 1,
    to_id: 2,
    msg: "Wow that's great! Actually, I could use a new coffee mug. Maybe we can meet up after you're done?",
    datetime: "09:30 am",
  },
  {
    id: 6,
    from_id: 2,
    to_id: 1,
    msg: "Sure, that sounds good! I should be free around lunchtime. Anything specific you're looking for in a mug?",
    datetime: "09:32 am",
  },
  {
    id: 7,
    from_id: 1,
    to_id: 2,
    msg: "Not really, just something interesting. Maybe with a funny quote or a cool design?",
    datetime: "09:35 am",
  },
  {
    id: 8,
    from_id: 2,
    to_id: 1,
    msg: "Sounds like a plan! I'll see what I can find. Talk to you later!",
    datetime: "09:38 am",
  },
  {
    id: 9,
    from_id: 1,
    to_id: 2,
    msg: "Thanks! Have a great time shopping!",
    datetime: "09:40 am",
  },
  {
    id: 10,
    from_id: 2,
    to_id: 1,
    msg: "Will do! Catch you later!",
    datetime: "09:41 am",
  },
  {
    id: 11,
    from_id: 2,
    to_id: 1,
    msg: "Hey, I found a couple of cool mugs. Sending pics now.",
    datetime: "11:15 am",
  },
  {
    id: 12,
    from_id: 1,
    to_id: 2,
    msg: "Great! Let's see them.",
    datetime: "11:16 am",
  },
  {
    id: 13,
    from_id: 2,
    to_id: 1,
    msg: "Here you go. Which one do you like?",
    datetime: "11:18 am",
  },
  {
    id: 14,
    from_id: 1,
    to_id: 2,
    msg: "I like the one with the funny quote. Can you get that for me?",
    datetime: "11:20 am",
  },
  {
    id: 15,
    from_id: 2,
    to_id: 1,
    msg: "Sure thing! Anything else you need?",
    datetime: "11:22 am",
  },
  {
    id: 16,
    from_id: 1,
    to_id: 2,
    msg: "Nope, that's all. Thanks a lot!",
    datetime: "11:25 am",
  },
  {
    id: 17,
    from_id: 2,
    to_id: 1,
    msg: "You're welcome! See you at lunch.",
    datetime: "11:28 am",
  },
  { id: 18, from_id: 1, to_id: 2, msg: "See you then!", datetime: "11:30 am" },
  {
    id: 19,
    from_id: 1,
    to_id: 2,
    msg: "Hey, are you free now? Want to grab a quick coffee?",
    datetime: "12:00 pm",
  },
  {
    id: 20,
    from_id: 2,
    to_id: 1,
    msg: "Yeah, I'm done with shopping. Let's meet at our usual spot.",
    datetime: "12:05 pm",
  },
  {
    id: 21,
    from_id: 1,
    to_id: 2,
    msg: "Sounds good. See you in 10 minutes.",
    datetime: "12:06 pm",
  },
  { id: 22, from_id: 2, to_id: 1, msg: "On my way!", datetime: "12:07 pm" },
  {
    id: 23,
    from_id: 1,
    to_id: 2,
    msg: "I'm here. Where are you?",
    datetime: "12:15 pm",
  },
  {
    id: 24,
    from_id: 2,
    to_id: 1,
    msg: "Parking the car. Be there in 2 minutes.",
    datetime: "12:16 pm",
  },
  {
    id: 25,
    from_id: 1,
    to_id: 2,
    msg: "Got it. I'll grab a table.",
    datetime: "12:17 pm",
  },
  {
    id: 26,
    from_id: 2,
    to_id: 1,
    msg: "Great, see you soon.",
    datetime: "12:18 pm",
  },
  {
    id: 27,
    from_id: 1,
    to_id: 2,
    msg: "Hey, just a reminder, we have that meeting tomorrow at 10 am.",
    datetime: "02:00 pm",
  },
  {
    id: 28,
    from_id: 2,
    to_id: 1,
    msg: "Got it. I'll be ready.",
    datetime: "02:05 pm",
  },
  {
    id: 29,
    from_id: 1,
    to_id: 2,
    msg: "Perfect. Don't forget to review the project updates.",
    datetime: "02:06 pm",
  },
  {
    id: 30,
    from_id: 2,
    to_id: 1,
    msg: "Will do. See you tomorrow.",
    datetime: "02:08 pm",
  },
  {
    id: 31,
    from_id: 1,
    to_id: 2,
    msg: "Hey, are you free tonight? Want to catch a movie?",
    datetime: "04:00 pm",
  },
  {
    id: 32,
    from_id: 2,
    to_id: 1,
    msg: "I might be. What movie are you thinking?",
    datetime: "04:05 pm",
  },
  {
    id: 33,
    from_id: 1,
    to_id: 2,
    msg: "How about the new action movie that's out?",
    datetime: "04:06 pm",
  },
  {
    id: 34,
    from_id: 2,
    to_id: 1,
    msg: "Sounds good to me. What time?",
    datetime: "04:10 pm",
  },
  {
    id: 35,
    from_id: 1,
    to_id: 2,
    msg: "Let's go for the 7 pm show.",
    datetime: "04:12 pm",
  },
  {
    id: 36,
    from_id: 2,
    to_id: 1,
    msg: "Perfect. See you then.",
    datetime: "04:15 pm",
  },
  {
    id: 37,
    from_id: 1,
    to_id: 2,
    msg: "Hey, I'm running a bit late. I'll be there by 7:15.",
    datetime: "06:50 pm",
  },
  {
    id: 38,
    from_id: 2,
    to_id: 1,
    msg: "No problem. I'll grab the tickets.",
    datetime: "06:52 pm",
  },
  {
    id: 39,
    from_id: 1,
    to_id: 2,
    msg: "Thanks! See you soon.",
    datetime: "06:55 pm",
  },
  {
    id: 40,
    from_id: 2,
    to_id: 1,
    msg: "Got the tickets. Waiting near the entrance.",
    datetime: "07:00 pm",
  },
  {
    id: 41,
    from_id: 1,
    to_id: 2,
    msg: "I'm here. Where are you?",
    datetime: "07:10 pm",
  },
  {
    id: 42,
    from_id: 2,
    to_id: 1,
    msg: "Near the popcorn stand.",
    datetime: "07:11 pm",
  },
  {
    id: 43,
    from_id: 1,
    to_id: 2,
    msg: "Got it. See you in a sec.",
    datetime: "07:12 pm",
  },
  {
    id: 44,
    from_id: 2,
    to_id: 1,
    msg: "Enjoyed the movie. Let's do this again sometime.",
    datetime: "09:30 pm",
  },
  {
    id: 45,
    from_id: 1,
    to_id: 2,
    msg: "Absolutely. Had a great time.",
    datetime: "09:35 pm",
  },
  {
    id: 46,
    from_id: 2,
    to_id: 1,
    msg: "Good night. See you tomorrow.",
    datetime: "10:00 pm",
  },
  { id: 47, from_id: 1, to_id: 2, msg: "Good night!", datetime: "10:05 pm" },
  {
    id: 48,
    from_id: 1,
    to_id: 2,
    msg: "Morning! Ready for the meeting?",
    datetime: "09:00 am",
  },
  {
    id: 49,
    from_id: 2,
    to_id: 1,
    msg: "Morning! Yes, all set.",
    datetime: "09:05 am",
  },
  {
    id: 50,
    from_id: 1,
    to_id: 2,
    msg: "Great! Let's make it a productive session.",
    datetime: "09:10 am",
  },
  {
    id: 51,
    from_id: 2,
    to_id: 1,
    msg: "Absolutely. Let's do this.",
    datetime: "09:15 am",
  },
  {
    id: 52,
    from_id: 1,
    to_id: 2,
    msg: "Meeting went well! Thanks for your input.",
    datetime: "11:30 am",
  },
  {
    id: 53,
    from_id: 2,
    to_id: 1,
    msg: "It did! Thanks for coordinating everything.",
    datetime: "11:35 am",
  },
  {
    id: 54,
    from_id: 1,
    to_id: 2,
    msg: "Want to grab lunch and debrief?",
    datetime: "11:40 am",
  },
  {
    id: 55,
    from_id: 2,
    to_id: 1,
    msg: "Sure, let's do that.",
    datetime: "11:42 am",
  },
  {
    id: 56,
    from_id: 1,
    to_id: 2,
    msg: "Meet you at the café in 15?",
    datetime: "11:45 am",
  },
  {
    id: 57,
    from_id: 2,
    to_id: 1,
    msg: "Perfect. See you there.",
    datetime: "11:46 am",
  },
  {
    id: 58,
    from_id: 1,
    to_id: 2,
    msg: "Here already. Grabbed a table outside.",
    datetime: "12:00 pm",
  },
  {
    id: 59,
    from_id: 2,
    to_id: 1,
    msg: "Just parked. Be there in a sec.",
    datetime: "12:02 pm",
  },
];

const authUser = users[0];
const selectedUser = users[1];

export default function Chats() {
  return (
    <div className="flex h-screen w-full">
      <aside className="inset-y-0 left-0 z-10 hidden md:w-1/3 lg:w-1/4 max-w-sm flex-col border-r md:flex">
        <nav className="flex flex-col gap-4 px-2 lg:px-4 sm:py-4x">
          <div className="mt-4x flex items-center justify-between border-b">
            <div className="flex items-center py-3">
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

          <div className="mt-2 relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8"
            />
          </div>
        </nav>
        <nav className="mt-4 flex-1 h-max border-t border-b w-full overflow-auto">
          <div className="mt-2 flex flex-col h-max space-y-0.5 px-2 lg:px-4 py-1">
            {users.slice(1).map((user, idx) => {
              const isActiveChat = parseInt(idx) == 0;
              return (
                <div
                  className={cn(
                    "w-full flex px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out  hover:bg-zinc-300 lg:hover:translate-x-1",
                    isActiveChat && "bg-zinc-300"
                  )}
                  key={idx}
                >
                  <div className="w-full flex">
                    <div className="flex-shrink-0">
                      <Image
                        src={user.image}
                        width={48}
                        height={48}
                        alt={`${user.name}'s avatar`}
                        className="overflow-hidden rounded-full w-10 h-10 object-cover object-center"
                      />
                    </div>
                    <div className={cn("ml-2 overflow-hidden")}>
                      <p className="block text-sm truncate">{user.name}</p>
                      <span
                        className={cn(
                          "truncate text-primary/50 block w-full text-xs"
                        )}
                      >
                        {user.last_message}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
        <nav className="mt-auto h-16 w-full flex items-center justify-between gap-4 px-2 lg:px-4 sm:py-4">
          <div className="flex flex-1">
            <div className="flex">
              <Image
                src={authUser.image}
                width={48}
                height={48}
                alt={`${authUser.name}'s avatar`}
                className="overflow-hidden rounded-full w-12 h-12 object-cover object-center"
              />
            </div>

            <div className="ml-2">
              <p className="p-0 text-base truncate text-primary/85">
                {authUser.name}
              </p>
              <span className="inline-block text-primary/50 text-sm font-semibold">
                @{authUser.username}
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
                  {users.slice(1).map((user, idx) => {
                    const isActiveChat = parseInt(idx) == 0;
                    return (
                      <div
                        className={cn(
                          "w-full flex px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out  hover:bg-zinc-300 lg:hover:translate-x-1",
                          isActiveChat && "bg-zinc-300"
                        )}
                        key={idx}
                      >
                        <div className="w-full flex">
                          <div className="flex-shrink-0">
                            <Image
                              src={user.image}
                              width={48}
                              height={48}
                              alt={`${user.name}'s avatar`}
                              className="overflow-hidden rounded-full w-10 h-10 object-cover object-center"
                            />
                          </div>
                          <div className={cn("ml-2 overflow-hidden")}>
                            <p className="block text-sm truncate">
                              {user.name}
                            </p>
                            <span
                              className={cn(
                                "truncate text-primary/50 block w-full text-xs"
                              )}
                            >
                              {user.last_message}
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
                  src={authUser.image}
                  width={48}
                  height={48}
                  alt={`${authUser.name}'s avatar`}
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
                        src={selectedUser.image}
                        width={48}
                        height={48}
                        alt={`${selectedUser.name}'s avatar`}
                        className="overflow-hidden rounded-full w-12 h-12 object-cover object-center"
                      />
                    </div>
                    <div className="ml-2">
                      <h1 className="text-base leading-tight">
                        {selectedUser.name}
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
              {chats.map((chat, idx) => {
                const user = users[chat.from_id - 1];
                const isYou = user.id === 1;

                return (
                  <div
                    key={idx}
                    className={cn("flex justify-start", isYou && "justify-end")}
                  >
                    <div className={cn("flex", isYou && "flex-row-reverse")}>
                      <div className="flex items-end">
                        <Image
                          src={user.image}
                          width={48}
                          height={48}
                          alt={`${user.name}'s avatar`}
                          className="overflow-hidden rounded-full w-6 h-6 object-cover object-center"
                        />
                      </div>
                      <div
                        className={cn(
                          "ml-2 flex flex-col",
                          isYou && "ml-0 mr-2 items-end"
                        )}
                      >
                        <Card className="flex items-center">
                          <CardContent className="p-2">{chat.msg}</CardContent>
                        </Card>

                        <span className="mt-2 text-xs text-muted-foreground">
                          {chat.datetime}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
