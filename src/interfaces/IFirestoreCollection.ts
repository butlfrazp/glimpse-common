import {firestore} from "firebase-admin";
import {PrivacyStatus} from "./PrivacyStatus";
import {IFirestoreUser} from "./IFirestoreUser";

export interface IFirestoreCollection {
  userId: string
  user: IFirestoreUser
  title: string
  privacyStatus: PrivacyStatus
  contributorUserIds: string[]
  feedUserIds: string[]
  blobUris: string[]
  savedUserIds: string[]
  createTime: firestore.FieldValue
}
