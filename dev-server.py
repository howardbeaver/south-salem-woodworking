#!/usr/bin/env python3
"""Local development server for Salem Woodworking.

Serves this folder at http://localhost:8080 and sends Cache-Control: no-cache,
so edits show on a plain reload. Development only; it isn't deployed.

    python3 dev-server.py
"""

import functools
import http.server
import os

PORT = 8080
ROOT = os.path.dirname(os.path.abspath(__file__))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


def main():
    handler = functools.partial(NoCacheHandler, directory=ROOT)
    with http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler) as server:
        print(f"Serving {ROOT} at http://localhost:{PORT} (Ctrl+C to stop)")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")


if __name__ == "__main__":
    main()
