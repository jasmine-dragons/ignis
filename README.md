# ignis

## Background
In recognition of National Fire Prevention Week wrapping up, my team decided to tackle the theme of environmental sustainability with a project dealing with 

## What is ignis?
Latin for 'fire', ignis is a platform to prepare communities for wildfires to reduce the damage and impact of these natural disasters.  As a team from California, one of the states that historically suffers the most from wildfires every Autumn, we have seen firsthand the havoc that wildfires can wreck, on both rural and urban communities alike. In fact, wildfires accounted for over **$11.2 billion** in damage across the United States<sup>([1](https://www.bankrate.com/insurance/homeowners-insurance/wildfire-statistics/))</sup>.

## Here's How It Works
For our project, we utilized an interactive map interface to provide visualizations of curated wildfire information that we generated for each county in the United States. Fetching from our back-end and external APIs, we are able to display live and historical statistics of relevant weather information along with future machine-learning based predictions and tips to prepare communities in advance.

## How we built **ingis**
**ignis** was built by a mix of experienced hackers and first-time hackers in UI/UX design and full stack developer roles. It was built using a modern full-stack of cutting edge real industry technologies.

### UI/UX Design

#### User Personas
![Screen Shot 2022-10-16 at 4 48 52 AM](https://user-images.githubusercontent.com/33165426/196033727-23efc7f5-64aa-436f-8ad2-0521b721625d.jpg)

#### Inspiration
![Screen Shot 2022-10-16 at 4 50 14 AM](https://user-images.githubusercontent.com/33165426/196033791-3d2fce58-7642-4771-a057-e15730b9d0ac.jpg)

#### Component Library
![Screen Shot 2022-10-16 at 4 51 29 AM](https://user-images.githubusercontent.com/33165426/196033842-230a4ab7-897f-4178-b1cf-07fc1edaebf9.jpg)
![Screen Shot 2022-10-16 at 4 51 53 AM](https://user-images.githubusercontent.com/33165426/196033856-aaee735c-be51-402f-ae05-a22a639b890a.jpg)
![Screen Shot 2022-10-16 at 4 54 33 AM](https://user-images.githubusercontent.com/33165426/196033997-25778987-54c6-42cc-8033-401b4dbdbb72.jpg)

#### Design System
![Screen Shot 2022-10-16 at 4 53 27 AM](https://user-images.githubusercontent.com/33165426/196033922-940a7394-ad1c-46c7-96c1-ff7754ebd2f9.jpg)

#### Lo-Fi Prototypes
![Screen Shot 2022-10-16 at 4 49 43 AM](https://user-images.githubusercontent.com/33165426/196033771-6808c4a2-1f13-4a37-bfb7-fc5c5550f4aa.jpg)

#### Hi-Fi Prototypes
![Screen Shot 2022-10-16 at 4 57 31 AM](https://user-images.githubusercontent.com/33165426/196034129-c9f6dfe8-e22d-44a0-a184-529ba376c526.jpg)
![Screen Shot 2022-10-16 at 4 58 10 AM](https://user-images.githubusercontent.com/33165426/196034152-0be11146-0c11-4a98-b356-ca28152ed46d.jpg)

### Engineering

![TechFlow](https://user-images.githubusercontent.com/44332326/196028742-6a405df6-1c64-4f02-94c5-9cc145e64477.png)
_Our tech flow._

#### **Frontend and Challenges**
The frontend was built in [React](https://reactjs.org/) with [Next.js](https://nextjs.org/) to offer faster loading times and enrich user interactions along with [TypeScript](https://www.typescriptlang.org/) to develop a maintainable and structured codebase. The map was built with [Mapbox](https://www.mapbox.com/), with various datasets overlayn on top of it. We also used [Sass](https://sass-lang.com/), HTML and CSS with [Material UI](https://mui.com/) to style and display the components of the frontend. The landing page was built using a parallax effect, by a team member who had never touched [React](https://reactjs.org/), [Next.js](https://nextjs.org/) or [Sass](https://sass-lang.com/) before.

*Landing Page*

![Screen Shot 2022-10-16 at 4 42 03 AM](https://user-images.githubusercontent.com/33165426/196033448-a318040d-1deb-4aeb-b11c-c0125c99f6c6.jpg)
![Screen Shot 2022-10-16 at 4 44 38 AM](https://user-images.githubusercontent.com/33165426/196033543-38f092b9-5bca-405f-a200-a983c34f298a.jpg)


*Map Visualizer*
![image](https://user-images.githubusercontent.com/44332326/196029009-f1bdaf84-bfea-4ec0-8d5f-38f9f580f6d7.png)
![Screen Shot 2022-10-16 at 4 17 09 AM](https://user-images.githubusercontent.com/33165426/196032249-9991b02a-17fe-4d7a-9c38-5a8bf5fd4da3.jpg)
![Screen Shot 2022-10-16 at 4 43 12 AM](https://user-images.githubusercontent.com/33165426/196033496-895d7a10-cc25-424f-bc27-f8bf63faab86.jpg)
![Screen Shot 2022-10-16 at 4 43 48 AM](https://user-images.githubusercontent.com/33165426/196033515-de183a80-286b-4f77-ae92-253b6c6cca6e.jpg)
![Screen Shot 2022-10-16 at 4 44 12 AM](https://user-images.githubusercontent.com/33165426/196033531-2e13ec89-ead7-4ef7-919d-6538233b9a80.jpg)



_Our map views._

The biggest challenge we faced was getting the various parts of the map to work together. At first, we used Typescript and Next.js to work with a modern front-end stack, not realizing that this wasn't supported by many of the libraries we were relying on. As the library lacked types and contained breaking changes in the latest major version, it was impossible for us to display it. We solved this issue by removing TypeScript and returning to JavaScript, along with downgrading many of the libraries to balance the dependency chain. As we still wanted to use TypeScript, we ended up using a mix of these two elements in our codebase, in order to write better quality and more maintainable code! Getting the different layers to work together and display on top of one another was also tricky, especially as we had to balance multiple fill and boundary overlays of county data and hover highlighting. Then, we had to make sure only the proper hovered county was highlighted, a task we completed with the use of the proper filter. Finally, we were able to customize a popup card with real streamed API data about the relevant county to render instantly in real-time to give the user an engaging experience.

![Tech Stack](https://user-images.githubusercontent.com/44332326/196028692-c6d4cd20-7687-48da-8a13-4f80e6c915ca.png)
_Our tech stack_

#### **Backend and Challenges**

Through our backend API and serverless edge functions, we utilized many external APIs from multiple software platforms to collect the data we needed for our application into simple and unified API routes that handle complex logic with API token authorization and parameters and mapping inconsistent formats to a streamlined geoJSON structure for our Mapbox overlays.

# Takeaways 

## Our most memorable accomplishments
In just a short two day hackathon, we were able to showcase the following features into our project.
- An immersive landing page experience
- Informative and captivating statistics
- Interactive map visualizations of the entire globe
- State and country highlightable selection
- Live data on population, air quality index, acreage, and predicted fire risk.
- Live location tracking of fires in given regions.

## Lessons and Growth
This hackathon was a great experience to use dozens of cutting-edge technologies on a powerful product and collaborate as a team in person!

For our two first-time hackers, they both worked on an incredible project for their portfolio while learning about the enthusiasm and hacking spirit. They had a chance to fully immerse themselves on this project, working tirelessly during the two days to achieve something truly special.

For our experienced hackers, they had a chance to provide mentorship to others who are just entering the field and work together to each contribute their unique skillset. They continuously challenge themselves to step out of their comfort zone with new technologies while writing high quality code to structure large-scale projects that have a real impact.

## What's next for ignis?
While we were ideating this project, we thought of countless ways to make this application more powerful for the users it served and continuously wanted to get more out of the project. Some of our future goals include
- Predictive calendars displaying wildfire data years into the future based on historical temperature and wildfire data along with recent trends on climate change.
- Heatmap overlays with timeline scrollbars to view temperatures across the globe during different times of the year.
- 3d visualizations of affected areas by wildfire including wind conditions.
