import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const GameScoreViewer = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} borderRadius={5} paddingX={2} fontSize="14px">
      {score}
    </Badge>
  );
};

export default GameScoreViewer;
