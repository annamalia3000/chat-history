import { Message } from "../Message/Message";
import { Response } from "../Response/Response";
import { Typing } from "../Typing/Typing";
import { MessageData } from "../types";

type MessageHistoryProps = {
  list?: MessageData[];
};

export const MessageHistory: React.FC<MessageHistoryProps> = ({
  list = [],
}) => {
  if (!list.length) {
    return null;
  }

  return (
    <ul>
      {list.map((message) => {
        const { id, from, type } = message;

        switch (type) {
          case "message":
            return <Message key={id} from={from} message={message} />;
          case "response":
            return <Response key={id} from={from} message={message} />;
          case "typing":
            return <Typing key={id} from={from} message={message} />;
          default:
            return null;
        }
      })}
    </ul>
  );
};
