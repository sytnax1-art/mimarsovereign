// Minimal stub of numaif.h for containerized build (non-NUMA fallback)
#ifndef STUB_NUMAIF_H
#define STUB_NUMAIF_H

#include <stddef.h>
#include <stdint.h>

// Define constants used in source
#ifndef MPOL_BIND
#define MPOL_BIND 2
#endif
#ifndef MPOL_MF_STRICT
#define MPOL_MF_STRICT 1
#endif

static inline int mbind(void* addr, size_t len, int mode, const unsigned long* nodemask, unsigned long maxnode, unsigned flags) {
    // No NUMA support in the stub environment — return success
    (void)addr; (void)len; (void)mode; (void)nodemask; (void)maxnode; (void)flags;
    return 0;
}

#endif // STUB_NUMAIF_H
