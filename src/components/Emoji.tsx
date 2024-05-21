import bullsEye from "../assets/Emojis/bulls-eye.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";
import meh from "../assets/Emojis/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "reccomended", boxSize: "25px" },
    5: { src: bullsEye, alt: "acceptional", boxSize: "35px" }
  };
  return (
    <>
      <Image marginTop={1} {...emojiMap[rating]} />
    </>
  );
};

export default Emoji;
