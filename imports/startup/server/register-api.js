// This defines all the collections, publications and methods that the 
// application provides as an API to the client.

import "../../api/tweets/server/publications.js";

// register in server and import them into each ui componenet that needs them
import "../../api/stripe/methods.js";

// business logic
import charge from '../../api/stripe/server/charge';