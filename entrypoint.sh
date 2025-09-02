#!/bin/bash
set -e

# Set defaults for OBS.ninja configuration
OBS_NINJA_ROOM=${OBS_NINJA_ROOM:-"ASQ"}
OBS_NINJA_PASSWORD=${OBS_NINJA_PASSWORD:-"DefaultPassword"}

echo "Configuring OBS.ninja with room: ${OBS_NINJA_ROOM}"

# Process ninja.js template if it exists
if [ -f "/usr/local/nginx/html/ninja.js.template" ]; then
    echo "Processing ninja.js template..."
    envsubst '${OBS_NINJA_ROOM} ${OBS_NINJA_PASSWORD}' < /usr/local/nginx/html/ninja.js.template > /usr/local/nginx/html/ninja.js
    echo "Generated ninja.js with environment variables"
fi

# Start nginx in foreground
exec nginx -g "daemon off;"