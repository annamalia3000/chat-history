import { MessageData, Author } from "../types";

type ResponseProps = {
  from: Author;
  message: MessageData;
};
export const Response: React.FC<ResponseProps> = ({ from, message }) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  );
};
