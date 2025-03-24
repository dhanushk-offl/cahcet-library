"use client"

import { BookOpen, BookText, Library, ArrowRight, Calendar, Bell, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { libraryData } from "@/data/library-data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

export default function Home() {
  const { toast } = useToast()

  useEffect(() => {
    toast({
      title: "Welcome to the Library Portal",
      description: "Explore our vast collection of resources and services.",
    })
  }, [toast])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    // Added px-4 for consistent horizontal padding on mobile
    <div className="space-y-6 w-full overflow-hidden px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-4 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 p-4 md:p-8 text-white"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-xl">
          <h1 className="text-xl font-bold tracking-tight md:text-3xl lg:text-4xl">Welcome to College Library</h1>
          <p className="mt-3 md:mt-4 text-white/90 text-sm md:text-base">
            Discover a world of knowledge with our comprehensive collection of books, journals, and digital resources.
          </p>
          {/* Improved mobile button layout */}
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="secondary" size="default" className="font-medium w-full sm:w-auto">
              <Link href="/opac">
                Search Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="default"
              className="bg-white/10 backdrop-blur-sm font-medium text-white border-white/20 hover:bg-white/20 w-full sm:w-auto"
            >
              <Link href="/e-resources">Explore E-Resources</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div variants={item} className="w-full">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none shadow-md h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardTitle className="text-sm font-medium">Total Books</CardTitle>
              <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent className="pt-4 md:pt-6">
              <div className="text-xl md:text-2xl font-bold">{libraryData.statistics.totalBooks.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Physical books available in our collection</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="w-full">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none shadow-md h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
              <CardTitle className="text-sm font-medium">Total Journals</CardTitle>
              <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <BookText className="h-4 w-4 text-emerald-500" />
              </div>
            </CardHeader>
            <CardContent className="pt-4 md:pt-6">
              <div className="text-xl md:text-2xl font-bold">{libraryData.statistics.totalJournals.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Academic journals and periodicals</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="w-full">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none shadow-md h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900">
              <CardTitle className="text-sm font-medium">Total E-Books</CardTitle>
              <div className="h-8 w-8 rounded-full bg-violet-500/10 flex items-center justify-center">
                <Library className="h-4 w-4 text-violet-500" />
              </div>
            </CardHeader>
            <CardContent className="pt-4 md:pt-6">
              <div className="text-xl md:text-2xl font-bold">{libraryData.statistics.totalEBooks.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Digital books in our e-library</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full"
      >
        <Card className="overflow-hidden border-none shadow-md">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-3 md:py-6">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 md:h-5 md:w-5 text-amber-500" />
              <CardTitle className="text-base md:text-lg">Latest Announcements</CardTitle>
            </div>
            <CardDescription className="text-xs md:text-sm">Stay updated with the latest library news and events</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {libraryData.announcements.map((announcement, index) => (
                <div key={index} className="p-3 md:p-4 transition-colors hover:bg-muted/50">
                  <h3 className="font-semibold text-base md:text-lg">{announcement.title}</h3>
                  <p className="mt-1 text-xs md:text-sm">{announcement.content}</p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    Posted on: {announcement.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full"
        >
          <Card className="h-full overflow-hidden border-none shadow-md">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 py-3 md:py-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 text-amber-500" />
                <CardTitle className="text-base md:text-lg">Library Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-2 md:mt-4 space-y-1 md:space-y-2">
                {libraryData.hours.map((hour, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-dashed last:border-0">
                    <span className="font-medium text-sm md:text-base">{hour.day}</span>
                    <span className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded-md text-xs md:text-sm">{hour.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full"
        >
          <Card className="h-full overflow-hidden border-none shadow-md">
            <div className="relative h-32 md:h-40">
              <Image src="/placeholder.svg?height=400&width=600" alt="Library" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-3 md:p-4 text-white">
                  <h2 className="text-lg md:text-xl font-bold">Visit Our Library</h2>
                  <p className="text-xs md:text-sm text-white/80">Explore our vast collection in person</p>
                </div>
              </div>
            </div>
            <CardContent className="p-3 md:p-4">
              <div className="flex items-center gap-3 mt-2">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base">Daily Visitors</h3>
                  <p className="text-xs text-muted-foreground">
                    Average {libraryData.statistics.dailyVisitors} students per day
                  </p>
                </div>
              </div>
              <div className="mt-3 md:mt-4">
                <Button asChild variant="outline" className="w-full text-xs md:text-sm py-1 h-8 md:h-10">
                  <Link href="/about">
                    Learn More About Our Library
                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
