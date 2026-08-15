#!/bin/bash
set -euo pipefail

CXX=${CXX:-}
if [[ -z "$CXX" ]]; then
  for candidate in g++ clang++; do
    if command -v "$candidate" >/dev/null 2>&1; then
      CXX="$candidate"
      break
    fi
  done
fi

if [[ -z "$CXX" ]]; then
  echo "Error: no C++ compiler found. Set CXX to a valid compiler (g++/clang++) or install one." >&2
  exit 127
fi

mkdir -p build

if "$CXX" -O3 -std=gnu++20 -mavx512f -Iinclude src/main.cpp -o build/sovereign-v19 -pthread 2>/dev/null; then
  echo "Built: build/sovereign-v19"
  exit 0
fi

"$CXX" -O3 -std=gnu++20 -Iinclude src/main.cpp -o build/sovereign-v19 -pthread

echo "Built: build/sovereign-v19"
