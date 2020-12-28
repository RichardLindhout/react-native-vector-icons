#!/bin/bash -e

rm -rf {Fonts,MaterialCommunityIcons.js,glyphmaps}
mkdir Fonts glyphmaps
./scripts/materialcommunityicons.sh
