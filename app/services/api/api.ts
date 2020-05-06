import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { GET } from "../../constants/urls"

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
  async getFeed(tag = null): Promise<Types.GetUsersResult> {
    // make the api call
    var data = {
      tag: tag,
      format: 'json'
    }

    const response: ApiResponse<any> = await this.apisauce.get(GET.FEED, data)
    console.log(response.data)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }


    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data
      return { kind: "ok", users: rawUsers }
    } catch {
      return { kind: "bad-data" }
    }
  }

}
