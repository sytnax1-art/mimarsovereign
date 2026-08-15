// Minimal stub for lz4 header to satisfy includes in the source
#ifndef STUB_LZ4_H
#define STUB_LZ4_H

#include <stddef.h>

static inline int LZ4_compress_default(const char* src, char* dst, int srcSize, int dstCapacity) {
    (void)src; (void)dst; (void)srcSize; (void)dstCapacity; return 0;
}

static inline int LZ4_decompress_safe(const char* src, char* dst, int compressedSize, int dstCapacity) {
    (void)src; (void)dst; (void)compressedSize; (void)dstCapacity; return 0;
}

#endif // STUB_LZ4_H
