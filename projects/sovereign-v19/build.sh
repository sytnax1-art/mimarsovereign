#!/bin/bash
set -euo pipefail

# Build locally (requires g++)
mkdir -p build
g++ -O3 -std=gnu++20 -mavx512f -Iinclude src/main.cpp -o build/sovereign-v19 -pthread || \
    g++ -O3 -std=gnu++20 -Iinclude src/main.cpp -o build/sovereign-v19 -pthread

echo "Built: build/sovereign-v19"
