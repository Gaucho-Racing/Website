import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TeamCard = ({
  name,
  title,
  titleColor,
  image,
}: {
  name: string;
  title: string;
  titleColor: string;
  image?: string;
}) => {
  return (
    <Card className="m-4 flex w-64 flex-col items-center">
      <CardHeader className="ml-8 mr-8 items-center">
        <div className="mb-4 h-32 w-32 rounded-full bg-gray-300 md:h-40 md:w-40 lg:h-44 lg:w-44">
          <img
            src={image || "/lead-images/placeholder-profile.png"}
            alt={`${name}'s picture`}
            className="h-full w-full object-cover"
          />
        </div>
        <CardTitle className="text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl">{name}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={`text-center ${titleColor} text-sm md:text-base lg:text-lg`}
        >
          {title}
        </p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
