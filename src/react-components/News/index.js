import React from "react";
import TopBar from "../TopBar";
import "./style.css";


import mask from "./static/mask.jpg";
import tam from "./static/Tam.jpg";
import quebec from "./static/quebec.jpg";
import graphA from "./static/graphA.png";
import graphB from "./static/graphB.png";

class News extends React.Component {

    render() {

        let newsDetail;
        if (this.props.match.params.id === "1") {
            newsDetail = (
                <span className="news-detail">
                    <h1 className="news-title"> 
                        A single case could spark a new COVID-19 outbreak, Tam warns
                    </h1>

                    <p className="source"> 
                        <span className="reporter">
                            Rachel Aiello
                        </span>
                        <span className="reporter-info">
                            Ottawa News Bureau Online Producer
                        </span>
                        <br/>
                        <br/>
                        <span className="news-date">
                            Published Tuesday, June 16, 2020 3:27PM EDT
                        </span>
                    </p>

                    <img className="news-img" src={tam} alt="news-img"/>

                    <p className="news-content">
                        OTTAWA -- All it could take for Canada’s current COVID-19 progress to be thrown off 
                        course is a single new case that prompts an outbreak, Chief Public Health Officer Dr. 
                        Theresa Tam warned on Tuesday.<br/>
                        <br/>
                        “Even though the epidemic growth has slowed considerably across the country, and we can 
                        now see these hopeful signs, this is the part where we gather our strength and resolve 
                        to continue our efforts, because it may only take one new case of COVID-19 to spark an 
                        outbreak, or renew epidemic growth that could change our trajectory,” Dr. Tam told reporters 
                        during the daily update in Ottawa.<br/>
                        <br/>
                        In countries and American states where restrictions have been loosened, cases have begun to 
                        creep back up, which Prime Minister Justin Trudeau said last week serves as a lesson and a 
                        caution to Canada as reopening plans are underway across the country.<br/>
                        <br/>
                        “After months of hard work, people are finding themselves right back where they started,” 
                        Trudeau said on Friday.<br/>
                        <br/>
                        Canada's first presumptive case of COVID-19 involved a man in his 50s who travelled from Wuhan, 
                        China to Toronto in late January. Less than five months later, the country is nearing 100,000 
                        confirmed cases nationwide, more than 60 per cent of which have now recovered. So far, 8,213 
                        people have died after contracting the novel coronavirus. <br/>
                        <br/>
                        During her update, Tam spoke about how it’s important to still think beyond the numbers that are 
                        being updated daily to realize that COVID-19 is “very much still with us” and having serious consequences 
                        for so many.<br/>
                        <br/>
                        “It's been a big part of what has united and driven us to make sacrifices to stop the virus from doing 
                        even more damage. So for those moments that we're tired of this new way of life, it helps to look back at 
                        what we've sacrificed,” Tam said.<br/>
                        <br/>
                        She is encouraging people to not get complacent and to keep up with their observance of public health measures 
                        including maintaining physical distancing with those outside of your household or social bubble, frequent hand 
                        washing, wearing non-medical masks when in public, and staying home when you think you have any possible 
                        COVID-19 symptoms. <br/>
                        <br/>

                    </p>
                </span>
            )

        } else if (this.props.match.params.id === "2") {
            newsDetail = (
                <span className="news-detail">
                    <h1 className="news-title"> 
                        Ontario will not make it mandatory to wear masks or face coverings
                    </h1>

                    <p className="source"> 
                        <span className="reporter">
                            Katherine DeClerq
                        </span>
                        <span className="reporter-info">
                            Multi-Platform Writer, CTV News Toronto
                        </span>
                        <br/>
                        <br/>
                        <span className="news-date">
                            Published Tuesday, June 16, 2020 7:23AM EDT <br/>
                            Last Updated Tuesday, June 16, 2020 6:47PM EDT
                        </span>
                    </p>

                    <img className="news-img" src={mask} alt="news-img"/>

                    <p className="news-content">
                        TORONTO -- 
                        As more businesses prepare to reopen their doors on Friday, the Ontario 
                        government says it will not make it mandatory to wear masks or face 
                        coverings—although they remain recommended by health officials. <br/>
                        <br/>
                        Speaking at Queen’s Park on Tuesday, Ontario Premier Doug Ford responded 
                        to questions about a Greater Toronto Area mayor who called for the 
                        government to change its policy as certain regions were given the green 
                        light to reopen amid the COVID-19 pandemic and others were not. <br/>
                        <br/>
                        “We have to encourage people,” Ford told reporters. “I’ll be having that 
                        conversation and I highly, highly recommend you go outside and you’re in 
                        large groups or you’re in shopping centres, wear a mask.”<br/>
                        <br/>
                        The premier went on to say that while his government thinks wearing face 
                        coverings is “critical”, policing 14.5 million people would be “very, very 
                        difficult.”<br/>
                        <br/>
                        “We just don’t have the manpower for bylaw and police officers to be chasing 
                        people without masks,” he said.<br/>
                        <br/>
                        The Ford government released a new list of regions in Ontario that can advance 
                        to Stage 2 of the reopening phase on Monday. <br/> 
                        <br/>
                        As of this Friday, the only regions not allowed to move forward to Stage 2 are Toronto, 
                        Peel and Windsor-Essex. They will remain in Stage 1 until at least next week, when the 
                        province will reassess the data and decide if they are ready to move forward next Friday.<br/>
                        <br/>
                        The areas excluded from moving forward to Stage 2 remain the province's COVID-19 hot spots. 
                        Ontario reported 184 cases of COVID-19 on Tuesday, 118 of which were recorded in Toronto, 
                        Peel and Windsor-Essex.<br/>
                        <br/>
                        "For the regions still staying in Stage 1, Toronto, Peel and Windsor-Essex, we ask you please 
                        be patient because we can't let our guard down," Ford said on Monday.<br/>
                        <br/>
                        The decision to reopen certain areas of the GTA has caused concern for some municipalities. 
                        Markham Mayor Frank Scarpitti, whose region borders Toronto, has called on the government to 
                        make the wearing of masks mandatory, saying that without a province-wide strategy areas that 
                        reopen may experience a spike in COVID-19 cases or a second wave.<br/>
                        <br/>
                        “We need the same rules across the province of Ontario. It becomes difficult for the public to 
                        understand what a rule is in one jurisdiction versus another,” Scarpitti said.<br/>
                        <br/>
                        “If the provincial government does not move forward making it mandatory to wear masks, I’m asking 
                        the retailers and even some of the restaurants to impose no masks, no service.”<br/>
                        <br/>
                        Scarpitti added there would be exceptions for people with health conditions that make it difficult to wear a mask.<br/>
                        <br/>
                        Ford told reporters that he will be speaking with Scarpitti Tuesday afternoon about his concerns.<br/>
                        <br/>
                        At the same time, Ontario’s Minister of Health Christine Elliott said that guidance from health officials 
                        remains the same—physical distancing is still the most effective way to prevent the spread of COVID-19.<br/>
                        <br/>
                        "The guidance we have received from the chief medical officer of health as well as the other public health 
                        experts at the command table is that the physical distancing is still the most important rule to follow, 
                        that we should continue to do that for the foreseeable future, and that masks should be worn in situations 
                        when that's not going to possible,” Elliott said.<br/>
                        <br/>
                        "A number of retailers have decided that they want masks to be worn if people want to enter and that's the 
                        retailers right to do that. So it's not mandatory, it's recommended, again when physical distancing can't be achieved."<br/>
                        
                        <h4>Province releases guide for businesses reopening</h4>

                        The Progressive Conservative government also acknowledged on Tuesday that customers and workers may not feel confident visiting 
                        stores or providing services. In that light, the government has released a new downloadable “toolkit” offering tips and guidelines 
                        for employers reopening their businesses for the first time since the pandemic was declared.<br/>
                        <br/>
                        The guide is meant to help businesses identify risks for transmitting the disease and create a safety plan to help control the spread 
                        of COVID-19. One hundred and thirty-three sector-specific labour guidelines will also be included in the toolkit.<br/>
                        <br/>
                        “Over the past few weeks, we've taken steps to build the necessary confidence that will help everyone prepare, adapt and get our economy 
                        going again,” Ford said.<br/>
                        <br/>
                        “That means giving employers confidence that they have what they have and can open their doors. It also means giving workers confidence and 
                        we have to give customers confidence and that is how we will get our economy roaring once again."<br/>
                        <br/>
                        The announcement also comes on the same day where 14 employees at a Home Depot in Richmond Hill tested positive for COVID-19.<br/>
                        <br/>
                        The store, which was closed overnight for deep cleaning, remains open.<br/>
                        <br/>
                        York Region Public Health is asking anyone who shopped at the store between May 30 and June 9 and had close interactions with staff to self-monitor for the symptoms.<br/>
                    </p>
                </span>


            )
        } else if (this.props.match.params.id === "3") {
            newsDetail = (
                <span className="news-detail">
                    <h1 className="news-title"> 
                        Quebec reports fewer than 100 new COVID-19 cases for first time since March 22, but testing continues to plummet
                    </h1>

                    <p className="source"> 
                        <span className="reporter">
                            Basem Boshra
                        </span>
                        <span className="reporter-info">
                            CTV News Montreal Supervising Digital Producer
                        </span>
                        <br/>
                        <br/>
                        <span className="news-date">
                            Published Tuesday, June 16, 2020 11:14AM EDT<br/>
                            Last Updated Tuesday, June 16, 2020 11:54AM EDT
                        </span>
                    </p>

                    <img className="news-img" src={quebec} alt="news-img"/>

                    <p className="news-content">
                        MONTREAL -- There are now 5,269 people who have died of COVID-19 in Quebec, health 
                        authorities announced Tuesday, as confirmed cases in the province reached 54,146.<br/>
                        <br/>
                        That’s up 27 from the 5,242 deaths reported Monday; of the newly reported deaths, 
                        21 occurred over the past 24 hours, while six took place prior to June 8.<br/>
                        <br/>
                        COVID-19 cases in Quebec rose 92 from the 54,054 announced a day earlier, the 
                        first time the province has recorded fewer than 100 new cases since March 22, when 
                        38 new cases were diagnosed.<br/>
                        <br/>
                        There are 718 people being treated for COVID-19 in Quebec hospitals as of Tuesday, 
                        down 53 from the 771 reported Monday. Of those in a hospital, 77 are in intensive care, 
                        down five from the 82 reported 24 hours earlier.<br/>
                        <br/>
                        The number of people in Quebec who have recovered from COVID-19 as of Tuesday is 22,350, 
                        up 137 from the 22,213 recoveries reported a day earlier.<br/>
                        <br/>
                        Quebec reported that it completed analyses of 5,200 COVID-19 tests on Sunday, down 1,617 
                        from the 6,817 it completed a day earlier. (Quebec reports its daily testing figures from 
                        two days prior).<br/>
                        <br/>
                        “It's been a big part of what has united and driven us to make sacrifices to stop the virus from doing 
                        even more damage. So for those moments that we're tired of this new way of life, it helps to look back at 
                        what we've sacrificed,” Tam said.<br/>
                        <br/>
                        She is encouraging people to not get complacent and to keep up with their observance of public health measures 
                        including maintaining physical distancing with those outside of your household or social bubble, frequent hand 
                        washing, wearing non-medical masks when in public, and staying home when you think you have any possible 
                        COVID-19 symptoms. <br/>
                        <br/>

                        <img className="news-img" src={graphA} alt="news-img"/>

                        <img className="news-img" src={graphB} alt="news-img"/>

                    </p>
                </span>
            )

        }

        return (
            <div className="newspage">

                <TopBar user={this.props.match.params.user}/>

                {newsDetail}

            </div>
        );
    }
}

export default News;