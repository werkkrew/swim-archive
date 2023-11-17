---
layout: page
title: Leagues
tags: page
eleventyNavigation:
  key: Leagues
  order: 2
---

# League Listing

{% for league in collections.league %}
  ## [{{ league.data.name }}]({{ league.url }}){.link .link-hover}

  #### [Homepage]({{ league.data.homepage }})

  {{ league.data.description }}
{% endfor %}