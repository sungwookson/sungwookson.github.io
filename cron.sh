#!/bin/bash

echo "*/1 * * * * /bin/sh -c 'cd /srv/jekyll && git pull'" >> /var/spool/cron/crontabs/root
crond 
