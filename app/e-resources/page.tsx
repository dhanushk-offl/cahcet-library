import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { libraryData } from "@/data/library-data"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function EResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">E-Resources</h1>
        <p className="text-muted-foreground">Access digital resources and databases available through our library</p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important Information</AlertTitle>
        <AlertDescription>
          DELNET and N-LIST resources are IP-restricted and can only be accessed from the college network. For remote
          access, please contact the library staff.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>DELNET</CardTitle>
            <CardDescription>Developing Library Network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              DELNET provides access to a wide range of resources including books, journals, theses, and dissertations.
              IP Range: {libraryData.eResources.delnet.ipRange}
            </p>
            <div className="flex items-center gap-4">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Access DELNET
              </Button>
              <Button variant="outline">View Resources</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>N-LIST</CardTitle>
            <CardDescription>
              National Library and Information Services Infrastructure for Scholarly Content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              N-LIST provides access to e-journals, e-books, and research databases. IP Range:{" "}
              {libraryData.eResources.nlist.ipRange}
            </p>
            <div className="flex items-center gap-4">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Access N-LIST
              </Button>
              <Button variant="outline">View Resources</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Other E-Resources</CardTitle>
          <CardDescription>Additional digital resources available through our library</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {libraryData.eResources.other.map((resource, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{resource.name}</h3>
                <p className="mt-2 text-sm">{resource.description}</p>
                <Button variant="link" className="mt-2 p-0">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Access
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Access E-Resources</CardTitle>
          <CardDescription>Step-by-step guide for accessing digital resources</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-2">
            {libraryData.eResources.accessInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

