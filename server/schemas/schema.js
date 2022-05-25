import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import jobs from './jobs';
import testimonials from './testimonials';
import companies from './companies';
import about from './about';
import experiences from './experiences';
import skills from './skills';
import workExperience from './workExperience';
import contact from './contact';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([jobs, testimonials, companies, about, experiences, skills, workExperience, contact
  ]),
});