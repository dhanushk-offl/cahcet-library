import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { libraryData } from "@/data/library-data"
import { Button } from "@/components/ui/button"
import { ExternalLink, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function JournalsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Journals Collection</h1>
        <p className="text-muted-foreground">Browse our collection of academic journals and periodicals</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Journals</CardTitle>
          <CardDescription>Find journals by title, subject, or ISSN</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="sm:w-1/4">
              <Select defaultValue="title">
                <SelectTrigger>
                  <SelectValue placeholder="Search by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="subject">Subject</SelectItem>
                  <SelectItem value="issn">ISSN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-1 space-x-2">
              <Input placeholder="Search journals..." />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="print">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="print">Print Journals</TabsTrigger>
          <TabsTrigger value="electronic">Electronic Journals</TabsTrigger>
        </TabsList>

        <TabsContent value="print" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Print Journal Collection</CardTitle>
              <CardDescription>Physical journals available in our library</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Publisher</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Available Issues</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {libraryData.journals.print.map((journal, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{journal.title}</TableCell>
                      <TableCell>{journal.publisher}</TableCell>
                      <TableCell>{journal.frequency}</TableCell>
                      <TableCell>{journal.subject}</TableCell>
                      <TableCell>{journal.availableIssues}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="electronic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Electronic Journal Collection</CardTitle>
              <CardDescription>Digital journals accessible online</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {libraryData.journals.electronic.map((journal, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <h3 className="font-medium">{journal.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Publisher: {journal.publisher}</p>
                    <p className="text-sm text-muted-foreground">Subject: {journal.subject}</p>
                    <div className="mt-4 flex justify-between">
                      <span className="text-sm">
                        <span className="font-medium">Access:</span> {journal.access}
                      </span>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Access
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Journal Databases</CardTitle>
          <CardDescription>Access to specialized journal databases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {libraryData.journals.databases.map((database, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{database.name}</h3>
                <p className="mt-2 text-sm">{database.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm">
                    <span className="font-medium">Coverage:</span> {database.coverage}
                  </span>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Journal Access Guide</CardTitle>
          <CardDescription>How to access and use our journal collection</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-2">
            {libraryData.journals.accessGuide.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

