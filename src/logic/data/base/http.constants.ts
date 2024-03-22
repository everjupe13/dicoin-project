import { HttpStatusCode } from 'axios'

/**
 * List of Http Status Codes. In the key-value format,
 * where the key is a human-readable description of a set of codes related to one state
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export const HTTP_STATUS_CODES = {
  INFORMATIONAL_RESPONSES: [
    HttpStatusCode.Continue,
    HttpStatusCode.SwitchingProtocols,
    HttpStatusCode.Processing,
    HttpStatusCode.EarlyHints
  ],
  SUCCESSFUL_RESPONSES: [
    HttpStatusCode.Ok,
    HttpStatusCode.Created,
    HttpStatusCode.Accepted,
    HttpStatusCode.NonAuthoritativeInformation,
    HttpStatusCode.NoContent,
    HttpStatusCode.ResetContent,
    HttpStatusCode.PartialContent,
    HttpStatusCode.MultiStatus,
    HttpStatusCode.AlreadyReported,
    HttpStatusCode.ImUsed
  ],
  REDIRECTION_MESSAGES: [
    HttpStatusCode.MultipleChoices,
    HttpStatusCode.MovedPermanently,
    HttpStatusCode.Found,
    HttpStatusCode.SeeOther,
    HttpStatusCode.NotModified,
    HttpStatusCode.TemporaryRedirect,
    HttpStatusCode.PermanentRedirect
  ],
  CLIENT_ERROR_RESPONSES: [
    HttpStatusCode.BadRequest,
    HttpStatusCode.Unauthorized,
    HttpStatusCode.Forbidden,
    HttpStatusCode.NotFound,
    HttpStatusCode.MethodNotAllowed,
    HttpStatusCode.NotAcceptable,
    HttpStatusCode.ProxyAuthenticationRequired,
    HttpStatusCode.RequestTimeout,
    HttpStatusCode.Conflict,
    HttpStatusCode.Gone,
    HttpStatusCode.LengthRequired,
    HttpStatusCode.PreconditionFailed,
    HttpStatusCode.PayloadTooLarge,
    HttpStatusCode.UriTooLong,
    HttpStatusCode.UnsupportedMediaType,
    HttpStatusCode.RangeNotSatisfiable,
    HttpStatusCode.ExpectationFailed,
    HttpStatusCode.ImATeapot,
    HttpStatusCode.MisdirectedRequest,
    HttpStatusCode.UnprocessableEntity,
    HttpStatusCode.Locked,
    HttpStatusCode.FailedDependency,
    HttpStatusCode.TooEarly,
    HttpStatusCode.UpgradeRequired,
    HttpStatusCode.PreconditionRequired,
    HttpStatusCode.TooManyRequests,
    HttpStatusCode.RequestHeaderFieldsTooLarge,
    HttpStatusCode.UnavailableForLegalReasons
  ],
  SERVER_ERROR_RESPONSES: [
    HttpStatusCode.InternalServerError,
    HttpStatusCode.NotImplemented,
    HttpStatusCode.BadGateway,
    HttpStatusCode.ServiceUnavailable,
    HttpStatusCode.GatewayTimeout,
    HttpStatusCode.HttpVersionNotSupported,
    HttpStatusCode.VariantAlsoNegotiates,
    HttpStatusCode.InsufficientStorage,
    HttpStatusCode.LoopDetected,
    HttpStatusCode.NotExtended,
    HttpStatusCode.NetworkAuthenticationRequired
  ]
}

export const HTTP_SATISFIED_STATUS_CODES = [
  ...HTTP_STATUS_CODES.SUCCESSFUL_RESPONSES
]
