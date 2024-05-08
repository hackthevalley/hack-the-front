import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { Container, Carousel } from 'react-bootstrap';
import Text from '@htv/ui-kit/components/Text';
import * as styles from './EventPhotos.module.scss';
import Layout from '../../../components/Layout';

const EventPhotos = ({ data }) => (
    <div className={styles.carousel}>
        <Container className={styles.container}>
            <Carousel className={styles.transparentCarousel}>
                {data.eventPhotos.edges.map(image => (
                    <Carousel.Item key={image.node.id}>
                        <Img 
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
        <div>
            {/* <div className={styles.header}>
                <Text
                className={styles.heading}
                type='heading2'
                ransform='uppercase'
                weight='normal'
                >
                    A Look into Last Year...
                </Text>
            </div> */}
            <StaticQuery
                query={imageQuery}
                render={data => <EventPhotos data={data} />}
            />
        </div>
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
                        fluid( maxWidth: 1200, maxHeight: 800, fit: COVER, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
