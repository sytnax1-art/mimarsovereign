FROM ubuntu:24.04

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential g++ cmake python3 git ca-certificates wget \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
COPY src/main.cpp src/
COPY include/ include/

RUN g++ -O3 -std=gnu++20 -mavx512f -Iinclude src/main.cpp -o /workspace/sovereign-v19 -pthread || \
    g++ -O3 -std=gnu++20 -Iinclude src/main.cpp -o /workspace/sovereign-v19 -pthread

CMD ["/workspace/sovereign-v19"]
