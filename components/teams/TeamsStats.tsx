import { ListChecksIcon, PieChart, StarIcon, UsersIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import cm from "@/public/images/cm.jpg";
import tf from "@/public/images/tf.jpg";
import rl from "@/public/images/rl.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Image from "next/image";
import TeamDistributionChart from "./TeamDistributionChart";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName}`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {`${teamLeader.firstName} ${teamLeader.lastName}`}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team distribution</span>
              <PieChart />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">line grap</CardContent>
      </Card>
    </>
  );
}
export default TeamsStats;
