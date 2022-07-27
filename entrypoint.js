// import { serve } from "https://deno.land/std@0.147.0/http/server.ts";
// import { serveDir } from "https://deno.land/std@0.147.0/http/file_server.ts";

import { serve } from "@hakke/rpc/server.ts";
import { serveDir } from "std/http/file_server.ts";
serve((req) => serveDir(req));
