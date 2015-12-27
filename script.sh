#!/bin/bash
fio cat ~/data/natearth/10m_cultural/ne_10m_admin_0_countries.shp \
    | rio zonalstats --sequence --all-touched --prefix srtm_ -r ~/data/srtm/srtm_med.tif
