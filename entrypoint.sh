#!/bin/sh
cat <<EOF > /usr/share/nginx/html/env.js
window.__ENV__ = {
  BASE_URL: "${BASE_URL}"
};
EOF

exec "$@"