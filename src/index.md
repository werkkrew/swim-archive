---
layout: page
title: Home
tags: page
eleventyNavigation:
  key: Home
  order: 1
---
{% set salSeason = collections.salSeasons | last %}
{% set usaSeason = collections.usaSeasons | last %}
{% set tcsSeason = collections.tcsSeasons | last %}

{% set leagues = collections.league %}

# Results Archive

Welcome to the PVAC (and Skippack!) swim meet results archive! Below you will find a short listing of the most current season results I have in the archive for each [league](/league) I am tracking. To learn more visit the [about](/about) or [FAQ](/FAQ) pages.

## Current Seasons
{% for league in leagues %}

  {% set season = collections.all | eleventyNavigation(league.data.league) | last %}

  ### [{{ league.data.name }}]({{ league.url }}){.link .link-hover}

  [{{ season.key }}]({{ season.url }}){.btn .btn-wide .btn-outline}

{% endfor %}