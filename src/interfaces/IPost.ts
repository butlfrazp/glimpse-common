import {firestore} from "firebase-admin";
import {IUser} from "./IUser";

export interface IPost {
  id: string
  user: IUser
  title: string
  description: string
  linkedCollectionId: string | undefined
  blobUris: string[]
  createTime: firestore.FieldValue
  isSaved: boolean
}
