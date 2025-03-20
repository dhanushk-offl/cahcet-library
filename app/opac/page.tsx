"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { libraryData } from "@/data/library-data"
import { Search, BookOpen, User, Calendar } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function OpacPage() {
  const [searchResults, setSearchResults] = useState<typeof libraryData.books | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("title")

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults(null)
      return
    }

    const query = searchQuery.toLowerCase()
    let results

    if (searchType === "title") {
      results = libraryData.books.filter((book) => book.title.toLowerCase().includes(query))
    } else if (searchType === "author") {
      results = libraryData.books.filter((book) => book.author.toLowerCase().includes(query))
    } else if (searchType === "subject") {
      results = libraryData.books.filter((book) => book.subject.toLowerCase().includes(query))
    } else {
      results = libraryData.books.filter((book) => book.isbn.includes(query))
    }

    setSearchResults(results)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Online Public Access Catalog (OPAC)</h1>
        <p className="text-muted-foreground">Search our library catalog to find books, journals, and other resources</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Catalog</CardTitle>
          <CardDescription>Find resources in our library collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="sm:w-1/4">
                <Select value={searchType} onValueChange={setSearchType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Search by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                    <SelectItem value="subject">Subject</SelectItem>
                    <SelectItem value="isbn">ISBN</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-1 space-x-2">
                <Input
                  placeholder={`Search by ${searchType}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch()
                    }
                  }}
                />
                <Button onClick={handleSearch}>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            {searchResults && (
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-medium">Search Results ({searchResults.length} items found)</h3>
                {searchResults.length > 0 ? (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Author</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {searchResults.map((book, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.subject}</TableCell>
                            <TableCell>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  book.status === "Available"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {book.status}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                    <BookOpen className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No results found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your search terms or search by a different field.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Search</CardTitle>
          <CardDescription>Refine your search with multiple criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title contains</label>
              <Input placeholder="Enter title keywords" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Author</label>
              <Input placeholder="Enter author name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Enter subject" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Publication Year</label>
              <Input placeholder="Enter year (e.g., 2023)" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">ISBN/ISSN</label>
              <Input placeholder="Enter ISBN or ISSN" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Material Type</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Materials</SelectItem>
                  <SelectItem value="book">Books</SelectItem>
                  <SelectItem value="journal">Journals</SelectItem>
                  <SelectItem value="thesis">Theses</SelectItem>
                  <SelectItem value="ebook">E-Books</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-4">
            <Search className="mr-2 h-4 w-4" />
            Advanced Search
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recently Added</CardTitle>
          <CardDescription>New additions to our library collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {libraryData.recentlyAdded.map((book, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{book.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="mr-1 h-3 w-3" />
                      {book.author}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      Added: {book.dateAdded}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

