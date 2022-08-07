export interface Article {
  articleDescription: string;
  articleAuthor: string;
  articleName: string;
  category: string;
  creationDate: string;
  _id: string;
}

export interface Signup {
  email: string;
  username: string;
  password: string;
  phone: string;
}

export interface Login {
  email: string;
  password: string;
}
