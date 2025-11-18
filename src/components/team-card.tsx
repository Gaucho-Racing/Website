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
  website,
}: {
  name: string;
  title: string;
  titleColor: string;
  image?: string;
  website?: string;
}) => {
  return (
    <a
      href={website || ""}
      target="_blank"
      className="cursor-pointer transition-transform duration-200 hover:scale-105"
    >
      <Card className="m-4 flex w-64 flex-col items-center justify-between">
        <CardHeader className="ml-8 mr-8 items-center">
          <div className="mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-300 md:h-40 md:w-40 lg:h-44 lg:w-44">
            <img
              src={image || "team/lead-images/placeholder-profile.png"}
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
    </a>
  );
};

export default TeamCard;
