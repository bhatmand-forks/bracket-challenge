# PlayVS Take Home Challenge - Front End Challenge - DOTA 2 ELO Rankings

## Setup

This is a front end challenge based on using the (DOTA 2 open api)[https://docs.opendota.com/]. It is meant to gauge your comfort level with Javscript, React, and HTML/CSS. The challenge should be timeboxed to a couple of hours and should be returned within 24 hours of receiving the challenge. We are not looking for perfection, but a base level of how you approach problems on the frontend. There is no absolute right way to do this challenge, so feel free to adjust and add approaches that you are comfortable with. If you finish the base level task quickly, we would love to see where you would take the project in terms of additional features or user experience!

We recommend starting and submitting your project using one of two methods:

- Start a project clone from (create-react-app)[https://github.com/facebook/create-react-app]. Please send the project back via email as a zipped folder or a downloadable
  link.
- Go to https://codesandbox.io/s/ and choose a React template. You can then reply with an email with a link to your code sandbox.

## Create a competitive bracket

Tournament brackets are at the core of our eSport state championships. The goal of this project is to create a tournament bracket for DOTA 2 teams in React. You can call the DOTA open api using any fetching method/library you want. These are the following requirements:

    Base Requirements:
    -Retrive and display the top 16 DOTA teams based on ELO score (or another metric if you desire). These teams will be your 1st to 16th seeds.
    -Display a tournament bracket where the first match for every team is against the appropriate seed (1st seed vs. 16th seed, 2nd seed vs. 15th, etc.)
    -You should be able to preview team information when hovering/clicking on a team entity. Team information should include the name of the team members (this may mean hitting another API endpoint to get this information).
    -You can determine a winner for a matchup and move them to the next round.

Again, there is no right way or look to this bracket, feel free to reference any available brackets (ESPN, yahoo, etc.) or if you want, from scratch. You can use templates, component libraries, etc. if you'd like.

Here are some suggested bonus features you can pick and choose from if you have additional time:

    Some suggested bonus features:
    -Automatically simulate winners for each round and crown a champion
    -Add an odd number where some teams get a BYE
    -Add divisions or regions with more teams
    -Add interesting animations or styling
    -Anything fun you can think of!

## References:

1. Visit the DOTA open API: https://docs.opendota.com/. Look through the various endpoints and then look at the team endponts: https://docs.opendota.com/#tag/teams.

2. We recommend hitting this api endpoint for promatches info:
   https://api.opendota.com/api/teams

## Be flexible and creative!

If you are not sure how to approach something, make your best assumption and be flexible and creative. We hope that this challenge will be fun for you, and we're excited to see what you cook up!
