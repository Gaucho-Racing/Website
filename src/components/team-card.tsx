import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TeamCard = ({ name, title, titleColor }) => {
  return (
    <Card className="m-4 flex flex-1 flex-col items-center">
      <CardHeader className="ml-8 mr-8 items-center">
        <div className="mb-4 h-40 w-40 rounded-full bg-gray-300"></div>
        <CardTitle className="text-center">
          <h2>{name}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-center ${titleColor}`}>{title}</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
