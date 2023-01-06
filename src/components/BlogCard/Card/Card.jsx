import CardDate from "./CardDate";
import CardMedia from "./CardMedia";
import CardText from "./CardText";

const Card = ({ className, postImage, title, category, date }) => {
  return (
    <div className={className}>
      <CardMedia
        postImage={postImage}
        className="border rounded-t-lg object-fill w-full max-h-[200px]"
      />
      <div className="p-5">
        <CardDate category={category} date={date} />
        <CardText title={title} className="w-full" />
      </div>
    </div>
  );
};

export default Card;
