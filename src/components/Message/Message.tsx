import { MessageData, Author } from "../types";

type MessageProps = {
  from: Author;
  message: MessageData;
};
export const Message: React.FC<MessageProps> = ({ from, message }) => {
  return (
    <li>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};
