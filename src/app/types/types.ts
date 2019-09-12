type Hotel = {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: string[];
  weather: Weather;
  profile: Profile;
  stars: number;
};

type Profile = {
  followers: number;
  following: number;
  photo: string;
};

type Weather = {
  temperature: number;
  wind: number;
  icon: string;
};
