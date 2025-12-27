#!/bin/sh
# Generate env.js dynamically from container environment
echo "window.__ENV__ = { BASE_URL: '${BASE_URL}' };" > /usr/share/nginx/html/env.js

# Execute the CMD from Dockerfile (start nginx)
exec "$@"