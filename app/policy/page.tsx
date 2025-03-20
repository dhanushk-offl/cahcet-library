import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { libraryData } from "@/data/library-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PolicyPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Library Policy</h1>
        <p className="text-muted-foreground">Our vision, mission, and policies for library operations</p>
      </div>

      <Tabs defaultValue="vision">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
        </TabsList>

        <TabsContent value="vision" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{libraryData.policy.vision}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{libraryData.policy.mission}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
              <CardDescription>The principles that guide our library services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {libraryData.policy.coreValues.map((value, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <h3 className="font-medium">{value.name}</h3>
                    <p className="mt-2 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="mt-6">
          <div className="space-y-6">
            {libraryData.policy.policies.map((policy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{policy.title}</CardTitle>
                  <CardDescription>{policy.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {policy.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-lg font-medium">{section.heading}</h3>
                        <p className="mt-2">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Strategic Plan</CardTitle>
          <CardDescription>Our roadmap for library development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {libraryData.policy.strategicPlan.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium">{item.year}</h3>
                <div className="mt-2 space-y-2">
                  {item.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className="rounded-md border p-4">
                      <h4 className="font-medium">{goal.title}</h4>
                      <p className="mt-2 text-sm">{goal.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

