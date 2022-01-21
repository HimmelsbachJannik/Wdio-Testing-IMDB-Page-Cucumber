import { Given, When, Then } from "@wdio/cucumber-framework";
import Menu from "../pageobjects/components/Menu";
import Navbar from "../pageobjects/components/Navbar";
import top250moviesPage from "../pageobjects/pages/top250movies-page";

When(/^I navigate to the Top 250 Movies section$/, async () => {
    await Navbar.clickOnMenuButton()
    await Menu.clickOnTop250MoviesButton()
    const PageTitle = await top250moviesPage.pageTitles
    await expect(PageTitle).toHaveText('IMDb Top 250 Movies')
})

Then(/^I see the movie "The Godfather" in second place with a rating of "9.1"$/, async () => {
    const secondPlaceMovieTitle = await top250moviesPage.secondPlaceMovie
    await expect(secondPlaceMovieTitle).toHaveText('The Godfather')
    const secondPlaceMovieRating = await top250moviesPage.secondPlaceMovieRating
    await expect(secondPlaceMovieRating).toHaveText('9.1')
})