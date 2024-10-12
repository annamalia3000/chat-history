export type MessageData = {
  id: string;
  from: Author;
  type: "response" | "message" | "typing";
  time: string;
  text?: string;
};

export type Author = {
  name: string;
};
