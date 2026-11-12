# HTTP Observer

This is a safe, non-vulnerable Level 0 exercise. It starts a tiny HTTP server on `127.0.0.1` so you can observe a request and its response on your own computer.

## Run

From the repository root, open a terminal and run:

```powershell
Set-Location .\labs\level00-http-observer
node .\server.js
```

Keep that terminal open. In a second terminal, send a request:

```powershell
curl.exe -i "http://127.0.0.1:3000/hello?name=toi"
```

Observe the request method and path in the server terminal. In the second terminal, inspect the HTTP status, response headers, and body. Stop the server with `Ctrl+C`.

The server is deliberately bound to `127.0.0.1`; do not change it to `0.0.0.0`.
