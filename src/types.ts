export interface IChatList  {
    chatId: number;
    title: string;
    image: string;
    click?: () => void
}

export interface IMsgList {
    author: number;
    message: string
}

export interface IUser {
    id: number
    avatar: string
    name: string
}