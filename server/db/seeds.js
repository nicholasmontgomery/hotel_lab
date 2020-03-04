use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Nick Montgomery",
    email: "nick@yahoo.co.uk",
    status: "checked-in"
  },
  {
    name: "Bob Bobson",
    email: "bob@gmail.com",
    status: "checked-in"
  },
  {
    name: "Rachel Richardson",
    email: "rachel@gmail.com",
    status: "not checked-in"
  }
]);
