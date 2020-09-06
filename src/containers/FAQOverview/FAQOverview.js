import React, { Component } from 'react';

import { 
    Card, 
    CardBody, 
} from 'reactstrap';

import Heading from '../../components/UI/Heading/Heading';
import CollapseableFAQ from './CollapseableFAQ/CollapseableFAQ';

class FAQOverview extends Component {

    render() {
        return (
            <div className="container">
                <Heading headingText="About covd-19" />
                <div className="row row-content align-items-center">
                    <div className="col-12">
                        <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                            <CardBody>
                                <CollapseableFAQ
                                    question="What are TYPICAL SYMPTOMS of COVID-19?"
                                    answer={[
                                        <p>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. These symptoms may appear 2-14 days after exposure to the virus:</p>,
                                        <ul>
                                            <li>Fever</li>
                                            <li>Cough</li>
                                            <li>Chills</li>
                                            <li>Headache</li>
                                            <li>Muscle pain</li>
                                            <li>Sore throat</li>
                                            <li>New loss of taste or smell</li>
                                            <li>Repeated shaking with chills</li>
                                            <li>Shortness of breath or difficulty breathing</li>
                                        </ul>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="What are PRE-EXISTING ILLNESSES that put patients at higher risk?"
                                    answer={[
                                        <p>The following are the Pre-existing illnesses that put patients at higher risk:</p>,
                                        <ul>
                                            <li>Cardiovascular Disease</li>
                                            <li>Diabetes</li>
                                            <li>Chronic Respiratory Disease</li>
                                            <li>Hypertension</li>
                                        </ul>,
                                        <p>
                                            That said, some otherwise healthy people do seem to develop a severe form of pneumonia after being infected by the virus. The reason for this is being investigated as we try to learn more about this new virus.
                                        </p>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="Are Most of the COVID-19 Cases MILD?"
                                    answer={[
                                        <p>
                                            Based on all the cases of COVID-19 confirmed, suspected, and asymptomatic
                                        </p>,
                                        <ul>
                                            <li>80.9% of infections are mild (with flu-like symptoms) and can recover at home.</li>
                                            <li>13.8% are severe, developing severe diseases including pneumonia and shortness of breath.</li>
                                            <li>4.7% as critical and can include: respiratory failure, septic shock, and multi-organ failure.</li>
                                            <li>In about 2% of reported cases the virus is fatal</li>
                                            <li>Risk of death increases the older you are.</li>
                                            <li>Relatively few cases are seen among children.</li>
                                        </ul>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="How COVID-19 is TRANSMITTED?"
                                    answer={[
                                        <p>
                                            COVID-19 is a new disease and we are still learning about how it spreads" according to the US Centers for Disease Control and Prevention (CDC)
                                        </p>,
                                        <p>
                                            In general, respiratory virus infection can occur through:
                                        </p>,
                                        <ul>
                                            <li>Contact (direct or indirect)</li>
                                            <li>Droplet spray in short range transmission</li>
                                            <li>Aerosol in long-range transmission (airborne transmission)</li>
                                        </ul>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="Is 6 FEET enough?"
                                    answer={[
                                        <p>
                                            The virus is thought to spread mainly from person-to-person
                                        </p>,
                                        <ul>
                                            <li>Between people who are in close contact with one another (within about 6 feet)</li>
                                            <li>Through respiratory droplets produced when an infected person coughs, sneezes or talks</li>
                                        </ul>,
                                        <p>
                                            This idea, that large droplets of virus-laden mucus are the primary mode of transmission, guides the US CDC's advice to maintain at least a 6-foot distance: "Maintaining good social distance (about 6 feet) is very important in preventing the spread of COVID-19
                                        </p>
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Heading headingText="About Us" />
                <div className="row row-content align-items-center">
                    <div className="col-12">
                        <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                            <CardBody>
                                <CollapseableFAQ
                                    question="Are you official?"
                                    answer={[
                                        <p>
                                            No.
                                        </p>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="Who are you?"
                                    answer={[
                                        <p>
                                            We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.
                                        </p>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="Why are you guys putting in time and resources to do this while not gaining a single penny from it?"
                                    answer={[
                                        <p>
                                            Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions
                                        </p>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="Why does COVID WORLDMETRICS have difference in numbers compared to WHO website"
                                    answer={[
                                        <p>
                                            WHO, CDC and other Offical handles updates the data at a scheduled time. We get the updated records only once the Offical handles have updated their respective reports
                                        </p>
                                    ]}
                                />
                                <CollapseableFAQ
                                    question="Where can I find the data for this"
                                    answer={[
                                        <p>
                                            The following are the Sources for all the data that is used in COVID WORLDMETRICS:
                                        </p>,
                                        <ul>
                                            <li>
                                                All the COVID-19 Cases related data is available through an API for further analysis and development here: <a href="https://api.covid19api.com/">api.covid19api.com</a>.
                                            </li>
                                            <li>
                                                All the data regarding the latest COVID-19 news articles in individual country is available here: <a href="https://api.smartable.ai/coronavirus/stats/">api.smartable.ai</a>.
                                            </li>
                                        </ul>
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQOverview;