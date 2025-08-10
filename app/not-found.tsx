"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Menu } from "lucide-react"
import SakuraCursor from "@/components/sakura-cursor"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F8F5F2] to-[#EAE7E3] flex items-center justify-center px-4">
            <SakuraCursor />

            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
                    <div className="text-6xl mb-6">🍵</div>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-lg text-gray-600 mb-2">
                        Oops! The page you're looking for seems to have wandered off like steam from a tea cup.
                    </p>
                    <p className="text-gray-500">Don't worry, let's get you back to enjoying our zen café experience.</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Button asChild size="lg" className="bg-[#465775] hover:bg-[#3a4a63] text-white">
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            Go Home
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg">
                        <Link href="/menu" className="flex items-center gap-2">
                            <Menu className="w-5 h-5" />
                            View Menu
                        </Link>
                    </Button>

                    <Button variant="ghost" size="lg" onClick={() => window.history.back()} className="flex items-center gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </Button>
                </div>

                {/* Helpful Links */}
                <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/about" className="text-[#465775] hover:text-[#3a4a63] hover:underline transition-colors">
                            About Us
                        </Link>
                        <Link href="/menu" className="text-[#465775] hover:text-[#3a4a63] hover:underline transition-colors">
                            Our Menu
                        </Link>
                        <Link href="/contact" className="text-[#465775] hover:text-[#3a4a63] hover:underline transition-colors">
                            Contact
                        </Link>
                        <Link href="/order" className="text-[#465775] hover:text-[#3a4a63] hover:underline transition-colors">
                            Order Online
                        </Link>
                    </div>
                </div>

                {/* Fun Message */}
                <div className="mt-8 p-4 bg-white/50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                        "In the way of tea, every mistake is a step towards perfection." - Zen Café Philosophy
                    </p>
                </div>
            </div>
        </div>
    )
}
