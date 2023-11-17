# The Swim Meet Results Archive
This project started out as a means of me collecting and archiving swim meet results for my daughter. It has since evolved into me making a complete archive, for as far back in time as I can manage, of all of the results for the league(s) she swims in. I have some additional plans as well, but we'll see how that goes.

For now, I am archiving the data for the teams I am personally involved with and sharing them here for posterity.

## Initial Goals
 - [ ] Present a complete online archive of swim meet results for the [Perkiomen Valley Aquatic Club](https://pvaquatic.com), including USA meets.
 - [ ] Present a complete online archive of swim meet results for the [Suburban Aquatic League](https://suburbanaquatic.org).
   - [ ] Notate changes in division, teams, etc. year over year.
   - [ ] Provide interesting links to the team website as they were during the year of the season?
 - [ ] Present a complete online archive of swim meet results for the [Tri-County Swim League](https://tricountyswim.net).
 - [ ] Fully functional without any javascript
 - [ ] Additional JS based features
   - [ ] Scroll back to top button
   - [ ] Filter / Highlight Season by Team
   - [ ] Theme Switcher?
 - [ ] Contact form

## Future Plans
 - Parse the results files and maintain an actual database with the information contained within to provide a:
   - Fully searchable, sortable archive of meet results
   - Provide a way to view a swimmers progress over time, or view a particular swimmers history
   - Pave the way for a future app or platform to allow for analytics
 - Potentially expand upon the idea to create an app (web, mobile native, or both) where anyone can add meet results for anyone and track their or their kids progress throughout their swimming career.
   - This could be an almost "social network" for swimmers but is also probably far beyond my skillset and motivation

## Credits and Shout Outs

Without the below this project would not be possible:

### On the swim side
 - The [Perkiomen Valley Aquatic Club](https://pvaquatic.com) for getting me involved in the first place.
 - The [Suburban Aquatic League](https://suburbanaquatic.org) and the many people who have helped run that organization over the years.
 - The [Tri-County Swim League](https://tricountyswim.net) for the same reason as above.
 - [USA Swimming](https://www.usaswimming.org/) and the [Middle Atlantic LSC ](https://maswim.org).

### This project was built with
 - [11ty](https://www.11ty.dev) - For Static Site Generation
 - [Nunjucks](https://mozilla.github.io/nunjucks/) - For Templating
 - [Markdown-it](https://markdown-it.github.io/) - For more advanced markdown processing, plus a number of plugins
 - [Tailwind CSS](https://tailwindcss.com/) - For CSS
 - [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) - For Typography
 - [Daisy UI](https://daisyui.com) - For UI Elements
 - [Alpine.js](https://alpinejs.dev/) - For JavaScript interactivity
 - [ESbuild](https://esbuild.github.io/) - For JS building and bundling
 - [Aesthetic](https://æsthetic.dev/) - For cleaning up the outputted html after nunjucks messes it all up
 - [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent) - For much inspiration