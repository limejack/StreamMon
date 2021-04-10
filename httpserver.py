import http.server
import socketserver
from os import path
import json
class handle(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
            self.close_connection = True
            self.send_response(200)
            self.send_header("Content-type", "text")
            self.send_header("Access-Control-Allow-Origin","*")
            self.end_headers()
            if self.path == '/':
                self.wfile.write(open('index.html','rb').read())
            else:
                self.wfile.write(open('.'+self.path,'rb').read())

    def do_Z(self):
        self.send_response(200)
        self.send_header("Content-type","text")
        self.end_headers()
        self.wfile.write(b'worked')

    def do_POST(self):
        self.close_connection = True
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin","*")
        self.end_headers()
        toFormat = json.loads(self.rfile.read(int(self.headers.get("Content-Length"))).decode("UTF-8"))
        requestFile = json.loads(open('.'+self.path).read())
        requestFile.append(toFormat)
        open('.'+self.path,'w').write(json.dumps(requestFile))
        self.wfile.write(open('.'+self.path,'rb').read())


PORT = 7500

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("", PORT), handle)
print("serving at port", PORT)
httpd.serve_forever()
