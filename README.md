# Meal Ticket Los Angeles
---
### Brought to You By: Linda Barba, Christian De Vera and Stacy Dillahey

![Meal Ticket](https://i.imgur.com/HynnzTS.png)
### Our Mission: 
To provide an option of conveniently located restaurants and bars to meet up with your friends at before your next night out at an event

#### First Select Your Venue:
From the dropdown list on the navigation bar to be taken to a list of the top-rated, nearby restaurants and bars to check out before the big event.
![Hollywood Bowl Restaurants](https://i.imgur.com/n01OmxY.png)
#### Then Choose a Spot:
Select the place that seems right for you to see some additional information on the restaurant. After you have visited, you can rate the spot so other users can learn from your experience there.  
  
**Walk this Way:** *How walkable was the place to the venue?*  
**Chedda:** *How much did you spend?*  
**In N Out:** *How long were you there for?*  
**Fancy Schmancy:** *Did you need to dress up?*  
**Post Game?:** *Late night option for after the show?*  
  
Remember to log in before rating!
![Meal Ticket Rating](https://i.imgur.com/luIoVPI.png)

#### Backstage Pass:
If you are granted Admin privileges, you gain additional access to Edit and Delete venues.
![Admin View](https://i.imgur.com/ABCgH51.png)

>### [Try Out Meal Ticket!](https://mealticketla.herokuapp.com/)

## The Development Process
![Trello](https://i.imgur.com/gyo8nwd.png)
> ##### [Trello: User Stories, ERD and Wire Frames](https://trello.com/b/CNj1Ge8N/meal-ticket)
 > ##### [Pitch Deck](https://docs.google.com/presentation/d/1CsBuC-a_AZ1yXJEE-EbptPIdgj1MktiNALyQyhaFfrM/edit#slide=id.g21a1ba6c6d_0_17)

### Technologies Used:
![Technologies](https://i.imgur.com/fcMixfL.png)

- JavaScript  
- jQuery
- NodeJS
- Express
- MongoDB
- Mongoose
- OAuth
- Zomato API
- Google Maps API
- HTML 5
- CSS 3
- Materialize CSS Library
- Heroku

## The Meal Ticket API
| URI      | HTTP Verb           | Use Case  |
| ------------- |:-------------:| -----:|
| /api/venues | GET | Retrieve ALL Venues |
| /api/places| GET  |  Retrieve ALL Restaurants |
| /api/places/:id| GET  | Retrieve a SINGLE Restaurant |

#### /api/venues JSON Response Body
![GET /api/venues](https://i.imgur.com/6NCKB2L.png)

#### /api/places JSON Response Body
![GET /api/venues](https://i.imgur.com/7WArykp.png)

### Special Thanks to Zomato for all of the Great Data. Namaste.
