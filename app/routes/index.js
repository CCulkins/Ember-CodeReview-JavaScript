import Ember from 'ember';

var posts = [{
  id: 1,
  user: "CatsAreDaBestMeow92",
  catPic: "http://www.catcraze.com/images/listings/501a170bf1155eefbafcc6d2a8bf111c.jpg",
  title: "Look at This Cutie",
  message: "Exotic Shorthairs are super-cute omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh omigosh.",
  tldr: "Exotic Shorthairs are cute."
}, {
  id: 2,
  user: "MyOtherHoodieHasEars",
  catPic: "https://s3.graphiq.com/sites/default/files/585/media/images/t2/Exotic_Shorthair_5581147.jpg",
  title: "My moms cat",
  message: "This is my mom's cat. His name is Fred, but we call him UFO, because his eyes remind us of aliens. His past-times include: stealing food straight off of my plate and staring out the window like a crazy person.",
  tldr: "My mom's cat UFO is a food thief."
}, {
  id: 3,
  user: "ExoticBreeder3",
  catPic: "http://i.dailymail.co.uk/i/pix/2013/09/23/article-2430119-1834AA6700000578-423_634x424.jpg",
  title: "Kitten for sale",
  message: "Hello, my name is Sharron, and I am an Exotic breeder located in Eugene, OR. We just had our beauiful Exotic Mindy give birth to 6 cute kittens! Here, is a picture of one of them. This is Spots. Spots is a male calico, and will be up for adoption in July. Comment below if interested!",
  tldr: "Male calico for sale in Oregon! Comment for details!"
}, {
  id: 1,
  user: "IheartSnoopy4Ever",
  catPic: "https://s-media-cache-ak0.pinimg.com/236x/75/22/17/752217532e4d3f9ae98ce5750d600e3f.jpg",
  title: "Another pic of Snoopy!",
  message: "Snoopy is my favorite famous internet cat. I just can't get enough of him!",
  tldr: "Snoopy love!"
  }];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});
