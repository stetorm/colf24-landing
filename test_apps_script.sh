#!/usr/bin/env bash

# Carica variabili da .env (se presente)
if [ -f ".env" ]; then
  set -o allexport
  source .env
  set +o allexport
fi

if [ -z "$VITE_APPS_SCRIPT_URL" ]; then
  echo "ERRORE: VITE_APPS_SCRIPT_URL non impostata" >&2
  exit 1
fi

curl -L -X POST "$VITE_APPS_SCRIPT_URL" \
  --data-urlencode "email=test@test.it" \
  --data-urlencode "source=curl-test" \
  -w "\n\nHTTP Status: %{http_code}\n"
