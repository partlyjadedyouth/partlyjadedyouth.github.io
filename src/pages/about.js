import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import EducationSection from '../components/education-section';
// import ProjectSection from '../components/project-section';
import ExperienceSection from '../components/experience-section';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about } = metaData;
  const { education, workexperience, projects } = about;
  return (
    <Layout>
      <Seo title="About" />
      <Bio author={author} />
      <EducationSection timestamps={education} />
      <ExperienceSection timestamps={workexperience} />
      {/* <ProjectSection projects={projects} /> */}
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
          bio {
            thumbnail
          }
          social {
            github
            instagram
            photography
            rym
            email
          }
        }

        about {
          education {
            date
            activity
            description
            links {
              post
              website
              github
              demo
              googlePlay
              appStore
            }
          }

          workexperience {
            date
            activity
            description
            links {
              website
            }
          }

        }
      }
    }
  }
`;
