import React from 'react';

import {
  Card, 
  CardImg, 
  CardTitle, 
  CardText, 
  CardColumns,
  CardSubtitle, 
  CardBody,
} from 'reactstrap';

import './CountryNews.css'

const CountryNews = (props) => {
  let newsAritcle = props.countryNewsData.map((news) => {
    return (
      <Card key={Date.now().toString() + news["title"]} className="CountryNewsCards">
        {news.images ? <CardImg top width="100%" src={news.images[0].url} alt="Card image cap" /> : null}
        <CardBody>
          <CardTitle>
            <a target="_blank" href={news["webUrl"]} >
              <b>
                {news["title"]}
              </b>
            </a>
          </CardTitle>
          <CardSubtitle>
            <em>
              <small>
                -{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(news["publishedDateTime"]))}
              </small>
            </em>
          </CardSubtitle>
          <hr></hr>
          <CardText>{news["excerpt"]}</CardText>
        </CardBody>
      </Card>
    );
  });

  return (
    <div className="col-12">
    <CardColumns className="CountryNews">
      {newsAritcle}
    </CardColumns>
    </div>
  );
};

export default CountryNews;