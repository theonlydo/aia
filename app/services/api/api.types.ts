import { GeneralApiProblem } from "./api-problem"
import { ImageSnapshot } from "../../models/image"

export type FeedResult = { kind: "ok"; data: ImageSnapshot[] } | GeneralApiProblem