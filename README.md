
# sabog-poc

It stands for "SharedArrayBuffer On GitHub pages - Proof Of Concept". The basic idea is again to use a service worker to add the COOP/COEP headers, and regarding the very first visit of the users, we handle that as follows:

1. Detect first-visitors by checking whether `SharedArrayBuffer` is available.
2. Display an initializing message and a loader animation for first-visitors.
3. Once the service worker is ready, automatically reload the page.

Check out [demo](https://mutsuntsai.github.io/sabog-poc/).