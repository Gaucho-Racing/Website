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
  zoom = 1.15,
}: {
  name: string;
  title: string;
  titleColor: string;
  image?: string;
  website?: string;
  zoom?: number;
}) => {
  return (
    <a
      href={website || ""}
      target="_blank"
      className="cursor-pointer transition-transform duration-200 hover:scale-105"
    >
      <Card className="m-4 flex w-64 flex-col justify-between overflow-hidden">
        <div className="aspect-[3/4] w-full overflow-hidden bg-gray-300">
          <img
            src={image || "/team/lead-images/27/placeholder-profile.png"}
            alt={`${name}'s picture`}
            className="h-full w-full object-cover object-center"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>
        <CardHeader className="items-center px-4 pb-2 pt-4">
          <CardTitle className="text-center leading-tight">
            <h2 className="flex min-h-[2lh] items-center justify-center text-lg leading-tight md:text-xl lg:text-2xl">
              {name}
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
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
