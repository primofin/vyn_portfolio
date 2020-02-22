import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout/Layout';
import {SectionTitle, Paragraph} from '../../styles';
import {EducationItem, Institution, Degree} from './styles';

const Education = ({user}) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.position}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
Education.propTypes = {
  user: PropTypes.object,
};
