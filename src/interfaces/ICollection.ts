import {firestore} from "firebase-admin";
import {IUser} from "./IUser";

export interface ICollection {
  id: string
  user: IUser
  title: string
  blobUris: string[]
  createTime: firestore.FieldValue
  isSaved: boolean
}
