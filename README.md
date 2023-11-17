Perspective
-----------

Welcome to the Global Gazette – your digital expanse for global discourse and diversity. We believe that the essence of community is rooted in the sharing of ideas, stories, and a multitude of perspectives. Our platform is more than just a place to read and write; it's a space where individuals from all corners of the globe can converge to inspire and be inspired, to learn, and to grow together.

The Global Gazette is committed to fostering a community where open and constructive conversations thrive. As a hub for content creators and consumers alike, we empower you to voice your thoughts, share your narratives, and connect with a like-minded audience on a global scale.

Our mission extends beyond mere communication; it is about building a foundation for stronger, more resilient global ties. It is about nurturing a place where memories are shared, where knowledge is exchanged, and where every voice can make an impact. Join us in our quest to keep the essence of community alive and vibrant, one story at a time.

![Global Gazette Responsive Design Screenshot]([https://i.ibb.co/8PstHPP/image.pn](https://github.com/FarehaSi/global-gazette-frontend/blob/master/screenshots/mockup.jpg?raw=true))

Explore our platform, share your moments, and rediscover the world through the eyes of its citizens. This is Global Gazette – Where every story matters, and every voice counts.

 ## Deployed Link

- [Front-End Deployed Link](https://ggazette-4831f7d29d09.herokuapp.com/)

## Back End Links
- [Back End Deployed Link](https://gg-backend-78d63a43777b.herokuapp.com/api/articles/)
- [Back End GitHub](https://gg-backend-78d63a43777b.herokuapp.com)

User Experience (UX)
--------------------

### Site Goals

The Global Gazette is dedicated to creating an engaging, informative, and inclusive platform for sharing and discussing global narratives. Our goals are to:

*   Encourage the sharing of diverse perspectives to foster global conversations.
*   Empower users to create and share content that resonates with them and others.
*   Connect people from around the world in meaningful discussions.
*   Offer a seamless and intuitive user experience for content discovery and interaction.
*   Promote knowledge sharing through tutorials, guides, and informative articles.

### Scope

With a clear vision for the Global Gazette, the scope of our UX design includes:

*   A responsive design that adapts to any device, enhancing accessibility for all users.
*   Intuitive navigation that guides users through the site with ease.
*   Efficient search and filtering options to quickly find relevant content.
*   User profiles that showcase individual contributions and foster community connections.

### Epics & User Stories

Our development is driven by epics and user stories that focus on delivering value to our users. They are outlined as follows:

#### Epic 1: User Authentication

*   As a user, I can sign up for an account so that I can personalize my experience and contribute to the site.
*   As a user, I can log in and log out securely to protect my personal information.

#### Epic 2: Content Creation and Interaction

*   As a contributor, I can create and edit my posts so that I can share my stories and knowledge.
*   As a reader, I can like and comment on posts that I find engaging.

#### Epic 3: Content Discovery and Exploration

*   As a user, I can filter content by categories so that I can easily find topics of interest.
*   As a user, I can search for specific content using keywords to quickly access desired information.

#### Epic 4: Profile Management

*   As a user, I can follow other contributors to keep up with their latest posts.
*   As a user, I can edit my profile to maintain my personal brand on the platform.

### Epics & User Stories
#### Epic 1: User Authentication and Navigation
This epic focuses on user authentication, ensuring that users can sign up, sign in, and maintain their logged-in status. It also addresses navigation by providing a consistent navbar across all pages and enabling quick page transitions through routing. Users can easily access authentication options and navigate throughout the platform seamlessly.
##### Related User Stories
- As a user, I can view a navbar from every page so that I can easily navigate between pages.
- As a user, I can navigate through pages quickly using routing so that I can view content seamlessly without page refresh.
- As a user, I can sign up for a new account so that I can access all the features for signed-up users.
- As a user, I can sign in to the app so that I can access functionality for logged-in users.
- As a user, I can check my logged-in status so that I can log in if needed.
- As a user, I can maintain my logged-in status with token refreshes so that my user experience is not compromised.
- As a logged-out user, I can see sign-in and sign-up options in the navigation bar for easy access.
#### Epic 2: Content Creation and Interaction
This epic is centered around content creation and user interaction with posts. Users, especially logged-in users, can create and share posts with images. They can also view the details of posts and express their support by liking them. It enhances the platform's core functionality of content sharing and engagement.
##### Related User Stories
- As a logged-in user, I can create posts with images to share my content with the world.
- As a user, I can view the details of a single post to learn more about it.
- As a logged-in user, I can like a post to show my support for content that interests me.
#### Epic 3: Content Discovery and Exploration
This epic is about helping users discover and explore content on the platform. Users can view the most recent posts, search for specific content using keywords, access their liked posts, and follow users to see their content. Infinite scroll ensures a smooth and continuous content browsing experience.
##### Related User Stories
- As a user, I can view the most recent posts, ordered by the most recently created first, to stay up-to-date with the newest content.
- As a user, I can search for posts using keywords to find specific content and user profiles.
- As a logged-in user, I can view posts I've liked for quick access to content I enjoy.
- As a logged-in user, I can view posts from followed users to keep up with their posts.
- As a user, I can scroll through content with infinite scroll, which loads more content automatically.
#### Epic 4: Post Interaction and Commenting
This epic focuses on interactions related to posts and comments. Users can view comments on posts, edit their own posts, and add comments to share their thoughts. It also includes features such as comment date display, comment deletion, and comment editing, enhancing the overall post interaction experience.
##### Related User Stories
- As a user, I can view the comments on a post to read what other users think about it.
- As a post owner, I can edit my post's title and description to make corrections or updates.
- As a logged-in user, I can add comments to a post to share my thoughts.
- As a user, I can see how long ago a comment was made to understand its recency.
- As a comment owner, I can delete my comment to control its removal.
- As a comment owner, I can edit my comment to make changes or updates.
#### Epic 5: User Profiles and Interaction
This epic revolves around user profiles and interactions between users. Users can view other users' profiles, discover popular profiles, see user statistics, follow/unfollow users to customize their content feed, view all posts by a specific user, and edit their own profiles. It ensures a rich user-to-user interaction experience on the platform.
##### Related User Stories
- As a user, I can view other users' profiles to see their posts and learn more about them.
- As a user, I can see a list of the most followed profiles to discover popular users.
- As a user, I can view user statistics, including bio, number of posts, follows, and followers.
- As a logged-in user, I can follow and unfollow other users to customize my posts feed.
- As a user, I can view all posts by a specific user to catch up on their latest content or decide to follow them.
- As a logged-in user, I can edit my profile, including changing my profile picture and bio.
- As a logged-in user, I can update my username and password for security and display name changes.
## Design - UI
The Global Gazette's overall design philosophy revolves around a clean, intuitive, and user-friendly interface. Readability and ease of navigation are prioritized to ensure that our readers can effortlessly access a world of global insights and stories. The design is aimed at creating a seamless and enjoyable browsing experience.
### Typography
Montserrat has been caefully selected as the primary font. Its modern and bold design complements the theme of the Global Gazette, while ensureing readability and an elegant, timeless feel.
### Color Palette
The color palette is based on a clean and sophisticated black-and-white scheme. Black font color exudes elegance and reliability, while the white background serves as a canvas, allowing our content to take center stage. This minimalist approach ensures that our platform remains visually appealing and user-focused.
#### Background (White)
A clean white background serves as a canvas, spotlighting our content and enhancing the overall readability of the site.
#### Font Color (Black)
The black font color exudes elegance and timelessness, emphasizing the reliability.
### Logo & Imagery
The logo, elegantly designed with Montserrat typography, features a globe at its core. This globe symbolizes the platform's global identity and its mission to connect minds, cultures, and perspectives from every corner of the world.
### Layout & Composition
The layouts are structured for a seamless reading experience with an intuitive infinite scroll. This feature allows readers to effortlessly explore a continuous flow of engaging articles and stories. Generous whitespace ensures a clutter-free interface, emphasizing content purity and simplicity, and enhancing overall readability.
