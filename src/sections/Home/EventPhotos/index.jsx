import classNames from 'classnames';
import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { Container, Carousel } from 'react-bootstrap';
import Text from '@htv/ui-kit/components/Text';

import * as styles from './EventPhotos.module.scss';
import Section from '@htv/ui-kit/components/Section';

const EventPhotos = ({ data }) => (
    <div className={styles.carousel}>
        <Container className={styles.container}>
            <Carousel className={styles.transparentCarousel}>
                {data.eventPhotos.edges.map(image => (
                    <Carousel.Item key={image.node.id} className={styles.imageContainer}>
                        <Img
                            className={styles.image}
                            fluid={image.node.childImageSharp.fluid}
                            alt={image.node.base.split(".")[0]}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container> 
    </div>
);

export default function EventPhotosWithQuery() {
    return (
        <Section
            backgroundColor='charcoal'
            className={styles.container}
            id='pastImages'>
            <div className={styles.carousel} backgroundColor='charcoal'>
                <div className={styles.carousel_header}>
                    <Text
                    className={styles.carousel_heading}
                    type='heading2'
                    transform='uppercase'
                    weight='normal'
                    >
                        A look into <Text type='heading2' color='lime' as='span'>Last Year</Text>...
                    </Text>
                </div>
                <StaticQuery
                    query={imageQuery}
                    render={data => <EventPhotos data={data} />}
                />
            </div>
        </Section>
    );
}

const imageQuery = graphql `
    query {
        eventPhotos: allFile(
            filter: {relativeDirectory: {eq: "carousel-home"}, extension: {regex: "/(jpg)|(png)|(jpeg)/"}}
            sort: {fields: relativePath, order: ASC}
        ) {
            edges {
                node {
                    id
                    base
                    childImageSharp {
                        fluid( maxWidth: 800, maxHeight: 500, fit: COVER, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
