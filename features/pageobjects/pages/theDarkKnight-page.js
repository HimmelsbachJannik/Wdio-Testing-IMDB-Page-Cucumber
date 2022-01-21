const { default: Base } = require("../Base");

class theDarkKnightPage extends Base{
    get videoContainer(){
        return $('#__next > main > div > section.ipc-page-background.ipc-page-background--base.MainDetailPageLayout__StyledPageBackground-sc-13rp3wh-0.hsughJ > section > div:nth-child(4) > section > section > div.Hero__MediaContentContainer__Video-sc-kvkd64-2.gVRpZB > div.Hero__MediaContainer__Video-sc-kvkd64-3.ceVCp > div > div.Media__SlateContainer-sc-1x98dcb-4.dDhYrh')
    }
    get theDarkKnightTrailerButton(){
        return $('#iconContext-play-circle-outline-large-inline')
    }
    async videoContainerIsDisplayed(){
        await this.videoContainer.waitForExist()
    }
    async clickOnTheDarkKnightTrailerButton(){
        await this.theDarkKnightTrailerButton.waitForExist()
        await this.theDarkKnightTrailerButton.click()
    }
}

export default new theDarkKnightPage;