import {firestore} from "firebase-admin";
import {IFirestoreUser} from "./IFirestoreUser";
import {PrivacyStatus} from "./PrivacyStatus";

export interface IFirestorePost {
  userId: string
  user: IFirestoreUser
  title: string
  description: string
  privacyStatus: PrivacyStatus
  linkedCollectionId: string | undefined
  feedUserIds: string[]
  blobUris: string[]
  savedUserIds: string[]
  createTime: firestore.FieldValue
}
