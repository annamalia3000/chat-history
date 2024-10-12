import { MessageData, Author } from "../types";

type TypingProps = {
  from: Author;
  message: MessageData;
};
export const Typing: React.FC<TypingProps> = ({ from, message }) => {
  return (
    <li>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="typing">
        <span className="typing-circle-first">
          <i className="fa fa-circle"></i>
        </span>
        <span className="typing-circle-second">
          <i className="fa fa-circle"></i>
        </span>
        <span className="typing-circle-third">
          <i className="fa fa-circle"></i>
        </span>
      </div>
    </li>
  );
};
