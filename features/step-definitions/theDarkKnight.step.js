import { When, Then } from "@wdio/cucumber-framework";
import Navbar from "../pageobjects/components/Navbar";
import searchResultsPage from "../pageobjects/pages/searchResults-page";
import theDarkKnightPage from "../pageobjects/pages/theDarkKnight-page";

Then(/^I shall see the video player and its not playing$/, async () => {
    await theDarkKnightPage.videoContainerIsDisplayed()
    const playerState = await browser.execute(() => {
        return jwplayer().getState()
    })
    await expect(playerState).toEqual('buffering')
})
When(/^I search for "The Dark Knight"$/, async () => {
    await Navbar.fillAndSubmitSearchBox("The Dark Knight")
})
Then(/^I shall see "The Dark Knight" listed in the results and select the first result$/, async () => {
    await searchResultsPage.clickOnResultTheDarkKnight()
})
Then(/^I shall see the trailer playing$/, async () => {
    await theDarkKnightPage.clickOnTheDarkKnightTrailerButton()
    await theDarkKnightPage.pauseMedium()
    const playerState = await browser.execute(() => {
        return jwplayer().getState()
    })
    await expect(playerState).toEqual('playing')
})