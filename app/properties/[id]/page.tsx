"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Heart,
    Share2,
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Calendar,
    Phone,
    Mail,
    Award,
    Check,
    Map,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Compass,
    Shield,
    Smile,
    Play,
    Star,
} from "lucide-react";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function PropertyDetailsPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const property = properties.find((p) => p.id === resolvedParams.id);

    const [liked, setLiked] = useState(false);
    const [activeFloorPlan, setActiveFloorPlan] = useState<"ground" | "first">(
        "ground",
    );
    const [selectedDate, setSelectedDate] = useState<number>(0);
    const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
    const [tourType, setTourType] = useState<string>("in-person");
    const [bookingName, setBookingName] = useState("");
    const [bookingPhone, setBookingPhone] = useState("");
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

    if (!property) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
                <h2 className="text-2xl font-bold text-gray-900">
                    Property Not Found
                </h2>
                <p className="mt-2 text-gray-500">
                    The property you are looking for does not exist or has been
                    removed.
                </p>
                <Link href="/" className="mt-6">
                    <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>
            </div>
        );
    }

    // Get similar properties (same category, or random ones excluding current)
    const similarProperties = properties
        .filter((p) => p.id !== property.id)
        .slice(0, 3);

    // Generate dates for the next 5 days
    const getDates = () => {
        const dates = [];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        for (let i = 1; i <= 5; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            dates.push({
                dayName: days[d.getDay()],
                dayNum: d.getDate(),
                month: months[d.getMonth()],
                fullString: `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`,
            });
        }
        return dates;
    };
    const tourDates = getDates();

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!bookingName || !bookingPhone) {
            toast.error("Please fill in all booking details.");
            return;
        }
        toast.success(`Tour Scheduled!`, {
            description: `Your ${tourType} tour on ${tourDates[selectedDate].fullString} at ${selectedTime} is confirmed. Our agent ${property.agent.name} will call you shortly.`,
        });
        setBookingName("");
        setBookingPhone("");
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
    };

    return (
        <div className="min-h-screen bg-gray-50/50 pb-20 text-gray-900 font-sans">
            <Toaster position="top-center" />

            {/* Sticky Header Navigation */}
            <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Listings</span>
                    </Link>

                    <div className="hidden items-center gap-6 text-sm font-medium text-gray-500 md:flex">
                        <a
                            href="#gallery"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Gallery
                        </a>
                        <a
                            href="#overview"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Overview
                        </a>
                        <a
                            href="#amenities"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Amenities
                        </a>
                        <a
                            href="#floorplan"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Floor Plan
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Location
                        </a>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-gray-100"
                            onClick={handleShare}
                            aria-label="Share property"
                        >
                            <Share2 className="h-4 w-4 text-gray-600" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-gray-100"
                            onClick={() => setLiked(!liked)}
                            aria-label="Favorite property"
                        >
                            <Heart
                                className={`h-4 w-4 transition-colors ${liked ? "fill-rose-500 text-rose-500" : "text-gray-600"}`}
                            />
                        </Button>
                        <a href="#book-tour" className="hidden sm:inline-block">
                            <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 font-semibold px-5">
                                Book Tour
                            </Button>
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content Container */}
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
                {/* Photo Gallery Collage */}
                <section
                    id="gallery"
                    className="relative overflow-hidden rounded-2xl bg-gray-200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:h-[460px]">
                        {/* Main Image */}
                        <div className="relative md:col-span-2 h-[260px] md:h-full group overflow-hidden cursor-pointer">
                            <Image
                                src={property.gallery[0]}
                                alt={`${property.title} featured`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-102"
                                priority
                            />
                        </div>

                        {/* Supporting Grid */}
                        <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2 h-full">
                            {property.gallery.slice(1, 4).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative h-full overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={img}
                                        alt={`${property.title} gallery detail`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                                    />
                                    {/* Overlay for last item to show total photos */}
                                    {idx === 2 && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                                            <span className="text-white font-bold text-lg flex items-center gap-1.5">
                                                + {property.gallery.length}{" "}
                                                Photos
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dialog trigger for fullscreen viewer */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-900 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105 active:scale-95">
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>View All Photos</span>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl border-none bg-black/95 p-6 text-white shadow-2xl rounded-2xl">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-900">
                                <Image
                                    src={property.gallery[activeGalleryIndex]}
                                    alt={`${property.title} slide`}
                                    fill
                                    className="object-contain"
                                />

                                {/* Nav buttons inside slider */}
                                <button
                                    onClick={() =>
                                        setActiveGalleryIndex((prev) =>
                                            prev === 0
                                                ? property.gallery.length - 1
                                                : prev - 1,
                                        )
                                    }
                                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 transition-colors"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={() =>
                                        setActiveGalleryIndex((prev) =>
                                            prev === property.gallery.length - 1
                                                ? 0
                                                : prev + 1,
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 transition-colors"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>

                                {/* Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-xs font-semibold">
                                    {activeGalleryIndex + 1} /{" "}
                                    {property.gallery.length}
                                </div>
                            </div>

                            {/* Thumbnails below slider */}
                            <div className="mt-4 flex gap-2 justify-center overflow-x-auto">
                                {property.gallery.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() =>
                                            setActiveGalleryIndex(idx)
                                        }
                                        className={`relative h-14 w-20 overflow-hidden rounded-md border-2 transition-all shrink-0 ${activeGalleryIndex === idx ? "border-white scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}
                                    >
                                        <Image
                                            src={img}
                                            alt="Thumbnail"
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                </section>

                {/* Dynamic Details Grid */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column - Main Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Title & Price Header */}
                        <div>
                            <div className="flex flex-wrap gap-2 items-center">
                                <Badge
                                    variant="secondary"
                                    className="bg-gray-100 hover:bg-gray-100 text-gray-900 font-semibold px-3 py-1 rounded-full text-[11px]"
                                >
                                    {property.category}
                                </Badge>
                                <Badge className="bg-gray-900 text-white font-semibold px-3 py-1 rounded-full text-[11px]">
                                    {property.status}
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-yellow-500 font-bold ml-1">
                                    <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                                    <span>
                                        {property.rating} (
                                        {property.reviewsCount} Reviews)
                                    </span>
                                </div>
                            </div>

                            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                                {property.title}
                            </h1>

                            <div className="mt-3.5 flex items-center gap-1.5 text-gray-500 text-sm">
                                <MapPin className="h-4.5 w-4.5 text-gray-400 shrink-0" />
                                <span>{property.address}</span>
                            </div>
                        </div>

                        {/* Dashboard / Specs Overview Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-gray-100 py-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                                    <BedDouble className="h-5 w-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                        Bedrooms
                                    </div>
                                    <div className="text-sm font-bold text-gray-800">
                                        {property.bedrooms} Bedrooms
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                                    <Bath className="h-5 w-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                        Bathrooms
                                    </div>
                                    <div className="text-sm font-bold text-gray-800">
                                        {property.bathrooms} Bathrooms
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                                    <Maximize2 className="h-4.5 w-4.5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                        Square Area
                                    </div>
                                    <div className="text-sm font-bold text-gray-800">
                                        {property.area}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                                    <Calendar className="h-5 w-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                        Year Built
                                    </div>
                                    <div className="text-sm font-bold text-gray-800">
                                        {property.yearBuilt}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                                    <Compass className="h-5 w-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                        Parking
                                    </div>
                                    <div className="text-sm font-bold text-gray-800">
                                        2 Garage slots
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                                    <Award className="h-5 w-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                        Property Status
                                    </div>
                                    <div className="text-sm font-bold text-gray-800">
                                        Active Listing
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <section id="overview" className="scroll-mt-20">
                            <h2 className="text-xl font-bold text-gray-900">
                                About this Property
                            </h2>
                            <div className="mt-4 text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
                                {property.description
                                    .split("\n\n")
                                    .map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                            </div>
                        </section>

                        {/* Premium Amenities Section */}
                        <section
                            id="amenities"
                            className="scroll-mt-20 border-t border-gray-100 pt-8"
                        >
                            <h2 className="text-xl font-bold text-gray-900">
                                Amenities & Features
                            </h2>
                            <p className="mt-1 text-sm text-gray-400">
                                Specially curated comfort and premium details
                                for high living.
                            </p>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                        <Smile className="h-4 w-4 text-gray-600" />{" "}
                                        Comfort & Living
                                    </h3>
                                    <ul className="mt-3 space-y-2.5">
                                        {property.amenities.comfort.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2.5 text-sm text-gray-600"
                                                >
                                                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                        <Compass className="h-4 w-4 text-gray-600" />{" "}
                                        Outdoor Areas
                                    </h3>
                                    <ul className="mt-3 space-y-2.5">
                                        {property.amenities.outdoor.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2.5 text-sm text-gray-600"
                                                >
                                                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                        <Sparkles className="h-4 w-4 text-gray-600" />{" "}
                                        Wellness & Spa
                                    </h3>
                                    <ul className="mt-3 space-y-2.5">
                                        {property.amenities.wellness.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2.5 text-sm text-gray-600"
                                                >
                                                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                        <Shield className="h-4 w-4 text-gray-600" />{" "}
                                        Safety & Security
                                    </h3>
                                    <ul className="mt-3 space-y-2.5">
                                        {property.amenities.security.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2.5 text-sm text-gray-600"
                                                >
                                                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Interactive Floor Plan Section */}
                        <section
                            id="floorplan"
                            className="scroll-mt-20 border-t border-gray-100 pt-8"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Floor Layouts
                                    </h2>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Architectural blueprint of indoor layout
                                        configurations.
                                    </p>
                                </div>

                                {/* Floor Toggle */}
                                <div className="flex rounded-full bg-gray-100 p-1 self-start sm:self-auto border border-gray-200/50">
                                    <button
                                        onClick={() =>
                                            setActiveFloorPlan("ground")
                                        }
                                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeFloorPlan === "ground" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                                    >
                                        Ground Floor
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveFloorPlan("first")
                                        }
                                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeFloorPlan === "first" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                                    >
                                        First Floor
                                    </button>
                                </div>
                            </div>

                            {/* Styled Mock architectural floor plan layout */}
                            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6 flex items-center justify-center min-h-[280px]">
                                {activeFloorPlan === "ground" ? (
                                    <div className="w-full max-w-lg grid grid-cols-3 grid-rows-2 gap-3 aspect-[1.8/1] text-xs font-semibold text-gray-500">
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Guest Suite
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                14 x 16 ft
                                            </span>
                                        </div>
                                        <div className="col-span-2 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2 text-center">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Main Living Room & Lounge
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                28 x 20 ft
                                            </span>
                                        </div>
                                        <div className="col-span-2 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2 text-center">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Open Concept Dining & Kitchen
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                24 x 18 ft
                                            </span>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Entrance Hall
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                8 x 12 ft
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full max-w-lg grid grid-cols-2 grid-rows-2 gap-3 aspect-[1.8/1] text-xs font-semibold text-gray-500">
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Master Bedroom Suite
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                18 x 20 ft
                                            </span>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Family Retreat Room
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                16 x 14 ft
                                            </span>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Bedroom 3
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                14 x 14 ft
                                            </span>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white p-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                Sky Terrace Balcony
                                            </span>
                                            <span className="mt-1 text-gray-800 font-bold">
                                                12 x 18 ft
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Neighborhood Location Map Section */}
                        <section
                            id="location"
                            className="scroll-mt-20 border-t border-gray-100 pt-8"
                        >
                            <h2 className="text-xl font-bold text-gray-900">
                                Neighborhood & Map
                            </h2>
                            <p className="mt-1 text-sm text-gray-400">
                                Discover transit, amenities and dining within
                                immediate proximity.
                            </p>

                            {/* Stylized Mock Map */}
                            <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-2xl border border-gray-100 bg-slate-100 flex items-center justify-center">
                                <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply pointer-events-none" />

                                {/* Mock Roads */}
                                <div className="absolute inset-0 flex flex-col justify-around opacity-30">
                                    <div className="h-6 w-full border-y-2 border-white" />
                                    <div className="h-8 w-full border-y-2 border-white" />
                                    <div className="h-6 w-full border-y-2 border-white" />
                                </div>
                                <div className="absolute inset-0 flex justify-around opacity-30">
                                    <div className="w-6 h-full border-x-2 border-white" />
                                    <div className="w-8 h-full border-x-2 border-white" />
                                </div>

                                {/* Centered Map Pin */}
                                <div className="relative flex flex-col items-center z-10 animate-bounce">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 shadow-lg border border-white">
                                        <MapPin className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="mt-2 rounded-lg bg-gray-900 text-[10px] font-bold text-white px-2 py-1 shadow-md">
                                        {property.title}
                                    </div>
                                </div>

                                <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-gray-700 shadow-md flex items-center gap-1 backdrop-blur-sm">
                                    <Map className="h-3.5 w-3.5 text-gray-500" />
                                    <span>
                                        Google Maps Coordinates: Lat -8.68, Lng
                                        115.15
                                    </span>
                                </div>
                            </div>

                            {/* Transit highlights */}
                            <div className="mt-5 grid grid-cols-3 gap-4 text-center">
                                <div className="rounded-xl border border-gray-100 bg-white p-3.5">
                                    <div className="text-lg font-bold text-gray-900">
                                        5 Mins
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                                        Dining & Cafes
                                    </div>
                                </div>
                                <div className="rounded-xl border border-gray-100 bg-white p-3.5">
                                    <div className="text-lg font-bold text-gray-900">
                                        8 Mins
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                                        Sandy Beach
                                    </div>
                                </div>
                                <div className="rounded-xl border border-gray-100 bg-white p-3.5">
                                    <div className="text-lg font-bold text-gray-900">
                                        20 Mins
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                                        International Airport
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Sticky Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Tour Booking Form Card */}
                            <Card
                                id="book-tour"
                                className="overflow-hidden border border-gray-100 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.06)] rounded-2xl bg-white scroll-mt-24"
                            >
                                <CardContent className="p-6">
                                    {/* Pricing Box */}
                                    <div>
                                        <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                            {property.price}
                                        </span>
                                        <span className="text-xs text-gray-400 block mt-1.5 font-medium">
                                            Estimate Monthly Taxes: $280/mo •
                                            Home Insurance: $120/mo
                                        </span>
                                    </div>

                                    <div className="mt-6 border-t border-gray-100 pt-5">
                                        <h3 className="text-sm font-bold text-gray-900">
                                            Schedule a Tour
                                        </h3>

                                        {/* Tour Type Tabs */}
                                        <div className="mt-3.5 grid grid-cols-2 gap-1 rounded-full bg-gray-100 p-1 border border-gray-200/50">
                                            <button
                                                onClick={() =>
                                                    setTourType("in-person")
                                                }
                                                className={`rounded-full py-1.5 text-xs font-semibold transition-all ${tourType === "in-person" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                                            >
                                                In-Person
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setTourType("video")
                                                }
                                                className={`rounded-full py-1.5 text-xs font-semibold transition-all ${tourType === "video" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                                            >
                                                Video Call
                                            </button>
                                        </div>

                                        <form
                                            onSubmit={handleBookingSubmit}
                                            className="mt-4 space-y-4"
                                        >
                                            {/* Date selection carousel list */}
                                            <div>
                                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                                    Select Date
                                                </label>
                                                <div className="mt-2 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                                                    {tourDates.map((d, idx) => (
                                                        <button
                                                            key={idx}
                                                            type="button"
                                                            onClick={() =>
                                                                setSelectedDate(
                                                                    idx,
                                                                )
                                                            }
                                                            className={`flex flex-col items-center justify-center shrink-0 w-[54px] py-2 rounded-xl border transition-all ${selectedDate === idx ? "bg-gray-900 border-gray-900 text-white shadow-md scale-102" : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50"}`}
                                                        >
                                                            <span className="text-[9px] font-bold uppercase tracking-wider">
                                                                {d.dayName}
                                                            </span>
                                                            <span className="text-base font-bold mt-0.5">
                                                                {d.dayNum}
                                                            </span>
                                                            <span className="text-[8px] font-semibold">
                                                                {d.month}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Time selection slot grid */}
                                            <div>
                                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                                    Available Times
                                                </label>
                                                <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
                                                    {[
                                                        "09:00 AM",
                                                        "11:00 AM",
                                                        "02:00 PM",
                                                        "04:00 PM",
                                                    ].map((t) => (
                                                        <button
                                                            key={t}
                                                            type="button"
                                                            onClick={() =>
                                                                setSelectedTime(
                                                                    t,
                                                                )
                                                            }
                                                            className={`py-2 rounded-lg border text-center transition-all ${selectedTime === t ? "bg-gray-900 border-gray-900 text-white shadow-sm" : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50"}`}
                                                        >
                                                            {t}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* User Info inputs */}
                                            <div className="space-y-3 pt-2">
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Your Full Name"
                                                    value={bookingName}
                                                    onChange={(e) =>
                                                        setBookingName(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900"
                                                />
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="Phone Number"
                                                    value={bookingPhone}
                                                    onChange={(e) =>
                                                        setBookingPhone(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900"
                                                />
                                            </div>

                                            {/* Submit Tour Action */}
                                            <Button
                                                type="submit"
                                                className="w-full rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold py-6 text-sm"
                                            >
                                                Request Tour Details
                                            </Button>

                                            <p className="text-[10px] text-gray-400 text-center leading-normal">
                                                By scheduling, you agree to our
                                                Terms of Service & Privacy
                                                Policies.
                                            </p>
                                        </form>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Agent details Card */}
                            <Card className="border border-gray-100 bg-white rounded-2xl">
                                <CardContent className="p-5">
                                    <div className="flex items-center gap-3.5">
                                        <Avatar className="h-12 w-12 border border-gray-100">
                                            <AvatarImage
                                                src={property.agent.image}
                                                alt={property.agent.name}
                                                className="object-cover"
                                            />
                                            <AvatarFallback>
                                                {property.agent.name[0]}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900">
                                                {property.agent.name}
                                            </h4>
                                            <p className="text-xs text-gray-400 font-medium">
                                                {property.agent.role}
                                            </p>

                                            <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-gray-700">
                                                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                <span>
                                                    {property.agent.rating}{" "}
                                                    Advisor Rating
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold">
                                        <a
                                            href={`tel:${property.agent.phone}`}
                                            className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            <Phone className="h-3.5 w-3.5 text-gray-500" />
                                            <span>Call Agent</span>
                                        </a>
                                        <a
                                            href={`mailto:${property.agent.email}`}
                                            className="flex items-center justify-center gap-1.5 rounded-lg bg-gray-100 py-2.5 text-gray-900 hover:bg-gray-200 transition-colors"
                                        >
                                            <Mail className="h-3.5 w-3.5 text-gray-600" />
                                            <span>Message</span>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Similar Listings Carousel Section */}
                <section className="mt-20 border-t border-gray-100 pt-16">
                    <div className="flex items-baseline justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                                Similar Properties
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                Selected listings from identical location
                                hotspots.
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="text-xs font-bold text-gray-900 hover:underline flex items-center gap-0.5"
                        >
                            <span>Explore All</span>
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {similarProperties.map((prop) => (
                            <PropertyCard key={prop.id} {...prop} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
