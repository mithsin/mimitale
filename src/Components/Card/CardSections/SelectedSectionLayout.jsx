import { showTitle } from 'utils/type';

import { 
    SelectedSectionWrapper,
    UpperH3,
    SectionBodyWrap
} from './styled';
import { ShowLayoutType } from '../Utilities/ShowLayoutType';

export const SelectedSectionLayout = (props) => {
    const {
        selectedSection,
        userTypeGiver
    } = props;

    return (
        <SelectedSectionWrapper>
            <UpperH3>{showTitle[selectedSection]}</UpperH3>
            <SectionBodyWrap>
                <ShowLayoutType 
                    type={selectedSection}
                    userTypeGiver={userTypeGiver}
                />
            </SectionBodyWrap>
        </SelectedSectionWrapper>
    );
}

export default SelectedSectionLayout;
