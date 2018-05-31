import warning from "warning";
import Zendesk from "./zendesk";

export default function createClient(options) {
  warning(
    options.token,
    "A valid token is required: createClient({token: xxxxxx})"
  );

  warning(
    options.url,
    'A valid url is required: createClient({url: "https://[yoursubdomain].zendesk.com"})'
  );

  return new Zendesk(options);
}
