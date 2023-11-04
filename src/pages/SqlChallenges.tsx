import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Tag from '@/components/ui/tag'
import createChallenges from '@/challenges/createChallenges'
import selectChallenges from '@/challenges/selectChallenges'
import updateChallenges from '@/challenges/updateChallenges'
import deleteChallenges from '@/challenges/deleteChallenges'
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import { useNavigate } from '@tanstack/react-router'

const tabChallengesMap = {
  Create: createChallenges,
  Retrieve: selectChallenges,
  Update: updateChallenges,
  Delete: deleteChallenges
}

const tabChallengePathMap = {
  Create: '/create-challenge',
  Retrieve: '/select-challenge',
  Update: '/update-challenge',
  Delete: '/delete-challenge'
}

function SqlChallenges() {
  const navigate = useNavigate()
  const jumpToChallenge = (path: string, challengeId: string) => {
    navigate({
      to: `${path}/$challengeId`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      params: { challengeId }
    })
  }
  return (
    <div className="my-4 ml-4 flex p-2">
      <div className="w-full ">
        <Tabs defaultValue="Retrieve" className="w-full">
          <TabsList>
            {Object.keys(tabChallengesMap).map(tab => (
              <TabsTrigger value={tab} key={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(tabChallengesMap).map(([tab, challenges]) => (
            <TabsContent value={tab} key={tab}>
              <Card className="w-full rounded-md border border-gray-300 p-2">
                <CardHeader>
                  <div className="flex justify-between">
                    <div className="text-lg font-bold">{tab}</div>
                  </div>
                </CardHeader>
                <ScrollArea style={{ height: 'calc(100vh - 350px)' }}>
                  <CardContent className="flex flex-wrap gap-4 p-2">
                    {challenges.map((challenge, index) => (
                      <div
                        className="flex w-full items-center justify-between gap-5 p-4"
                        key={index}
                      >
                        <div className="challenge-left flex items-center">
                          <div className="star-show flex w-16 gap-1">
                            {challenge.difficulty ? (
                              Array(challenge.difficulty)
                                .fill(1)
                                .map((_, index) => (
                                  <AiFillStar
                                    key={index}
                                    className="text-yellow-500"
                                  />
                                ))
                            ) : (
                              <BsStarHalf className="text-yellow-500" />
                            )}
                          </div>
                          <div className="text-lg font-bold">
                            {challenge.title}
                          </div>
                          <div className="ml-4 text-lg font-bold">
                            {challenge.tags?.map((tag, index) => (
                              <Tag
                                key={index}
                                size="medium"
                                textColor="text-gray-800"
                                backgroundColor="bg-gray-100"
                                className="mr-2"
                              >
                                {tag}
                              </Tag>
                            ))}
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          className="h-8 rounded-md px-3"
                          onClick={() =>
                            jumpToChallenge(
                              tabChallengePathMap[
                                tab as keyof typeof tabChallengePathMap
                              ],
                              challenge.id
                            )
                          }
                        >
                          挑战
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </ScrollArea>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="flex-1 "></div>
    </div>
  )
}
export default SqlChallenges
