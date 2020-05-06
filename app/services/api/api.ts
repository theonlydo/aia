import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { GET } from "../../constants/urls"
import { ImageSnapshot } from "../../models/image"

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }
  

  /**
   * Get feed list
   */
  async getFeed(tag = null): Promise<Types.FeedResult> {
    // make the api call
    var data = {
      tags: tag,
      format: 'json',
      nojsoncallback: 1
    }

    const response: ApiResponse<any> = await this.apisauce.get(GET.FEED, data)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const convertedData: ImageSnapshot[] = response.data.items
      return { kind: "ok", data: convertedData }
    } catch {
      return { kind: "bad-data" }
    }
  }

}
