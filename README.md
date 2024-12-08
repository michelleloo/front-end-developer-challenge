# Front-End Developer Challenge 
Welcome to my frontend developer challenge

Link to original repo: [frontend-developer-challenge](https://github.com/DnDBeyond/front-end-developer-challenge)

Link to hosted project: [Link](https://front-end-developer-challenge-omega.vercel.app/)

This project was created using Vite, CSS Modules.
Custom hooks were used to manage tracking the rune states. See  `hooks/useTalentData.tsx`

The goal was to design reusable components that would allow some future reuse of the components (i.e Rune.tsx) for a more complex rune tree (graph or split branches)


### Default View 
* Left click to enable
* Right click to disable

A mock fetch exists in `mocks/talent-calculator-mocks.ts` to simulate fetching from the server with a loading state. There is a delay of 1 second
![alt text](<assets/Screen Recording 2024-12-08 at 11.56.39 AM.gif>)

### Mobile View 
* Single tap to enable
* Long tap to disable
![alt text](<assets/Screen Recording 2024-12-08 at 12.07.06 PM.gif>)


## Installation

To get started with this project, clone the repository to your local machine:

```bash
git clone https://github.com/michelleloo/front-end-developer-challenge.git
cd front-end-developer-challenge
```
Once you have cloned the repository install the necessary dependencies 

```bash
npm install
```
## Running the project
```bash
npm run dev
```
The application should now be live at http://localhost:5173/ by default. Open the URL in your browser to see the project.

## Running Tests
This project uses Vitest as a testing framework. A few test files have been created 
`PointCounter.test.tsx` and
`runeUtils.test.ts`

To run the tests run 
```bash
npm run test
```
# Front-End Developer Challenge
In this repo you will find a mock-up and all the necessary assets (in a separate folder). The design is of a tool for a fictitious game called “TitanStar Legends”, and will not be repurposed or otherwise utilized by D&D Beyond – it is only a coding challenge.


Below are specific requirements we have which cannot be adequately expressed through the mock-up. This is not a timed assignment, but it should probably take a couple of hours. When you're done, submit a link to your test's Github repository. We ask that you have your assessment completed and returned within 7 days of receiving it. Good luck!

If you feel that you have a personal project that closely resembles this project, send us the repo and we’ll evaluate that project instead. Only your contributions will be evaluated and the project must demonstrate the following competencies with:
- Making an app mobile-friendly/responsive
- Creating and utilizing modern styling
- Creating a stateful JS application

## Assessment expectations

Code reviewers will be directed to pay special attention to the following:

- Styles of submission match the provided mock
- All functionality defined above is present in the submission
- Code organisation and maintainability
- If a JS framework is used, are that libraries best practices followed
- Any novel, or additional features beyond the given scope
- You may utilize SCSS/LESS/CSS Modules/CSS-in-JS to create necessary styles, but please avoid utilizing any frameworks or libraries that are already styled. (You may utilize a reset or normalize file if you would like)

## Rune Mastery Loadout Talent Calculator 9000
Players of TitanStar Legends can spend talent points that they’ve collected on runes within a tree. We need to write a js application that simulates the rune tree within the game so players can replicate their in-game loadouts to share with the TitanStar Legends community.

![Example](assets/example.png)

- Left click to add points.
- Right click to remove points.
- The user may only use up to 6 points.
- Each item only accounts for one point.
- Displays current point total
- The user must select the items in order.
    - For example: The user may not put a point in the cake without first having put points in the chevrons and the silverware (in that order).
