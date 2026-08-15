// Minimal stub of cpp-httplib (only to satisfy includes). Not a real HTTP server.
#ifndef STUB_HTTPLIB_H
#define STUB_HTTPLIB_H

#include <string>

namespace httplib {
    class Server {
    public:
        Server() {}
        bool listen(const char* host, int port) { (void)host; (void)port; return true; }
        void stop() {}
    };
}

#endif // STUB_HTTPLIB_H
