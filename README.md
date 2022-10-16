# ignis

## Background
In recognition of National Fire Prevention Week, my team decided to tackle the theme of environmental sustainability with a platform to prepare communities for wildfires to reduce the damage and impact of these natural disasters.  As a team from California, one of the states that historically suffers the most from wildfires every Autumn, we have seen firsthand the havoc that wildfires can wreck, on both rural and urban communities alike. In fact, wildfires accounted for over **$11.2 billion** in damage across the United States<sup>([1](https://www.bankrate.com/insurance/homeowners-insurance/wildfire-statistics/))</sup>.

## What it does
For our project, we utilized an interactive map interface to provide visualizations of curated wildfire information that we generated for each county in the United States. Fetching from our back-end and external APIs, we are able to display live and historical statistics of relevant weather information along with future machine-learning based predictions and tips to prepare communities in advance.

## How we built **ingis**
**ignis** was built my a mix of experienced hackers and novice hackers in both designer and developer roles. It was built using a modern full-stack of cutting edge real industry technologies.

### Design

### Engineering

![TechFlow](https://user-images.githubusercontent.com/44332326/196028742-6a405df6-1c64-4f02-94c5-9cc145e64477.png)
_Our tech flow._

#### **Frontend and Challenges**
The frontend was built in [React](https://reactjs.org/) with [Next.js](https://nextjs.org/) to offer faster loading times and enrich user interactions along with [TypeScript](https://www.typescriptlang.org/) to develop a maintainable and structured codebase. The map was built with [Mapbox](https://www.mapbox.com/), with various datasets overlayn on top of it. We also used [Sass](https://sass-lang.com/), HTML and CSS with [Material UI](https://mui.com/) to style and display the components of the frontend. The landing page was built using a parallax effect, by a team member who had never touched [React](https://reactjs.org/), [Next.js](https://nextjs.org/) or [Sass](https://sass-lang.com/) before.

![image](https://user-images.githubusercontent.com/44332326/196029009-f1bdaf84-bfea-4ec0-8d5f-38f9f580f6d7.png)
![image](https://user-images.githubusercontent.com/44332326/196029020-4e7b5d1b-cad2-4a74-9e5a-254adb439c3c.png)
_Our map views._

The biggest challenge we faced was getting the various parts of the map to work together. At first, we used Typescript and Next.js, not realizing that this wasn't supported by the libraries. As the library had no types and didn't cooperate with the codebase, it was impossible for us to display it. We solved this issue by removing TypeScript and returning to JavaScript. As we still wanted to use TypeScript, we ended up using a mix of these two elements in our codebase, in order to write better quality and more maintainable code! Getting the different layers to work together and display on top of one another was also tricky, especially as we had to balance county data and highlighting. Then, we had to make sure only the proper hovered county was highlighted, a task we finally completed with the use of the proper filter. 

![Tech Stack](https://user-images.githubusercontent.com/44332326/196028692-c6d4cd20-7687-48da-8a13-4f80e6c915ca.png)
_Our tech stack_

#### **Backend and Challenges**

## Accomplishments that we're proud of

## What we learned


## What's next for ignis
There are a lot of features we want to add to **ignis**. 
