import { render } from "@testing-library/react";
import MovieCard from "../components/MovieCard";
import pretty from 'pretty';
import { vi } from 'vitest'

// 🔑 In our test, we want to test the MovieCard component, but it relies on the MovieDetails component. 
// In order to remove this dependency and test our MovieCard component with a predictable and reliable output for our MovieDetails component, we can use a mock to simulate the behavior of the MovieDetails component in a predictable way. A mock is essentially a "fake" version of a dependency.
const movie = {
  title: "Longlegs",
  description: "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
  yearReleased: 2024,
  IMDbRating: 7.2,
}

// 🔑 In our test, we want to test the MovieCard component, but it relies on the MovieDetails component. 
// In order to remove this dependency and test our MovieCard component with a predictable and reliable 
// output for our MovieDetails component, we can use a mock to simulate the behavior of the MovieDetails component in a predictable way. 
// A mock is essentially a "fake" version of a dependency.

// 🔑 We then use the vi.mock() method to replace our component, and pass the path to the component as the first argument, 
// as well as a callback function that serves as the definition for the module.

// In our callback function, we return an object to represent the module. 
// Since, in our actual implementation, we are using a default export, we use the default key to represent this export:
vi.mock('../components/MovieDetails', () => {
  return {
    default: () => <div>
      <p>Year Released: 2023</p>
      <p>IMDb Rating: 9.9</p>
    </div>
  }
});

describe('MovieCard', () => {
  // We have defined the static JSX that is returned whenever we use the default export of the ../components/MovieDetails module. 
  // This is what will be returned when we use the component <MovieDetails />.

  // We have defined the static JSX that is returned whenever we use the default export of the ../components/MovieDetails module.
  // This is what will be returned when we use the component <MovieDetails />.
  it('should render a MovieCard with the mocked MovieDetails component', () => {

    // In our actual implementation,yearReleased and imdbRating would be Year Released: 2024 and IMDb Rating: 7.2 respectively, 
    // but the values have been replaced with our mocked MovieDetails component.
    render(<MovieCard movie={movie} />);

    const movieCardTitle = document.querySelector('h3');
    const movieDetails = document.querySelectorAll('p');

    const description = movieDetails[0].textContent;
    const yearReleased = movieDetails[1].textContent;
    const imdbRating = movieDetails[2].textContent;

    expect(movieCardTitle?.textContent).toBe('Longlegs');
    expect(description).toBe('In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.');
    expect(yearReleased).toBe('Year Released: 2023');
    expect(imdbRating).toBe('IMDb Rating: 9.9');
  });

  it('should render a MovieCard that matches the snapshot', () => {
    render(<MovieCard movie={movie} />);
    
    const movieCard = document.querySelector('.card');

    if(movieCard) {
      // In our actual implementation,yearReleased and imdbRating would be Year Released: 2024 and IMDb Rating: 7.2 respectively, 
      // but the values have been replaced with our mocked MovieDetails component.
      expect(pretty(movieCard.innerHTML)).toMatchSnapshot();
    }
  });
});
