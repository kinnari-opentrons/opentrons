#!/bin/bash

export DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket

echo "[BOOT] Starting server"
cd /usr/src/api
python /usr/src/api/opentrons/server/main.py '0.0.0.0':31950 &

echo "[BOOT] Starting DHCP server"
. /usr/src/compute/scripts/dhcp_server_init.sh

echo "[BOOT] Advertising local service"
python /usr/src/compute/scripts/announce_mdns.py